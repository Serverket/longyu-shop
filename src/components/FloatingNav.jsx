import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Instagram, MessageCircle, ShoppingBag, Menu, X, Home, Users, Phone } from 'lucide-react';

const FloatingNav = ({ cartActive = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Detect active section
      const sections = ['home', 'products', 'customers', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { id: 'home', icon: Home, label: 'Inicio' },
    { id: 'products', icon: ShoppingBag, label: 'Productos' },
    { id: 'customers', icon: Users, label: 'Clientes' },
    { id: 'contact', icon: Phone, label: 'Contacto' },
  ];

  const socialLinks = [
    { 
      icon: Instagram, 
      label: 'Instagram', 
      href: 'https://www.instagram.com/longyu.shop/',
      gradient: 'from-purple-500 to-pink-500',
      hoverScale: 1.1
    },
    { 
      icon: MessageCircle, 
      label: 'WhatsApp', 
      href: 'https://api.whatsapp.com/send?phone=584141471037',
      gradient: 'from-green-500 to-green-600',
      hoverScale: 1.1
    },
    { 
      icon: ShoppingBag, 
      label: 'Catálogo', 
      href: 'https://wa.me/c/584141471037',
      gradient: 'from-orange-500 to-red-500',
      hoverScale: 1.15
    },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Desktop Navigation Bar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 hidden lg:block transition-all duration-300 ${
          scrolled ? 'py-2' : 'py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className={`flex items-center justify-between backdrop-blur-2xl bg-black/20 rounded-full border border-white/10 px-6 transition-all duration-300 ${
            scrolled ? 'py-2' : 'py-3'
          }`}>
            {/* Logo/Brand */}
            <motion.button 
              whileHover={{ scale: 1.05 }}
              className="cursor-pointer"
              onClick={() => scrollToSection('home')}
            >
              <img 
                src="/logo.png"
                alt="Longyu Shop"
                className="h-10 sm:h-12 w-auto drop-shadow-lg"
                loading="lazy"
              />
            </motion.button>

            {/* Center Menu */}
            <div className="flex items-center gap-1">
              {menuItems.map((item) => (
                <motion.button
                  key={item.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                    activeSection === item.id 
                      ? 'bg-white/20 text-white' 
                      : 'text-white/70 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{item.label}</span>
                </motion.button>
              ))}
            </div>

            {/* Social CTAs */}
            <div className="flex items-center gap-2">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: link.hoverScale, rotate: index === 2 ? 5 : 0 }}
                  whileTap={{ scale: 0.9 }}
                  className={`relative p-2 rounded-full bg-gradient-to-r ${link.gradient} ${
                    index === 2 ? 'animate-pulse-slow' : ''
                  }`}
                >
                  <link.icon className="w-5 h-5 text-white" />
                  {index === 2 && (
                    <motion.span
                      className="absolute -top-1 -right-1 flex h-3 w-3"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 1 }}
                    >
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-yellow-500"></span>
                    </motion.span>
                  )}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Floating Action Button */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5 }}
        className="lg:hidden"
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(!isOpen)}
          className={`fixed right-6 z-50 p-4 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 shadow-lg ${
            cartActive ? 'top-6' : 'bottom-6'
          } ${
            isOpen ? 'rotate-90' : ''
          } transition-all duration-300`}
        >
          {isOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <Menu className="w-6 h-6 text-white" />
          )}
        </motion.button>

        {/* Mobile Quick Actions */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className={`fixed right-6 z-40 space-y-3 ${cartActive ? 'top-24' : 'bottom-24'}`}
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="flex items-center justify-end gap-3 group"
                >
                  <motion.span
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    className="bg-black/80 backdrop-blur-md text-white px-3 py-1 rounded-full text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    {link.label}
                  </motion.span>
                  <div className={`p-3 rounded-full bg-gradient-to-r ${link.gradient} shadow-lg`}>
                    <link.icon className="w-5 h-5 text-white" />
                  </div>
                </motion.a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-30"
            />
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
};

export default FloatingNav;
