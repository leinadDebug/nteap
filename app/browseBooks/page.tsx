"use client";

import Header from "../components/Header";
import BookSection from "../components/browseBooks/booksSection";
import Sidebar, { TemporaryDrawer } from "../components/browseBooks/sidebar";

export default function BrowseBooks() {
  return (
    <div className="flex flex-col bg-white min-h-screen">
      <Header />

      {/* Page Header */}
      <div className="w-full bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4 md:py-6">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-green-600 mb-1">
                Browse Books
              </h1>
              <p className="text-gray-500 text-sm">
                Search by subject or keyword
              </p>
            </div>

            {/* Mobile Filter Button */}
            <div className="lg:hidden">
              <TemporaryDrawer />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="flex-1">
        <div className="max-w-7xl mx-auto px-4 py-4 md:py-6">
          <div className="flex flex-col lg:flex-row gap-4 md:gap-6">
            {/* Desktop Sidebar */}
            <div className="hidden lg:block w-64 flex-shrink-0">
              <div className="sticky top-24">
                <Sidebar />
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 min-w-0">
              <BookSection />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
