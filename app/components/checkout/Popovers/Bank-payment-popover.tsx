"use client";
import { Clock } from "lucide-react";
import { useState, useEffect } from "react";

interface PaymentConfirmationPopoverProps {
  isOpen: boolean;
  onClose: () => void;
  amount: string;
  onTimeout: () => void;
}

export default function BankPayment({
  isOpen,
  onClose,
  amount,
  onTimeout,
}: PaymentConfirmationPopoverProps) {
  const [timeLeft, setTimeLeft] = useState(1 * 10 + 5); // 10:05 in seconds
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 0) {
          clearInterval(timer);
          onTimeout();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isOpen, onTimeout]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
  };

  const copyAccountNumber = async () => {
    try {
      await navigator.clipboard.writeText("8022194139");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

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
        {/* Loading Dots */}
        {/* <>
          <div className="flex justify-center mb-6">
            <div className="flex space-x-1 gap-5">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="w-2 h-2 bg-green-500 rounded-full animate-pulse transition-all"
                  style={{
                    animationDelay: `${i * 0.1}s`,
                    animation: "pulseGrow 1s ease-in-out infinite",
                  }}
                ></div>
              ))}
            </div>
          </div>
          <style jsx>{`
            @keyframes pulseGrow {
              0%,
              100% {
                transform: scale(2);
                opacity: 0.5;
              }
              50% {
                transform: scale(1.5);
                opacity: 1;
              }
            }
          `}</style>
        </> */}

        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            We are waiting for your payment
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            Please follow the instructions below and do not refresh or leave
            this page.
            <br />
            Payment confirmation may take up to 2 minutes.
          </p>
        </div>

        {/* Transfer Instructions */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">
            Transfer to the following account
          </h3>

          {/* Bank Details Card */}
          <div className="bg-green-600 text-white rounded-lg p-6 mb-4">
            <div className="mb-4">
              <div className="text-sm opacity-90 mb-1">Bank Name</div>
              <div className="text-lg font-semibold">
                Moniepoint Microfinance Bank
              </div>
            </div>

            <div className="mb-4">
              <div className="text-sm opacity-90 mb-1">Account Number:</div>
              <div className="flex items-center justify-between">
                <div className="text-xl font-bold">8022194139</div>
                <button
                  onClick={copyAccountNumber}
                  className="bg-green-500 hover:bg-green-400 text-white px-4 py-2 text-xs rounded-lg shadow opacity-50 "
                >
                  {copied ? "Copied!" : "Copy Number"}
                </button>
              </div>
            </div>

            <div>
              <div className="text-sm opacity-90 mb-1">Beneficiary Name:</div>
              <div className="text-lg font-semibold">Abraham Emmanuel</div>
            </div>
          </div>

          {/* Amount Section */}
          <div className=" text-white rounded-xl overflow-hidden">
            <div className="bg-[#81C784] text-left p-4 px-6">
              <div className="text-lg font-semibold">
                Transfer exact amount to avoid failure
              </div>
            </div>
            <div className="bg-green-700  p-3 px-6">
              <div className="flex justify-between items-center">
                <span className="text-sm">Amount to pay</span>
                <span className="text-xl font-semibold">NGN {amount}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Timer */}
        <div className="flex items-center justify-center text-gray-600 text-sm">
          <Clock className="h-4 w-4 mr-2 text-green-600" />
          <span>
            This transaction expires in{" "}
            <span className="font-semibold">{formatTime(timeLeft)}</span>
          </span>
        </div>
      </div>
    </div>
  );
}
