"use client";

import { useEffect, useState } from "react";
import Header from "../Header";
import LoginPrompt from "./LoginPrompt";
import { AddressForm, AddressHeader, SavedAddress } from "./AddressSection";
import { PaymentHeader } from "./PaymentMethodSection/PaymentHeader";
import { PaymentMethodSection } from "./PaymentMethodSection/PaymentMethod";
import { CartSummary } from "./CartSummary/CartSummary";
import PaymentHandler from "./Popovers/PaymentHandler";
import OrderConfirmationPopover from "./Popovers/order-confirmation-popover";

export default function CustomerCheckout() {
  const [isAddressExpanded, setIsAddressExpanded] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<
    string | null
  >(null);
  const [showCardSlip, setShowCardSlip] = useState(false);
  const [showBankSlip, setShowBankSlip] = useState(false);
  const [showOrderConfirmation, setShowOrderConfirmation] = useState(false);

  // Simulate payment completion after 5 seconds
  useEffect(() => {
    if (showBankSlip) {
      const timer = setTimeout(() => {
        setShowBankSlip(false);
        setShowOrderConfirmation(true);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [showBankSlip]);

  const handleConfirmPayment = () => {
    if (selectedPaymentMethod === "card") {
      setShowCardSlip(true);
    } else if (selectedPaymentMethod === "bank") {
      setShowBankSlip(true);
    }
  };

  const handlePaymentSubmit = () => {
    setShowBankSlip(false);
    setShowCardSlip(false);
  };

  const handleClose = () => {
    setShowBankSlip(false);
    setShowCardSlip(false);
    setShowOrderConfirmation(false);
    setSelectedPaymentMethod(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Checkout Form */}
          <div className="lg:col-span-2 shadow-lg">
            <div className="bg-white rounded-lg p-8">
              <LoginPrompt />

              {/* Address Information */}
              <div className="mb-8">
                <div className="rounded-lg">
                  {/* Header */}
                  <AddressHeader
                    isExpanded={isAddressExpanded}
                    toggleExpanded={() =>
                      setIsAddressExpanded(!isAddressExpanded)
                    }
                  />

                  <SavedAddress onEdit={() => setIsAddressExpanded(true)} />

                  {/* Expanded Form */}
                  {isAddressExpanded && (
                    <AddressForm onSave={() => setIsAddressExpanded(false)} />
                  )}
                </div>
              </div>

              {/* Payment Method */}
              <div>
                <div className="rounded-lg">
                  {/* Header */}
                  <PaymentHeader />

                  <PaymentMethodSection
                    selectedMethod={selectedPaymentMethod}
                    onSelect={setSelectedPaymentMethod}
                    onConfirm={handleConfirmPayment}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Cart Summary */}
          <CartSummary
            subtotal="NGN21,000"
            onCheckout={() => console.log("Checkout clicked")}
          />
        </div>
      </div>

      {/* Payment Handler */}
      <PaymentHandler
        selectedMethod={selectedPaymentMethod}
        amount="23,500.00"
        onPaymentComplete={() => setShowOrderConfirmation(true)}
        onCloseBankSlip={() => setShowBankSlip(false)}
        onCloseCardSlip={() => setShowCardSlip(false)}
        showCardSlip={showCardSlip}
        showBankSlip={showBankSlip}
        onPaymentSubmit={handlePaymentSubmit}
      />

      {/* Order Confirmation Popover */}
      <OrderConfirmationPopover
        isOpen={showOrderConfirmation}
        onClose={() => {
          setShowOrderConfirmation(false);
          handleClose();
        }}
      />
    </div>
  );
}
