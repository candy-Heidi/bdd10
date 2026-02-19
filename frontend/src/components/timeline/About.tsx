import React from 'react';

export function About() {
  return (
    /* 1. items-start: 세로 중앙 정렬 대신 상단 정렬로 변경
      2. pt-32 md:pt-40: 헤더 아래에서 시작하도록 상단 여백을 충분히 확보 (콘텐츠가 위로 올라감)
    */
    <div className="flex items-start justify-center min-h-screen w-full pt-32 md:pt-40 pb-20">
      
      {/* space-y-6 md:space-y-10: 섹션 간 간격 유지 
      */}
      <div className="text-white opacity-60 font-pretendard max-w-3xl w-full px-6 md:px-10 space-y-6 md:space-y-10">
        
        {/* 섹션 1 */}
        <div className="space-y-1 md:space-y-3">
          <h3 className="text-base md:text-xl font-bold opacity-90 text-white"># 전시 컨셉 CONCEPT</h3>
          <p className="text-xs md:text-base font-light leading-relaxed">
            - 메인컨셉. 우주=비디디 / 팬의 위치 / 10년의 궤적
          </p>
        </div>

        {/* 섹션 2 */}
        <div className="space-y-1 md:space-y-3">
          <h3 className="text-base md:text-xl font-bold opacity-90 text-white"># 디자인과 공간 DESIGN & SPACE</h3>
          <p className="text-xs md:text-base font-light leading-relaxed">
            - 행성 / 리본 / 그래픽 언어 / 컬러<br />
            - 전시 공간을 ‘궤도’로 설정한 이유, 공간 분할의 의도
          </p>
        </div>

        {/* 섹션 3 */}
        <div className="space-y-1 md:space-y-3">
          <h3 className="text-base md:text-xl font-bold opacity-90 text-white"># 음악 제작 노트 MUSIC</h3>
          <p className="text-xs md:text-base font-light leading-relaxed">
            - 제작 노트=음악에 넣은 의도/코멘트/TMI 등
          </p>
        </div>

        {/* 섹션 4 */}
        <div className="space-y-1 md:space-y-3">
          <h3 className="text-base md:text-xl font-bold opacity-90 text-white"># 영상 제작 노트 VIDEO</h3>
          <p className="text-xs md:text-base font-light leading-relaxed">
            - 제작 노트=영상에 넣은 의도/코멘트/TMI 등
          </p>
        </div>

        {/* 섹션 5 */}
        <div className="space-y-1 md:space-y-3">
          <h3 className="text-base md:text-xl font-bold opacity-90 text-white"># 인터랙티브 아카이브 INTERACTIVE ARCHIVE</h3>
          <p className="text-xs md:text-base font-light leading-relaxed">
            - X ROOM에 홈페이지를 왜 이렇게 구성했는지 의도(매드무비/플레이 체험영상)<br/>
            - 기록을 “찾아 들어가는” 전시이기도 하니까 의도설명
          </p>
        </div>

      </div>
    </div>
  );
}