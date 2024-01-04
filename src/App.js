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
      <div className="h-screen inset-0 flex justify-center items-center bg-black overflow-hidden">
        {/* Centered Top */}
        <div
          className="absolute top-8 md:top-10 text-white z-20 font-bold tracking-tight font-mont"
          data-aos="fade-down"
          data-aos-delay="1500"
        >
          @longyu.shop
        </div>

        {/* Centered Left */}
        <div className="absolute flex flex-row z-20 text-xs md:text-md xl:text-lg items-center justify-between w-screen space-x-2 font-mont">
          <div className="flex items-center justify-center w-10 h-screen z-20">
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
          <div className="flex items-center justify-center w-10 h-screen z-20">
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
          className="absolute text-white items-center justify-center space-y-14 z-30"
          data-aos="fade-up"
          data-aos-delay="3000"
        >
          <img className="h-72" src="logo.png" />
        </div>

        <div
          className="absolute justify-center bottom-16 md:bottom-40 flex-col text-white text-sm md:text-xl space-y-3 md:space-y-6 z-30"
          data-aos="zoom-in"
          data-aos-delay="3000"
        >
          <div className="flex items-center hover:text-green-400 justify-center cursor-pointer transition-all ease-in-out duration-75">
            <a
              className="button gradient-border pl-2 pr-2"
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
            <a
              href="https://api.whatsapp.com/send?phone=584141471037"
              className="bg-white hover:bg-gradient-to-r hover:from-green-400 hover:to-green-300 ease-in-out hover:shadow-lg hover:shadow-gray-500/50 shadow transition-all duration-200 pl-1 pr-2 pt-1 pb-1 rounded-full text-gray-600 hover:text-black"
            >
              <i className="icon-whatsapp" />
              WhatsApp
            </a>{" "}
            <a
              title="Instagram"
              href="https://www.instagram.com/longyu.shop/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-gradient-to-r hover:from-pink-400 hover:to-pink-300 ease-in-out hover:shadow-lg hover:shadow-gray-500/50 shadow transition-all duration-200 pl-1 pr-2 pt-1 pb-1 rounded-full text-gray-600 hover:text-black"
              aria-label="Instagram"
            >
              <i className="text-md icon-instagram" />
              Instagram
            </a>
          </div>
        </div>
        <span className="bg-black opacity-80 h-screen w-screen z-10"></span>
      </div>

      <div className="z-10">
        {/* Slider */}
        <img
          data-aos="fade-in"
          data-aos-delay="700"
          src="1.jpg"
          alt="Background 1"
          className={`absolute bg-no-repeat bg-cover bg-center object-cover md:object-center inset-0 w-full h-screen md:h-full transition-opacity duration-1000 ${
            currentImage === 0 ? "opacity-100" : "opacity-0"
          }`}
        />
        <img
          src="2.jpg"
          alt="Background 2"
          className={`absolute bg-no-repeat bg-cover bg-center object-cover md:object-center inset-0 w-full h-screen md:h-full transition-opacity duration-1000 ${
            currentImage === 1 ? "opacity-100" : "opacity-0"
          }`}
        />
        <img
          src="3.jpg"
          alt="Background 3"
          className={`absolute bg-no-repeat bg-cover bg-center object-cover md:object-center inset-0 w-full h-screen md:h-full transition-opacity duration-1000 ${
            currentImage === 2 ? "opacity-100" : "opacity-0"
          }`}
        />
        <img
          src="4.jpg"
          alt="Background 4"
          className={`absolute bg-no-repeat bg-cover bg-center object-cover md:object-center inset-0 w-full h-screen md:h-full transition-opacity duration-1000 ${
            currentImage === 3 ? "opacity-100" : "opacity-0"
          }`}
        />
        <img
          src="5.jpg"
          alt="Background 4"
          className={`absolute bg-no-repeat bg-cover bg-center object-cover md:object-center inset-0 w-full h-screen md:h-full transition-opacity duration-1000 ${
            currentImage === 4 ? "opacity-100" : "opacity-0"
          }`}
        />
        <img
          src="6.jpg"
          alt="Background 4"
          className={`absolute bg-no-repeat bg-cover bg-center object-cover md:object-center inset-0 w-full h-screen md:h-full transition-opacity duration-1000 ${
            currentImage === 5 ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>
    </>
  );
};

export default App;
