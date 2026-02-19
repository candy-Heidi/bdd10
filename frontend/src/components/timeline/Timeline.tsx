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
  lineTop?:string;
  lineLeft?: string; // width 2px의 절반 보정
  lineHeight?: string;
  dotPosition?: "top" | "bottom";
}

interface TimelineItemData {
  year: string;
  videoId? : string;
  size: "a" |"b" |"c" |"d" |"e" |"f" |"g" |"h" |"i" |"j" ;
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
    size: "a",
    videoId: "YYojimRLvkw",
    caption: {
      date: "점의 시작, 무력했던 신동의 등판",
      title: "CJ Entus",
      description: "기대 속에 나타난 유망주,\n그러나 기울어진 팀의 궤적을 홀로 바꾸기엔\n역부족이었던 첫 번째 점.",
      position: "bottom",
    },
    coords: {
      yearTop: "299px",
      yearLeft: "calc(50% - 28px/2)",
      captionTop: "457.5px",
      captionLeft: "calc(50% - 269px/2 + 0.5px)",
      captionWidth: "269px",
      captionHeight: "152px",
      lineTop:"344px",
      lineLeft: "calc(50% - 2px/2 - 0px)",
      lineHeight: "120px",
      dotPosition: "top",
    }
  },
  {
    year: "2017",
    size: "b",
    videoId: "YYojimRLvkw",
    caption: {
      date: "증명의 시간, 왕좌에 새긴 이름",
      title: "Longzhu Gaming",
      description: "짧은 기회를 압도적 실력으로 잡아채며\n리그 정상에 우뚝 선,가장 화려하고 강렬했던 섬광.",
      position: "top",
    },
    coords: {
      yearTop: "266px",
      yearLeft: "calc(50% - 28px/2)",
      captionTop: "11.5px",
      captionLeft: "calc(50% - 307px/2)",
      captionWidth: "307px",
      captionHeight: "130px",
      lineTop:"135px",
      lineLeft: "calc(50% - 2px/2 - 0px)",
      lineHeight: "116px",
      dotPosition: "bottom",
    }
  },
  {
    year: "2018",
    size: "c",
    videoId: "YYojimRLvkw",
    caption: {
      date: "지배와 균형, 흔들리는 팀의 중심축",
      title: "KING-ZONE DragonX",
      description: "연속 우승과 국제 무대의 시련 속에서도\n무너지는 팀을 끝까지 지탱하던 고독한 상수의 가치.",
      position: "top",
    },
    coords: {
      yearTop: "278px",
      yearLeft: "calc(50% - 28px/2)",
      captionTop: "11.5px",
      captionLeft: "calc(50% - 312px/2)",
      captionWidth: "312px",
      captionHeight: "130px",
      lineTop:"135px",
      lineLeft: "calc(50% - 2px/2 - 0px)",
      lineHeight: "130px",
      dotPosition: "bottom",
    }
  },
  {
    year: "2019",
    size: "d",
    videoId: "YYojimRLvkw",
    caption: {
      date: "낭떠러지의 사투, 살아남아야 했던 해",
      title: "kt Rolster",
      description: "명성과 거리가 먼 잔혹한 현실,\n승강전이라는 벼랑 끝에서\n생존을 위해 모든 것을 쏟아부은 시기.",
      position: "bottom",
    },
    coords: {
      yearTop: "294px",
      yearLeft: "calc(50% - 28px/2)",
      captionTop: "457.5px",
      captionLeft: "calc(50% - 236px/2 + 0.5px)",
      captionWidth: "237px",
      captionHeight: "152px",
      lineTop:"348px",
      lineLeft: "calc(50% - 2px/2 - 0px)",
      lineHeight: "120px",
      dotPosition: "top",
    }
  },
  {
    year: "2020",
    size: "e",
    videoId: "YYojimRLvkw",
    caption: {
      date: "불완전한 비상, 엇갈린 평가의 기록",
      title: "Gen.G Esports",
      description: "지표와 성적은 남았으나 완벽한 마침표를 찍지 못한,\n스스로를 향한 의문 부호를 지워 내던 과정.",
      position: "bottom",
    },
    coords: {
      yearTop: "269px",
      yearLeft: "calc(50% - 28px/2)",
      captionTop: "11.5px",
      captionLeft: "calc(50% - 288px/2 + 0.5px)",
      captionWidth: "309px",
      captionHeight: "130px",
      lineTop:"130px",
      lineLeft: "calc(50% - 2px/2 - 0px)",
      lineHeight: "130px",
      dotPosition: "bottom",
    }
  },
  {
    year: "2021",
    size: "f",
    videoId: "YYojimRLvkw",
    caption: {
      date: "클래스의 부활, 다시 세계의 중심으로",
      title: "Gen.G Esports",
      description: "위기마다 시선이 모이는 절대적 신뢰의 표상.\n월즈 무대에서 다시 한번 증명한 최상위의 기량.",
      position: "bottom",
    },
    coords: {
      yearTop: "278px",
      yearLeft: "calc(50% - 28px/2)",
      captionTop: "11.5px",
      captionLeft: "calc(50% - 288px/2 + 0.5px)",
      captionWidth: "288px",
      captionHeight: "130px",
      lineTop:"130px",
      lineLeft: "calc(50% - 2px/2 - 0px)",
      lineHeight: "140px",
      dotPosition: "bottom",
    }
  },
  {
    year: "2022",
    size: "g",
    videoId: "YYojimRLvkw",
    caption: {
      date: "궤도 이탈, 가장 깊고 어두웠던 심연",
      title: "NS RedForce",
      description: "낯선 환경과 겹쳐진 부진.\n커리어 사상 가장 낮은 곳에서\n다음 도약을 위해 숨을 죽였던 시간.",
      position: "bottom",
    },
    coords: {
      yearTop: "302px",
      yearLeft: "calc(50% - 28px/2)",
      captionTop: "11.5px",
      captionLeft: "calc(50% - 224px/2 - 0.5px)",
      captionWidth: "228px",
      captionHeight: "152px",
      lineTop:"152px",
      lineLeft: "calc(50% - 2px/2 - 0px)",
      lineHeight: "140px",
      dotPosition: "bottom",
    }
  },
  {
    year: "2023",
    size: "h",
    videoId: "YYojimRLvkw",
    caption: {
      date: "화려한 귀환, 다시 타오르는 황금기",
      title: "kt Rolster",
      description: "서로에 대한 신뢰로 다시 만난 Bdd와 kt.\n퍼스트 미드의 위엄을 되찾으며 보여 준 압도적인 퍼포먼스.",
      position: "bottom",
    },
    coords: {
      yearTop: "271px",
      yearLeft: "calc(50% - 28px/2)",
      captionTop: "457.5px",
      captionLeft: "calc(50% - 250px/2 + 0.5px)",
      captionWidth: "250px",
      captionHeight: "152px",
      lineTop:"370px",
      lineLeft: "calc(50% - 2px/2 - 0px)",
      lineHeight: "100px",
      dotPosition: "top",
    }
  },
  {
    year: "2024",
    size: "i",
    videoId: "YYojimRLvkw",
    caption: {
      date: "낭만과 현실 사이, 꺾이지 않는 구심점",
      title: "kt Rolster",
      description: "불확실한 팀의 흐름 속에서도 스스로 캐리력을 증명하며\n다시 태어날 우주의 서막을 알린 해.",
      position: "bottom",
    },
    coords: {
      yearTop: "282px",
      yearLeft: "calc(50% - 28px/2)",
      captionTop: "457.5px",
      captionLeft: "calc(50% - 240px/2 + 0.5px)",
      captionWidth: "240px",
      captionHeight: "152px",
      lineTop:"360px",
      lineLeft: "calc(50% - 2px/2 - 0px)",
      lineHeight: "110px",
      dotPosition: "top",
    }
  },
  {
    year: "2025",
    size: "j",
    videoId: "YYojimRLvkw",
    caption: {
      date: "10년의 염원, 한계를 돌파한 우주의 끝",
      title: "kt Rolster",
      description: "간절함으로 빚어낸 월즈 진출과 준우승.\n멈추지 않는 도전 끝에 도달한\n가장 높은 고도의 궤적.",
      position: "bottom",
    },
    coords: {
      yearTop: "274px",
      yearLeft: "calc(50% - 28px/2)",
      captionTop: "457.5px",
      captionLeft: "calc(50% - 243px/2 + 0.5px)",
      captionWidth: "243px",
      captionHeight: "152px",
      lineTop:"367px",
      lineLeft: "calc(50% - 2px/2 - 0px)",
      lineHeight: "100px",
      dotPosition: "top",
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
          <div className="relative flex items-center px-[100px] gap-[40px] left-[14px]">
            {timelineData.map((item, index) => (
              <div
                key={index}
                className="relative flex items-center justify-center shrink-0"
                style={{ width: 312, height: 650 }}
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
                      fontFamily: '"Sometype Mono", monospace',
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

                {/* 👇 여기에 선과 작은 원(Dot) 코드를 추가하세요 */}
                {item.coords && item.coords.lineTop && (
                  <div 
                    style={{
                      position: 'absolute',
                      width: '1px', // 고정
                      height: item.coords.lineHeight, // 다름
                      left: item.coords.lineLeft, // 다름
                      top: item.coords.lineTop, // 다름
                      backgroundColor: 'rgba(255, 255, 255, 0.5)', // 색상 고정
                      zIndex: 5
                    }}
                  >
                    {/* 선 끝에 달린 작은 원 (Dot) */}
                    <div 
                      style={{
                        position: 'absolute',
                        width: '3px',
                        height: '3px',
                        backgroundColor: 'rgba(255, 255, 255, 0.5)',
                        borderRadius: '50%',
                        left: '0px',
                        transform: 'translateX(-1px)',
                        // 데이터의 dotPosition에 따라 선의 맨 위 혹은 맨 아래에 붙음
                        top: item.coords.dotPosition === 'top' ? '-3px' : 'auto',
                        bottom: item.coords.dotPosition === 'bottom' ? '-3px' : 'auto',
                      }}
                    />
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
                                  
              
                
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }