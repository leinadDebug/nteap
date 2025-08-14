"use client";

import { useEffect, useState } from "react";
import { FiHome, FiMenu, FiX } from "react-icons/fi";
import classNames from "classnames";
import Link from "next/link";

const subjectLinks = [
  "Arts & Humanities",
  "Business Management",
  "Social Sciences",
  "Science & Technology",
  "Engineering",
  "Medical & Health Science",
  "Education & Teaching",
  "Agriculture Studies",
  "Architectural Planning",
  "Linguistics",
];

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (
        !target.closest(".mobile-menu") &&
        !target.closest(".hamburger-button")
      ) {
        setShowMobileMenu(false);
      }
    };

    if (showMobileMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showMobileMenu]);

  return (
    <header className="w-full">
      {/* Green Bar with Search */}
      <div
        className={classNames(
          "w-full bg-green-600 transition-all duration-300 overflow-hidden",
          {
            "h-0 opacity-0": isSticky,
            "h-16 md:h-20 opacity-100": !isSticky,
          }
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between h-full px-4">
          <input
            type="text"
            placeholder="What book are you looking for?"
            className="w-2/3 md:w-1/2 px-4 py-2 rounded-md bg-green-500 placeholder-white text-white focus:outline-none text-sm md:text-base"
          />
          <div className="text-white text-sm space-x-2 hidden md:block">
            <a href="/register" className="hover:underline">
              Create an account
            </a>
            <span>|</span>
            <a href="/login" className="hover:underline">
              Log in
            </a>
          </div>
        </div>
      </div>

      {/* Sticky White Nav */}
      <div
        className={classNames(
          "w-full bg-white z-50 sticky top-0 transition-all duration-300 shadow h-16 md:h-24 pt-2 md:pt-8",
          {
            "shadow-md": isSticky,
          }
        )}
      >
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between relative">
          <div className="text-green-600 font-bold text-lg md:text-xl cursor-pointer">
            <Link href={"/"}>NTEAP</Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 text-sm font-semibold text-gray-800 relative">
            {/* Subjects Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
            >
              <button className="flex items-center space-x-1">
                <FiHome className="text-lg" />
                <span>Subjects ▾</span>
              </button>
              {showDropdown && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-md py-2 z-50">
                  {subjectLinks.map((subject, idx) => (
                    <a
                      key={idx}
                      href="/browseBooks"
                      className="block px-4 py-2 hover:bg-gray-100 text-sm text-gray-800"
                    >
                      {subject}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a href="/browseBooks" className="text-green-600">
              Browse Books
            </a>
            <a href="/getPublished">Get Published</a>
            <a href="#">Plans</a>
            <a href="/support">Support</a>
          </nav>

          {/* Mobile Hamburger Menu */}
          <button
            className="md:hidden hamburger-button p-2"
            onClick={() => setShowMobileMenu(!showMobileMenu)}
            aria-label="Toggle mobile menu"
          >
            {showMobileMenu ? (
              <FiX className="text-2xl text-gray-800" />
            ) : (
              <FiMenu className="text-2xl text-gray-800" />
            )}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {showMobileMenu && (
          <div className="mobile-menu md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t z-50">
            <div className="px-4 py-4 space-y-4">
              {/* Mobile Auth Links */}
              <div className="flex space-x-4 text-sm border-b pb-4">
                <a href="/register" className="text-green-600 hover:underline">
                  Create an account
                </a>
                <a href="/login" className="text-green-600 hover:underline">
                  Log in
                </a>
              </div>

              {/* Mobile Navigation Links */}
              <nav className="space-y-3">
                {/* Mobile Subjects Dropdown */}
                <div className="relative">
                  <button
                    className="flex items-center justify-between w-full text-left py-2 text-gray-800 font-semibold"
                    onClick={() => setShowDropdown(!showDropdown)}
                  >
                    <div className="flex items-center space-x-2">
                      <FiHome className="text-lg" />
                      <span>Subjects</span>
                    </div>
                    <span
                      className={`transition-transform ${
                        showDropdown ? "rotate-180" : ""
                      }`}
                    >
                      ▾
                    </span>
                  </button>
                  {showDropdown && (
                    <div className="mt-2 ml-6 space-y-2 border-l-2 border-gray-200 pl-4">
                      {subjectLinks.map((subject, idx) => (
                        <a
                          key={idx}
                          href="/browseBooks"
                          className="block py-1 text-sm text-gray-600 hover:text-green-600"
                          onClick={() => setShowMobileMenu(false)}
                        >
                          {subject}
                        </a>
                      ))}
                    </div>
                  )}
                </div>

                <a
                  href="/browseBooks"
                  className="block py-2 text-green-600 font-semibold"
                  onClick={() => setShowMobileMenu(false)}
                >
                  Browse Books
                </a>
                <a
                  href="/getPublished"
                  className="block py-2 text-gray-800 font-semibold"
                  onClick={() => setShowMobileMenu(false)}
                >
                  Get Published
                </a>
                <a
                  href="#"
                  className="block py-2 text-gray-800 font-semibold"
                  onClick={() => setShowMobileMenu(false)}
                >
                  Plans
                </a>
                <a
                  href="/support"
                  className="block py-2 text-gray-800 font-semibold"
                  onClick={() => setShowMobileMenu(false)}
                >
                  Support
                </a>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
