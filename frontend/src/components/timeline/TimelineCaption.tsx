interface TimelineCaptionProps {
  date: string;
  title: string;
  description?: string;
  position?: 'top' | 'bottom';
}

export function TimelineCaption({ date, title, description, position = 'bottom' }: TimelineCaptionProps) {
  return (
    <div className="inline-flex flex-col items-start gap-2 md:gap-2.5 p-3 md:p-4 lg:p-5 border border-white/100 bg-white/[0.04] max-w-[140px] md:max-w-[160px] lg:max-w-none">
      <div className="flex flex-col items-start gap-1 md:gap-1.5">
        <div className="flex justify-center items-center gap-2.5 px-0.5 bg-white">
          <span className="font-mono-timeline text-[8px] md:text-[9px] lg:text-[10px] font-medium text-black">
            {date}
          </span>
        </div>
        <h3 className="font-pretendard text-sm md:text-base font-bold text-white leading-tight">
          {title}
        </h3>
      </div>
      {description && (
        <div className="flex flex-col items-start gap-1 md:gap-1.5">
          <p className="font-pretendard text-[8px] md:text-[9px] lg:text-[10px] font-medium text-white">
            {description}
          </p>
        </div>
      )}
    </div>
  );
}
