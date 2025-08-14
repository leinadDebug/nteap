type SubtotalRowProps = {
  amount: string;
  label: string;
  isBold?: boolean;
};

export const SubtotalRow = ({ amount, label, isBold }: SubtotalRowProps) => (
  <div className={`flex justify-between items-center mb-4`}>
    <span className="text-gray-700 font-medium">{label}</span>
    <span
      className={` text-gray-900 ${
        isBold ? "font-bold text-xl" : "font-medium text-lg"
      }`}
    >
      {amount}
    </span>
  </div>
);
