import Link from "next/link";
import React from "react";

export default function JoinCommunity() {
  return (
    <section className="relative py-16 px-6 bg-gradient-to-b from-green-50 to-white">
      {/* Card Container */}
      <div className="relative -mt-24 bg-white rounded-3xl shadow-xl max-w-5xl mx-auto overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Text Section */}
          <div className="p-8 md:p-12 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-green-900 leading-snug">
              Join the <span className="text-green-500">NTEAP</span> Community
              Today!
            </h2>
            <p className="mt-4 text-gray-600 text-base md:text-lg">
              Start your journey to academic excellence by signing up now. Get
              instant access to a world of knowledge at your fingertips!
            </p>
            <Link href={"/register"}>
              <button className="mt-6 px-6 py-3 bg-green-500 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-green-600 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                Sign up for free!
              </button>
            </Link>
          </div>

          {/* Image Section */}
          <div
            className="h-60 md:h-auto w-full"
            style={{
              backgroundImage: "url('/bg-image3.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </div>
      </div>
    </section>
  );
}
