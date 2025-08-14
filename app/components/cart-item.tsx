"use client";

import Image from "next/image";

interface CartItemProps {
  id: string;
  title: string;
  author: string;
  price: string;
  coverImage: any;
  onRemove: (id: string) => void;
}

export default function CartItem({
  id,
  title,
  author,
  price,
  coverImage,
  onRemove,
}: CartItemProps) {
  return (
    <div className="flex flex-col sm:flex-row items-start gap-4 p-6 bg-white border-b">
      {/* Book Cover */}
      <div className="w-20 h-28 flex-shrink-0">
        <Image
          src={coverImage || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover rounded"
          width={100}
          height={20}
        />
      </div>

      {/* Book Details */}
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-gray-900 mb-1">{title}</h3>
        <p className="text-gray-600 text-sm mb-3">{author}</p>

        <button
          onClick={() => onRemove(id)}
          className="text-red-500 text-sm hover:text-red-700 flex items-center mt-4 gap-1 "
        >
          <span className="w-4 h-4">X</span>
          Remove
        </button>
      </div>

      {/* Price */}
      <div className="text-right">
        <span className="text-lg font-semibold text-gray-900">{price}</span>
      </div>
    </div>
  );
}
