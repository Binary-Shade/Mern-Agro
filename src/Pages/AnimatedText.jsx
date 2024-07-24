// AnimatedText.jsx
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AnimatedText = () => {
  const textRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { scale: 0.8, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1.5,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top 0%', // Adjust start point based on your needs
          end: 'top 75%',   // Adjust end point based on your needs
          scrub: true,
        },
      }
    );
  }, []);
  
  

  return (
    <div className="flex justify-center items-center w-1/2">
      <h2 className="text-center text-white text-6xl font-bold" ref={textRef}>
        Journey to a place where the earth sings and the fields dance !
      </h2>

    </div>
  );
};

export default AnimatedText;
