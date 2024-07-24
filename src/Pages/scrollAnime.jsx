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
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1.5,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top 80%',
          end: 'top 50%',
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div className="h-[200vh] flex justify-center items-center">
      <h2
        className="text-center text-6xl font-bold text-white"
        ref={textRef}
        style={{ opacity: 0 }} // Ensure the initial opacity is set to 0
      >
        Journey to a place where the earth sings and the fields dance
      </h2>
    </div>
  );
};

export default AnimatedText;
