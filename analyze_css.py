#!/usr/bin/env python3
"""
CSS Dead Code and Override Analyzer
Finds unused CSS selectors and overridden rules in the codebase.
"""

import re
import os
from pathlib import Path
from collections import defaultdict

# Directories to scan
CSS_FILES = [
    'src/app/globals.css',
    'src/app/additional-styles.css',
]

COMPONENT_DIRS = [
    'src/app/components',
    'src/app',
]

def extract_selectors_from_css(css_content):
    """Extract all CSS selectors from content."""
    selectors = []
    # Remove comments
    css_content = re.sub(r'/\*.*?\*/', '', css_content, flags=re.DOTALL)
    
    # Match CSS rules
    # Pattern: selector { ... }
    pattern = r'([^{}]+)\s*\{[^{}]*\}'
    matches = re.findall(pattern, css_content)
    
    for match in matches:
        # Split by comma for multiple selectors
        parts = match.split(',')
        for part in parts:
            selector = part.strip()
            if selector and not selector.startswith('@'):
                # Clean up the selector
                selector = selector.split(':')[0].strip()  # Remove pseudo-classes
                selector = selector.split('[')[0].strip()  # Remove attribute selectors
                selectors.append(selector)
    
    return selectors

def find_duplicate_selectors(css_file):
    """Find selectors defined multiple times in the same file."""
    with open(css_file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Remove comments
    content = re.sub(r'/\*.*?\*/', '', content, flags=re.DOTALL)
    
    # Find all selectors with their line numbers
    selector_locations = defaultdict(list)
    lines = content.split('\n')
    
    for i, line in enumerate(lines, 1):
        # Match selector lines (before {)
        if '{' in line and not line.strip().startswith('@'):
            # Extract selector
            selector = line.split('{')[0].strip()
            if selector:
                # Split by comma for multiple selectors
                parts = selector.split(',')
                for part in parts:
                    clean_selector = part.strip()
                    if clean_selector:
                        selector_locations[clean_selector].append(i)
    
    # Find duplicates
    duplicates = {sel: lines for sel, lines in selector_locations.items() if len(lines) > 1}
    return duplicates

def find_class_usage_in_files(class_name, search_dirs):
    """Check if a class is used in TSX/JSX files."""
    # Remove the leading dot
    class_name = class_name.lstrip('.')
    
    for search_dir in search_dirs:
        if not os.path.exists(search_dir):
            continue
            
        for root, dirs, files in os.walk(search_dir):
            for file in files:
                if file.endswith(('.tsx', '.ts', '.jsx', '.js', '.html')):
                    file_path = os.path.join(root, file)
                    try:
                        with open(file_path, 'r', encoding='utf-8') as f:
                            content = f.read()
                            # Check for className="class-name" or className='class-name'
                            if class_name in content:
                                return True
                    except:
                        continue
    return False

def analyze_css_file(css_file):
    """Analyze a CSS file for dead code."""
    print(f"\n{'='*60}")
    print(f"Analyzing: {css_file}")
    print(f"{'='*60}\n")
    
    with open(css_file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    selectors = extract_selectors_from_css(content)
    
    # Filter to class selectors only
    class_selectors = [s for s in selectors if s.startswith('.')]
    
    print(f"Total class selectors found: {len(class_selectors)}\n")
    
    # Check for usage
    unused = []
    for selector in set(class_selectors):
        # Skip pseudo-element selectors and complex selectors
        if '::' in selector or ' ' in selector or '>' in selector:
            continue
            
        if not find_class_usage_in_files(selector, COMPONENT_DIRS):
            unused.append(selector)
    
    if unused:
        print(f"⚠️  Potentially unused class selectors ({len(unused)}):")
        for sel in sorted(unused):
            print(f"  - {sel}")
    else:
        print("✅ No obviously unused class selectors found!")
    
    # Check for duplicates
    duplicates = find_duplicate_selectors(css_file)
    if duplicates:
        print(f"\n⚠️  Duplicate selectors ({len(duplicates)}):")
        for sel, lines in sorted(duplicates.items()):
            print(f"  - {sel}: defined on lines {lines}")
    else:
        print("\n✅ No duplicate selectors found!")

def main():
    print("CSS Dead Code and Override Analyzer")
    print("=" * 60)
    
    for css_file in CSS_FILES:
        if os.path.exists(css_file):
            analyze_css_file(css_file)
        else:
            print(f"\n⚠️  File not found: {css_file}")
    
    print(f"\n{'='*60}")
    print("Analysis complete!")
    print(f"{'='*60}\n")

if __name__ == '__main__':
    main()
