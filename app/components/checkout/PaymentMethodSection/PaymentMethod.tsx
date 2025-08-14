// components/checkout/PaymentMethodSection.tsx
import { PaymentOptions } from "./PaymentOptions";
import { ConfirmPaymentButton } from "./ConfirmPaymentBtn";

type PaymentMethodSectionProps = {
  selectedMethod: string | null;
  onSelect: (method: string) => void;
  onConfirm: () => void;
};

export const PaymentMethodSection = ({
  selectedMethod,
  onSelect,
  onConfirm,
}: PaymentMethodSectionProps) => (
  <div className="p-6">
    <PaymentOptions selectedMethod={selectedMethod} onSelect={onSelect} />
    <ConfirmPaymentButton onClick={onConfirm} disabled={!selectedMethod} />
  </div>
);
