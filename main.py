from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import sqlite3

app = FastAPI()

# 프론트엔드와 통신하기 위한 CORS 설정
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# DB 초기화 함수
def init_db():
    conn = sqlite3.connect("stars.db")
    cursor = conn.cursor()
    
    # 1. 테이블 생성 로직
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS movies (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT, video_url TEXT, orbit_speed INTEGER
        )
    """)
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS experiences (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT, video_url TEXT
        )
    """)
    cursor.execute("CREATE TABLE IF NOT EXISTS info (id INTEGER PRIMARY KEY, content TEXT)")
    
    # 2. 샘플 데이터 삽입 (테이블이 비어있을 때만 실행)
    cursor.execute("SELECT COUNT(*) FROM movies")
    if cursor.fetchone()[0] == 0:
        # 매드무비 샘플 데이터 (디자인 확인용으로 여러 개 넣었습니다)
        sample_movies = [
            ('2016 CJ Entus', 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', 15),
            ('2017 KING-ZONE', 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', 30),
            ('2018 KING-ZONE', 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', 20),
            ('2019 kt Rolster', 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', 18)
        ]
        cursor.executemany("INSERT INTO movies (title, video_url, orbit_speed) VALUES (?, ?, ?)", sample_movies)
        
        # 체험영상 샘플 데이터
        cursor.execute("INSERT INTO experiences (title, video_url) VALUES (?, ?)", 
                       ('보성이 체험영상 테스트', 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'))
        
        # 안내 샘플 데이터
        cursor.execute("INSERT INTO info (content) VALUES (?)", ('전시장 위치: 서울특별시 어딘가',))

    conn.commit()
    conn.close()

# FastAPI 앱 시작 시 자동으로 init_db 실행
@app.on_event("startup")
def startup_event():
    init_db()

@app.get("/api/all-data")
def get_all_data():
    conn = sqlite3.connect("stars.db")
    conn.row_factory = sqlite3.Row
    cursor = conn.cursor()
    movies = [dict(r) for r in cursor.execute("SELECT * FROM movies").fetchall()]
    exps = [dict(r) for r in cursor.execute("SELECT * FROM experiences").fetchall()]
    infos = [dict(r) for r in cursor.execute("SELECT * FROM info").fetchall()]
    conn.close()
    return {"movies": movies, "exps": exps, "infos": infos}