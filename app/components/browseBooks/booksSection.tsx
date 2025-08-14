import { Fab, Pagination, Stack } from "@mui/material";
import { ArrowBigDownDashIcon } from "lucide-react";
import Image from "next/image";

import img1 from "../../img/9df11dce7cab505e6b81635e3f922853d4f04acc.jpg";
import img2 from "../../img/7bf3dbb08b6d6f22f57f5a11162e7eeacb48cc78.jpg";
import { useState } from "react";
import Link from "next/link";

const books = [
  {
    id: 1,
    title: "Researching the Unconscious",
    author: "Michael Rustin",
    cover: img1,
    type: "orange",
    price: 10500,
  },
  {
    id: 2,
    title: "Abstract Algebra: An Introduction",
    author: "Jonathan K. Hodge, Steven Schewenshengar",
    cover: img2,
    type: "blue",
    price: 10500,
  },
  {
    id: 3,
    title: "Researching the Unconscious",
    author: "Michael Rustin",
    cover: img1,
    type: "orange",
    price: 10500,
  },
  {
    id: 4,
    title: "Researching the Unconscious",
    author: "Michael Rustin",
    cover: img1,
    type: "orange",
    price: 10500,
  },
  {
    id: 5,
    title: "Researching the Unconscious",
    author: "Michael Rustin",
    cover: img1,
    type: "orange",
    price: 10500,
  },
  {
    id: 6,
    title: "Abstract Algebra: An Introduction",
    author: "Jonathan K. Hodge, Steven Schewenshengar",
    cover: img2,
    type: "blue",
    price: 10500,
  },
  {
    id: 7,
    title: "Researching the Unconscious",
    author: "Michael Rustin",
    cover: img1,
    type: "orange",
    price: 10500,
  },
  {
    id: 8,
    title: "Researching the Unconscious",
    author: "Michael Rustin",
    cover: img1,
    type: "orange",
    price: 10500,
  },
  {
    id: 9,
    title: "Researching the Unconscious",
    author: "Michael Rustin",
    cover: img1,
    type: "orange",
    price: 10500,
  },
  {
    id: 10,
    title: "Abstract Algebra: An Introduction",
    author: "Jonathan K. Hodge, Steven Schewenshengar",
    cover: img2,
    type: "blue",
    price: 10500,
  },
  {
    id: 11,
    title: "Researching the Unconscious",
    author: "Michael Rustin",
    cover: img1,
    type: "orange",
    price: 10500,
  },
  {
    id: 12,
    title: "Researching the Unconscious",
    author: "Michael Rustin",
    cover: img1,
    type: "orange",
    price: 10500,
  },
];

export default function BookSection() {
  const [currentPage, setCurrentPage] = useState(1);
  const [isSelected, setIsSelected] = useState(false);
  const [selectedIds, setSelectedIds] = useState<Set<string | number>>(
    new Set()
  );

  const toggleItem = (id: string | number) => {
    setSelectedIds((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      setIsSelected(newSet.size > 0);
      return newSet;
    });
  };

  return (
    <>
      {/* Main Content */}
      <div className="flex-1 bg-white border shadow rounded-md p-2 md:p-4">
        {/* Books Grid */}
        <div className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-4 lg:gap-6 mb-8 p-3 md:p-6 rounded-2xl">
            {books.map((book) => (
              <div
                key={book.id}
                className={`bg-white rounded-lg p-3 md:p-4 hover:shadow-md transition-shadow flex flex-col cursor-pointer ${
                  selectedIds.has(book.id)
                    ? "ring-2 md:ring-4 ring-green-500"
                    : ""
                }`}
                onClick={() => toggleItem(book.id)}
              >
                <div className="relative aspect-[3/4] w-full mb-2 md:mb-3">
                  <Image
                    src={book.cover}
                    alt={book.title}
                    fill
                    className="object-cover rounded-md"
                  />
                  {selectedIds.has(book.id) && (
                    <div className="absolute -bottom-2 md:-bottom-5 right-0">
                      <Fab
                        color="inherit"
                        aria-label="add"
                        sx={{
                          background: "rgb(34 197 94)",
                          "&:hover": {
                            background: "rgb(22 163 74)",
                          },
                          zIndex: 0,
                          width: "32px",
                          height: "32px",
                          "@media (min-width: 768px)": {
                            width: "40px",
                            height: "40px",
                          },
                        }}
                        size="small"
                      >
                        <ArrowBigDownDashIcon className="text-white text-sm md:text-base" />
                      </Fab>
                    </div>
                  )}
                </div>
                <div className="flex flex-col flex-1">
                  <h3 className="font-bold text-xs md:text-sm text-gray-900 mb-1 line-clamp-2">
                    {book.title}
                  </h3>
                  <p className="text-xs text-gray-600 mb-2 line-clamp-1">
                    {book.author}
                  </p>
                  <p className="bg-green-600/50 rounded-full py-1 px-2 md:px-2.5 w-fit text-xs font-semibold mt-auto">
                    NGN{book.price}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Floating Action Button for Mobile */}
          <div
            className={`fixed bottom-4 left-1/2 -translate-x-1/2 w-[90%] max-w-sm py-3 px-4 bg-[#28A745] flex items-center justify-between rounded-full ring-2 ring-green-500 shadow-lg z-50 transition-all duration-300 md:hidden ${
              selectedIds.size >= 1
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10 pointer-events-none"
            }`}
          >
            <p className="text-white font-medium text-sm">
              {selectedIds.size} Books picked
            </p>
            <Link href="/cart">
              <div className="bg-[#81C784] rounded-full px-3 py-2 text-slate-200 cursor-pointer hover:bg-green-400/50 transition-colors text-sm">
                Continue {">"}
              </div>
            </Link>
          </div>

          {/* Desktop Floating Action Button */}
          <div
            className={`absolute bottom-4 left-1/2 -translate-x-1/2 w-[60%] lg:w-[40%] py-2 px-4 sm:px-5 bg-[#28A745] flex items-center justify-between rounded-full ring-2 ring-green-500 shadow-lg z-50 transition-all duration-300 hidden md:flex ${
              selectedIds.size >= 1
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10 pointer-events-none"
            }`}
          >
            <p className="text-white font-medium text-sm sm:text-base">
              {selectedIds.size} Books picked
            </p>
            <Link href="/cart">
              <div className="bg-[#81C784] rounded-full px-3 py-2 text-slate-200 cursor-pointer hover:bg-green-400/50 transition-colors text-sm sm:text-base">
                Continue {">"}
              </div>
            </Link>
          </div>
        </div>

        {/* Pagination */}
        <div className="flex justify-center md:justify-end items-center gap-2 text-gray-300 mt-6">
          <Stack spacing={2}>
            <Pagination
              color="standard"
              count={10}
              size="small"
              sx={{
                "& .MuiPaginationItem-root": {
                  fontSize: "0.875rem",
                  "@media (min-width: 768px)": {
                    fontSize: "1rem",
                  },
                },
              }}
            />
          </Stack>
        </div>
      </div>
    </>
  );
}
