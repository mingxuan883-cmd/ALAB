'use client';
import { useEffect } from 'react';

export default function ZoomPreventer() {
  useEffect(() => {
    const handler = (e: WheelEvent) => {
      if (e.ctrlKey) e.preventDefault();
    };
    document.addEventListener('wheel', handler, { passive: false });
    return () => document.removeEventListener('wheel', handler);
  }, []);
  return null;
}
