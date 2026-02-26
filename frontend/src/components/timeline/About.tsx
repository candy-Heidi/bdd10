import React from 'react';

export function About() {
  return (
    <div 
      // 모바일: 너비/높이 90%, 중앙 정렬
      // PC (md 이상): 고정 너비 476px, 고정 높이 894px, 절대 위치 중앙
      className="absolute overflow-hidden 
                 w-[90%] h-[65vh] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                 md:w-[476px] md:h-[894px] md:left-[calc(50%-476px/2+0.5px)] md:top-[calc(50%-894px/2-0.5px)] md:translate-x-0 md:translate-y-0"
    >
      {/* 내부 스크롤 영역 */}
      <div className="w-full h-full overflow-y-auto custom-scrollbar">
        <div className="flex flex-col items-center w-full py-10 font-pretendard text-center text-white font-[300] px-4 md:px-0">
          
          {/* 섹션 1: CONCEPT */}
          <div className="flex flex-col items-center w-full mb-[29px]">
            <h3 className="h-[20px] flex items-center justify-center text-[14px] font-bold leading-[145%]">
              CONCEPT
            </h3>
            <div className="h-[6px]" />
            <p className="text-[14px] leading-[145%] opacity-60 break-keep">
              우주는 하나의 개념이면서, 동시에 그 안에 존재하는 모든 것의 총체입니다.<br />
              ‘비디디는 우주다’라고 정한 순간, 그를 중심으로 흘러온 시간과 기록,<br />
              그리고 함께해온 팬들까지 하나의 세계로 묶어보고자 했습니다.
            </p>
          </div>

          {/* 섹션 2: DESIGN & SPACE */}
          <div className="flex flex-col items-center w-full mb-[29px]">
            <h3 className="h-[20px] flex items-center justify-center text-[14px] font-bold leading-[145%]">
              DESIGN & SPACE
            </h3>
            <div className="h-[6px]" />
            <p className="text-[14px] leading-[145%] opacity-60 break-keep">
              본 전시는 단순한 나열이 아니라, 비디디라는 우주를 시각적으로 구현하고자 했습니다.<br />
              우주를 ‘행성’으로, 기념을 ‘리본’의 모티프로 풀어내어 로고와 디자인을 제작했습니다.<br />
              전시 전반의 그래픽과 공간은 이러한 우주 콘셉트를 바탕으로 구성되었습니다.<br />
              ‘10년 = X’ 요소를 도입해 각 공간을 구분했으며, 공간 곳곳에는<br />
              비디디와 관련된 요소를 직접적으로, 혹은 작은 이스터에그 형태로 담아두었습니다.<br />
              발견하는 과정 또한 관람의 일부가 되기를 바랍니다.
            </p>
          </div>

          {/* 섹션 3: MUSIC */}
          <div className="flex flex-col items-center w-full mb-[29px]">
            <h3 className="h-[20px] flex items-center justify-center text-[14px] font-bold leading-[145%]">
              MUSIC
            </h3>
            <div className="h-[6px]" />
            <p className="text-[14px] leading-[145%] opacity-60 break-keep">
              비디디의 10년을 하나의 우주여행으로 담아낸 전시 사운드입니다.<br />
              시레레(BDD) 멜로디를 중심으로 비디디의 10년이 지닌 롤러코스터와 같은 흐름을<br />
              표현했습니다. 우주 소음과 서서히 변화하는 심장박동에 맞추어<br />
              비디디라는 우주를 여행하듯 전시를 감상할 수 있기를 바랍니다.
            </p>
          </div>

          {/* 섹션 4: VIDEO */}
          <div className="flex flex-col items-center w-full mb-[29px]">
            <h3 className="h-[20px] flex items-center justify-center text-[14px] font-bold leading-[145%]">
              VIDEO
            </h3>
            <div className="h-[6px]" />
            <p className="text-[14px] leading-[145%] opacity-60 break-keep">
              에너지가 응축된 점에서 폭발이 일어나 우주가 탄생했듯,<br />
              Bdd의 데뷔는 또 다른 빅뱅이었습니다. 그의 10년의 여정, 그리고 염원을 담은 15분.<br />
              위대한 미드 라이너의 10년을 담기에 15분은 너무 짧았습니다.<br />
              끝나지 않은 그의 우주를 계속해서 응원할 수 있기를 바랍니다.
            </p>
          </div>

          {/* 섹션 5: INTERACTIVE WEB */}
          <div className="flex flex-col items-center w-full">
            <h3 className="h-[20px] flex items-center justify-center text-[14px] font-bold leading-[145%]">
              INTERACTIVE WEB
            </h3>
            <div className="h-[6px]" />
            <p className="text-[14px] leading-[145%] opacity-60 break-keep px-2">
              *<br />
              전시장에서 ‘비디디라는 우주’를 직접 유영했다면,<br />
              웹페이지에서는 제3자 혹은 비디디의 시점으로<br />
              그의 10년을 관찰하는 목격자가 됩니다. 그가 지나온 궤적을 되짚고,<br />
              그가 바라보던 시선을 직접 경험해 보시길 바랍니다.<br />
              <br />
              *<br />
              비디디(Bdd)의 빛나는 10년을 행성에 담아 이곳에 기록했습니다.<br />
              전시회 기간이 지난 뒤에도 이 홈페이지는 사라지지 않고 여러분의 곁에<br />
              늘 머물러 있을 예정입니다. 보고 싶을 때마다 언제든 보성이의 우주로 찾아와,<br />
              그 찬란한 궤도 위를 함께 거닐어 주시길 바랍니다. 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}