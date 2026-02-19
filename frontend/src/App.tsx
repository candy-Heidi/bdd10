import React, { useState,useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import bgImage from './components/bg.webp';
import voiceFile from './voice.mp3';

import { Header } from './components/timeline/Header.tsx';
import { Timeline } from './components/timeline/Timeline.tsx';
import { About } from './components/timeline/About.tsx';
import { BeBdd } from './components/timeline/BeBdd.tsx';

import { GlobalFooterLogo } from './components/GlobalFooterLogo.tsx';

function App() {
  const [stage, setStage] = useState<'START' | 'INTRO' | 'MAIN'>('START');
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // 1. START 버튼 클릭 시: 오디오 재생 준비 (브라우저 차단 해제)
  const handleStart = () => {
    setStage('INTRO');
    if (audioRef.current) {
      // 인트로 동안에는 소리를 0으로 하거나 재생만 시켜두고
      audioRef.current.volume = 0; 
      audioRef.current.play().catch(err => console.log("Audio play blocked:", err));
    }
  };

  // 2. 인트로 영상이 끝났을 때: 메인으로 넘어가며 소리 키우기
  const handleIntroEnd = () => {
    setStage('MAIN');
    if (audioRef.current) {
      audioRef.current.volume = 1; // 메인 진입 시 소리 활성화
    }
  };

  // 사운드 On/Off 토글
  const toggleSound = () => {
    if (audioRef.current) {
      const newMuteStatus = !isMuted;
      audioRef.current.muted = newMuteStatus;
      setIsMuted(newMuteStatus);
    }
  };

  return (
    <Router>
      <audio ref={audioRef} src={voiceFile} loop />
      <div className="min-h-screen bg-[#050505] text-white font-pretendard">
        

        {/* 1. START STAGE */}
        {stage === 'START' && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#050505]">
            <button
              onClick={handleStart} // 위에서 만든 handleStart 함수를 연결합니다.
              className="px-12 py-4 border border-white/20 hover:border-white transition-all text-xl tracking-widest font-light"
            >
              ENTER THE UNIVERSE
            </button>
          </div>
        )}

        {/* 2. INTRO STAGE (비디오) */}
        {stage === 'INTRO' && (
          <div className="fixed inset-0 z-[90] flex items-center justify-center bg-black">
            <video 
              autoPlay 
              onEnded={handleIntroEnd} // 영상이 끝나면 자동으로 handleIntroEnd 실행
              className="w-full h-full object-cover"
            >
              <source src="/intro.mp4" type="video/mp4" />
            </video>
            <button
              onClick={handleIntroEnd} // 스킵 버튼을 눌러도 handleIntroEnd 실행
              className="absolute bottom-12 right-12 px-5 py-2 bg-black/40 border border-white/10 text-sm tracking-widest hover:bg-white/10"
            >
              SKIP INTRO →
            </button>
          </div>
        )}

        {/* 3. MAIN STAGE (배경 이미지 적용) */}
        {stage === 'MAIN' && (
          <div 
            className="relative h-screen flex flex-col"
            style={{
              // public/assets/bg.webp 경로 사용
              backgroundImage: `url(${bgImage})`,
              backgroundSize: 'cover',      /* 27인치 화면 꽉 채우기 */
              backgroundPosition: 'center', /* 중앙 정렬 */
              backgroundRepeat: 'no-repeat',
              backgroundAttachment: 'fixed' /* 깊이감 있는 고정 배경 */
            }}
          >
            <button
              onClick={toggleSound}
              className="fixed bottom-[80px] right-6 z-[100] flex items-center gap-2 opacity-50 hover:opacity-100 transition-opacity font-mono text-[13px] tracking-widest"
            >
              <div className={`w-1.5 h-1.5 rounded-full bg-white ${!isMuted ? 'animate-pulse' : 'opacity-30'}`} />
              {isMuted ? "SOUND OFF" : "SOUND ON"}
            </button>
            {/* 배경 위에 어두운 오버레이를 깔고 싶다면 아래 div 주석 해제 */}
            {/* <div className="absolute inset-0 bg-black/40 z-0" /> */}

            <Header />

            <main className="relative flex-1 z-10">
              <Routes>
                <Route
                  path="/"
                  element={
                    <>
                      
                      <Timeline />
                    </>
                  }
                />

                <Route
                  path="/about"
                  element={
                    <>
                      
                      <About />
                    </>
                  }
                />

                <Route path="/be-bdd" element={<BeBdd />} />
              </Routes>
            </main>

            <GlobalFooterLogo />
          </div>
        )}       
      </div>
    </Router>
  );
}

export default App;