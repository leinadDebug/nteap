"use client";

interface PaymentPopoverProps {
  isOpen: boolean;
  onClose: () => void;
  amount: string;
  onPaymentSubmit: () => void;
}

export default function CardPayment({
  isOpen,
  onClose,
  amount,
  onPaymentSubmit,
}: PaymentPopoverProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-transparent bg-opacity-50 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="relative bg-white rounded-lg p-8 w-full max-w-2xl mx-4 shadow-xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-6 border-b pb-4 my-2">
          <h2 className="text-xl font-bold text-gray-900">
            Pay with Mastercard or Visa
          </h2>
          <div className="flex items-center gap-2">
            {/* Visa Logo */}
            <div className="text-blue-600 font-bold text-lg">VISA</div>
            {/* Mastercard Logo */}
            <div className="flex">
              <div className="w-6 h-6 bg-red-500 rounded-full"></div>
              <div className="w-6 h-6 bg-yellow-500 rounded-full -ml-3"></div>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="space-y-4">
          {/* Card Number */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Card Number
            </label>
            <input
              type="text"
              placeholder="1234 1234 1234 1234"
              className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-gray-500"
            />
          </div>

          {/* Expiration and CVV */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Expiration date
              </label>
              <input
                type="text"
                placeholder="MM / YY"
                className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-gray-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Security CVV
              </label>
              <input
                type="text"
                placeholder="CVV"
                className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-gray-500"
              />
            </div>
          </div>
        </div>

        {/* Pay Button */}
        <button
          className="w-full bg-green-700 hover:bg-green-900 text-white font-bold py-4 mt-6 text-lg rounded-lg"
          onClick={onPaymentSubmit}
        >
          PAY: {amount}
        </button>
      </div>
    </div>
  );
}
