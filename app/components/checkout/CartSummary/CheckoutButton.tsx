type CheckoutButtonProps = {
  disabled?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
};

export const CheckoutButton = ({
  disabled = false,
  onClick,
  children,
}: CheckoutButtonProps) => (
  <button
    className={`w-full bg-green-600 text-white font-semibold py-3 rounded-xl text-sm ${
      disabled ? "opacity-25" : "hover:bg-green-700"
    }`}
    disabled={disabled}
    onClick={onClick}
  >
    {children}
  </button>
);
