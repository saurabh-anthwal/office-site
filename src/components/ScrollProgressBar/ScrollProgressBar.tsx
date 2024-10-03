"use client"
import React, { useState, useEffect } from 'react';

const ScrollProgressBar = () => {
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    let ticking = false;
  
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollTop = window.pageYOffset;
          const winHeight = window.innerHeight;
          const docHeight = document.documentElement.scrollHeight;
          const totalScroll = (scrollTop / (docHeight - winHeight)) * 100;
          setScrollPercent(totalScroll);
          ticking = false;
        });
  
        ticking = true;
      }
    };
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  

  const radius = 50;
  const stroke = 8;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = (1 - scrollPercent / 100) * circumference; // Adjusted calculation

  return (
    <div style={{
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      zIndex: 1000,
    }}>
      <svg
        height={radius * 2}
        width={radius * 2}
        className="rotate-[-90deg]"
      >
        <circle
          stroke="#ddd"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <circle
          stroke="#6000FF"
          fill="transparent"
          strokeWidth={stroke}
          strokeDasharray={circumference + ' ' + circumference}
          style={{
            strokeDashoffset,
            transition: 'stroke-dashoffset 0.35s ease',
          }}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
      </svg>
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: '#6000FF',
          fontSize: '18px',
          fontWeight: 'bold',
        }}
      >
        {Math.round(scrollPercent)}%
      </div>
    </div>
  );
};

export default ScrollProgressBar;
