
import { useEffect } from 'react';

// Declaración de tipos para la API de Calendly
declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (options: { url: string; parentElement: HTMLElement | null }) => void;
    };
  }
}

export const Calendly = () => {
  useEffect(() => {
    const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
    
    if (existingScript) {
      if (window.Calendly) {
        window.Calendly.initInlineWidget({
          url: 'https://calendly.com/candiath/30min',
          parentElement: document.getElementById('calendly-inline-widget')
        });
      }
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    // aaaaaaaaaaaaaaaaaaaaaaaa
    script.onload = () => {
      if (window.Calendly) {
        window.Calendly.initInlineWidget({
          url: 'https://calendly.com/candiath/30min',
          parentElement: document.getElementById('calendly-inline-widget')
        });
      }
    };
    
    document.body.appendChild(script);

    return () => {
      const scriptToRemove = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
      if (scriptToRemove) {
        document.body.removeChild(scriptToRemove);
      }
    };
  }, []);

  return (
    <section id='calendly' style={{background: ''}} className=''>
      {/* <h2 className='text-4xl sm:text-5xl font-bold mb-6 text-balance section-title'>Let's talk about your project!</h2> */}
      <div 
        id="calendly-inline-widget" 
        data-url="https://calendly.com/candiath/30min" 
        style={{ minWidth: '320px', height: '700px' }}
      />
    </section>
  );
}
