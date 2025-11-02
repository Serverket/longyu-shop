import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight, Heart } from 'lucide-react';
import client7Image from '../assets/images/7.jpg';
import client8Image from '../assets/images/8.jpg';
import client9Image from '../assets/images/9.jpg';
import client10Image from '../assets/images/10.jpg';
import client11Image from '../assets/images/11.jpeg';
import client12Image from '../assets/images/12.jpeg';
import client13Image from '../assets/images/13.jpeg';
import client14Image from '../assets/images/14.jpeg';
import client15Image from '../assets/images/15.jpeg';
import client16Image from '../assets/images/16.jpeg';
import client17Image from '../assets/images/17.jpeg';
import client18Image from '../assets/images/18.jpeg';
import client19Image from '../assets/images/19.jpg';
import client20Image from '../assets/images/20.jpg';
import client21Image from '../assets/images/21.jpg';
import client22Image from '../assets/images/22.jpg';
import client23Image from '../assets/images/23.jpg';
import client24Image from '../assets/images/24.jpg';
import client25Image from '../assets/images/25.jpg';
import client26Image from '../assets/images/26.jpg';
import client27Image from '../assets/images/27.jpg';
import client28Image from '../assets/images/28.jpg';
import client29Image from '../assets/images/29.jpg';
import client30Image from '../assets/images/30.jpg';
import client31Image from '../assets/images/31.jpg';
import client32Image from '../assets/images/32.jpg';

const testimonialVariants = {
  enter: (direction) => ({
    opacity: 0,
    y: direction > 0 ? 24 : -24,
    filter: 'blur(18px)',
  }),
  center: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
  },
  exit: (direction) => ({
    opacity: 0,
    y: direction > 0 ? -24 : 24,
    filter: 'blur(18px)',
  }),
};

