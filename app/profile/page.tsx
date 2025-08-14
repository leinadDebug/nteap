"use client";

import { Header } from "../components/profile/header";
import { Sidebar } from "../components/profile/sideBar";
import { useState, useCallback, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useMediaQuery, useTheme } from "@mui/material";

export default function ProfilePage() {
  const router = useRouter();
  const [isYoursExpanded, setIsYoursExpanded] = useState(true);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeItem, setActiveItem] = useState("faqs");
  const [mounted, setMounted] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      setIsCollapsed(isMobile);
    }
  }, [isMobile, mounted]);

  if (!mounted) return null;

  return (
    <div className="flex bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col m-10 min-h-svh max-w-7xl mx-auto">
        <Header />
        <main className="flex-1 p-6">
          <div className="mt-5">
            <h1 className="text-2xl font-bold text-green-700 mb-8">
              Update Profile
            </h1>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-slate-900 mb-2"
                  >
                    First Name
                  </label>
                  <input
                    id="firstName"
                    placeholder="Enter your address"
                    className="border-green-500/95 focus:border-green-500 w-full px-4 py-3 border-2 rounded-md focus:outline-none text-slate-800 text-xs"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-slate-900 mb-2"
                  >
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    placeholder="Enter your address"
                    className="border-green-500/95 focus:border-green-500 w-full px-4 py-3 border-2 rounded-md focus:outline-none text-slate-800 text-xs"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-slate-900 mb-2"
                  >
                    Phone number
                  </label>
                  <input
                    id="phone"
                    placeholder="Enter your address"
                    className="border-green-500/95 focus:border-green-500 w-full px-4 py-3 border-2 rounded-md focus:outline-none text-slate-800 text-xs"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="additionalPhone"
                    className="block text-sm font-medium text-slate-900 mb-2"
                  >
                    Additional Phone number
                  </label>
                  <input
                    id="additionalPhone"
                    placeholder="Enter your address"
                    className="border-green-500/95 focus:border-green-500 w-full px-4 py-3 border-2 rounded-md focus:outline-none text-slate-800 text-xs"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="deliveryAddress"
                  className="block text-sm font-medium text-slate-900 mb-2"
                >
                  Delivery Address
                </label>
                <input
                  id="deliveryAddress"
                  placeholder="Enter your address"
                  className="border-green-500/95 focus:border-green-500 w-full px-4 py-3 border-2 rounded-md focus:outline-none text-slate-800 text-xs"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="region"
                    className="block text-sm font-medium text-slate-900 mb-2"
                  >
                    Region
                  </label>
                  <input
                    id="region"
                    placeholder="Enter your address"
                    className="border-green-500/95 focus:border-green-500 w-full px-4 py-3 border-2 rounded-md focus:outline-none text-slate-800 text-xs"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="city"
                    className="block text-sm font-medium text-slate-900 mb-2"
                  >
                    City
                  </label>
                  <input
                    id="city"
                    placeholder="Enter your address"
                    className="border-green-500/95 focus:border-green-500 w-full px-4 py-3 border-2 rounded-md focus:outline-none text-slate-800 text-xs"
                  />
                </div>
              </div>

              <div className="flex justify-end pt-4">
                <button className="bg-green-600 hover:bg-green-700/90 px-8 py-2 rounded-lg">
                  Save
                </button>
              </div>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
}
