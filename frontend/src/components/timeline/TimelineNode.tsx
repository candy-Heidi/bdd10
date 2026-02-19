import { useState } from "react";

interface TimelineNodeProps {
  size: "xsmall" | "small" | "medium" | "large" | "xlarge";
  year: string;
  videoId?: string; // 선택사항으로 설정 (2026년 대비)
}

export function TimelineNode({ size, year, videoId }: TimelineNodeProps) {
  const [showVideo, setShowVideo] = useState(false);

  const sizes = {
    xsmall: { outer: 50, inner: 10 },
    small: { outer: 75, inner: 21 },
    medium: { outer: 90, inner: 30 },
    large: { outer: 180, inner: 46 },
    xlarge: { outer: 270, inner: 70 },
  };

  const { outer, inner } = sizes[size];

  return (
    <>
      <div
        className="relative flex items-center justify-center"
        style={{ width: outer, height: outer }}
      >
        {/* 바깥쪽 원 (클릭 안 됨) */}
        <div 
          className="absolute inset-0 rounded-full" 
          style={{ backgroundColor: 'rgba(255, 255, 255, 0.06)' }} 
        />
        
        {/* 안쪽 원: videoId가 있을 때만 클릭 가능 */}
        <div 
          className={`rounded-full transition-transform z-20 ${videoId ? 'cursor-pointer hover:scale-125' : ''}`} 
          onClick={() => videoId && setShowVideo(true)}
          style={{ 
            width: inner, 
            height: inner, 
            backgroundColor: 'rgba(221, 221, 221, 0.9)' 
          }} 
        />

        {/* 연도 텍스트 (Node 위에 표시) */}
        <div className="absolute top-0 -translate-y-[24px] font-['Sometype_Mono'] text-[12px] font-semibold text-white text-center leading-[14px]">
          {year}
        </div>
      </div>

      {/* 유튜브 영상 모달 (videoId가 있을 때만 작동) */}
      {showVideo && videoId && (
        <div 
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={() => setShowVideo(false)}
        >
          <div 
            className="relative w-full max-w-[1000px] aspect-video mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="absolute -top-10 right-0 text-white text-sm tracking-widest hover:text-gray-300 font-pretendard"
              onClick={() => setShowVideo(false)}
            >
              CLOSE ✕
            </button>
            <iframe
              className="w-full h-full shadow-2xl border border-white/10"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </>
  );
}