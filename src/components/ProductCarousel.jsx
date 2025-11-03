import React, { useMemo, useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight, ShoppingCart } from 'lucide-react';
import starsPattern from '../assets/images/stars.png';
import WhatsAppCartBar from './WhatsAppCartBar';

const useProductCategories = () =>
  useMemo(
    () => [
      {
        id: 'snacks',
        title: 'Snacks',
        icon: '🍿',
        accent: 'linear-gradient(120deg, rgba(251,191,36,0.4), rgba(249,115,22,0.3))',
        items: ['Pocky', 'Kit Kat', 'Chips', 'Galletas', 'Dulces']
      },
      {
        id: 'bebidas',
        title: 'Bebidas',
        icon: '🧋',
        accent: 'linear-gradient(120deg, rgba(59,130,246,0.4), rgba(45,212,191,0.3))',
        items: ['Bubble Tea', 'Ramune', 'Sake', 'Té Verde', 'Café']
      },
      {
        id: 'postres',
        title: 'Postres',
        icon: '🍡',
        accent: 'linear-gradient(120deg, rgba(244,114,182,0.4), rgba(168,85,247,0.3))',
        items: ['Mochi', 'Dorayaki', 'Taiyaki', 'Dango', 'Wagashi']
      },
      {
        id: 'ramen',
        title: 'Sopas instantáneas',
        icon: '🍜',
        accent: 'linear-gradient(120deg, rgba(248,113,113,0.4), rgba(244,63,94,0.3))',
        items: ['Ramen', 'Udon', 'Pho', 'Tom Yum', 'Miso']
      }
    ],
    []
  );

const autoScrollDelay = 4000;
const CATALOG_URL = 'https://wa.me/c/584141471037';

