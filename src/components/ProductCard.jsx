import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, TrendingUp } from 'lucide-react';

const ProductCard = ({ title, items, delay = 0, gradient, icon }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ y: -5 }}
      transition={{ delay, duration: 0.5, type: "spring" }}
      className="group relative h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setHoveredItem(null);
      }}
    >
      {/* Animated gradient background */}
      <motion.div 
        className={`absolute inset-0 bg-gradient-to-br ${gradient} rounded-2xl md:rounded-3xl blur-lg md:blur-xl`}
        animate={{ 
          opacity: isHovered ? 0.8 : 0.4,
          scale: isHovered ? 1.05 : 1
        }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Card content - min-height for uniformity */}
      <div className="relative h-full min-h-[280px] sm:min-h-[300px] md:min-h-[320px] bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl md:rounded-3xl p-4 sm:p-5 md:p-6 hover:bg-black/50 transition-all duration-300 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <motion.div 
              className="text-3xl mr-3"
              animate={{ 
                rotate: isHovered ? [0, -10, 10, -10, 0] : 0,
                scale: isHovered ? 1.1 : 1
              }}
              transition={{ duration: 0.5 }}
            >
              {icon}
            </motion.div>
            <h3 className="text-lg sm:text-xl font-bold text-white">{title}</h3>
          </div>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center gap-1"
            >
              <TrendingUp className="w-4 h-4 text-green-400" />
              <span className="text-xs text-green-400 font-medium">Popular</span>
            </motion.div>
          )}
        </div>
        
        {/* Items grid with enhanced hover - flex-grow for uniform height */}
        <div className="flex flex-wrap gap-2 flex-grow">
          {items.map((item, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ delay: delay + index * 0.05 }}
              onMouseEnter={() => setHoveredItem(index)}
              onMouseLeave={() => setHoveredItem(null)}
              className="relative px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-sm text-white/90 hover:bg-white/20 transition-all duration-200 cursor-pointer"
            >
              {hoveredItem === index && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute -top-1 -right-1"
                >
                  <Sparkles className="w-3 h-3 text-yellow-400" />
                </motion.div>
              )}
              {item}
            </motion.span>
          ))}
        </div>
        
        {/* Availability indicator - positioned at bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0.6 }}
          transition={{ duration: 0.3 }}
          className="mt-auto pt-3 border-t border-white/5"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs text-white/50">Disponibilidad</span>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: delay + i * 0.05 }}
                  className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${i < 4 ? 'bg-green-400' : 'bg-white/20'}`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
