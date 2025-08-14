// components/checkout/PaymentHandler.tsx
"use client";

import PaymentPopover from "./Card-payment-popover";
import PaymentConfirmationPopover from "./Bank-payment-popover";
import CardPayment from "./Card-payment-popover";
import BankPayment from "./Bank-payment-popover";

type PaymentHandlerProps = {
  selectedMethod: string | null;
  amount: string;
  onPaymentComplete: () => void;
  showCardSlip: boolean;
  showBankSlip: boolean;
  onCloseBankSlip: () => void;
  onCloseCardSlip: () => void;
  onPaymentSubmit: () => void;
};

export default function PaymentHandler({
  selectedMethod,
  amount,
  onPaymentComplete,
  showCardSlip,
  showBankSlip,
  onCloseBankSlip,
  onCloseCardSlip,
  onPaymentSubmit,
}: PaymentHandlerProps) {
  return (
    <>
      {/* Show card payment popover only if card is selected */}
      {selectedMethod === "card" && (
        <CardPayment
          isOpen={showCardSlip}
          onClose={onCloseCardSlip}
          amount={amount}
          onPaymentSubmit={onPaymentComplete}
        />
      )}

      {/* Show bank transfer confirmation only if bank is selected */}
      {selectedMethod === "bank" && (
        <BankPayment
          isOpen={showBankSlip}
          onClose={onCloseBankSlip}
          amount={amount}
          onTimeout={onPaymentComplete}
        />
      )}
    </>
  );
}
