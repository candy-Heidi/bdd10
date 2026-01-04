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
def init_db():
    conn = sqlite3.connect("stars.db")
    cursor = conn.cursor()
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS movies (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT,
            video_url TEXT,
            orbit_speed INTEGER
        )
    """)
    # 샘플 데이터 (데이터가 없을 때만 삽입)
    cursor.execute("SELECT count(*) FROM movies")
    if cursor.fetchone()[0] == 0:
        cursor.execute("INSERT INTO movies (title, video_url, orbit_speed) VALUES (?, ?, ?)", 
                       ("매드무비1", "https://www.w3schools.com/html/mov_bbb.mp4", 10))
        cursor.execute("INSERT INTO movies (title, video_url, orbit_speed) VALUES (?, ?, ?)", 
                       ("매드무비2", "https://www.w3schools.com/html/movie.mp4", 15))
    conn.commit()
    conn.close()

init_db()

@app.get("/api/stars")
def get_stars():
    conn = sqlite3.connect("stars.db")
    conn.row_factory = sqlite3.Row
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM movies")
    rows = cursor.fetchall()
    conn.close()
    return [dict(row) for row in rows]