const ProductCarousel = () => {
  const categories = useProductCategories();
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleProductIndex, setVisibleProductIndex] = useState(0);
  const sliderRef = useRef(null);
  const cardWidthRef = useRef(0);
  const isProgrammaticScroll = useRef(false);

  const activeCategory = categories[activeIndex];
  const [selected, setSelected] = useState([]); // {id, item, category, qty}

  const toggleSelect = (item) => {
    setSelected(prev => {
      const id = `${activeCategory.id}-${item}`;
      const existing = prev.find(p => p.id === id);
      if (existing) {
        // Remove if already selected
        return prev.filter(p => p.id !== id);
      }
      return [...prev, { id, item, category: activeCategory.title, qty: 1 }];
    });
  };

  const MAX_QTY = 10;
  const updateQty = (id, delta) => {
    setSelected(prev => prev.map(p => {
      if (p.id !== id) return p;
      const nextQty = Math.min(MAX_QTY, Math.max(1, p.qty + delta));
      return { ...p, qty: nextQty };
    }));
  };

  const removeItem = (id) => setSelected(prev => prev.filter(p => p.id !== id));
  const clearAll = () => setSelected([]);

  const measureLayout = useCallback(() => {
    const container = sliderRef.current;
    if (!container) return;
    const card = container.querySelector('[data-product-card="true"]');
    if (!card) return;
    const style = window.getComputedStyle(container);
    const gapValue = parseFloat(style.columnGap || style.gap || '16');
    const gap = Number.isNaN(gapValue) ? 16 : gapValue;
    cardWidthRef.current = card.getBoundingClientRect().width + gap;
  }, []);

  const scrollByCard = useCallback(
    (direction) => {
      const length = activeCategory.items.length;
      setVisibleProductIndex((prev) => {
        if (direction === 'next') {
          return (prev + 1) % length;
        }
        return (prev - 1 + length) % length;
      });
    },
    [activeCategory.items.length]
  );

  useEffect(() => {
    measureLayout();
    const onResize = () => {
      measureLayout();
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [measureLayout]);

  useEffect(() => {
    setVisibleProductIndex(0);
    measureLayout();
  }, [activeIndex, measureLayout]);

  useEffect(() => {
    const length = activeCategory.items.length;
    const interval = setInterval(() => {
      setVisibleProductIndex((prev) => (prev + 1) % length);
    }, autoScrollDelay);
    return () => clearInterval(interval);
  }, [activeCategory.items.length]);

  useEffect(() => {
    const container = sliderRef.current;
    if (!container) return;
    if (!cardWidthRef.current) {
      measureLayout();
    }
    const target = visibleProductIndex * (cardWidthRef.current || 1);
    isProgrammaticScroll.current = true;
    container.scrollTo({ left: target, behavior: 'smooth' });
    const timeout = setTimeout(() => {
      isProgrammaticScroll.current = false;
    }, 450);
    return () => clearTimeout(timeout);
  }, [visibleProductIndex, activeIndex, measureLayout]);

  const handleScroll = useCallback(() => {
    if (isProgrammaticScroll.current) return;
    const container = sliderRef.current;
    if (!container) return;
    if (!cardWidthRef.current) {
      measureLayout();
    }
    const width = cardWidthRef.current || 1;
    const index = Math.round(container.scrollLeft / width);
    const length = activeCategory.items.length;
    setVisibleProductIndex(Math.max(0, Math.min(index, length - 1)));
  }, [activeCategory.items.length, measureLayout]);

  return (
    <section className="relative z-20" id="products">
      <div className="px-4 mx-auto w-full max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-4 text-3xl font-black text-center text-white sm:text-4xl md:text-5xl lg:text-6xl"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500">
            Catálogo estrella
          </span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mx-auto mb-6 max-w-2xl text-center text-white/70"
        >
          Explora una categoría, toca tus antojos y arma tu carrito en segundos.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.18 }}
          className="flex gap-3 items-center px-5 py-3 mx-auto mb-10 w-full max-w-xl text-sm rounded-2xl border backdrop-blur border-white/10 bg-white/5 text-white/80"
        >
          <div className="flex justify-center items-center w-10 h-10 text-white bg-gradient-to-r rounded-full from-pink-500/60 to-purple-600/60">
            <ShoppingCart className="w-5 h-5" />
          </div>
          <div className="leading-snug">
            <p className="font-semibold text-white">Haz clic en cualquier tarjeta</p>
            <p className="text-white/70">Se agregará a tu pedido; puedes ajustar cantidades desde el mismo carrusel.</p>
          </div>
        </motion.div>

        <div className="flex flex-wrap gap-3 justify-center mb-10 md:gap-4">
          {categories.map((category, index) => {
            const isActive = index === activeIndex;
            return (
              <motion.button
                key={category.id}
                onClick={() => setActiveIndex(index)}
                className={`group relative overflow-hidden rounded-full border border-white/10 px-5 py-2.5 text-sm md:text-base transition-all duration-300 ${
                  isActive ? 'bg-white/10 shadow-lg shadow-pink-500/20 text-white' : 'bg-white/5 text-white/60 hover:text-white hover:bg-white/10'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="mr-2 text-lg">{category.icon}</span>
                <span className="font-semibold">{category.title}</span>
                {isActive && (
                  <motion.span
                    layoutId="category-pill-glow"
                    className="absolute inset-0 -z-10"
                    style={{ background: category.accent }}
                    transition={{ type: 'spring', stiffness: 250, damping: 25 }}
                  />
                )}
              </motion.button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="relative"
          >
            <div className="overflow-hidden relative px-4 py-6 rounded-3xl border backdrop-blur-2xl border-white/10 bg-white/5 sm:px-6 sm:py-8">
              <motion.div
                className="absolute top-10 -left-24 w-56 h-56 rounded-full blur-3xl bg-pink-500/10"
                animate={{ scale: [0.9, 1.1, 0.9], opacity: [0.2, 0.35, 0.2] }}
                transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
              />
              <motion.div
                className="absolute bottom-10 -right-36 w-64 h-64 rounded-full blur-3xl bg-yellow-400/10"
                animate={{ scale: [0.8, 1, 0.8], opacity: [0.18, 0.3, 0.18] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
              />

              <div className="flex relative z-10 flex-col gap-6 mb-6 lg:flex-row lg:items-center lg:justify-between">
                <div className="flex gap-3 items-center">
                  <span className="text-3xl">{activeCategory.icon}</span>
                  <div>
                    <h3 className="text-2xl font-black text-white sm:text-3xl">{activeCategory.title}</h3>
                    <p className="text-xs uppercase tracking-[0.35em] text-white/70">
                      toca y suma al carrito
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 justify-end items-center self-start lg:self-auto">
                  <button
                    type="button"
                    onClick={() => scrollByCard('prev')}
                    className="flex justify-center items-center w-11 h-11 text-white rounded-full border transition-all group border-white/20 bg-white/10 hover:border-white/40 hover:bg-white/20"
                    aria-label="Anterior"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>

                  <button
                    type="button"
                    onClick={() => scrollByCard('next')}
                    className="flex justify-center items-center w-11 h-11 text-white rounded-full border transition-all group border-white/20 bg-white/10 hover:border-white/40 hover:bg-white/20"
                    aria-label="Siguiente"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>

                  <motion.a
                    href={CATALOG_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, x: 4 }}
                    whileTap={{ scale: 0.96 }}
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-pink-500 via-orange-500 to-purple-600 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-lg shadow-pink-500/30"
                  >
                    Ver catálogo
                    <ArrowRight className="w-4 h-4" />
                  </motion.a>
                </div>
              </div>

              <div
                ref={sliderRef}
                onScroll={handleScroll}
                className="flex overflow-x-auto relative z-10 gap-4 pr-6 pb-4 snap-x snap-mandatory"
                style={{ scrollbarWidth: 'none' }}
              >
                {activeCategory.items.map((item) => {
                  const id = `${activeCategory.id}-${item}`;
                  const selectedObj = selected.find(p => p.id === id);
                  const isSelected = !!selectedObj;
                  return (
                    <motion.article
                    key={id}
                    data-product-card="true"
                    onClick={() => toggleSelect(item)}
                    className={`relative flex min-w-[220px] sm:min-w-[260px] flex-col justify-between overflow-hidden rounded-[26px] border p-5 text-white snap-start cursor-pointer transition ${
                      isSelected
                        ? 'bg-gradient-to-br border-pink-500/60 from-pink-500/30 via-purple-600/30 to-yellow-400/20'
                        : 'border-white/10 bg-white/5'
                    }`}
                    whileHover={{ y: -6 }}
                    transition={{ type: 'spring', stiffness: 260, damping: 22 }}
                  >
                    <div
                      className="absolute inset-0 opacity-90"
                      style={{
                        backgroundImage: activeCategory.accent,
                        backgroundBlendMode: 'screen'
                      }}
                      aria-hidden="true"
                    />
                    <img
                      src={starsPattern}
                      alt=""
                      className="object-cover absolute inset-0 w-full h-full opacity-20 mix-blend-screen"
                      aria-hidden
                    />

                    <div className="flex relative z-10 flex-col gap-4">
                      <span className="inline-flex w-fit items-center gap-2 rounded-full bg-black/40 px-3 py-1 text-xs uppercase tracking-[0.2em] text-white/70">
                        {activeCategory.icon}
                        {activeCategory.title}
                      </span>
                      <h4 className="text-xl font-black drop-shadow-sm">{item}</h4>
                      <div className="flex gap-2 items-center">
                        <span className={`text-[10px] tracking-wide uppercase ${isSelected ? 'text-pink-300' : 'text-white/40'}`}>
                          {isSelected ? 'Seleccionado' : 'Tap para agregar'}
                        </span>
                        {isSelected && (
                          <motion.span
                            layoutId={`check-${id}`}
                            className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-pink-500/60 text-[10px] font-bold"
                          >
                            ✓
                          </motion.span>
                        )}
                      </div>
                      {isSelected && (
                        <div className="flex gap-2 items-center mt-2">
                          <button
                            type="button"
                            onClick={(e) => { e.stopPropagation(); updateQty(id, -1); }}
                            className="flex justify-center items-center w-6 h-6 text-xs rounded-full bg-white/10 hover:bg-white/20"
                          >
                            -
                          </button>
                          <span className="text-xs font-semibold">{selectedObj.qty}</span>
                          <button
                            type="button"
                            onClick={(e) => { e.stopPropagation(); updateQty(id, 1); }}
                            className="flex justify-center items-center w-6 h-6 text-xs rounded-full bg-white/10 hover:bg-white/20"
                          >
                            +
                          </button>
                        </div>
                      )}
                    </div>
                    </motion.article>
                  );
                })}
              </div>

              <div className="flex flex-col gap-4 justify-between items-center mt-6 text-white/60 sm:flex-row">
                <span className="text-sm uppercase tracking-[0.3em] text-white/50">
                  {activeCategory.title} • {visibleProductIndex + 1}/{activeCategory.items.length}
                </span>
                <div className="flex gap-2 items-center">
                  {activeCategory.items.map((item, index) => (
                    <span
                      key={`${activeCategory.id}-dot-${item}`}
                      className={`h-1.5 w-8 rounded-full transition-all ${
                        index === visibleProductIndex ? 'bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600' : 'bg-white/20'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
  <WhatsAppCartBar items={selected} onRemove={removeItem} onClear={clearAll} />
    </section>
  );
};

export default ProductCarousel;
