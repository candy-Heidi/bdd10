from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import sqlite3

app = FastAPI()

# 프론트엔드와 통신하기 위한 CORS 설정
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # 실제 배포 시에는 리액트 주소만 넣는 것이 안전합니다.
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# DB 초기화 (처음 한 번만 실행)
# main.py 수정 부분
def init_db():
    conn = sqlite3.connect("stars.db")
    cursor = conn.cursor()
    # 기존 movies 테이블 (매드무비용)
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS movies (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT, video_url TEXT, orbit_speed INTEGER
        )
    """)
    # 2번 체험영상용 테이블
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS experiences (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT, video_url TEXT
        )
    """)
    # 3번 전시장 안내용 테이블
    cursor.execute("CREATE TABLE IF NOT EXISTS info (id INTEGER PRIMARY KEY, content TEXT)")
    
    # 샘플 데이터 삽입 (생략 가능)
    conn.commit()
    conn.close()

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