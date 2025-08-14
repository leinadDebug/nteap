"use client";
import { Check } from "lucide-react";

interface OrderConfirmationPopoverProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function OrderConfirmationPopover({
  isOpen,
  onClose,
}: OrderConfirmationPopoverProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-transparent bg-opacity-50 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="relative bg-white rounded-lg p-8 w-full max-w-2xl mx-4 shadow-xl text-center">
        {/* Checkmark Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-24 h-24 bg-green-200 rounded-full flex items-center justify-center  border-2 border-green-700">
            <Check className="h-12 w-12 text-green-600" />
          </div>
        </div>

        {/* Confirmation Text */}
        <h2 className="text-3xl font-bold text-green-600 mb-4">
          Order Confirmed!
        </h2>
        <p className="text-gray-800 text-lg mb-2 font-semibold">
          Thank you for using NTEAP.
        </p>
        <p className="text-gray-600 mb-8">
          A confirmation email about your order details
          <br />
          has been sent to your mail.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 text-base rounded-full">
            Track your order
          </button>
          <button className="bg-green-200 hover:bg-green-300 text-white px-6 py-3 text-base rounded-full">
            Search for another book
          </button>
        </div>
      </div>
    </div>
  );
}
