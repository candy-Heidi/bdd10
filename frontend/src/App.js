import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [step, setStep] = useState('START'); // START -> INTRO -> ORBIT
  const [page, setPage] = useState('MAIN');  // MAIN(메뉴), MAD(매드무비), EXP(체험), INFO(안내)
  const [data, setData] = useState({ movies: [], exps: [], infos: [] });    // 매드무비 데이터
  const [selectedVideo, setSelectedVideo] = useState(null);

  // DB에서 데이터 가져오기 (기존 주소 유지)
  useEffect(() => {
    // 로컬 테스트 중이라면 주소를 확인하세요!
    fetch('https://bdd10th.onrender.com/api/all-data') 
      .then(res => res.json())
      .then(resData => setData(resData));
  }, []);

  // 유튜브 URL을 재생 가능한 주소로 바꿔주는 함수
  const getYoutubeUrl = (url) => {
    if (url.includes('youtube.com') || url.includes('youtu.be')) {
      const videoId = url.split('v=')[1] || url.split('/').pop();
      return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    }
    return url;
  };

  return (
    <div className="container">
      {/* 1단계: 스타트 버튼 */}
      {step === 'START' && (
        <button className="start-btn" onClick={() => setStep('INTRO')}>START</button>
      )}

      {/* 2단계: 인트로 영상 */}
      {step === 'INTRO' && (
        <video 
          autoPlay 
          muted
          className="full-video" 
          onEnded={() => setStep('ORBIT')}
        >
          <source src={process.env.PUBLIC_URL + '/intro.mp4'} type="video/mp4" />
        </video>
      )}

      {/* 3단계: 궤도 및 메뉴 화면 */}
      {step === 'ORBIT' && (
        <>
          {/* 메인 메뉴판 (버튼 3개) */}
          {page === 'MAIN' && (
            <div className="menu-container">
              <h1 className="menu-title">보성이의 공간</h1>
              <button className="menu-btn" onClick={() => setPage('MAD')}>1. 보성이 매드무비</button>
              <button className="menu-btn" onClick={() => setPage('EXP')}>2. 보성이 체험영상</button>
              <button className="menu-btn" onClick={() => setPage('INFO')}>3. 전시장 안내</button>
            </div>
          )}

          {/* 1번: 매드무비 (기존 궤도 화면) */}
          {page === 'MAD' && (
            <div className="orbit-scene">
              <button className="back-btn" onClick={() => setPage('MAIN')}>← 뒤로가기</button>
              <div className="sun">중심</div>
              {stars.map((star, index) => (
                <div 
                  key={star.id} 
                  className="star" 
                  style={{ animationDuration: `${star.orbit_speed}s` }}
                  onClick={() => setSelectedVideo(star.video_url)}
                >
                  {star.title}
                </div>
              ))}
            </div>
          )}

          {/* 2번: 체험영상 (단순 리스트) */}
          {page === 'EXP' && (
            <div className="info-page">
              <button className="back-btn" onClick={() => setPage('MAIN')}>← 뒤로가기</button>
              <h2>🎥 보성이 체험영상</h2>
              <p>아래 영상을 클릭하면 재생됩니다.</p>
              {/* 나중에 DB에 데이터가 생기면 stars.map처럼 뿌릴 수 있습니다. 지금은 예시 하나만 둘게요. */}
              <div className="info-item" onClick={() => setSelectedVideo('https://www.youtube.com/watch?v=dQw4w9WgXcQ')}>
                영상 제목 (체험영상 예시)
              </div>
            </div>
          )}

          {/* 3번: 전시장 안내 (텍스트) */}
          {page === 'INFO' && (
            <div className="info-page">
              <button className="back-btn" onClick={() => setPage('MAIN')}>← 뒤로가기</button>
              <h2>📍 전시장 안내</h2>
              <div className="info-text">
                <p>전시장 위치: 서울특별시 어딘가</p>
                <p>전시 시간: 10:00 ~ 18:00</p>
                <p>안내 내용: 보성이의 멋진 전시를 구경하세요!</p>
              </div>
            </div>
          )}
        </>
      )}

      {/* 영상 팝업(모달) - 유튜브와 일반 영상 모두 대응 */}
      {selectedVideo && (
        <div className="modal" onClick={() => setSelectedVideo(null)}>
          <div className="modal-content">
            {selectedVideo.includes('youtube') || selectedVideo.includes('youtu.be') ? (
              <iframe 
                src={getYoutubeUrl(selectedVideo)} 
                className="modal-video" 
                allow="autoplay; encrypted-media" 
                allowFullScreen
              />
            ) : (
              <video controls autoPlay src={selectedVideo} className="modal-video" />
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;