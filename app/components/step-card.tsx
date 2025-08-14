interface StepCardProps {
  stepNumber: number;
  title: string;
  description: string;
  position: "left" | "top" | "right" | "bottom" | "mobile";
}

export default function StepCard({
  stepNumber,
  title,
  description,
  position,
}: StepCardProps) {
  const getPositionClasses = () => {
    switch (position) {
      case "left":
        return "absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4";
      case "top":
        return "absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4";
      case "right":
        return "absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4";
      case "bottom":
        return "absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-4";
      case "mobile":
        return "relative"; // Mobile cards are positioned by their container
      default:
        return "";
    }
  };

  return (
    <div className={getPositionClasses()}>
      <div className="max-w-[160px] sm:max-w-xs bg-white p-2 sm:p-3 rounded-lg sm:rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-200">
        {/* Green circular badge */}
        <div className="w-5 h-5 sm:w-10 sm:h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm mb-2 sm:mb-3 shadow-sm">
          {stepNumber}
        </div>

        {/* Title */}
        <h3 className="font-bold text-gray-900 text-xs sm:text-base mb-1.5 sm:mb-2 leading-tight">
          {title}
        </h3>

        {/* Description */}
        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
