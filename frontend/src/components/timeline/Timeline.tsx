import { useRef } from "react";
import { TimelineNode } from "./TimelineNode.tsx";
import { TimelineCaption } from "./TimelineCaption.tsx";

interface TimelineItemCoords {
  yearTop: string;
  yearLeft: string;
  captionTop?: string;
  captionLeft?: string;
  captionWidth?: string;
  captionHeight?: string;
}

interface TimelineItemData {
  year: string;
  size: "xsmall" |"small" | "medium" | "large" | "xlarge";
  caption?: {
    date: string;
    title: string;
    description?: string;
    position?: "top" | "bottom";
  };
  coords?: TimelineItemCoords;
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
    coords: {
      yearTop: "292px",
      yearLeft: "118px",
      captionTop: "363px",
      captionLeft: "0px",
      captionWidth: "124px",
      captionHeight: "105px",
    }
  },
  {
    year: "2017",
    size: "xlarge",
    caption: {
      date: "17.03.02",
      title: "KING-ZONE\nDragonX",
      description: "우승에 관련해서..",
      position: "top",
    },
    coords: {
      yearTop: "215px",
      yearLeft: "135px",
      captionTop: "31px",
      captionLeft: "0px",
      captionWidth: "130px",
      captionHeight: "124px",
    }
  },
  {
    year: "2018",
    size: "large",
    caption: {
      date: "18.03.02",
      title: "KING-ZONE\nDragonX",
      description: "우승에 관련해서..",
      position: "top",
    },
    coords: {
      yearTop: "215px",
      yearLeft: "135px",
      captionTop: "31px",
      captionLeft: "0px",
      captionWidth: "130px",
      captionHeight: "124px",
    }
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
    coords: {
      yearTop: "292px",
      yearLeft: "170px",
      captionTop: "370px",
      captionLeft: "0px",
      captionWidth: "114px",
      captionHeight: "105px",
    }
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
    coords: {
      yearTop: "292px",
      yearLeft: "52px",
      captionTop: "355px",
      captionLeft: "0px",
      captionWidth: "93px",
      captionHeight: "105px",
    }
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
    coords: {
      yearTop: "292px",
      yearLeft: "52px",
      captionTop: "355px",
      captionLeft: "0px",
      captionWidth: "93px",
      captionHeight: "105px",
    }
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
    coords: {
      yearTop: "292px",
      yearLeft: "52px",
      captionTop: "430px",
      captionLeft: "0px",
      captionWidth: "204px",
      captionHeight: "105px",
    }
  },
  {
    year: "2023",
    size: "small",
    caption: {
      date: "23.03.02",
      title: "kt Rolster",
      description: "비디디의 kt복귀, 올프로 퍼스트,\n서머 2라운드 전승 정규 1등\n꿈같앗던 23년 ㅠㅠ",
      position: "bottom",
    },
    coords: {
      yearTop: "292px",
      yearLeft: "118px",
      captionTop: "355px",
      captionLeft: "0px",
      captionWidth: "196px",
      captionHeight: "143px",
    }
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
    coords: {
      yearTop: "292px",
      yearLeft: "118px",
      captionTop: "355px",
      captionLeft: "0px",
      captionWidth: "225px",
      captionHeight: "162px",
    }
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
    coords: {
      yearTop: "292px",
      yearLeft: "118px",
      captionTop: "355px",
      captionLeft: "0px",
      captionWidth: "199px",
      captionHeight: "124px",
    }
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
    coords: {
      yearTop: "292px",
      yearLeft: "118px",
      captionTop: "355px",
      captionLeft: "0px",
      captionWidth: "145px",
      captionHeight: "124px",
    }
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

          {/* 타임라인 아이템 컨테이너 */}
          <div className="relative flex items-center px-[100px] gap-[80px] left-[14px]">
            {timelineData.map((item, index) => (
              <div
                key={index}
                className="relative flex items-center justify-center shrink-0"
                style={{ width: 300, height: 650 }}
              >
            {/* 1. 연도 텍스트 (데이터에 coords가 있을 때만 렌더링) */}
                {item.coords && (
                  <div 
                    style={{
                      position: 'absolute',
                      top: item.coords.yearTop,
                      left: item.coords.yearLeft,
                      width: '28px',
                      height: '14px',
                      fontFamily: 'Sometype Mono',
                      fontSize: '12px',
                      fontWeight: 500,
                      color: '#FFFFFF',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      pointerEvents: 'none',
                      zIndex: 20
                    }}
                  >
                    {item.year}
                  </div>
                )}                

                {/* 2. 노드 (중앙 원) */}
                <TimelineNode year="" size={item.size} />

                {item.caption && item.coords && (
                      <div 
                        style={{
                          position: 'absolute',
                          top: item.coords.captionTop,
                          left: item.coords.captionLeft,
                          width: item.coords.captionWidth,
                          height: item.coords.captionHeight,
                          zIndex: 20
                        }}
                      >
                        <TimelineCaption {...item.caption} />
                      </div>
                    )}                
                                  
                  {/* 2016년 전용 꺾인 선 (아래로 꺾인 L자) */}
                  {item.year === "2016" && (
                      <div 
                        style={{
                          position: 'absolute',    // 부모(300x650) 안에서 자유롭게 움직임
                          width: '28px',           // 피그마 속성 그대로
                          height: '71px',          // 피그마 속성 그대로
                          left: '123px',           // 피그마 속성 그대로
                          top: '343px',            // 피그마 속성 그대로
                          borderBottom: '0.5px solid #FFFFFF',
                          borderRight: '0.5px solid #FFFFFF', // 흰색 테두리
                          pointerEvents: 'none'    // 마우스 클릭 통과
                        }} 
                      >
                      <div 
                        style={{
                          position: 'absolute',
                          top: '-2px',           // 선의 맨 위 끝부분에 위치
                          right: '-2.5px',       // 세로선 정중앙에 맞추기
                          width: '4px',          // 점의 크기 (가로)
                          height: '4px',         // 점의 크기 (세로)
                          backgroundColor: '#FFFFFF', // 흰색 채우기
                          borderRadius: '50%'    // 네모를 동그라미로 만들기
                        }}
                      />
                    </div>
                    )}
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
