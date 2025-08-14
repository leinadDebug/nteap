// components/checkout/PaymentOption.tsx
import { ReactNode } from "react";

type PaymentOptionProps = {
  id: string;
  name: string;
  value: string;
  checked: boolean;
  onChange: (value: string) => void;
  children: ReactNode;
};

export const PaymentOption = ({
  id,
  name,
  value,
  checked,
  onChange,
  children,
}: PaymentOptionProps) => (
  <div className="flex items-center">
    <input
      type="radio"
      id={id}
      name={name}
      className="w-5 h-5 border-gray-300 text-green-600 focus:ring-green-500"
      checked={checked}
      onChange={() => onChange(value)}
    />
    <label htmlFor={id} className="ml-3 block text-gray-700">
      {children}
    </label>
  </div>
);
