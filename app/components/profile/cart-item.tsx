import { FileText } from "lucide-react";

interface CartItemProps {
  fileName: string;
  price: string;
}

export function CartItem({ fileName, price }: CartItemProps) {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 p-3 sm:p-4 bg-white border rounded-lg shadow-xl">
      <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto">
        <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
          <FileText className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-green-600" />
        </div>
        <span className="font-medium text-slate-900 text-sm sm:text-base line-clamp-1 break-all">
          {fileName}
        </span>
      </div>
      <span className="bg-green-700/70 text-slate-100 px-3 py-1 sm:px-4 sm:py-1 rounded-full text-xs sm:text-sm font-medium self-end sm:self-auto">
        {price}
      </span>
    </div>
  );
}
