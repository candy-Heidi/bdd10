export function BeBdd() {
  return (
    <div className="w-full flex justify-center px-4 md:px-8 lg:px-24">
      <div
        className="
          w-full
          max-w-[1600px]
          aspect-[16/9]
          max-h-[calc(100vh-120px)]
          bg-black/20
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
  );
}
