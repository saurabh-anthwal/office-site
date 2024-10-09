import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface AnimatedTextProps {
  text: string; // Define the props interface
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ text }) => {
  const words = text.split(" ");
  const textRef = useRef<HTMLHeadingElement | null>(null); // Specify the type for the ref
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <h2 ref={textRef} className="mb-6">
      {words.map((word, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, x: -20 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{
            delay: isVisible ? index * 0.2 : 0,
            type: 'spring',
            stiffness: 100,
            damping: 20,
          }}
          style={{ display: 'inline-block', marginRight: '0.5rem' }} // Add margin for spacing
        >
          {word}
        </motion.span>
      ))}
    </h2>
  );
};

export default AnimatedText;
