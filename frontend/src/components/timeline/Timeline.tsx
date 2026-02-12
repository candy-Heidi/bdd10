import { useRef } from "react";
import { TimelineNode } from "./TimelineNode.tsx";
import { TimelineCaption } from "./TimelineCaption.tsx";

interface TimelineItemData {
  year: string;
  size: "xsmall" |"small" | "medium" | "large" | "xlarge";
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
      description: "우승의 시작, 빅뱅",
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
      position: "top",
    },
  },
  {
    year: "2018",
    size: "large",
    caption: {
      date: "18.03.02",
      title: "KING-ZONE DragonX",
      description: "우승에 관련해서..",
      position: "top",
    },
  },
  {
    year: "2019",
    size: "medium",
    caption: {
      date: "19.03.02",
      title: "kt Rolster",
      description: "도...도원결의?",
      position: "bottom",
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
  {
    year: "2022",
    size: "xsmall",
    caption: {
      date: "22.03.02",
      title: "NS Redforce",
      description: "그.. 펜타 한 경기랑 인터뷰 넣자요..",
      position: "bottom",
    },
  },
  {
    year: "2023",
    size: "small",
    caption: {
      date: "23.03.02",
      title: "Gen.G",
      description: "비디디의 kt복귀, 올프로 퍼스트,\n서머 2라운드 전승 정규 1등\n꿈같앗던 23년 ㅠㅠ",
      position: "bottom",
    },
  },
  {
    year: "2024",
    size: "small",
    caption: {
      date: "24.03.02",
      title: "kt Rolster",
      description: "하늘이 무너져도 솟아날 구멍은 있다..\n표뎊베의 영입과 퍼펙트의 데뷔.\n분전했지만 월즈 진출 실패.\n이는 새로운 우주탄생의 서막이었다~!!",
      position: "bottom",
    },
  },
  {
    year: "2025",
    size: "small",
    caption: {
      date: "25.03.02",
      title: "kt Rolster",
      description: "모든 억까를 이겨내고 월즈 준우승\n물만두디디",
      position: "bottom",
    },
  },  
  {
    year: "2026",
    size: "xsmall",
    caption: {
      date: "26.03.02",
      title: "kt Rolster",
      description: "To Be Contiune.....",
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
        className="relative w-full h-[720px] overflow-x-auto overflow-y-hidden cursor-grab no-scrollbar"
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseLeave}
        onMouseMove={onMouseMove}
      >
        {/* 전체 타임라인 가로 길이 */}
        <div className="relative min-w-[4300px] h-full flex items-center">
          {/* 중앙 가로선 (Line 2) */}
          <div className="absolute left-0 right-0 top-1/2 h-0 border-t-[0.5px] border-white/50" />

          {/* 타임라인 아이템 컨테이너 (Frame 54) */}
          <div className="relative flex items-center px-[100px] gap-[80px] left-[14px]">
            {timelineData.map((item, index) => (
              <div
                key={index}
                className="relative flex items-center justify-center"
                style={{ width: 300, height: 650 }}
              >
                {/* 캡션 위 */}
                {item.caption?.position === "top" && (
                  <div className="absolute bottom-1/2 mb-[40px] flex flex-col items-center">
                    <TimelineCaption {...item.caption} />
                    {/* 연결선 (Vector 11 스타일 응용) */}
                    <div className="w-[0.5px] h-[30px] bg-white mt-[10px]" />
                  </div>
                )}

                {/* 노드 */}
                <TimelineNode year={item.year} size={item.size} />

                {/* 캡션 아래 */}
                {item.caption?.position === "bottom" && (
                  <div className="absolute top-1/2 mt-[40px] flex flex-col items-center">
                    <div className="w-[0.5px] h-[30px] bg-white mb-[10px]" />
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
