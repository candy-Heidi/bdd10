interface TimelineCaptionProps {
  date: string;
  title: string;
  description?: string;
}

export function TimelineCaption({
  date,
  title,
  description,
}: TimelineCaptionProps) {
  return (
    <div className="flex flex-col gap-[10px] p-5 bg-white/[0.04] border border-white min-w-[120px] max-w-[220px]">
      <div className="flex flex-col gap-[5px]">
        {/* 날짜 배지 (Frame 67) */}
        <div className="bg-white px-[3px] h-3 flex items-center justify-center w-fit">
          <span className="text-[10px] font-['Sometype_Mono'] font-medium text-black leading-[12px]">
            {date}
          </span>
        </div>
        {/* 타이틀 */}
        <h3 className="font-pretendard text-[16px] font-bold text-white leading-[19px]">
          {title}
        </h3>
      </div>

      {/* 설명 (Frame 60) */}
      {description && (
        <p className="font-pretendard text-[12px] font-medium text-white leading-[160%]">
          {description}
        </p>
      )}
    </div>
  );
}