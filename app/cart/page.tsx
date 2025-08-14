"use client";

import { useState } from "react";
import Header from "../components/Header";
import CartItem from "../components/cart-item";
import Link from "next/link";

import img1 from "../img/9df11dce7cab505e6b81635e3f922853d4f04acc.jpg";
import img2 from "../img/7bf3dbb08b6d6f22f57f5a11162e7eeacb48cc78.jpg";

export default function CartPage() {
  const [cartItems, setCartItems] = useState([
    {
      id: "1",
      title: "Researching the Unconscious",
      author: "Michael Rustin",
      price: "NGN10,500",
      coverImage: img1,
    },
    {
      id: "2",
      title: "Abstract Algebra: An Inquiry-Based Approach",
      author: "Jonathan K. Hodge, Steven Schlicker, Ted Sundstrom",
      price: "NGN10,500",
      coverImage: img2,
    },
  ]);

  const handleRemoveItem = (id: string) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const calculateTotal = () => {
    return cartItems.length * 10500; // Assuming each book is NGN10,500
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <div className="max-w-7xl mx-auto px-6 py-8">
        {cartItems.length === 0 ? (
          <div className="text-center py-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Your cart is empty
            </h2>
            <p className="text-gray-600">Add some books to get started!</p>
          </div>
        ) : (
          <>
            {/* Cart Items */}
            <div className="p-12 mb-8 bg-white rounded-2xl">
              {cartItems.map((item) => (
                <CartItem
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  author={item.author}
                  price={item.price}
                  coverImage={item.coverImage}
                  onRemove={handleRemoveItem}
                />
              ))}
            </div>

            {/* Checkout Section */}
            <Link href="/customer-checkout">
              <div className="flex justify-end">
                <button className="bg-green-600 hover:bg-green-700 text-white w-full sm:w-1/3 py-2 text-md font-semibold rounded-full">
                  Proceed to Checkout
                </button>
              </div>
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
