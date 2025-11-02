import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, Send, Trash2, Sparkles } from 'lucide-react';

// Phone number constant (can later be externalized to config/env)
const WHATSAPP_PHONE = '584141471037';

/**
 * WhatsAppCartBar
 * Props:
 *  - items: Array<{ id: string, item: string, category: string, qty: number }>
 *  - onRemove: (id: string) => void
 *  - onClear: () => void
 */
const WhatsAppCartBar = ({ items, onRemove, onClear }) => {
  const [includeLocation, setIncludeLocation] = useState(() => {
    try {
      const stored = localStorage.getItem('lu-include-location');
      return stored === 'true';
    } catch {
      return false;
    }
  });
  const [locationData, setLocationData] = useState(null); // {lat, lng, accuracy, timestamp}
  const [locStatus, setLocStatus] = useState('idle'); // idle | requesting | success | error
  const [sending, setSending] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  // Request location when toggled on and not yet fetched
  useEffect(() => {
    if (includeLocation && !locationData && locStatus === 'idle') {
      if (!('geolocation' in navigator)) {
        setLocStatus('error');
        return;
      }
      setLocStatus('requesting');
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setLocationData({
            lat: pos.coords.latitude.toFixed(6),
            lng: pos.coords.longitude.toFixed(6),
            accuracy: Math.round(pos.coords.accuracy), // meters
            timestamp: pos.timestamp
          });
          setLocStatus('success');
        },
        (err) => {
          console.warn('Geolocation error', err);
          setLocStatus('error');
        },
        { enableHighAccuracy: true, timeout: 10000, maximumAge: 30000 }
      );
    }
  }, [includeLocation, locationData, locStatus]);

  // Persist preference
  useEffect(() => {
    try {
      localStorage.setItem('lu-include-location', includeLocation ? 'true' : 'false');
    } catch (error) {
      if (process.env.NODE_ENV !== 'production') {
        console.warn('Failed to persist location preference', error);
      }
    }
  }, [includeLocation]);

  const totalUnits = items.reduce((sum, p) => sum + (p.qty || 1), 0);
  const formatTimestamp = (ts) => {
    try {
      return new Date(ts).toLocaleString('es-VE');
    } catch { return ''; }
  };
  const formatAccuracy = (meters) => {
    if (typeof meters !== 'number' || Number.isNaN(meters)) return '';
    if (meters >= 1000) {
      const km = meters / 1000;
      return `±${km >= 10 ? Math.round(km) : km.toFixed(1)} km`;
    }
    return `±${meters} m`;
  };
  const locationAccuracyDisplay = includeLocation && locStatus === 'success' && locationData
    ? formatAccuracy(locationData.accuracy)
    : '';
  const buildMessage = () => {
    const groupedProducts = items.reduce((acc, item) => {
      const category = item.category || 'Otros';
      if (!acc.has(category)) {
        acc.set(category, []);
      }
      acc.get(category).push(item);
      return acc;
    }, new Map());

    const productLines = [];
    groupedProducts.forEach((products, category) => {
      productLines.push(`- ${category}`);
      products.forEach((product) => {
        const qty = product.qty || 1;
        productLines.push(`    • ${product.item} ×${qty}`);
      });
    });

    const locationLines = [];
    if (includeLocation && locationData) {
      const accuracyText = formatAccuracy(locationData.accuracy);
      const mapLink = `https://www.google.com/maps/search/?api=1&query=${locationData.lat},${locationData.lng}`;
      locationLines.push('Ubicación aproximada:');
      if (accuracyText) {
        locationLines.push(`- Precisión: ${accuracyText}`);
      }
      const capturedAt = formatTimestamp(locationData.timestamp);
      if (capturedAt) {
        locationLines.push(`- Capturada: ${capturedAt}`);
      }
      locationLines.push(mapLink);
    } else if (includeLocation && locStatus === 'error') {
      locationLines.push('Ubicación: no se pudo obtener en este momento.');
    }

    const messageLines = [
      'Longyu Shop',
      `Pedido express: ${totalUnits} uds · ${items.length} productos`,
    ];

    if (productLines.length) {
      messageLines.push('');
      messageLines.push('Productos:');
      messageLines.push(...productLines);
    }

    if (locationLines.length) {
      messageLines.push('');
      messageLines.push('Detalles de ubicación:');
      messageLines.push(...locationLines);
    }

    messageLines.push('');
    messageLines.push('| Enviado desde Longyu Shop');

    return messageLines.join('\n').trim();
  };

  const handleSend = () => {
    if (!items.length) return;
    setSending(true);
    const text = encodeURIComponent(buildMessage());
    const url = `https://wa.me/${WHATSAPP_PHONE}?text=${text}`;
    window.open(url, '_blank');
    // Confetti trigger
    setShowConfetti(true);
    setTimeout(() => {
      setSending(false);
      setShowConfetti(false);
    }, 1600);
  };

  return (
    <AnimatePresence>
      {items.length > 0 && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 260, damping: 24 }}
          className="fixed left-0 right-0 bottom-0 z-40 mx-auto w-full max-w-3xl px-4 pb-4"
        >
          <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-black/70 backdrop-blur-xl shadow-lg">
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-pink-500/10 via-purple-600/10 to-yellow-400/10" />
            <div className="relative flex flex-col gap-3 p-4">
              <div className="flex items-center justify-between">
                <h5 className="text-sm font-semibold tracking-wide text-white uppercase">
                  Pedido rápido ({items.length} prod / {totalUnits} uds)
                </h5>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={onClear}
                    className="group flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
                    title="Vaciar selección"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setIncludeLocation(v => !v)}
                      className={`group flex h-9 px-3 items-center gap-2 rounded-full text-xs font-medium transition ${
                        includeLocation ? 'bg-yellow-500/20 text-yellow-300 border border-yellow-400/30' : 'bg-white/10 text-white/70 border border-white/15'
                      }`}
                      title="Ordenar y enviar mi ubicación"
                    >
                      <MapPin className="h-4 w-4" />
                      {includeLocation ? (
                        locStatus === 'success' ? 'Ubicación lista' : locStatus === 'requesting' ? 'Solicitando…' : 'Error'
                      ) : (
                        'Agregar ubicación'
                      )}
                    </button>
                    {includeLocation && locStatus === 'error' && (
                      <button
                        type="button"
                        onClick={() => { setLocStatus('idle'); setLocationData(null); }}
                        className="h-9 px-3 rounded-full bg-red-500/20 text-red-300 text-xs font-medium border border-red-400/30 hover:bg-red-500/30"
                      >
                        Reintentar
                      </button>
                    )}
                  </div>
                </div>
              </div>

              {/* Selected items list */}
              <div className="flex flex-wrap gap-2">
                {items.map(p => (
                  <motion.span
                    key={p.id}
                    layout
                    className="group relative inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-white"
                  >
                    <span title="Ordenar y enviar mi ubicación">{p.item} × {p.qty}</span>
                    <button
                      type="button"
                      onClick={() => onRemove(p.id)}
                      className="flex h-4 w-4 items-center justify-center rounded-full bg-white/20 text-[10px] hover:bg-white/40"
                      title="Quitar"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </motion.span>
                ))}
              </div>

              <div className="flex items-center justify-between gap-3 pt-1">
                <p className="text-[11px] leading-snug text-white/50">
                  Total: {totalUnits} unidades. {locationAccuracyDisplay && `Precisión: ${locationAccuracyDisplay}`} {includeLocation && locStatus === 'requesting' && 'Obteniendo ubicación…'}
                </p>
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.94 }}
                  disabled={sending || !items.length}
                  onClick={handleSend}
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-pink-500 via-orange-500 to-purple-600 px-4 py-2 text-xs font-semibold text-white shadow disabled:opacity-50"
                  title="Enviar pedido por WhatsApp"
                >
                  {showConfetti ? <Sparkles className="h-4 w-4" /> : <Send className="h-4 w-4" />}
                  {sending ? 'Enviando…' : showConfetti ? '¡Listo!' : 'Enviar'}
                </motion.button>
              </div>
            </div>
            {/* Simple confetti (CSS circles) */}
            <AnimatePresence>
              {showConfetti && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="pointer-events-none absolute inset-0 overflow-hidden"
                >
                  {[...Array(18)].map((_, i) => (
                    <motion.span
                      key={i}
                      initial={{ y: -10, opacity: 0 }}
                      animate={{ y: [0, 120, 180], opacity: [1, 1, 0] }}
                      transition={{ duration: 1.4, delay: i * 0.02 }}
                      className="absolute h-2 w-2 rounded-full"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 40}%`,
                        background: ['#f472b6','#fb923c','#a855f7','#fde047'][i % 4],
                        filter: 'blur(0.5px)'
                      }}
                    />
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WhatsAppCartBar;