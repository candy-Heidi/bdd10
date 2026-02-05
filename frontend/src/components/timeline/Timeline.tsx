import { useRef } from "react";
import { TimelineNode } from "./TimelineNode.tsx";
import { TimelineCaption } from "./TimelineCaption.tsx";

interface TimelineItemData {
  year: string;
  size: "small" | "medium" | "large" | "xlarge";
  caption?: {
    date: string;
    title: string;
    description?: string;
    position?: "top" | "bottom";
  };
}

const timelineData: TimelineItemData[] = [
  {
    year: "2016",
    size: "small",
    caption: {
      date: "16.03.02",
      title: "CJ Entus",
      description: "우승의 시작, 막강",
      position: "bottom",
    },
  },
  {
    year: "2017",
    size: "xlarge",
    caption: {
      date: "17.03.02",
      title: "KING-ZONE DragonX",
      description: "우승에 관련해서..",
      position: "bottom",
    },
  },
  {
    year: "2018",
    size: "large",
    caption: {
      date: "18.03.02",
      title: "KING-ZONE DragonX",
      description: "우승에 관련해서..",
      position: "bottom",
    },
  },
  {
    year: "2019",
    size: "medium",
    caption: {
      date: "19.03.02",
      title: "kt Rolster",
      description: "또 다른..",
      position: "top",
    },
  },
  {
    year: "2020",
    size: "xlarge",
    caption: {
      date: "20.03.02",
      title: "Gen.G",
      description: "설명..",
      position: "bottom",
    },
  },
  {
    year: "2021",
    size: "large",
    caption: {
      date: "21.03.02",
      title: "Gen.G",
      description: "설명..",
      position: "bottom",
    },
  },
];

export function Timeline() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const onMouseDown = (e: React.MouseEvent) => {
    isDown.current = true;
    startX.current = e.pageX;
    scrollLeft.current = scrollRef.current!.scrollLeft;
  };

  const onMouseUp = () => {
    isDown.current = false;
  };

  const onMouseLeave = () => {
    isDown.current = false;
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDown.current) return;
    e.preventDefault();
    const walk = e.pageX - startX.current;
    scrollRef.current!.scrollLeft = scrollLeft.current - walk;
  };

  return (
    <section
      ref={scrollRef}
      className="relative w-full h-[calc(100vh-160px)] overflow-x-auto overflow-y-hidden cursor-grab"
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseLeave}
      onMouseMove={onMouseMove}
    >
      {/* 실제 타임라인 기준 컨테이너 */}
      <div className="relative min-w-[3800px] h-full flex items-center">
        {/* 중앙 가로선 */}
        <div className="absolute left-0 right-0 top-1/2 h-[0.5px] bg-white/60" />

        {/* 타임라인 아이템 */}
        <div className="relative flex items-center px-[100px] gap-[60px]">
          {timelineData.map((item, index) => (
            <div
              key={index}
              className="relative flex items-center justify-center"
              style={{ width: 300, height: "100%" }}
            >
              {/* 캡션 위 */}
              {item.caption?.position === "top" && (
                <div className="absolute bottom-1/2 mb-8 flex flex-col items-center">
                  <TimelineCaption {...item.caption} />
                  <div className="w-px h-10 bg-white/60 mt-2" />
                </div>
              )}

              {/* 노드 */}
              <TimelineNode year={item.year} size={item.size} />

              {/* 캡션 아래 */}
              {item.caption?.position === "bottom" && (
                <div className="absolute top-1/2 mt-8 flex flex-col items-center">
                  <div className="w-px h-10 bg-white/60 mb-2" />
                  <TimelineCaption {...item.caption} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
