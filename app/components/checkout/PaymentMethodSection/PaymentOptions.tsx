// components/checkout/PaymentOptions.tsx

import { PaymentOption } from "./PaymentOption";

type PaymentOptionsProps = {
  selectedMethod: string | null;
  onSelect: (method: string) => void;
};

export const PaymentOptions = ({
  selectedMethod,
  onSelect,
}: PaymentOptionsProps) => (
  <div className="space-y-4">
    <PaymentOption
      id="card-payment"
      name="payment-method"
      value="card"
      checked={selectedMethod === "card"}
      onChange={onSelect}
    >
      Pay with Cards
    </PaymentOption>

    <PaymentOption
      id="bank-transfer"
      name="payment-method"
      value="bank"
      checked={selectedMethod === "bank"}
      onChange={onSelect}
    >
      Pay with Bank Transfer
    </PaymentOption>
  </div>
);
