import { NavLink } from "react-router-dom";

export function Header() {
  const baseClass =
    "flex justify-center items-center " +
    "w-[533px] h-10 " +          // 가로 533px, 세로 40px 고정
    "rounded-full font-pretendard text-xs md:text-sm lg:text-base font-bold " +
    "transition-colors whitespace-nowrap";

  const activeClass = "bg-white/10 text-white";
  const inactiveClass = "text-white/50 hover:text-white/70";

  return (
    <header className="w-full px-4 md:px-8 lg:px-24 py-4">
      <nav className="flex items-center gap-2 md:gap-8 lg:gap-16">

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
