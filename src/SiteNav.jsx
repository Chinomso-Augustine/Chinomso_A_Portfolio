import { NavLink } from "react-router-dom";

const navLinkClass = ({ isActive }) =>
  [
    "block shrink-0 rounded-full px-2.5 py-2 text-xs font-semibold transition sm:px-3 sm:text-sm md:text-[0.95rem]",
    isActive
      ? "bg-[#fffaf2] text-[#112f3a] shadow-sm"
      : "text-white/88 hover:bg-white/15 hover:text-white",
  ].join(" ");

export default function SiteNav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/15 bg-[#112f3a]/94 shadow-[0_8px_24px_rgba(17,47,58,0.2)] backdrop-blur-md">
      <div className="mx-auto flex min-h-16 w-full max-w-[1280px] flex-col gap-2 px-4 py-3 sm:min-h-20 sm:flex-row sm:items-center sm:justify-between sm:px-6 md:px-10">
        <NavLink
          to="/"
          end
          className="shrink-0 text-xs font-bold uppercase tracking-[0.14em] text-white hover:text-white sm:text-sm sm:tracking-[0.18em]"
          aria-label="Chinomso Augustine home"
        >
          Chinomso Augustine
        </NavLink>

        <nav aria-label="Main navigation" className="w-full overflow-x-auto [-webkit-overflow-scrolling:touch] sm:w-auto">
          <ul className="flex w-max items-center gap-1 text-white sm:w-auto sm:justify-end md:gap-2">
            <li>
              <NavLink to="/" end className={navLinkClass}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={navLinkClass}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/resume" className={navLinkClass}>
                Resume
              </NavLink>
            </li>
            <li>
              <a
                href="https://github.com/Chinomso-Augustine"
                target="_blank"
                rel="noreferrer"
                className="block shrink-0 rounded-full px-2.5 py-2 text-xs font-semibold text-white/88 transition hover:bg-white/15 hover:text-white sm:px-3 sm:text-sm md:text-[0.95rem]"
              >
                Github
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/chinomso-augustine-ba9a29258/"
                target="_blank"
                rel="noreferrer"
                className="block shrink-0 rounded-full px-2.5 py-2 text-xs font-semibold text-white/88 transition hover:bg-white/15 hover:text-white sm:px-3 sm:text-sm md:text-[0.95rem]"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="mailto:chinomsoaugustine073@gmail.com"
                className="block shrink-0 rounded-full px-2.5 py-2 text-xs font-semibold text-white/88 transition hover:bg-white/15 hover:text-white sm:px-3 sm:text-sm md:text-[0.95rem]"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
