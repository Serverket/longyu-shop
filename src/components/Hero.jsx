import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <motion.div className="flex relative z-20 flex-col justify-center items-center px-4 min-h-screen">
      {/* Logo animado con efecto flotante */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, type: "spring" }}
        className="relative mb-8"
      >
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-orange-500 opacity-50 blur-3xl" />
          <img 
            src="/logo.png" 
            alt="Longyu Shop" 
            className="relative h-32 drop-shadow-2xl sm:h-40 md:h-48 lg:h-64 xl:h-80"
          />
        </motion.div>
        
        {/* Efecto de brillos */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-4 -right-4"
        >
          <Sparkles className="w-8 h-8 text-yellow-400" />
        </motion.div>
      </motion.div>

      {/* Título principal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="mb-6 text-center"
      >
        <div className="inline-block relative">
          {/* Efecto glow detrás */}
          <div className="absolute inset-0 text-4xl font-black bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 opacity-50 blur-2xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl" aria-hidden="true">
            Tu tienda asiática favorita
          </div>
          {/* Texto principal */}
          <motion.h1 
            className="relative mb-4 text-4xl font-black tracking-tight text-transparent uppercase bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl animate-gradient-x"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6 }}
          >
            Tu tienda asiática favorita
          </motion.h1>
        </div>
        <motion.div
          animate={{ 
            rotate: [0, 10, -10, 0],
            scale: [1, 1.2, 1.2, 1]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
          className="inline-block text-5xl filter drop-shadow-2xl md:text-6xl lg:text-7xl animate-float"
        >
          🍜
        </motion.div>
      </motion.div>

      {/* Subtítulo animado */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="flex gap-2 items-center px-4 py-2 mb-8 rounded-full backdrop-blur-sm bg-white/10"
      >
        <ShoppingBag className="w-5 h-5 text-white" />
        <p className="text-sm text-white/90 md:text-base">
          Productos de Asia directo a tu puerta
        </p>
      </motion.div>

      {/* Indicador de scroll mejorado */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col gap-2 items-center"
        >
          <motion.div className="flex justify-center w-6 h-10 rounded-full border-2 transition-colors cursor-pointer border-white/30 hover:border-white/60">
            <motion.div
              animate={{ y: [2, 15, 2] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 h-1.5 bg-gradient-to-b from-yellow-400 to-pink-500 rounded-full mt-2"
            />
          </motion.div>
          <motion.span
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-xs font-medium text-white/60"
          >
            Desliza
          </motion.span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
