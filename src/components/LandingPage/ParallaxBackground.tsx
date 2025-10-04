import React, { useEffect, useState } from 'react';

export const ParallaxBackground: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">


      {/* Geometric shapes */}
      <div
        className="absolute w-32 h-32 border border-orange-500/20 rotate-45 animate-spin-slow"
        style={{
          top: `${30 + scrollY * 0.02}%`,
          right: `${40 + scrollY * -0.03}%`,
          animationDuration: '20s',
        }}
      />
      <div
        className="absolute w-24 h-24 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-full animate-pulse"
        style={{
          bottom: `${40 + scrollY * 0.04}%`,
          right: `${20 + scrollY * -0.02}%`,
        }}
      />
    </div>
  );
};