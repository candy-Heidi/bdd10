import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [step, setStep] = useState('START'); // START -> INTRO -> ORBIT
  const [stars, setStars] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  // DB에서 데이터 가져오기
  useEffect(() => {
    fetch('http://localhost:8000/api/stars')
      .then(res => res.json())
      .then(data => setStars(data));
  }, []);

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

      {/* 3단계: 궤도 화면 */}
      {step === 'ORBIT' && (
        <div className="orbit-scene">
          <div className="sun">중심</div>
          {stars.map((star, index) => (
            <div 
              key={star.id} 
              className="star" 
              style={{ 
                animationDuration: `${star.orbit_speed}s`,
                top: `${index * 50}px` 
              }}
              onClick={() => setSelectedVideo(star.video_url)}
            >
              {star.title}
            </div>
          ))}
        </div>
      )}

      {/* 영상 팝업(모달) */}
      {selectedVideo && (
        <div className="modal" onClick={() => setSelectedVideo(null)}>
          <video controls autoPlay src={selectedVideo} className="modal-video" />
        </div>
      )}
    </div>
  );
}

export default App;