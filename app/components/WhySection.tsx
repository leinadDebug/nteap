"use client";
import React from "react";
import { FaSearch, FaBook, FaTruck, FaBoxes } from "react-icons/fa";

export default function WhyNTEAP() {
  const features = [
    {
      icon: <FaBoxes className="text-5xl mx-auto mb-4 text-[#B5F5CC]" />,
      title: "Unlimited Access",
      desc: "Browse and read from a massive digital library with books covering all academic fields.",
    },
    {
      icon: <FaSearch className="text-5xl mx-auto mb-4 text-[#B5F5CC]" />,
      title: "Smart Search",
      desc: "Find books with a fast and intuitive search feature tailored for academic research.",
    },
    {
      icon: <FaBook className="text-5xl mx-auto mb-4 text-[#B5F5CC]" />,
      title: "Expert-Curated Collections",
      desc: "Explore book lists curated by academic professionals and top universities to guide your studies.",
    },
    {
      icon: <FaTruck className="text-5xl mx-auto mb-4 text-[#B5F5CC]" />,
      title: "Hassle-Free Purchase & Delivery",
      desc: "Get printed copies of your favorite books delivered straight to your doorstep!",
    },
  ];

  return (
    <section className="relative overflow-hidden py-20 px-8 bg-gradient-to-t from-green-800 via-green-700 to-green-600">
      {/* Background Overlay */}
      <div className="absolute inset-0 opacity-20 bg-[url('/pattern.svg')] bg-cover"></div>

      {/* Heading */}
      <div className="relative text-center z-10">
        <h2 className="text-white text-5xl font-extrabold tracking-wide">
          Why <span className="text-[#B5F5CC]">NTEAP</span>
        </h2>
        <div className="h-1 bg-[#B5F5CC] w-20 mx-auto mt-4 rounded-full"></div>
      </div>

      {/* Features Grid */}
      <div className="relative mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto z-10">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-green-700 bg-opacity-80 rounded-2xl p-8 text-center text-white shadow-xl shadow-green-900/50 transform transition-all duration-300 hover:scale-105 hover:bg-green-600"
          >
            {feature.icon}
            <h3 className="font-bold text-xl mb-3">{feature.title}</h3>
            <p className="text-sm text-gray-100 leading-relaxed">
              {feature.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
