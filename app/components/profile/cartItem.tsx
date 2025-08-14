import { FileText } from "lucide-react";

interface CartItemProps {
  fileName: string;
  price: string;
}

export function CartItem({ fileName, price }: CartItemProps) {
  return (
    <div className="flex items-center justify-between p-4 bg-white border rounded-lg">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
          <FileText className="w-6 h-6 text-green-600" />
        </div>
        <span className="font-medium text-black">{fileName}</span>
      </div>
      <span className="bg-green-600 text-white px-3 py-1 rounded text-sm font-medium">
        {price}
      </span>
    </div>
  );
}
