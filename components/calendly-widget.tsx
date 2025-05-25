"use client";

import { useEffect } from 'react';

interface CalendlyWidgetProps {
  className?: string;
}

export function CalendlyWidget({ className = '' }: CalendlyWidgetProps) {
  useEffect(() => {
    // Load Calendly script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on component unmount
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div 
      className={`calendly-inline-widget ${className}`} 
      data-url="https://calendly.com/musgabriel2/30min" 
      style={{ minWidth: '320px', height: '700px' }}
    />
  );
} 