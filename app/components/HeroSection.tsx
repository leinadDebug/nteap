import React from "react";

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center bg-white overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url('/bg-image.png'), url('/bg-image1.png')`,
          backgroundSize: "cover, cover",
          backgroundPosition: "center, center",
          backgroundRepeat: "no-repeat, no-repeat",
        }}
      ></div>

      {/* Text Content */}
      <div className="flex flex-col items-center lg:items-start lg:absolute lg:top-1/3 lg:right-40 px-4 text-center lg:text-left">
        <h1
          className="font-extrabold font-raleway leading-none text-[48px] sm:text-[60px] md:text-[72px] lg:text-[90px]"
          style={{ color: "#28A745" }}
        >
          NTEAP
        </h1>
        <p
          className="mt-2 sm:mt-4 text-lg sm:text-xl md:text-2xl font-bold text-gray-900 leading-tight font-rajdhani"
          style={{ color: "#28A745" }}
        >
          All-in-one Hub <br className="hidden sm:block" /> for every Academic
          Materials
        </p>
      </div>

      {/* Scrolling Recent Uploads Section */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 w-[90%] sm:w-[80%] rounded-full bg-green-600 px-4 py-4 flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-4">
        <button className="bg-green-800 text-white px-5 py-2 rounded-full font-semibold text-xs sm:text-sm">
          Recent Uploads
        </button>

        {/* Scrolling Text */}
        <div className="overflow-hidden flex-1 w-full">
          <div className="scrolling-text whitespace-nowrap text-white flex text-xs sm:text-sm md:text-base">
            <span className="inline-block mx-4 font-bold text-black">
              Adejeyi Nnamdi
            </span>
            <span>- Essential of Biology</span>

            <span className="inline-block mx-4 font-bold text-black">
              Adejeyi Nnamdi
            </span>
            <span>- Essential of Biology</span>

            <span className="inline-block mx-4 font-bold text-black">
              Adejeyi Nnamdi
            </span>
            <span>- Essential of Biology</span>
          </div>
        </div>
      </div>
    </section>
  );
}
