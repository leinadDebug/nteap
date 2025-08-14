import { Check } from "lucide-react";

export const PaymentHeader = () => (
  <div className="p-4 flex items-center justify-between">
    <div className="flex items-center gap-3">
      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
        <Check className="h-4 w-4 text-white" />
      </div>
      <div>
        <h3 className="text-lg font-bold text-gray-900">Payment Method</h3>
        <p className="text-sm text-gray-600">
          You will be redirected to our secure checkout page
        </p>
      </div>
    </div>
  </div>
);
