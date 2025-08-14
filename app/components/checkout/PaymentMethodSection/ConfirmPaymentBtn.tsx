// components/checkout/ConfirmPaymentButton.tsx
type ConfirmPaymentButtonProps = {
  onClick: () => void;
  disabled?: boolean;
};

export const ConfirmPaymentButton = ({
  onClick,
  disabled = false,
}: ConfirmPaymentButtonProps) => (
  <div className="flex justify-end mt-6">
    <button
      className={`px-8 py-2 rounded-lg ${
        disabled
          ? "bg-gray-400 cursor-not-allowed"
          : "bg-green-600 hover:bg-green-700"
      } text-white`}
      onClick={onClick}
      disabled={disabled}
    >
      Confirm Payment Method
    </button>
  </div>
);
