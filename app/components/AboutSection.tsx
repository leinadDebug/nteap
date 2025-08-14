"use client";

import React, { useEffect, useState } from "react";

type TabType = "discover" | "read" | "excel";

const contentData: Record<TabType, string> = {
  discover:
    "At NTEAP, we empower learners to explore a vast world of opportunities. Whether it’s your first step into a subject or a deep dive into specialized knowledge, you’ll discover pathways that transform curiosity into mastery.",
  read: "Reading opens doors to understanding the world from different perspectives. At NTEAP, we provide rich, engaging resources that make learning not just informative but deeply inspiring, fueling your mind with fresh insights every day.",
  excel:
    "Excellence is more than achievement—it’s a mindset. With the right tools, guidance, and motivation, NTEAP equips you to excel academically and beyond, helping you stand out in every pursuit you take on.",
};
export default function AboutSection() {
  const [activeTab, setActiveTab] = useState<TabType>("discover");
  const [displayText, setDisplayText] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    setDisplayText("");
    setCharIndex(0);
  }, [activeTab]);

  useEffect(() => {
    if (charIndex < contentData[activeTab].length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + contentData[activeTab][charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 30); // typing speed
      return () => clearTimeout(timeout);
    }
  }, [charIndex, activeTab]);
  return (
    <section className="w-full py-16 sm:py-20 bg-gradient-to-b from-white via-green-100 to-green-200 flex items-center justify-center">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-4 sm:px-8 lg:px-24">
        {/* Text Section */}
        <div className="flex flex-col justify-center items-start text-left">
          <h2
            className="text-lg sm:text-xl lg:text-2xl font-extrabold text-black font-raleway tracking-wide 
  opacity-0 translate-y-6 transition-all duration-700 ease-out pb-1 border-b-4 border-green-400 w-fit"
            style={{ animation: "fadeUp 0.6s ease forwards" }}
          >
            About
          </h2>

          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-green-600 mt-3 font-raleway 
  opacity-0 translate-y-6 transition-all duration-700 ease-out delay-100"
            style={{ animation: "fadeUp 0.8s ease forwards" }}
          >
            NTEAP
          </h1>

          {/* Button Group */}
          <div
            className="flex flex-col sm:flex-row sm:space-x-4 mt-8 space-y-3 sm:space-y-0 
  w-full sm:w-auto"
          >
            <button
              className="px-6 py-3 rounded-full font-bold font-raleway w-full sm:w-auto 
    bg-gradient-to-r from-green-200 to-green-400 text-green-900 shadow-md 
    hover:scale-105 hover:shadow-lg transform transition-all duration-300"
              style={{ animation: "fadeUp 1s ease forwards" }}
              key={"discover"}
              onClick={() => setActiveTab("discover")}
            >
              Discover
            </button>

            <button
              className="px-6 py-3 rounded-full font-bold font-raleway w-full sm:w-auto 
    bg-gradient-to-r from-green-400 to-green-600 text-white shadow-md 
    hover:scale-105 hover:shadow-lg transform transition-all duration-300"
              style={{ animation: "fadeUp 1s ease forwards" }}
              key={"read"}
              onClick={() => setActiveTab("read")}
            >
              Read
            </button>

            <button
              className="px-6 py-3 rounded-full font-bold font-raleway w-full sm:w-auto 
    bg-gradient-to-r from-green-600 to-green-800 text-white shadow-md 
    hover:scale-105 hover:shadow-lg transform transition-all duration-300"
              style={{ animation: "fadeUp 1s ease forwards" }}
              key={"excel"}
              onClick={() => setActiveTab("excel")}
            >
              Excel
            </button>
          </div>

          <p
            className="h-40 mt-6 text-gray-700 text-base sm:text-lg leading-relaxed font-rajdhani max-w-lg opacity-0 translate-y-6 transition-all duration-700 ease-out delay-300"
            style={{ animation: "fadeUp 1.6s ease forwards" }}
          >
            {displayText}
          </p>
        </div>

        {/* Image Section */}
        <div
          className="flex justify-center md:justify-end px-0 sm:px-4 opacity-0 translate-y-6 transition-all duration-700 ease-out delay-500"
          style={{ animation: "fadeUp 1.8s ease forwards" }}
        >
          <div className="w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden shadow-lg">
            <img
              src="/lab-image.jpg"
              alt="Library background"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Animation Keyframes */}
      <style>{`
        @keyframes fadeUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
