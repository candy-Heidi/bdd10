import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Header } from './components/timeline/Header.tsx';
import { Timeline } from './components/timeline/Timeline.tsx';
import { About } from './components/timeline/About.tsx';
import { BeBdd } from './components/timeline/BeBdd.tsx';

import { GlobalDecorations } from './components/GlobalDecorations.tsx';
import { GlobalFooterLogo } from './components/GlobalFooterLogo.tsx';

function App() {
  const [stage, setStage] = useState<'START' | 'INTRO' | 'MAIN'>('START');

  return (
    <Router>
      <div className="min-h-screen bg-[#050505] text-white font-pretendard">

        {/* START */}
        {stage === 'START' && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#050505]">
            <button
              onClick={() => setStage('INTRO')}
              className="px-12 py-4 border border-white/20 hover:border-white transition-all text-xl tracking-widest font-light"
            >
              ENTER THE UNIVERSE
            </button>
          </div>
        )}

        {/* INTRO */}
        {stage === 'INTRO' && (
          <div className="fixed inset-0 z-[90] flex items-center justify-center bg-black">
            <video autoPlay onEnded={() => setStage('MAIN')} className="w-full h-full object-cover">
              <source src="/intro.mp4" type="video/mp4" />
            </video>
            <button
              onClick={() => setStage('MAIN')}
              className="absolute bottom-12 right-12 px-5 py-2 bg-black/40 border border-white/10 text-sm tracking-widest"
            >
              SKIP INTRO →
            </button>
          </div>
        )}

        {stage === 'MAIN' && (
          <div className="relative h-screen flex flex-col">
            <Header />

            <main className="relative flex-1">
              <Routes>
                <Route
                  path="/"
                  element={
                    <>
                      <GlobalDecorations />
                      <Timeline />
                    </>
                  }
                />

                <Route
                  path="/about"
                  element={
                    <>
                      <GlobalDecorations />
                      <About />
                    </>
                  }
                />

                {/* BeBdd → 장식 없음 */}
                <Route path="/be-bdd" element={<BeBdd />} />
              </Routes>
            </main>

            {/* ✅ 로고는 여기서 딱 한 번 */}
            <GlobalFooterLogo />
          </div>
        )}       
      </div>
    </Router>
  );
}

export default App;
