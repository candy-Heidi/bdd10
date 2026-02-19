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
  videoId? : string;
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
    videoId: "YYojimRLvkw",
    caption: {
      date: "16.03.02",
      title: "CJ Entus",
      description: "기대 속에 나타난 유망주,\n그러나 기울어진 팀의 궤적을 홀로 바꾸기엔\n역부족이었던 첫 번째 점.",
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
    videoId: "YYojimRLvkw",
    caption: {
      date: "17.03.02",
      title: "KING-ZONE\nDragonX",
      description: "짧은 기회를 압도적 실력으로\n잡아채며 리그 정상에 우뚝 선,\n가장 화려하고 강렬했던 섬광.",
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
    videoId: "YYojimRLvkw",
    caption: {
      date: "18.03.02",
      title: "KING-ZONE\nDragonX",
      description: "연속 우승과 국제 무대의 시련 속에서도,\n무너지는 팀을 끝까지 지탱하던\n고독한 상수의 가치.",
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
    videoId: "YYojimRLvkw",
    caption: {
      date: "19.03.02",
      title: "kt Rolster",
      description: "명성과 거리가 먼 잔혹한 현실,\n승강전이라는 벼랑 끝에서 생존을 위해\n모든 것을 쏟아부은 시기.",
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
    videoId: "YYojimRLvkw",
    caption: {
      date: "20.03.02",
      title: "Gen.G",
      description: "지표와 성적은 남았으나\n완벽한 마침표를 찍지 못한,\n스스로를 향한 의문부호를 지워내던 과정.",
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
    videoId: "YYojimRLvkw",
    caption: {
      date: "21.03.02",
      title: "Gen.G",
      description: "위기마다 시선이 모이는\n 절대적 신뢰의 표상,\n월즈 무대에서 다시 한번 증명한 최상위의 기량.",
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
    videoId: "YYojimRLvkw",
    caption: {
      date: "22.03.02",
      title: "NS Redforce",
      description: "낯선 환경과 겹쳐진 부진,\n커리어 사상 가장 낮은 곳에서\n다음 도약을 위해 숨을 죽였던 시간.",
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
    videoId: "YYojimRLvkw",
    caption: {
      date: "23.03.02",
      title: "kt Rolster",
      description: "신뢰를 갖고 다시 찾아준 팀에서\n퍼스트 미드의 위엄을 되찾으며\n보여준 압도적인 퍼포먼스.",
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
    videoId: "YYojimRLvkw",
    caption: {
      date: "24.03.02",
      title: "kt Rolster",
      description: "불확실한 팀의 흐름 속에서도\n스스로 캐리력을 증명하며,\n다시 태어날 우주의 서막을 알린 해.",
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
    videoId: "YYojimRLvkw",
    caption: {
      date: "25.03.02",
      title: "kt Rolster",
      description: "간절함으로 빚어낸 월즈 진출과 준우승,\n멈추지 않는 도전 끝에 도달한\n가장 높은 고도의 궤적.",
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
        // 1. h-[720px]를 h-screen으로 변경하여 화면 전체 높이를 사용하게 합니다.
        // 2. flex와 items-center를 추가하여 내부의 큰 div를 세로 중앙에 배치합니다.
        className="relative w-full h-screen overflow-x-auto overflow-y-hidden cursor-grab no-scrollbar flex items-center"
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseLeave}
        onMouseMove={onMouseMove}
      >
        {/* 전체 타임라인 가로 길이 컨테이너 */}
        {/* h-full 대신 특정 높이(예: 720px)를 유지하면서 중앙에 떠 있게 합니다. */}
        <div className="relative min-w-[4300px] h-[720px] flex items-center">
          
          {/* 중앙 가로선 (Line 2) - 이제 h-[720px]의 딱 중간에 위치합니다. */}
          <div className="absolute left-0 right-0 top-1/2 h-0 border-t-[0.5px] border-white/50" />

          {/* 타임라인 아이템 컨테이너 */}
          <div className="relative flex items-center px-[100px] gap-[80px] left-[14px]">
            {timelineData.map((item, index) => (
              <div
                key={index}
                className="relative flex items-center justify-center shrink-0"
                style={{ width: 300, height: 650 }}
              >
                {/* 연도 텍스트 */}
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

                {/* 노드 (중앙 원) */}
                <TimelineNode 
                  year="" 
                  size={item.size} 
                  videoId={item.videoId} 
                />

                {/* 캡션 박스 */}
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
                                  
                {/* 2016년 전용 꺾인 선 */}
                {item.year === "2016" && (
                  <div 
                    style={{
                      position: 'absolute',
                      width: '28px',
                      height: '71px',
                      left: '123px',
                      top: '343px',
                      borderBottom: '0.5px solid #FFFFFF',
                      borderRight: '0.5px solid #FFFFFF',
                      pointerEvents: 'none'
                    }} 
                  >
                    <div 
                      style={{
                        position: 'absolute',
                        top: '-2px',
                        right: '-2.5px',
                        width: '4px',
                        height: '4px',
                        backgroundColor: '#FFFFFF',
                        borderRadius: '50%'
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