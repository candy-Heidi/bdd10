import { useState, useEffect } from "react"; // useEffect 추가
import { createPortal } from "react-dom";

interface TimelineNodeProps {
  size: "a" |"b" |"c" |"d" |"e" |"f" |"g" |"h" |"i" |"j" ;
  year: string;
  videoId?: string;
}

export function TimelineNode({ size, year, videoId }: TimelineNodeProps) {
  const [showVideo, setShowVideo] = useState(false);
  const [isMobile, setIsMobile] = useState(false); // 1. isMobile 상태 정의

  // 2. 모바일 여부 판단 로직 추가 (에러 해결 핵심)
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 430 || window.innerHeight <= 750);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const sizes = {
    a: { outer: 75, inner: 16 }, b: { outer: 270, inner: 57.6 },
    c: { outer: 180, inner: 46 }, d: { outer: 90, inner: 25 },
    e: { outer: 240, inner: 62.22 }, f: { outer: 180, inner: 46 },
    g: { outer: 50, inner: 10 }, h: { outer: 280, inner: 59.73 },
    i: { outer: 150, inner: 38.33 }, j: { outer: 300, inner: 54.23 },
  };

  const { outer, inner } = sizes[size];

  return (
    <>
      <div className="relative flex items-center justify-center" style={{ width: outer, height: outer }}>
        <div className="absolute inset-0 rounded-full bg-black/20" />
        <div 
          className={`rounded-full transition-transform z-20 ${videoId ? 'cursor-pointer hover:scale-125' : ''}`} 
          onClick={() => videoId && setShowVideo(true)}
          style={{ width: inner, height: inner, backgroundColor: '#DDDDDD' }} 
        />
      </div>

      {/* 3. createPortal을 사용하여 body 최상단으로 영상 전송 (캡션 가림 방지) */}
      {showVideo && videoId && createPortal(
        <div 
          className="fixed inset-0 flex items-center justify-center bg-black/85 backdrop-blur-sm"
          style={{ 
            zIndex: 999999, 
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh'
          }}
          onClick={() => setShowVideo(false)}
        >
          <div 
            className={`relative aspect-video ${
              isMobile ? 'w-[92%] max-w-[500px]' : 'w-[80%] max-w-[1000px]'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className={`absolute right-0 text-white font-bold tracking-widest ${
                isMobile ? '-top-8 text-[12px]' : '-top-10 text-[16px]'
              }`}
              style={{ zIndex: 1000000 }}
              onClick={() => setShowVideo(false)}
            >
              CLOSE ✕
            </button>
            <iframe
              className="w-full h-full shadow-2xl border border-white/20 rounded-md"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
              title="YouTube video player"
              allowFullScreen
            />
          </div>
        </div>,
        document.body
      )}
    </>
  );
}