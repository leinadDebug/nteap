import { AlertCircle } from "lucide-react";

interface DeliveryFeeNoticeProps {
  message: string;
}

export const DeliveryFeeNotice = ({ message }: DeliveryFeeNoticeProps) => (
  <div className="flex items-center gap-2 mb-6 p-3 bg-gray-100 rounded-lg justify-center">
    <AlertCircle className="h-4 w-4 text-yellow-500" />
    <span className="text-sm text-slate-900">
      Delivery fees not included yet
    </span>
  </div>
);
