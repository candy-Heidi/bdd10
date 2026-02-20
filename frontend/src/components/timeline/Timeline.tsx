import { useState, useEffect, useRef } from "react";
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
  mCoords? : TimelineItemCoords;
}

const timelineData: TimelineItemData[] = [
  {
    year: "2016",
    size: "a",
    videoId: "AibRsxeZIHI",
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
      lineLeft: "calc(50% - 0.5px)",
      lineHeight: "120px",
      dotPosition: "top",
    },
    mCoords: {
      yearTop: "252px", 
      yearLeft: "calc(50% - 14px)",
      captionTop: "350px",
      captionLeft: "calc(50% - 269px/2 + 0.5px)",
      captionWidth: "269px", 
      captionHeight: "140px",
      lineTop: "290px",
      lineLeft: "calc(50% - 0.5px)",
      lineHeight: "90px",
      dotPosition: "top",
    }
  },
  {
    year: "2017",
    size: "b",
    videoId: "euJ9PLm3Su4",
    caption: {
      date: "증명의 시간, 왕좌에 새긴 이름",
      title: "Longzhu Gaming",
      description: "짧은 기회를 압도적 실력으로 잡아채며\n리그 정상에 우뚝 선, 가장 화려하고 강렬했던 섬광.",
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
      lineLeft: "calc(50% - 0.5px)",
      lineHeight: "116px",
      dotPosition: "bottom",
    },
    mCoords: {
      yearTop: "234px",
      yearLeft: "calc(50% - 28px/2)",
      captionTop: "25px",
      captionLeft: "calc(50% - 307px/2)",
      captionWidth: "307px",
      captionHeight: "130px",
      lineTop:"85px",
      lineLeft: "calc(50% - 0.5px)",
      lineHeight: "140px",
      dotPosition: "bottom",
    }
  },
  {
    year: "2018",
    size: "c",
    videoId: "dopfatH5PbY",
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
      lineLeft: "calc(50% - 0.5px)",
      lineHeight: "130px",
      dotPosition: "bottom",
    },
    mCoords: {
      yearTop: "234px",
      yearLeft: "calc(50% - 28px/2)",
      captionTop: "25px",
      captionLeft: "calc(50% - 312px/2)",
      captionWidth: "312px",
      captionHeight: "130px",
      lineTop:"85px",
      lineLeft: "calc(50% - 0.5px)",
      lineHeight: "140px",
      dotPosition: "bottom",
    }
  },
  {
    year: "2019",
    size: "d",
    videoId: "GRNoagUEodA",
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
      lineLeft: "calc(50% - 0.5px)",
      lineHeight: "120px",
      dotPosition: "top",
    },
    mCoords: {
      yearTop: "252px", 
      yearLeft: "calc(50% - 14px)",
      captionTop: "350px",
      captionLeft: "calc(50% - 269px/2 + 0.5px)",
      captionWidth: "237px", 
      captionHeight: "152px",
      lineTop: "295px",
      lineLeft: "calc(50% - 0.5px)",
      lineHeight: "90px",
      dotPosition: "top",
    }
  },
  {
    year: "2020",
    size: "e",
    videoId: "TiR2MFhhSi4",
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
      lineLeft: "calc(50% - 0.5px)",
      lineHeight: "130px",
      dotPosition: "bottom",
    },
    mCoords: {
      yearTop: "234px",
      yearLeft: "calc(50% - 28px/2)",
      captionTop: "25px",
      captionLeft: "calc(50% - 309px/2)",
      captionWidth: "309px",
      captionHeight: "130px",
      lineTop:"85px",
      lineLeft: "calc(50% - 0.5px)",
      lineHeight: "140px",
      dotPosition: "bottom",
    }
  },
  {
    year: "2021",
    size: "f",
    videoId: "fDrQj8d1aXE",
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
      lineLeft: "calc(50% - 0.5px)",
      lineHeight: "140px",
      dotPosition: "bottom",
    },
    mCoords: {
      yearTop: "234px",
      yearLeft: "calc(50% - 28px/2)",
      captionTop: "25px",
      captionLeft: "calc(50% - 288px/2 + 0.5px)",
      captionWidth: "288px",
      captionHeight: "130px",
      lineTop:"85px",
      lineLeft: "calc(50% - 0.5px)",
      lineHeight: "140px",
      dotPosition: "bottom",
    }
  },
  {
    year: "2022",
    size: "g",
    videoId: "tiuXnOf_vGw",
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
      lineLeft: "calc(50% - 0.5px)",
      lineHeight: "140px",
      dotPosition: "bottom",
    },
    mCoords: {
      yearTop: "252px",
      yearLeft: "calc(50% - 28px/2)",
      captionTop: "25px",
      captionLeft: "calc(50% - 224px/2 - 0.5px)",
      captionWidth: "228px",
      captionHeight: "152px",
      lineTop:"85px",
      lineLeft: "calc(50% - 0.5px)",
      lineHeight: "160px",
      dotPosition: "bottom",
    }
  },
  {
    year: "2023",
    size: "h",
    videoId: "oN6qH5Y225Y",
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
      lineLeft: "calc(50% - 0.5px)",
      lineHeight: "100px",
      dotPosition: "top",
    },
    mCoords: {
      yearTop: "234px", 
      yearLeft: "calc(50% - 14px)",
      captionTop: "350px",
      captionLeft: "calc(50% - 250px/2 + 0.5px)",
      captionWidth: "250px", 
      captionHeight: "152px",
      lineTop: "309px",
      lineLeft: "calc(50% - 0.5px)",
      lineHeight: "60px",
      dotPosition: "top",
    }
  },
  {
    year: "2024",
    size: "i",
    videoId: "bi8d8SQnIoc",
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
      lineLeft: "calc(50% - 0.5px)",
      lineHeight: "110px",
      dotPosition: "top",
    },
    mCoords: {
      yearTop: "240px", 
      yearLeft: "calc(50% - 14px)",
      captionTop: "350px",
      captionLeft: "calc(50% - 240px/2 + 0.5px)",
      captionWidth: "240px", 
      captionHeight: "152px",
      lineTop: "300px",
      lineLeft: "calc(50% - 0.5px)",
      lineHeight: "60px",
      dotPosition: "top",
    }
  },
  {
    year: "2025",
    size: "j",
    videoId: "9XC0-DMi8xM",
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
      lineLeft: "calc(50% - 0.5px)",
      lineHeight: "100px",
      dotPosition: "top",
    },
    mCoords: {
      yearTop: "238px", 
      yearLeft: "calc(50% - 14px)",
      captionTop: "350px",
      captionLeft: "calc(50% - 243px/2 + 0.5px)",
      captionWidth: "243px", 
      captionHeight: "152px",
      lineTop: "308px",
      lineLeft: "calc(50% - 0.5px)",
      lineHeight: "60px",
      dotPosition: "top",
    }
  },  
];
export function Timeline() {
  const [isMobile, setIsMobile] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  useEffect(() => {
    const handleResize = () => {
      const mobileWidth = window.innerWidth <= 430;
      const mobileHeight = window.innerHeight <= 750;
      setIsMobile(mobileWidth || mobileHeight);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
  const totalWidth = isMobile ? "5000px" : "4300px";

  return (
    <section
      ref={scrollRef}
      className="relative w-full h-screen overflow-x-auto overflow-y-hidden cursor-grab no-scrollbar flex items-center"
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseLeave}
      onMouseMove={onMouseMove}
    >
      <div 
        className="relative flex items-center" 
        style={{ 
          minWidth: isMobile ? "2200px" : "4300px", 
          height: isMobile ? "600px" : "720px" 
        }}
      >
        <div 
                  className="absolute left-0 top-1/2 h-0 border-t-[0.5px] border-white/50" 
                  style={{width: isMobile ? "3300px" : "4300px" }} 
                />
                
                {/* ✅ 수정 포인트 2: 아래 div 태그 속성 부분에 style을 정확히 포함시킵니다. */}
                <div 
                  className={`relative flex items-center ${isMobile ? 'px-[50px] gap-[20px]' : 'px-[100px] gap-[40px]'} left-[14px]`}
                  style={{ width: totalWidth }} // 여기에 위치해야 합니다.
                >
          {timelineData.map((item, index) => {
            // 변수 선언 로직
            const currentCoords = isMobile ? (item.mCoords || item.coords) : item.coords;
            const itemWidth = isMobile ? 300 : 312;

            return (
              <div
                key={index}
                className="relative flex items-center justify-center shrink-0"
                style={{ width: itemWidth, height: isMobile ? 550 : 650 }}
              >
                {/* 연도 */}
                {currentCoords && (
                  <div 
                    style={{
                      position: 'absolute',
                      top: currentCoords.yearTop,
                      left: currentCoords.yearLeft,
                      width: '28px',
                      height: '14px',
                      fontFamily: '"Sometype Mono", monospace',
                      fontSize: isMobile ? '10px' : '12px',
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

                {/* 선과 점 */}
                {currentCoords && currentCoords.lineTop && (
                  <div 
                    style={{
                      position: 'absolute',
                      width: '1px',
                      height: currentCoords.lineHeight,
                      left: currentCoords.lineLeft,
                      top: currentCoords.lineTop,
                      backgroundColor: 'rgba(255, 255, 255, 0.5)',
                      zIndex: 5
                    }}
                  >
                    <div 
                      style={{
                        position: 'absolute',
                        width: '3px',
                        height: '3px',
                        backgroundColor: 'rgba(255, 255, 255, 0.5)',
                        borderRadius: '50%',
                        left: '0px',
                        transform: 'translateX(-1px)',
                        top: currentCoords.dotPosition === 'top' ? '-3px' : 'auto',
                        bottom: currentCoords.dotPosition === 'bottom' ? '-3px' : 'auto',
                      }}
                    />
                  </div>
                )}                

                {/* 노드 */}
                <div style={{ transform: isMobile ? 'scale(0.7)' : 'none' }}>
                  <TimelineNode 
                    year="" 
                    size={item.size} 
                    videoId={item.videoId} 
                  />
                </div>

                {/* 캡션 */}
                {item.caption && currentCoords && (
                  <div 
                    style={{
                      position: 'absolute',
                      top: currentCoords.captionTop,
                      left: currentCoords.captionLeft,
                      width: currentCoords.captionWidth,
                      height: currentCoords.captionHeight,
                      zIndex: 20
                    }}
                  >
                    <TimelineCaption {...item.caption} />
                  </div>
                )}                
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}