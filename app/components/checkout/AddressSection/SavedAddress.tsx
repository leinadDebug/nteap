import { Pencil } from "lucide-react";

export const SavedAddress = ({ onEdit }: { onEdit: () => void }) => (
  <div className="mx-4 mb-4 p-4 bg-green-50 rounded-md relative">
    <div className="font-bold text-green-700 uppercase">ABRAHAM EMMANUEL</div>
    <div className="text-sm text-gray-700">
      Off Top Rank Hotels Galaxy, Sanni Abacha Expressway, Amarata | Bayelsa -
      Yenagoa-Okaka | +234 8022194139
    </div>
    <button
      onClick={onEdit}
      className="absolute top-4 right-4 p-1 bg-white rounded-full"
    >
      <Pencil className="h-4 w-4 text-green-600" />
    </button>
  </div>
);
