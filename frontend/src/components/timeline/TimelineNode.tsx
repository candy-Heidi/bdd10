interface TimelineNodeProps {
  size: 'small' | 'medium' | 'large' | 'xlarge';
  year: string;
}

export function TimelineNode({ size, year }: TimelineNodeProps) {
  const sizes = {
    small: { outer: 75, inner: 25 },
    medium: { outer: 90, inner: 30 },
    large: { outer: 180, inner: 60 },
    xlarge: { outer: 270, inner: 100 }
  };

  const { outer, inner } = sizes[size];
  const outerRadius = outer / 2;
  const innerRadius = inner / 2;

  // Scale factor for responsive sizing
  const mobileScale = 0.6;
  const tabletScale = 0.8;

  return (
    <div className="relative flex items-center justify-center md:scale-100 scale-75" style={{ width: `${outer}px`, height: `${outer}px` }}>
      <svg width={outer} height={outer} viewBox={`0 0 ${outer} ${outer}`} className="absolute">
        <circle
          cx={outerRadius}
          cy={outerRadius}
          r={outerRadius}
          fill="white"
          fillOpacity="0.1"
        />
        <circle
          cx={outerRadius}
          cy={outerRadius}
          r={innerRadius}
          fill="white"
        />
      </svg>
      <div className="absolute font-mono-timeline text-[10px] md:text-xs font-semibold text-white text-center whitespace-nowrap"
           style={{ top: size === 'small' ? '-18px' : size === 'medium' ? '-22px' : size === 'large' ? '-28px' : '-35px' }}>
        {year}
      </div>
    </div>
  );
}