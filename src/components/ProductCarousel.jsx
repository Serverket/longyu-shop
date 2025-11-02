import React, { useMemo, useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
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
      <div className="mx-auto w-full max-w-7xl px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4"
        >
          <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 bg-clip-text text-transparent">
            Catálogo estrella
          </span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-center text-white/70 max-w-xl mx-auto mb-10"
        >
          Selecciona una categoría y deja que los favoritos desfilen automáticamente.
        </motion.p>

        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-10">
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
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl px-4 sm:px-6 py-6 sm:py-8">
              <motion.div
                className="absolute -left-24 top-10 h-56 w-56 rounded-full bg-pink-500/10 blur-3xl"
                animate={{ scale: [0.9, 1.1, 0.9], opacity: [0.2, 0.35, 0.2] }}
                transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
              />
              <motion.div
                className="absolute -right-36 bottom-10 h-64 w-64 rounded-full bg-yellow-400/10 blur-3xl"
                animate={{ scale: [0.8, 1, 0.8], opacity: [0.18, 0.3, 0.18] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
              />

              <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-6">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{activeCategory.icon}</span>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-black text-white">{activeCategory.title}</h3>
                    <p className="text-xs uppercase tracking-[0.35em] text-white/50">
                      favoritos longyu
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 self-start lg:self-auto justify-end">
                  <button
                    type="button"
                    onClick={() => scrollByCard('prev')}
                    className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-all hover:border-white/40 hover:bg-white/20"
                    aria-label="Anterior"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>

                  <button
                    type="button"
                    onClick={() => scrollByCard('next')}
                    className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-all hover:border-white/40 hover:bg-white/20"
                    aria-label="Siguiente"
                  >
                    <ChevronRight className="h-5 w-5" />
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
                    <ArrowRight className="h-4 w-4" />
                  </motion.a>
                </div>
              </div>

              <div
                ref={sliderRef}
                onScroll={handleScroll}
                className="relative z-10 flex gap-4 overflow-x-auto pb-4 pr-6 snap-x snap-mandatory"
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
                        ? 'border-pink-500/60 bg-gradient-to-br from-pink-500/30 via-purple-600/30 to-yellow-400/20'
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
                      className="absolute inset-0 h-full w-full object-cover opacity-20 mix-blend-screen"
                      aria-hidden
                    />

                    <div className="relative z-10 flex flex-col gap-4">
                      <span className="inline-flex w-fit items-center gap-2 rounded-full bg-black/40 px-3 py-1 text-xs uppercase tracking-[0.2em] text-white/70">
                        {activeCategory.icon}
                        {activeCategory.title}
                      </span>
                      <h4 className="text-xl font-black drop-shadow-sm">{item}</h4>
                      <div className="flex items-center gap-2">
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
                        <div className="mt-2 flex items-center gap-2">
                          <button
                            type="button"
                            onClick={(e) => { e.stopPropagation(); updateQty(id, -1); }}
                            className="h-6 w-6 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-xs"
                          >
                            -
                          </button>
                          <span className="text-xs font-semibold">{selectedObj.qty}</span>
                          <button
                            type="button"
                            onClick={(e) => { e.stopPropagation(); updateQty(id, 1); }}
                            className="h-6 w-6 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-xs"
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

              <div className="mt-6 flex flex-col items-center justify-between gap-4 text-white/60 sm:flex-row">
                <span className="text-sm uppercase tracking-[0.3em] text-white/50">
                  {activeCategory.title} • {visibleProductIndex + 1}/{activeCategory.items.length}
                </span>
                <div className="flex items-center gap-2">
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
