export function BeBdd() {
  return (
    // flex-col 추가하여 수직 중앙 정렬을 더 확실하게 잡음
    <div className="flex flex-1 flex-col items-center justify-center min-h-screen w-full">
      {/* 영상 컨테이너 */}
      <div className="w-full flex justify-center px-4 md:px-10 pb-24 pt-20"> 
        {/* pt-20: 헤더에 가려지지 않게 상단 여백 추가 */}
        
        <div
          className="
            w-full
            max-w-[1400px]
            2xl:max-w-[1800px]  /* 27인치 이상(2xl)에서는 1800px까지 커지게 설정 */
            aspect-video
            bg-black
            border border-white/10
            rounded-xl
            overflow-hidden
            shadow-2xl          /* 입체감을 위한 그림자 추가 */
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