import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import heroImage1 from '../assets/images/1.jpg';
import heroImage2 from '../assets/images/2.jpg';
import heroImage3 from '../assets/images/3.jpg';
import heroImage4 from '../assets/images/4.jpg';
import heroImage5 from '../assets/images/5.jpg';
import heroImage6 from '../assets/images/6.jpg';

const heroImages = [
  heroImage1,
  heroImage2,
  heroImage3,
  heroImage4,
  heroImage5,
  heroImage6
];

const SLIDE_DURATION_MS = 8000;
const TRANSITION_DURATION = 2.4;

const BackgroundSlider = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, SLIDE_DURATION_MS);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentImage}
          initial={{ opacity: 0, scale: 1.08, filter: 'blur(14px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          exit={{ opacity: 0, scale: 1.04, filter: 'blur(18px)' }}
          transition={{ duration: TRANSITION_DURATION, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `url(${heroImages[currentImage]})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
      </AnimatePresence>
      
      {/* Overlay gradient para mejor legibilidad */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90" />

      {/* Suave oscurecimiento progresivo */}
      <motion.div
        initial={{ opacity: 0.35 }}
        animate={{ opacity: [0.35, 0.5, 0.35] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 bg-black/50 pointer-events-none"
      />
      
      {/* Efecto de partículas brillantes */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full"
            initial={{ 
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight 
            }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default BackgroundSlider;