const ClientesSection = () => {
  // Data first, then state hooks that depend on it to avoid TDZ issues
  const testimonials = [
    {
      id: 1,
      name: "Alejandra Ríos",
      location: "Caracas",
      rating: 5,
      image: client7Image,
      comment: "Pedí snacks picantes y llegaron impecables. Todo fresco y bien empacado.",
      favorite: "Takis Blue Heat",
      date: "Hace 3 días"
    },
    {
      id: 2,
      name: "José Miguel Serrano",
      location: "Valencia",
      rating: 5,
      image: client8Image,
      comment: "El catálogo es gigante y el pago fue facilísimo. Me atendieron súper rápido.",
      favorite: "Bubble Tea Instantáneo",
      date: "Hace 1 semana"
    },
    {
      id: 3,
      name: "Gabriela Suárez",
      location: "Maracaibo",
      rating: 5,
      image: client9Image,
      comment: "Amo los dulces japoneses y aquí siempre consigo ediciones limitadas.",
      favorite: "Kit Kat Matcha",
      date: "Hace 9 días"
    },
    {
      id: 4,
      name: "Luisana Quevedo",
      location: "Barquisimeto",
      rating: 5,
      image: client10Image,
      comment: "Hice un pedido grande para mi familia y llegó todo antes de lo previsto.",
      favorite: "Ramune Melón",
      date: "Hace 2 semanas"
    },
    {
      id: 5,
      name: "Orlando Pacheco",
      location: "Maracay",
      rating: 5,
      image: client11Image,
      comment: "Los combos para ramen están brutales. Todo viene listo para cocinar.",
      favorite: "Ramen Tonkotsu",
      date: "Hace 16 días"
    },
    {
      id: 6,
      name: "Claudia Araujo",
      location: "Puerto La Cruz",
      rating: 5,
      image: client12Image,
      comment: "Me encantó la presentación. Se nota el cariño en cada entrega.",
      favorite: "Mochi de Mango",
      date: "Hace 3 semanas"
    },
    {
      id: 7,
      name: "Ricardo Bolívar",
      location: "Mérida",
      rating: 5,
      image: client13Image,
      comment: "Los tés fríos llegaron fríos gracias al empaque. Servicio impecable.",
      favorite: "Té de Jazmín",
      date: "Hace 1 mes"
    },
    {
      id: 8,
      name: "Isabel Méndez",
      location: "San Cristóbal",
      rating: 5,
      image: client14Image,
      comment: "Compré con mis amigas y todas quedamos encantadas con los sabores.",
      favorite: "Galletas Hello Panda",
      date: "Hace 5 semanas"
    },
    {
      id: 9,
      name: "Eduardo Bastidas",
      location: "Barcelona",
      rating: 5,
      image: client15Image,
      comment: "Primera vez que compro algo asiático en Venezuela y fue un éxito.",
      favorite: "Soba Picante",
      date: "Hace 6 semanas"
    },
    {
      id: 10,
      name: "Dayana Landaeta",
      location: "Puerto Ordaz",
      rating: 5,
      image: client16Image,
      comment: "Los snacks llegaron intactos a pesar del calor. Excelente embalaje.",
      favorite: "Galletas Pepero",
      date: "Hace 2 meses"
    },
    {
      id: 11,
      name: "Manuel Figueroa",
      location: "Porlamar",
      rating: 5,
      image: client17Image,
      comment: "Aproveché una promoción y quedé sorprendido con la calidad.",
      favorite: "Salsa Teriyaki",
      date: "Hace 2 meses"
    },
    {
      id: 12,
      name: "Mariana Llovera",
      location: "La Guaira",
      rating: 5,
      image: client18Image,
      comment: "Perfecto para armar cajas de regalo. Mis amigas se volvieron fans.",
      favorite: "Pocky Fresa",
      date: "Hace 9 semanas"
    },
    {
      id: 13,
      name: "Rafael Lugo",
      location: "Barinas",
      rating: 5,
      image: client19Image,
      comment: "Los productos premium valen cada bolívar. Se siente la autenticidad.",
      favorite: "Matcha Latte",
      date: "Hace 3 meses"
    },
    {
      id: 14,
      name: "Andreína Pineda",
      location: "Cumaná",
      rating: 5,
      image: client20Image,
      comment: "Siempre hay algo nuevo. Amo explorar la sección de dulces raros.",
      favorite: "Chocolate Meiji",
      date: "Hace 3 meses"
    },
    {
      id: 15,
      name: "Jorge Linares",
      location: "Coro",
      rating: 5,
      image: client21Image,
      comment: "Los pedidos grupales llegan separados por persona. Detalle top.",
      favorite: "Mix de Ramune",
      date: "Hace 4 meses"
    },
    {
      id: 16,
      name: "Yulimar Reyes",
      location: "Punto Fijo",
      rating: 5,
      image: client22Image,
      comment: "Calidad + buen precio. Ya tengo mi snack favorito para las series.",
      favorite: "Choco Pie",
      date: "Hace 4 meses"
    },
    {
      id: 17,
      name: "Armando Cedeño",
      location: "Guarenas",
      rating: 5,
      image: client23Image,
      comment: "El equipo responde rápido por WhatsApp y resuelven cualquier duda.",
      favorite: "Salsa Gochujang",
      date: "Hace 5 meses"
    },
    {
      id: 18,
      name: "Marielba Prieto",
      location: "Los Teques",
      rating: 5,
      image: client24Image,
      comment: "Probé las bebidas con tapioca y ahora no puedo vivir sin ellas.",
      favorite: "Bubble Tea Brown Sugar",
      date: "Hace 6 meses"
    },
    {
      id: 19,
      name: "Fernando Paredes",
      location: "Ciudad Ojeda",
      rating: 5,
      image: client25Image,
      comment: "Los combos temáticos son ideales para reuniones con amigos.",
      favorite: "Combo Street Food",
      date: "Hace 6 meses"
    },
    {
      id: 20,
      name: "Daniela Salazar",
      location: "Acarigua",
      rating: 5,
      image: client26Image,
      comment: "Recibí mi pedido en perfecto estado en plena época de lluvias.",
      favorite: "Sopa Tom Yum",
      date: "Hace 7 meses"
    },
    {
      id: 21,
      name: "Héctor Briceño",
      location: "Maturín",
      rating: 5,
      image: client27Image,
      comment: "Sus recomendaciones en Instagram siempre dan en el clavo.",
      favorite: "Snacks Coreanos",
      date: "Hace 7 meses"
    },
    {
      id: 22,
      name: "Paola Zambrano",
      location: "Cabimas",
      rating: 5,
      image: client28Image,
      comment: "Mi hijo se volvió fan de los helados mochi. Ya pedimos la segunda caja.",
      favorite: "Mochi Tricolor",
      date: "Hace 8 meses"
    },
    {
      id: 23,
      name: "Gerardo Infante",
      location: "San Felipe",
      rating: 5,
      image: client29Image,
      comment: "Excelente atención posventa. Me avisaron apenas llegó un producto agotado.",
      favorite: "Saké Espumoso",
      date: "Hace 8 meses"
    },
    {
      id: 24,
      name: "Verónica Bello",
      location: "Carúpano",
      rating: 5,
      image: client30Image,
      comment: "Las cajitas sorpresa son un regalo perfecto. Las personalizan con cariño.",
      favorite: "Caja Mystery",
      date: "Hace 9 meses"
    },
    {
      id: 25,
      name: "Ignacio Anzola",
      location: "El Tigre",
      rating: 5,
      image: client31Image,
      comment: "Siempre tienen stock de bebidas energéticas que no consigo en otro lado.",
      favorite: "Bebida Pocari Sweat",
      date: "Hace 9 meses"
    },
    {
      id: 26,
      name: "Roxana Millán",
      location: "Ciudad Guayana",
      rating: 5,
      image: client32Image,
      comment: "Me ayudaron a armar un pedido empresarial y quedó espectacular.",
      favorite: "Kit Degustación",
      date: "Hace 10 meses"
    }
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [direction, setDirection] = useState(1);
  const [loaded, setLoaded] = useState(() => Array(testimonials.length).fill(false));
  const imageRefs = useRef([]);

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index) => {
    if (index === currentTestimonial) return;
    setDirection(index > currentTestimonial ? 1 : -1);
    setCurrentTestimonial(index);
  };

  const activeTestimonial = testimonials[currentTestimonial];

  // Preload all testimonial images to avoid layout jumps and allow skeletons while loading
  useEffect(() => {
    testimonials.forEach((t, idx) => {
      const img = new Image();
      img.src = t.image;
      img.onload = () => {
        setLoaded(prev => {
          if (prev[idx]) return prev; // already loaded
          const next = [...prev];
          next[idx] = true;
            return next;
        });
      };
    });
  }, []); // preload once

  return (
  <section className="overflow-hidden relative px-4 py-14 md:py-16 lg:py-20" id="clientes">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-purple-900/10 to-black/90" />
      
      {/* Floating elements */}
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, -5, 0]
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity,
          ease: "easeInOut" 
        }}
        className="absolute left-4 top-16 text-3xl opacity-10 md:left-10 md:top-20 md:text-6xl"
      >
        ⭐
      </motion.div>
      
      <motion.div
        animate={{ 
          y: [0, 20, 0],
          rotate: [0, -5, 5, 0]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          ease: "easeInOut" 
        }}
        className="absolute right-4 bottom-16 text-3xl opacity-10 md:right-10 md:bottom-20 md:text-6xl"
      >
        💖
      </motion.div>

  <div className="relative z-10 mx-auto space-y-10 w-full max-w-7xl md:space-y-12 lg:space-y-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-5 text-center"
        >
          <motion.h2
            whileHover={{ scale: 1.05 }}
            className="inline-block text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 sm:text-4xl md:text-5xl lg:text-6xl"
          >
            Clientes Felices
          </motion.h2>
          <p className="mx-auto max-w-2xl text-base text-white/80 md:text-lg lg:text-xl">
            Cientos de clientes satisfechos en toda Venezuela confían en nosotros
          </p>

          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, type: "spring" }}
            className="flex flex-wrap items-center justify-center gap-2.5"
          >
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 md:w-6 md:h-6 fill-yellow-400" />
              ))}
            </div>
            <span className="text-lg font-bold text-white md:text-xl">4.9</span>
            <span className="text-sm text-white/60 md:text-base">(247 reseñas verificadas)</span>
          </motion.div>
        </motion.div>

        {/* Testimonials Carousel */}
        <div
          className="relative"
        >
          <AnimatePresence mode="wait" custom={direction} initial={false}>
            <motion.div
              key={currentTestimonial}
              custom={direction}
              variants={testimonialVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.55, ease: "easeInOut" }}
              className="grid gap-8 md:grid-cols-2 md:gap-10 lg:items-center min-h-[520px] md:min-h-[560px] lg:min-h-[600px]"
            >
              {/* Image Side */}
              <div className="flex relative justify-center items-center group">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-600 rounded-3xl opacity-30 blur-2xl transition-opacity duration-300 group-hover:opacity-50" />
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="overflow-hidden relative mx-auto w-full max-w-sm rounded-3xl border-2 aspect-square md:border-4 border-white/10"
                >
                  {!loaded[currentTestimonial] && (
                    <div className="flex absolute inset-0 flex-col animate-pulse">
                      <div className="flex-1 bg-gradient-to-br from-white/10 via-white/5 to-white/10" />
                      <div className="p-4 space-y-2 backdrop-blur bg-black/40">
                        <div className="w-2/3 h-4 rounded bg-white/20" />
                        <div className="w-1/2 h-3 rounded bg-white/10" />
                      </div>
                    </div>
                  )}
                  <motion.img
                    key={activeTestimonial.image}
                    ref={el => (imageRefs.current[currentTestimonial] = el)}
                    src={activeTestimonial.image}
                    alt={activeTestimonial.name}
                    onLoad={() => setLoaded(prev => {
                      if (prev[currentTestimonial]) return prev;
                      const next = [...prev];
                      next[currentTestimonial] = true;
                      return next;
                    })}
                    initial={{ scale: 0.98, opacity: 0 }}
                    animate={{ scale: loaded[currentTestimonial] ? 1 : 0.98, opacity: loaded[currentTestimonial] ? 1 : 0 }}
                    transition={{ duration: 0.55, ease: "easeOut" }}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t via-transparent to-transparent from-black/60" />
                  {loaded[currentTestimonial] && (
                    <motion.div
                      className="absolute right-0 bottom-0 left-0 p-4 md:p-6"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.25 }}
                    >
                      <div className="flex gap-3 items-center">
                        <div className="flex justify-center items-center w-10 h-10 rounded-full backdrop-blur-md bg-white/20 md:w-12 md:h-12">
                          <Quote className="w-5 h-5 text-white md:w-6 md:h-6" />
                        </div>
                        <div>
                          <h3 className="text-base font-bold text-white md:text-lg">{activeTestimonial.name}</h3>
                          <p className="text-xs text-white/80 md:text-sm">{activeTestimonial.location}</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              </div>

              {/* Content Side */}
              <div className="flex flex-col gap-5 px-2 md:px-0">
                <motion.div
                  className="flex gap-1"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3, type: "spring" }}
                >
                  {[...Array(activeTestimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, rotate: -180 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      transition={{ delay: 0.1 * i }}
                    >
                      <Star className="w-6 h-6 text-yellow-400 md:w-8 md:h-8 fill-yellow-400" />
                    </motion.div>
                  ))}
                </motion.div>

                {loaded[currentTestimonial] ? (
                  <motion.blockquote
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="relative"
                  >
                    <Quote className="absolute -top-2 -left-2 w-6 h-6 text-purple-500/20 md:w-8 md:h-8 md:-top-4 md:-left-4" />
                    <p className="pl-6 text-base font-light leading-relaxed text-white md:text-xl lg:text-2xl md:pl-8">
                      "{activeTestimonial.comment}"
                    </p>
                  </motion.blockquote>
                ) : (
                  <div className="space-y-3">
                    <div className="w-11/12 h-6 rounded animate-pulse bg-white/10" />
                    <div className="w-10/12 h-6 rounded animate-pulse bg-white/10" />
                    <div className="w-9/12 h-6 rounded animate-pulse bg-white/10" />
                  </div>
                )}

                {loaded[currentTestimonial] ? (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="p-3 bg-gradient-to-r rounded-xl border backdrop-blur-sm from-purple-500/10 to-pink-500/10 md:rounded-2xl md:p-4 border-white/10"
                  >
                    <div className="flex gap-3 items-center">
                      <div className="p-2 rounded-full bg-white/10">
                        <Heart className="w-4 h-4 text-pink-400 md:w-5 md:h-5" />
                      </div>
                      <div>
                        <p className="text-xs text-white/60 md:text-sm">Producto Favorito</p>
                        <p className="text-sm font-semibold text-white md:text-base">{activeTestimonial.favorite}</p>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <div className="h-20 rounded-xl animate-pulse bg-white/10" />
                )}

                {loaded[currentTestimonial] ? (
                  <motion.p
                    className="text-xs text-white/40 md:text-sm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                  >
                    {activeTestimonial.date}
                  </motion.p>
                ) : (
                  <div className="w-20 h-4 rounded animate-pulse bg-white/10" />
                )}
              </div>
            </motion.div>
          </AnimatePresence>
          {/* Navigation repositioned for consistent responsive layout */}
          <div className="mt-6 lg:mt-8">
            <div className="flex relative justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={prevTestimonial}
                className="flex absolute left-0 justify-center items-center w-10 h-10 rounded-full border backdrop-blur-md transition-colors md:left-4 bg-white/10 border-white/20 md:w-12 md:h-12 hover:bg-white/20"
                aria-label="Anterior testimonio"
              >
                <ChevronLeft className="w-4 h-4 text-white md:w-5 md:h-5" />
              </motion.button>
              <div className="flex gap-2 items-center px-14 md:px-24">
                {testimonials.map((_, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.85 }}
                    onClick={() => goToTestimonial(index)}
                    className={`h-2 transition-all duration-300 rounded-full ${
                      index === currentTestimonial ? 'w-7 md:w-8 bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500' : 'w-2 bg-white/30 hover:bg-white/50'
                    }`}
                    aria-label={`Ver testimonio ${index + 1}`}
                  />
                ))}
              </div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={nextTestimonial}
                className="flex absolute right-0 justify-center items-center w-10 h-10 rounded-full border backdrop-blur-md transition-colors md:right-4 bg-white/10 border-white/20 md:w-12 md:h-12 hover:bg-white/20"
                aria-label="Siguiente testimonio"
              >
                <ChevronRight className="w-4 h-4 text-white md:w-5 md:h-5" />
              </motion.button>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-2 gap-2.5 md:grid-cols-4 md:gap-3 lg:gap-4"
        >
          {[
            { icon: "🚚", label: "Envío Rápido", value: "24-48h" },
            { icon: "✨", label: "Productos", value: "100% Auténticos" },
            { icon: "🎉", label: "Clientes Felices", value: "+200" },
            { icon: "⭐", label: "Calificación", value: "4.9/5.0" }
          ].map((badge, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              className="p-3 text-center rounded-xl border backdrop-blur-sm transition-all duration-300 bg-white/5 md:rounded-2xl md:p-4 border-white/10 hover:bg-white/10"
            >
              <div className="mb-2 text-2xl md:text-3xl">{badge.icon}</div>
              <p className="text-xs text-white/60 md:text-sm">{badge.label}</p>
              <p className="text-sm font-bold text-white md:text-base">{badge.value}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ClientesSection;
