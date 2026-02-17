import re
import os

def extract_selectors(file_path):
    if not os.path.exists(file_path):
        return set()
    with open(file_path, 'r') as f:
        content = f.read()
    
    # Remove comments
    content = re.sub(r'/\*.*?\*/', '', content, flags=re.DOTALL)
    
    selectors = set()
    
    # Find all top-level blocks
    # We look for something { ... }
    # To handle nested media queries, we'd need a stack, but standard CSS is flatter.
    # Let's just find everything before '{'
    
    # Split by '{' and '}'
    # We want content that is NOT inside {}
    
    # A better way: find all matches of selector {
    # but selector can have multiple lines and commas.
    
    # Let's find all '{' and look backwards to the previous '}' or start of file
    indices = [m.start() for m in re.finditer(r'\{', content)]
    last_end = 0
    for idx in indices:
        # The selector is between last_end and idx
        # But wait, last_end should be after the closing '}' of the previous block
        # Let's find the '}' before this '{'
        potential_start = content.rfind('}', 0, idx)
        if potential_start == -1:
            potential_start = 0
        else:
            potential_start += 1
            
        selector_block = content[potential_start:idx].strip()
        
        # Ignore media queries starting with @
        if selector_block.startswith('@'):
            continue
            
        # Split by comma
        for s in selector_block.split(','):
            s = s.strip()
            # Still might have garbage if there are multiple lines.
            # Take only the last few lines if it's long? No, selectors can be long.
            # Just ensure it doesn't contain ';' which would mean we caught a property
            if s and ';' not in s:
                selectors.add(s)
                
    return selectors

globals_file = '/home/saurabh/mentora-1/src/app/globals.css'
additional_file = '/home/saurabh/mentora-1/src/app/additional-styles.css'

component_files = [
    '/home/saurabh/mentora-1/src/app/components/layout/floating-contact-actions.css',
    '/home/saurabh/mentora-1/src/app/components/sections/AboutSection.css',
    '/home/saurabh/mentora-1/src/app/components/sections/CoursesSection.css',
    '/home/saurabh/mentora-1/src/app/components/sections/FacultySection.css',
    '/home/saurabh/mentora-1/src/app/components/sections/GallerySection.css',
    '/home/saurabh/mentora-1/src/app/components/sections/HeroSection.css',
    '/home/saurabh/mentora-1/src/app/components/sections/SpecialFeaturesSection.css',
    '/home/saurabh/mentora-1/src/app/contact/contact.css'
]

global_selectors = extract_selectors(globals_file)
additional_selectors = extract_selectors(additional_file)

print(f"Total selectors in globals.css: {len(global_selectors)}")
print(f"Total selectors in additional-styles.css: {len(additional_selectors)}")

results = []

for comp_file in component_files:
    comp_selectors = extract_selectors(comp_file)
    basename = os.path.basename(comp_file)
    
    in_globals = global_selectors.intersection(comp_selectors)
    in_additional = additional_selectors.intersection(comp_selectors)
    
    if in_globals or in_additional:
        res = f"\n### {basename}\n"
        if in_globals:
            res += f"**Duplicates in globals.css ({len(in_globals)}):**\n"
            for s in sorted(in_globals):
                res += f"- `{s}`\n"
        if in_additional:
            res += f"**Duplicates in additional-styles.css ({len(in_additional)}):**\n"
            for s in sorted(in_additional):
                res += f"- `{s}`\n"
        results.append(res)

with open('/home/saurabh/mentora-1/css_duplicates_report.md', 'w') as f:
    f.write("# CSS Duplicates Report\n")
    f.write("Checking if global CSS files still contain CSS present in separate component files.\n\n")
    f.write("\n".join(results))

print("Report generated: /home/saurabh/mentora-1/css_duplicates_report.md")
