import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white py-10 shadow-lg border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* Left Section - Copyright */}
        <div>
          <h3 className="text-2xl sm:text-3xl font-bold text-green-600">
            NTEAP
          </h3>
          <p className="mt-4 text-gray-600 text-sm sm:text-base leading-relaxed">
            Copyright © 2025 – All Rights Reserved
          </p>
        </div>

        {/* Middle Section - Quick Links */}
        <div>
          <h4 className="text-lg font-semibold text-gray-800 border-b-2 border-green-600 inline-block mb-4">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm sm:text-base">
            {[
              "Home",
              "About Us",
              "Browse Books",
              "Pricing",
              "Contact Us",
              "FAQs",
            ].map((link, idx) => (
              <li key={idx}>
                <a
                  href="#"
                  className="text-gray-700 hover:text-green-600 transition-colors"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Section - Stay Updated */}
        <div>
          <h4 className="text-lg font-semibold text-gray-800 border-b-2 border-green-600 inline-block mb-4">
            Stay Updated
          </h4>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
            Subscribe to our newsletter for exclusive offers and academic
            insights.
          </p>

          {/* Newsletter Form */}
          <div className="mt-4 flex flex-col sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-t-lg sm:rounded-l-lg sm:rounded-tr-none focus:outline-none focus:ring-2 focus:ring-green-600 text-sm sm:text-base"
            />
            <button className="bg-green-600 text-white px-4 py-2 rounded-b-lg sm:rounded-r-lg sm:rounded-bl-none hover:bg-green-700 transition-colors text-sm sm:text-base">
              SUBSCRIBE
            </button>
          </div>

          {/* Social Links */}
          <h4 className="text-lg font-semibold text-gray-800 mt-6 mb-4">
            Connect with Us
          </h4>
          <div className="flex space-x-4 text-green-600">
            <FaFacebook
              className="cursor-pointer hover:text-green-800 transition-colors"
              size={22}
            />
            <FaTwitter
              className="cursor-pointer hover:text-green-800 transition-colors"
              size={22}
            />
            <FaInstagram
              className="cursor-pointer hover:text-green-800 transition-colors"
              size={22}
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
