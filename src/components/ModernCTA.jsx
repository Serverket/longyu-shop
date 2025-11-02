import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, MessageCircle, Instagram, ArrowRight, Sparkles, TrendingUp, Clock, Users } from 'lucide-react';

const ModernCTA = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  
  const stats = [
    { value: '10K+', label: 'Clientes Felices', icon: Users },
    { value: '24h', label: 'Envío Rápido', icon: Clock },
    { value: '500+', label: 'Productos', icon: ShoppingBag },
    { value: '4.9★', label: 'Calificación', icon: TrendingUp },
  ];

  return (
    <section className="overflow-hidden relative px-4 py-20" id="contact">
      {/* Animated background gradient */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/20 to-orange-900/20 animate-gradient-xy" />
        <motion.div
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255, 0, 255, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255, 165, 0, 0.3) 0%, transparent 50%)',
            backgroundSize: '100% 100%',
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="inline-block mb-4"
          >
            <Sparkles className="w-8 h-8 text-yellow-400" />
          </motion.div>
          
          <h2 className="mb-4 text-4xl font-black md:text-6xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500">
              ¡EMPIEZA A COMPRAR AHORA!
            </span>
          </h2>
          
          <p className="mx-auto max-w-2xl text-xl text-white/80">
            Únete a cientos de amantes de la comida asiática en Venezuela 🇻🇪
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-4 mb-12 md:grid-cols-4"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, type: "spring" }}
              whileHover={{ y: -5, scale: 1.05 }}
              className="p-6 text-center rounded-2xl border backdrop-blur-lg transition-all duration-300 bg-white/5 border-white/10 group hover:bg-white/10"
            >
              <stat.icon className="mx-auto mb-2 w-8 h-8 transition-colors text-white/60 group-hover:text-yellow-400" />
              <div className="mb-1 text-3xl font-black text-white">{stat.value}</div>
              <div className="text-sm text-white/60">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main CTA Cards */}
        <div className="grid gap-6 mb-12 md:grid-cols-3">
          {/* WhatsApp Card */}
          <motion.a
            href="https://api.whatsapp.com/send?phone=584141471037"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            onHoverStart={() => setHoveredCard('whatsapp')}
            onHoverEnd={() => setHoveredCard(null)}
            className="block relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-green-600 to-green-400 rounded-3xl opacity-50 blur-xl transition-opacity group-hover:opacity-70" />
            <div className="overflow-hidden relative p-8 bg-gradient-to-br rounded-3xl border from-green-600/90 to-green-500/90 border-white/20">
              <motion.div
                animate={{ rotate: hoveredCard === 'whatsapp' ? 360 : 0 }}
                transition={{ duration: 0.5 }}
                className="inline-block mb-4"
              >
                <MessageCircle className="w-12 h-12 text-white" />
              </motion.div>
              <h3 className="mb-2 text-2xl font-bold text-white">WhatsApp</h3>
              <p className="mb-4 text-white/90">Chat directo y respuesta inmediata</p>
              <div className="flex gap-2 items-center font-semibold text-white">
                <span>Escribir ahora</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
              </div>
              {hoveredCard === 'whatsapp' && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute top-4 right-4"
                >
                  <span className="flex w-3 h-3">
                    <span className="inline-flex absolute w-full h-full bg-white rounded-full opacity-75 animate-ping"></span>
                    <span className="inline-flex relative w-3 h-3 bg-white rounded-full"></span>
                  </span>
                </motion.div>
              )}
            </div>
          </motion.a>

          {/* Catalog Card - DESTACADO */}
          <motion.a
            href="https://wa.me/c/584141471037"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            onHoverStart={() => setHoveredCard('catalog')}
            onHoverEnd={() => setHoveredCard(null)}
            className="block relative group md:-mt-4"
          >
            {/* "POPULAR" Badge */}
            <motion.div
              animate={{ rotate: [-5, 5, -5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute -top-3 right-4 z-10"
            >
              <span className="px-4 py-1 text-xs font-black text-black uppercase bg-yellow-400 rounded-full">
                ⭐ MÁS POPULAR
              </span>
            </motion.div>

            <div className="absolute inset-0 bg-gradient-to-br from-orange-600 via-pink-600 to-purple-600 rounded-3xl opacity-60 blur-xl transition-opacity group-hover:opacity-80 animate-pulse-slow" />
            <div className="overflow-hidden relative p-8 bg-gradient-to-br from-orange-600 via-pink-600 to-purple-600 rounded-3xl border-2 transform border-white/30">
              <motion.div
                animate={{ 
                  rotate: hoveredCard === 'catalog' ? 360 : 0,
                  scale: hoveredCard === 'catalog' ? 1.1 : 1
                }}
                transition={{ duration: 0.5 }}
                className="inline-block mb-4"
              >
                <ShoppingBag className="w-14 h-14 text-white" />
              </motion.div>
              <h3 className="mb-2 text-3xl font-black text-white">Ver Catálogo</h3>
              <p className="mb-4 text-lg text-white">¡Todos nuestros productos disponibles!</p>
              <motion.div 
                className="flex gap-2 items-center text-lg font-bold text-white"
                animate={{ x: hoveredCard === 'catalog' ? 10 : 0 }}
              >
                <span>Explorar ahora</span>
                <ArrowRight className="w-6 h-6" />
              </motion.div>
              
              {/* Floating emojis on hover */}
              <AnimatePresence>
                {hoveredCard === 'catalog' && (
                  <>
                    {['🍜', '🥟', '🍱', '🧋'].map((emoji, i) => (
                      <motion.span
                        key={i}
                        initial={{ y: 0, opacity: 0 }}
                        animate={{ 
                          y: -100,
                          opacity: [0, 1, 0],
                          x: Math.random() * 100 - 50
                        }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 2, delay: i * 0.2 }}
                        className="absolute bottom-4 left-1/2 text-2xl pointer-events-none"
                      >
                        {emoji}
                      </motion.span>
                    ))}
                  </>
                )}
              </AnimatePresence>
            </div>
          </motion.a>

          {/* Instagram Card */}
          <motion.a
            href="https://www.instagram.com/longyu.shop/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            onHoverStart={() => setHoveredCard('instagram')}
            onHoverEnd={() => setHoveredCard(null)}
            className="block relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 rounded-3xl opacity-50 blur-xl transition-opacity group-hover:opacity-70" />
            <div className="overflow-hidden relative p-8 bg-gradient-to-br rounded-3xl border from-purple-600/90 via-pink-600/90 to-orange-500/90 border-white/20">
              <motion.div
                animate={{ rotate: hoveredCard === 'instagram' ? 360 : 0 }}
                transition={{ duration: 0.5 }}
                className="inline-block mb-4"
              >
                <Instagram className="w-12 h-12 text-white" />
              </motion.div>
              <h3 className="mb-2 text-2xl font-bold text-white">Instagram</h3>
              <p className="mb-4 text-white/90">Síguenos para ofertas exclusivas</p>
              <div className="flex gap-2 items-center font-semibold text-white">
                <span>@longyu.shop</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
              </div>
              {hoveredCard === 'instagram' && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute top-4 right-4"
                >
                  <span className="text-2xl">❤️</span>
                </motion.div>
              )}
            </div>
          </motion.a>
        </div>

        {/* Bottom Message */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="mb-4 text-lg text-white/60">
            ¿Tienes dudas? ¡Escríbenos! Respondemos en minutos ⚡
          </p>
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-flex gap-2 items-center px-6 py-3 rounded-full border backdrop-blur-md bg-white/10 border-white/20"
          >
            <div className="flex -space-x-2">
              {['🇨🇳', '🇯🇵', '🇰🇷', '🇹🇭'].map((flag, i) => (
                <span key={i} className="text-xl">{flag}</span>
              ))}
            </div>
            <span className="font-medium text-white">Productos 100% Auténticos</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ModernCTA;
