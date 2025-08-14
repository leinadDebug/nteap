import { ChevronUp, ChevronDown, Check } from "lucide-react";

export const AddressHeader = ({
  isExpanded,
  toggleExpanded,
}: {
  isExpanded: boolean;
  toggleExpanded: () => void;
}) => {
  return (
    <div className="p-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
          <Check className="h-4 w-4 text-white" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-gray-900">
            Address Information
          </h3>
          <p className="text-sm text-gray-600">
            Add your delivery/shipping details
          </p>
        </div>
      </div>
      <button onClick={toggleExpanded} className="p-1">
        {isExpanded ? (
          <ChevronUp className="h-5 w-5 text-gray-400" />
        ) : (
          <ChevronDown className="h-5 w-5 text-gray-400" />
        )}
      </button>
    </div>
  );
};
