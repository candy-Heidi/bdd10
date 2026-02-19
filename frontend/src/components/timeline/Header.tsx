import { NavLink } from "react-router-dom";

export function Header() {
  // 1. 버튼 스타일: 고정 너비(w-[533px]) 대신 flex-1을 사용하여 비율로 꽉 채우거나,
  // max-w를 주어 너무 커지는 것을 방지합니다. 
  // 여기서는 27인치에서도 예쁘게 보이도록 '비율'을 유지하며 커지게 수정했습니다.
  const baseClass =
    "flex justify-center items-center " +
    "w-full max-w-[533px] h-10 " +  // w-full로 채우되 533px 넘지 않게 설정
    "rounded-full font-pretendard text-xs md:text-sm lg:text-base font-bold " +
    "transition-colors whitespace-nowrap px-4"; // 텍스트 여백 추가

  const activeClass = "bg-white/10 text-white";
  const inactiveClass = "text-white/50 hover:text-white/70";

  return (
    // 2. 헤더 컨테이너: 화면 전체 너비를 쓰되, 내용은 중앙 정렬
    <header className="fixed top-0 left-0 w-full z-50 px-4 md:px-8 lg:px-24 py-4 flex justify-center">
      {/* 3. 네비게이션바: justify-center 추가하여 메뉴들을 화면 정중앙에 배치 */}
      {/* max-w-screen-2xl을 추가하여 27인치에서도 너무 퍼지지 않게 잡아줌 */}
      <nav className="flex items-center justify-center gap-2 md:gap-4 lg:gap-8 w-full max-w-screen-2xl">

        <NavLink
          to="/about"
          className={({ isActive }) =>
            `${baseClass} ${isActive ? activeClass : inactiveClass}`
          }
        >
          About
        </NavLink>

        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `${baseClass} ${isActive ? activeClass : inactiveClass}`
          }
        >
          A Universe Named Bdd
        </NavLink>

        <NavLink
          to="/be-bdd"
          className={({ isActive }) =>
            `${baseClass} ${isActive ? activeClass : inactiveClass}`
          }
        >
          Be-Bdd
        </NavLink>

      </nav>
    </header>
  );
}