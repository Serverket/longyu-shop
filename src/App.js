import React, { useEffect, useState } from "react";
import "aos/dist/aos.css";
import "./styles/tailwind.css";

import AOS from "aos";

const App = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % 6);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    AOS.init({
      once: true,
      easing: "ease-out-cubic",
    });
  });

  return (
    <>
      <div className="inset-0 flex items-center justify-center h-screen overflow-hidden bg-black">
        {/* Centered Top */}


        {/* Centered Left */}
        <div className="absolute z-20 flex flex-row items-center justify-between w-screen space-x-2 text-xs md:text-md xl:text-lg font-mont">
          <div className="z-20 flex items-center justify-center w-10 h-screen">
            <ul className="text-white transform -rotate-90">
              <li data-aos="fade-left" data-aos-delay="2000">
                SNACKS
                <span className="ml-2">|</span>
                <span className="ml-2">BEBIDAS</span>
                <span className="ml-2">|</span>
                <span className="ml-2">POSTRES</span>
                <span className="ml-2">|</span>
                <span className="ml-2">SOPAS</span>
                <span className="ml-2">|</span>
                <span className="ml-2">INSTANTÁNEAS</span>
              </li>
            </ul>
          </div>

          {/* Centered Right */}
          <div className="z-20 flex items-center justify-center w-10 h-screen">
            <ul className="text-white transform rotate-90">
              <li data-aos="fade-left" data-aos-delay="2000">
                PRODUCTOS
                <span className="ml-2">DE</span>
                <span className="ml-2">CHINA</span>
                <span className="ml-2">COREA</span>
                <span className="ml-2">JAPÓN</span>
                <span className="ml-2">TAILANDIA</span>
                <span className="ml-2">INDONESIA</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Centered Random Text */}
        <div
          className="absolute z-30 flex flex-col items-center justify-between w-full h-full text-white"
          data-aos="zoom-in"
          data-aos-delay="3000"
        >
          {/* Top Text */}
          <div className="mt-10 text-2xl">
            <a
              href="https://www.instagram.com/longyu.shop/"
              target="_blank"
              rel="noopener noreferrer"
              className="z-20 font-bold tracking-tight text-white transition-all duration-200 ease-in-out cursor-pointer top-8 md:top-10 font-mont hover:underline"
              data-aos="fade-down"
              data-aos-delay="1500"
            >
              @longyu.shop
            </a>
          </div>

          {/* Centered Logo */}
          <div className="flex items-center justify-center">
            <img className="h-28 sm:h-32 md:h-48 lg:h-72 xl:h-96 reflection" src="logo.png" />
          </div>

          {/* Bottom Buttons */}
          <div className="mb-10 space-y-3 text-sm sm:bottom-16 md:bottom-24 md:text-xl md:space-y-6">
            <div className="flex items-center justify-center transition-all duration-75 ease-in-out cursor-pointer hover:text-green-400">
              <a
                className="pl-2 pr-2 button gradient-border"
                href="https://wa.me/c/584141471037"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>
                  <i class="icon-search-7 text-md"></i>Buscar Productos
                </span>{" "}
                <span>
                  <i class="icon-book-open"></i>Ver Catálogo
                </span>
              </a>
            </div>
            <div className="flex items-center justify-center space-x-1 md:space-x-3">


              <a href="https://api.whatsapp.com/send?phone=584141471037"
                target="_blank"
                title="WhatsApp"
                rel="noopener noreferrer"
                class="relative inline-flex items-center justify-start inline-block px-3 py-2 overflow-hidden font-bold rounded-full group">
                <span class="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
                <span class="absolute top-0 left-0 w-48 h-48 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-gradient-to-r from-green-400 to-green-300 opacity-100 group-hover:-translate-x-8"></span>
                <span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900"><i className="icon-whatsapp" />WhatsApp</span>
                <span class="absolute inset-0 border-2 border-white hover:border-green-400 rounded-full"></span>
              </a>

              <a href="https://www.instagram.com/longyu.shop/"
                target="_blank"
                title="Instagram"
                rel="noopener noreferrer"
                class="relative inline-flex items-center justify-start inline-block px-3 py-2 overflow-hidden font-bold rounded-full group">
                <span class="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
                <span class="absolute top-0 left-0 w-48 h-48 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-gradient-to-r from-pink-400 to-pink-300 opacity-100 group-hover:-translate-x-8"></span>
                <span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900"><i className="icon-instagram" />Instagram</span>
                <span class="absolute inset-0 border-2 border-white hover:border-pink-400 rounded-full"></span>
              </a>

            </div>
          </div>
        </div>


        <span className="z-10 w-screen h-screen bg-black opacity-80"></span>
      </div>

      <div className="z-10">
        {/* Slider */}
        <img
          data-aos="fade-in"
          data-aos-delay="700"
          src="1.jpg"
          alt="Background 1"
          className={`absolute bg-no-repeat bg-cover bg-center object-cover md:object-center inset-0 w-full h-screen md:h-full transition-opacity duration-1000 ${currentImage === 0 ? "opacity-100" : "opacity-0"
            }`}
        />
        <img
          src="2.jpg"
          alt="Background 2"
          className={`absolute bg-no-repeat bg-cover bg-center object-cover md:object-center inset-0 w-full h-screen md:h-full transition-opacity duration-1000 ${currentImage === 1 ? "opacity-100" : "opacity-0"
            }`}
        />
        <img
          src="3.jpg"
          alt="Background 3"
          className={`absolute bg-no-repeat bg-cover bg-center object-cover md:object-center inset-0 w-full h-screen md:h-full transition-opacity duration-1000 ${currentImage === 2 ? "opacity-100" : "opacity-0"
            }`}
        />
        <img
          src="4.jpg"
          alt="Background 4"
          className={`absolute bg-no-repeat bg-cover bg-center object-cover md:object-center inset-0 w-full h-screen md:h-full transition-opacity duration-1000 ${currentImage === 3 ? "opacity-100" : "opacity-0"
            }`}
        />
        <img
          src="5.jpg"
          alt="Background 4"
          className={`absolute bg-no-repeat bg-cover bg-center object-cover md:object-center inset-0 w-full h-screen md:h-full transition-opacity duration-1000 ${currentImage === 4 ? "opacity-100" : "opacity-0"
            }`}
        />
        <img
          src="6.jpg"
          alt="Background 4"
          className={`absolute bg-no-repeat bg-cover bg-center object-cover md:object-center inset-0 w-full h-screen md:h-full transition-opacity duration-1000 ${currentImage === 5 ? "opacity-100" : "opacity-0"
            }`}
        />
      </div>
    </>
  );
};

export default App;
