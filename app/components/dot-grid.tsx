interface DotGridProps {
  rows?: number;
  cols?: number;
  dotSize?: number;
  gap?: number;
  color?: string;
  className?: string;
}

export default function DotGrid({
  rows = 5,
  cols = 3,
  dotSize = 20,
  gap = 16,
  color = "bg-green-400",
  className = "",
}: DotGridProps) {
  return (
    <div
      className={`grid ${className}`}
      style={{
        gridTemplateColumns: `repeat(${cols}, ${dotSize}px)`,
        gridTemplateRows: `repeat(${rows}, ${dotSize}px)`,
        gap: `${gap}px`,
      }}
    >
      {Array.from({ length: rows * cols }).map((_, index) => (
        <div
          key={index}
          className={`rounded-full ${color}`}
          style={{
            width: `${dotSize}px`,
            height: `${dotSize}px`,
          }}
        />
      ))}
    </div>
  );
}
