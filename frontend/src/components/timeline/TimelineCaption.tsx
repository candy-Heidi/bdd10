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
    <div className="flex flex-col gap-2 p-4 bg-white/[0.04] border border-white/60 max-w-[180px]">
      <div className="flex flex-col gap-1">
        <span className="bg-white px-1 text-[10px] font-mono-timeline font-medium text-black w-fit">
          {date}
        </span>
        <h3 className="font-pretendard text-sm font-bold text-white leading-tight">
          {title}
        </h3>
      </div>

      {description && (
        <p className="font-pretendard text-[10px] font-medium text-white">
          {description}
        </p>
      )}
    </div>
  );
}
