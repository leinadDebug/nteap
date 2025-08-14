type SubtotalRowProps = {
  amount: string;
};

export const SubtotalRow = ({ amount }: SubtotalRowProps) => (
  <div className="flex justify-between items-center mb-4">
    <span className="text-gray-700 font-medium">Sub Total</span>
    <span className="text-xl font-bold text-gray-900">{amount}</span>
  </div>
);
