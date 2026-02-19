interface TimelineCaptionProps {
  title: string;
  date: string; // "점의 시작, 무력했던 신동의 등판" 부분
  description?: string;
}

export function TimelineCaption({
  title,
  date,
  description,
}: TimelineCaptionProps) {
  return (
    /* 1. absolute, top, left, width, height 관련 클래스를 모두 제거했습니다. */
    /* 2. 대신 w-full h-full을 넣어 부모가 정해준 크기에 맞게 채워지도록 합니다. */
    <div className="w-full min-h-full flex flex-col items-start p-[15px] gap-[12px] bg-white/[0.05] backdrop-blur-[5px]">
      
      {/* 상단 영역: 제목과 서브타이틀 박스 */}
      <div className="flex flex-col items-start gap-[6px] w-full">
        {/* 타이틀: CJ Entus */}
        <h3 className="font-pretendard text-[17px] font-bold text-white leading-[19px] flex items-center">
          {title}
        </h3>

        {/* 서브타이틀 박스 (흰색 배경 + 검은 글씨) */}
        {/* h-[13px] 고정값 때문에 글자가 잘린다면 h-auto로 바꾸는 것이 좋습니다. */}
        <div className="bg-white px-[4px] py-[2px] w-fit max-w-full flex items-center justify-start">
          <span className="font-pretendard text-[14px] font-semibold text-black leading-none">
            {date}
          </span>
        </div>
      </div>

      {/* 설명 영역 (Frame 60) */}
      {description && (
        <div className="flex flex-col items-start gap-[5px] w-full">
          <p className="font-pretendard text-[14px] font-medium text-white leading-[1.5] whitespace-pre-wrap">
            {description}
          </p>
        </div>
      )}
    </div>
  );
}