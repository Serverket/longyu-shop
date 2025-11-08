import React, { useMemo, useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight, ShoppingCart, Trash2 } from 'lucide-react';
import WhatsAppCartBar from './WhatsAppCartBar';
import catalogCategories from '../data/catalog';

const useProductCategories = () => useMemo(() => catalogCategories, []);

const iconPatternCache = new Map();

const getIconPattern = (icon) => {
  if (!icon) return null;
  if (iconPatternCache.has(icon)) {
    return iconPatternCache.get(icon);
  }

  const svg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><g opacity='.16'><circle cx='50' cy='50' r='48' fill='none' stroke='%23ffffff22' stroke-width='3'/><text x='50' y='50' dominant-baseline='middle' text-anchor='middle' font-size='60' fill='%23ffffff'>${icon}</text></g></svg>`;
  const dataUri = `url("data:image/svg+xml,${encodeURIComponent(svg)}")`;
  iconPatternCache.set(icon, dataUri);
  return dataUri;
};

const CATALOG_URL = 'https://wa.me/c/584141471037';

const ProductCarousel = ({ onCartChange = () => {} }) => {
  const categories = useProductCategories();
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleProductIndex, setVisibleProductIndex] = useState(0);
  const sliderRef = useRef(null);
  const cardMetricsRef = useRef({ offsets: [], width: 0 });
  const isProgrammaticScroll = useRef(false);
  const scrollReleaseRef = useRef(null);

  const activeCategory = categories[activeIndex];
  const iconPattern = useMemo(() => getIconPattern(activeCategory?.icon), [activeCategory?.icon]);
  const [selected, setSelected] = useState([]); // {id, item, category, qty}

  const sizeRegex = useMemo(() => /([0-9]+(?:[.,][0-9]+)?)\s*(ml|gr|g|kg|l|lt|u)/i, []);
  const unitMultiplier = useMemo(() => ({
    ml: 1,
    gr: 1,
    g: 1,
    kg: 1000,
    l: 1000,
    lt: 1000,
    u: 1
  }), []);

  const parseSizeValue = useCallback((highlight = '') => {
    const match = highlight.match(sizeRegex);
    if (!match) return Number.POSITIVE_INFINITY;
    const value = parseFloat(match[1].replace(',', '.'));
    if (Number.isNaN(value)) return Number.POSITIVE_INFINITY;
    const unit = match[2].toLowerCase();
    const multiplier = unitMultiplier[unit] ?? 1;
    return value * multiplier;
  }, [sizeRegex, unitMultiplier]);

  const groupedItems = useMemo(() => {
    const groups = new Map();

    activeCategory.items.forEach((item, index) => {
      const key = item.name.trim();
      if (!groups.has(key)) {
        groups.set(key, { variants: [], firstIndex: index });
      }
      const entry = groups.get(key);
      entry.variants.push({
        data: item,
        sizeValue: parseSizeValue(item.highlight)
      });
    });

    const arranged = Array.from(groups.entries()).map(([name, { variants, firstIndex }]) => {
      const uniqueByHighlight = new Map();
      const uniqueVariants = [];

      variants
        .slice()
        .sort((a, b) => a.sizeValue - b.sizeValue)
        .forEach(({ data }) => {
          const key = (data.highlight || '').trim().toLowerCase();
          if (!uniqueByHighlight.has(key)) {
            uniqueByHighlight.set(key, true);
            uniqueVariants.push(data);
          }
        });

      return {
        name,
        firstIndex,
        variants: uniqueVariants
      };
    });

    arranged.sort((a, b) => {
      const aMulti = a.variants.length > 1 ? 1 : 0;
      const bMulti = b.variants.length > 1 ? 1 : 0;
      if (aMulti !== bMulti) {
        return bMulti - aMulti;
      }
      return a.firstIndex - b.firstIndex;
    });

    return arranged;
  }, [activeCategory.items, parseSizeValue]);

  useEffect(() => {
    onCartChange(selected.length > 0);
  }, [selected.length, onCartChange]);

  useEffect(() => () => {
    onCartChange(false);
  }, [onCartChange]);

  const toggleSelect = (product) => {
    setSelected(prev => {
      const id = product.id;
      const existing = prev.find(p => p.id === id);
      if (existing) {
        // Remove if already selected
        return prev.filter(p => p.id !== id);
      }
      return [
        ...prev,
        {
          id,
          item: product.name,
          highlight: product.highlight,
          category: activeCategory.title,
          qty: 1
        }
      ];
    });
  };

  const MAX_QTY = 10;
  const updateQty = (id, delta) => {
    setSelected(prev => prev.flatMap(item => {
      if (item.id !== id) return [item];
      const nextQty = Math.min(MAX_QTY, item.qty + delta);
      if (nextQty <= 0) {
        return [];
      }
      return [{ ...item, qty: nextQty }];
    }));
  };

  const removeItem = (id) => setSelected(prev => prev.filter(p => p.id !== id));
  const clearAll = () => setSelected([]);

  const measureLayout = useCallback(() => {
    const container = sliderRef.current;
    if (!container) {
      cardMetricsRef.current = { offsets: [], width: 0 };
      return;
    }

    const cards = container.querySelectorAll('[data-product-card="true"]');
    if (!cards.length) {
      cardMetricsRef.current = { offsets: [], width: 0 };
      return;
    }

    const offsets = Array.from(cards, (card) => card.offsetLeft);

    let step = 0;
    if (offsets.length > 1) {
      step = offsets[1] - offsets[0];
    }
    if (!step || Number.isNaN(step)) {
      const style = window.getComputedStyle(container);
      const gapValue = parseFloat(style.columnGap || style.gap || '16');
      const gap = Number.isNaN(gapValue) ? 16 : gapValue;
      step = cards[0].getBoundingClientRect().width + gap;
    }

    cardMetricsRef.current = { offsets, width: step };
  }, []);

  const getCardMetrics = useCallback(() => {
    if (!cardMetricsRef.current.offsets.length) {
      measureLayout();
    }
    return cardMetricsRef.current;
  }, [measureLayout]);

  const wrapIndex = useCallback((index, length) => {
    if (!length) return 0;
    const mod = index % length;
    return mod < 0 ? mod + length : mod;
  }, []);

  const computeCircularDistance = useCallback((from, to, length) => {
    if (length <= 1) return 0;
    const forward = (to - from + length) % length;
    const backward = (from - to + length) % length;
    return Math.min(forward, backward);
  }, []);

  const syncToIndex = useCallback((rawIndex, { immediate = false } = {}) => {
    const length = groupedItems.length;
    if (!length) return;
    const targetIndex = wrapIndex(rawIndex, length);

    const container = sliderRef.current;
    if (!container) {
      setVisibleProductIndex(targetIndex);
      return;
    }

    const { offsets, width } = getCardMetrics();
    if (!offsets.length) {
      setVisibleProductIndex(targetIndex);
      return;
    }

    const fallbackWidth = width || 1;
    const desiredOffset = offsets[targetIndex] ?? fallbackWidth * targetIndex;
    const currentOffset = container.scrollLeft;
    const delta = Math.abs(currentOffset - desiredOffset);
    const smoothThreshold = fallbackWidth * 1.5;
    const behavior = immediate || delta > smoothThreshold ? 'auto' : 'smooth';

    if (scrollReleaseRef.current) {
      clearTimeout(scrollReleaseRef.current);
      scrollReleaseRef.current = null;
    }

    isProgrammaticScroll.current = true;
    container.scrollTo({ left: desiredOffset, behavior });
    setVisibleProductIndex(targetIndex);

    scrollReleaseRef.current = setTimeout(() => {
      isProgrammaticScroll.current = false;
      scrollReleaseRef.current = null;
    }, behavior === 'smooth' ? 380 : 80);
  }, [groupedItems.length, wrapIndex, getCardMetrics]);

  const scrollByCard = useCallback((direction) => {
    const length = groupedItems.length;
    if (!length) return;
    const current = visibleProductIndex;
    const nextIndex = direction === 'next' ? current + 1 : current - 1;
    const immediate = computeCircularDistance(current, wrapIndex(nextIndex, length), length) > 1;
    syncToIndex(nextIndex, { immediate });
  }, [groupedItems.length, visibleProductIndex, computeCircularDistance, wrapIndex, syncToIndex]);

  const goToProduct = useCallback((index) => {
    const length = groupedItems.length;
    if (!length) return;
    const targetIndex = wrapIndex(index, length);
    const immediate = computeCircularDistance(visibleProductIndex, targetIndex, length) > 1;
    syncToIndex(targetIndex, { immediate });
  }, [groupedItems.length, visibleProductIndex, computeCircularDistance, wrapIndex, syncToIndex]);

  useEffect(() => {
    measureLayout();
    const onResize = () => measureLayout();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [measureLayout]);

  useEffect(() => {
    measureLayout();
    syncToIndex(0, { immediate: true });
  }, [activeIndex, groupedItems.length, measureLayout, syncToIndex]);

  const handleScroll = useCallback(() => {
    if (isProgrammaticScroll.current) return;
    const container = sliderRef.current;
    if (!container) return;

    const { offsets, width } = getCardMetrics();
    if (!offsets.length) return;

    const scrollLeft = container.scrollLeft;
    let closestIndex = 0;
    let minDistance = Number.POSITIVE_INFINITY;
    offsets.forEach((offset, idx) => {
      const distance = Math.abs(offset - scrollLeft);
      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = idx;
      }
    });

    if (typeof width === 'number' && width > 0) {
      const projected = Math.round(scrollLeft / width);
      if (projected >= 0 && projected < offsets.length) {
        closestIndex = projected;
      }
    }

    const length = groupedItems.length;
    if (!length) return;
    const clamped = Math.max(0, Math.min(closestIndex, length - 1));
    setVisibleProductIndex(prev => (prev === clamped ? prev : clamped));
  }, [groupedItems.length, getCardMetrics]);

  useEffect(() => () => {
    if (scrollReleaseRef.current) {
      clearTimeout(scrollReleaseRef.current);
    }
  }, []);

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
                {groupedItems.map((group) => {
                  const { variants } = group;
                  const primaryVariant = variants[0];
                  const hasManyVariants = variants.length > 1;
                  const selectedVariants = variants.filter(variant => selected.some(p => p.id === variant.id));
                  const selectedEntry = selected.find(item => item.id === primaryVariant.id);
                  const isAnySelected = hasManyVariants ? selectedVariants.length > 0 : Boolean(selectedEntry);
                  const cardKey = `${activeCategory.id}-${primaryVariant.id}-group`;
                  const cardWidthClass = 'w-[210px] sm:w-[240px] flex-shrink-0';

                  return (
                    <motion.article
                      key={cardKey}
                      data-product-card="true"
                      onClick={hasManyVariants ? undefined : () => toggleSelect(primaryVariant)}
                      className={`relative ${cardWidthClass} flex h-fit flex-col overflow-hidden rounded-[24px] border p-4 sm:p-5 text-white snap-start transition ${
                        hasManyVariants ? 'cursor-default' : 'cursor-pointer'
                      } ${
                        isAnySelected
                          ? 'bg-gradient-to-br border-pink-500/60 from-pink-500/30 via-purple-600/30 to-yellow-400/20'
                          : 'border-white/10 bg-white/5'
                      }`}
                      whileHover={{ y: -6 }}
                      transition={{ type: 'spring', stiffness: 260, damping: 22 }}
                    >
                      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
                        <div
                          className="absolute inset-0 opacity-85"
                          style={{
                            backgroundImage: activeCategory.accent,
                            backgroundBlendMode: 'screen'
                          }}
                        />
                        {iconPattern && (
                          <div
                            className="absolute inset-0 opacity-45 mix-blend-screen"
                            style={{
                              backgroundImage: iconPattern,
                              backgroundRepeat: 'no-repeat',
                              backgroundPosition: 'center',
                              backgroundSize: '60%'
                            }}
                          />
                        )}
                      </div>

                      <div className="relative z-10 flex flex-col gap-3.5">
                        <header className="flex flex-col gap-2.5">
                          <span className="inline-flex w-fit items-center gap-2 rounded-full bg-black/40 px-3 py-1 text-xs uppercase tracking-[0.2em] text-white/70">
                            {activeCategory.icon}
                            {activeCategory.title}
                          </span>
                          <h4 className="text-lg sm:text-xl font-extrabold drop-shadow-sm leading-tight line-clamp-2 break-words">{group.name}</h4>
                        </header>

                        <section className="flex flex-col gap-2.5">
                          {hasManyVariants ? (
                            variants.map((variant) => {
                              const variantSelected = selected.find(p => p.id === variant.id);
                              const qty = variantSelected?.qty ?? 0;
                              return (
                                <div
                                  key={variant.id}
                                  className={`rounded-2xl border border-white/10 bg-white/5 px-3 py-3 transition ${variantSelected ? 'border-pink-400/60 bg-pink-500/10 shadow-md shadow-black/20' : ''}`}
                                >
                                  <div className="flex flex-col gap-1.5">
                                    <p className="text-sm font-semibold text-white/85 leading-tight break-words">
                                      {variant.highlight || 'Presentación'}
                                    </p>
                                    <div className={`flex items-center gap-2 ${variantSelected ? 'justify-between' : 'justify-end'}`}>
                                      {variantSelected ? (
                                        <>
                                          <div className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/40 px-1.5 py-1">
                                            <button
                                              type="button"
                                              aria-label="Disminuir cantidad"
                                              onClick={(e) => { e.stopPropagation(); updateQty(variant.id, -1); }}
                                              className="flex items-center justify-center w-8 h-8 text-base font-bold text-white rounded-full bg-white/10 hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                                              disabled={qty <= 1}
                                            >
                                              −
                                            </button>
                                            <span className="text-sm font-semibold text-white min-w-[1.75rem] text-center">
                                              {qty}
                                            </span>
                                            <button
                                              type="button"
                                              aria-label="Aumentar cantidad"
                                              onClick={(e) => { e.stopPropagation(); updateQty(variant.id, 1); }}
                                              className="flex items-center justify-center w-8 h-8 text-base font-bold text-white rounded-full bg-white/10 hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                                            >
                                              +
                                            </button>
                                          </div>
                                          <button
                                            type="button"
                                            title="Quitar esta presentación"
                                            onClick={(e) => { e.stopPropagation(); toggleSelect(variant); }}
                                            className="flex items-center justify-center w-9 h-9 rounded-full border border-white/15 bg-black/35 text-white/80 hover:text-white hover:bg-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                                          >
                                            <Trash2 className="w-4 h-4" aria-hidden="true" />
                                            <span className="sr-only">Quitar presentación</span>
                                          </button>
                                        </>
                                      ) : (
                                        <button
                                          type="button"
                                          title="Agregar esta presentación"
                                          onClick={(e) => { e.stopPropagation(); toggleSelect(variant); }}
                                          className="flex items-center justify-center w-10 h-10 rounded-full border border-white/15 bg-black/30 text-white/80 hover:text-white hover:bg-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                                        >
                                          <ShoppingCart className="w-4 h-4" aria-hidden="true" />
                                          <span className="sr-only">Agregar presentación</span>
                                        </button>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              );
                            })
                          ) : (
                            <>
                              {primaryVariant.highlight && (
                                <p className="text-sm font-semibold text-white/85 leading-tight break-words">
                                  {primaryVariant.highlight}
                                </p>
                              )}
                            </>
                          )}
                        </section>

                        <footer className="flex flex-col gap-2.5 pt-1.5">
                          {hasManyVariants ? (
                            <span className={`text-xs sm:text-sm tracking-wide uppercase ${isAnySelected ? 'text-pink-200' : 'text-white/60'}`}>
                              {isAnySelected
                                ? `${selectedVariants.length} presentación${selectedVariants.length > 1 ? 'es' : ''} en tu pedido`
                                : 'Selecciona la presentación que prefieras'}
                            </span>
                          ) : (
                            <>
                              <div className="flex items-center justify-between gap-2">
                                <span className={`text-xs sm:text-sm tracking-wide uppercase ${isAnySelected ? 'text-pink-200' : 'text-white/60'}`}>
                                  {isAnySelected ? 'En tu carrito' : 'Toca para agregar'}
                                </span>
                                {isAnySelected && (
                                  <motion.span
                                    layoutId={`check-${primaryVariant.id}`}
                                    className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-pink-500/60 text-[10px] font-bold"
                                  >
                                    ✓
                                  </motion.span>
                                )}
                              </div>
                              {isAnySelected && (
                                <div className="flex items-center justify-between gap-1.5 rounded-2xl border border-white/15 bg-black/35 px-2.5 py-1.5">
                                  <div className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/40 px-1.5 py-1">
                                    <button
                                      type="button"
                                      aria-label="Disminuir cantidad"
                                      onClick={(e) => { e.stopPropagation(); updateQty(primaryVariant.id, -1); }}
                                      className="flex items-center justify-center w-8 h-8 text-base font-bold text-white rounded-full bg-white/10 hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                                      disabled={!selectedEntry || selectedEntry.qty <= 1}
                                    >
                                      −
                                    </button>
                                    <span className="text-base font-semibold text-white text-center min-w-[2rem]">
                                      {selectedEntry?.qty ?? 1}
                                    </span>
                                    <button
                                      type="button"
                                      aria-label="Aumentar cantidad"
                                      onClick={(e) => { e.stopPropagation(); updateQty(primaryVariant.id, 1); }}
                                      className="flex items-center justify-center w-8 h-8 text-base font-bold text-white rounded-full bg-white/10 hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                                    >
                                      +
                                    </button>
                                  </div>
                                  <button
                                    type="button"
                                    title="Quitar producto"
                                    onClick={(e) => { e.stopPropagation(); toggleSelect(primaryVariant); }}
                                    className="flex items-center justify-center w-9 h-9 rounded-full border border-white/15 bg-black/35 text-white/80 hover:text-white hover:bg-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                                  >
                                    <Trash2 className="w-4 h-4" aria-hidden="true" />
                                    <span className="sr-only">Quitar producto</span>
                                  </button>
                                </div>
                              )}
                            </>
                          )}
                        </footer>
                      </div>
                    </motion.article>
                  );
                })}
              </div>

              <div className="mt-6 lg:mt-8 space-y-4">
                <div className="flex flex-col gap-2 items-center text-white/60">
                  <span className="text-sm uppercase tracking-[0.3em] text-white/50">
                    {activeCategory.title} • {visibleProductIndex + 1}/{groupedItems.length}
                  </span>
                </div>
                <div className="flex relative justify-center items-center">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.92 }}
                    onClick={() => scrollByCard('prev')}
                    className="flex absolute left-0 justify-center items-center w-10 h-10 rounded-full border backdrop-blur-md transition-colors bg-white/10 border-white/20 md:left-6 md:w-12 md:h-12 hover:bg-white/20"
                    aria-label="Ver producto anterior"
                  >
                    <ChevronLeft className="w-4 h-4 text-white md:w-5 md:h-5" />
                  </motion.button>

                  <div className="flex gap-2 items-center px-14 md:px-20">
                    {groupedItems.map((group, index) => {
                      const isActive = index === visibleProductIndex;
                      return (
                        <motion.button
                          key={`${activeCategory.id}-dot-${group.variants[0]?.id ?? index}`}
                          whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.85 }}
                          onClick={() => goToProduct(index)}
                          className={`h-2 rounded-full transition-all duration-300 ${
                            isActive
                              ? 'w-7 md:w-8 bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500'
                              : 'w-2.5 bg-white/30 hover:bg-white/50'
                          }`}
                          aria-label={`Ver producto ${index + 1}`}
                        />
                      );
                    })}
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.92 }}
                    onClick={() => scrollByCard('next')}
                    className="flex absolute right-0 justify-center items-center w-10 h-10 rounded-full border backdrop-blur-md transition-colors bg-white/10 border-white/20 md:right-6 md:w-12 md:h-12 hover:bg-white/20"
                    aria-label="Ver producto siguiente"
                  >
                    <ChevronRight className="w-4 h-4 text-white md:w-5 md:h-5" />
                  </motion.button>
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
