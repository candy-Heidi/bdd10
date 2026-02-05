export function BeBdd() {
  return (
    <div className="flex flex-1 items-center justify-center">
      {/* 영상 + 하단 로고 간 여백 확보 */}
      <div className="w-full flex justify-center pb-24">
        <div
          className="
            w-full
            max-w-[1400px]
            aspect-video
            bg-black
            border border-white/10
            rounded-xl
            overflow-hidden
          "
        >
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/YYojimRLvkw"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}
