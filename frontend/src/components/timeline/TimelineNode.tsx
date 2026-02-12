interface TimelineNodeProps {
  size: "xsmall"|"small" | "medium" | "large" | "xlarge";
  year: string;
}

export function TimelineNode({ size, year }: TimelineNodeProps) {
  const sizes = {
    // 가이드의 20, 30, 46, 70 수치를 inner 값으로 적용
    xsmall: { outer: 50, inner: 10 },
    small: { outer: 75, inner: 21 },   // 2026 등 기본
    medium: { outer: 90, inner: 30 },  
    large: { outer: 180, inner: 46 }, 
    xlarge: { outer: 270, inner: 70 }, 
  };

  const { outer, inner } = sizes[size];

  return (
    <div
      className="relative flex items-center justify-center"
      style={{ width: outer, height: outer }}
    >
      {/* 바깥쪽 원 (Ellipse 55/56) */}
      <div 
        className="absolute inset-0 rounded-full" 
        style={{ 
          backgroundColor: 'rgba(255, 255, 255, 0.06)' 
        }} 
      />
      
      {/* 안쪽 원 (Ellipse 40/41/42/43) */}
      <div 
        className="rounded-full" 
        style={{ 
          width: inner, 
          height: inner, 
          backgroundColor: 'rgba(221, 221, 221, 0.9)' 
        }} 
      />

      {/* 연도 (Year) - 노드 상단 배치 */}
      <div className="absolute top-0 -translate-y-[24px] font-['Sometype_Mono'] text-[12px] font-semibold text-white text-center leading-[14px]">
        {year}
      </div>
    </div>
  );
}