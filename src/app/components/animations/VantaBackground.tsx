'use client';

import { useEffect } from 'react';

type Theme = 'light' | 'dark';

const getTheme = (): Theme =>
  (document.documentElement.getAttribute('data-theme') as Theme) === 'dark' ? 'dark' : 'light';

export default function VantaBackground() {
  useEffect(() => {
    // Three.js background is commented out per request—re-enable by restoring the original init logic above.
  }, []);

  return null;
}
