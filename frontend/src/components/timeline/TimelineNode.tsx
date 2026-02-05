interface TimelineNodeProps {
  size: "small" | "medium" | "large" | "xlarge";
  year: string;
}

export function TimelineNode({ size, year }: TimelineNodeProps) {
  const sizes = {
    small: { outer: 75, inner: 25 },
    medium: { outer: 90, inner: 30 },
    large: { outer: 180, inner: 60 },
    xlarge: { outer: 270, inner: 100 },
  };

  const { outer, inner } = sizes[size];

  return (
    <div
      className="relative flex items-center justify-center"
      style={{ width: outer, height: outer }}
    >
      {/* 원 */}
      <svg width={outer} height={outer}>
        <circle
          cx={outer / 2}
          cy={outer / 2}
          r={outer / 2}
          fill="white"
          fillOpacity="0.1"
        />
        <circle
          cx={outer / 2}
          cy={outer / 2}
          r={inner / 2}
          fill="white"
        />
      </svg>

      {/* 연도 */}
      <div className="absolute top-1/2 -translate-y-[calc(100%+12px)] font-mono-timeline text-xs font-semibold text-white">
        {year}
      </div>
    </div>
  );
}
