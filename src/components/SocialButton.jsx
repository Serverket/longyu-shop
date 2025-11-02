import React from 'react';
import { motion } from 'framer-motion';

const SocialButton = ({ href, icon, label, gradient, hoverColor, delay = 0 }) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="group relative inline-flex items-center justify-center"
    >
      <div className={`absolute inset-0 bg-gradient-to-r ${gradient} rounded-full blur-lg opacity-70 group-hover:opacity-100 transition-opacity duration-300`} />
      <div className="relative flex items-center gap-2 px-6 py-3 bg-black/50 backdrop-blur-md border border-white/20 rounded-full transition-all duration-300 group-hover:border-white/40">
        {icon}
        <span className="font-medium text-white">{label}</span>
      </div>
    </motion.a>
  );
};

export default SocialButton;
