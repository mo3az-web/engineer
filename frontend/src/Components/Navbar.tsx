
import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrollY, setScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `block px-4 py-3 text-sm font-semibold transition-all duration-300 ${
      isActive
        ? "bg-blue-50 text-blue-800"
        : "text-black hover:bg-blue-50 hover:text-blue-800"
    }`;

  return (
    <header
      dir="rtl"
      className="fixed left-0 top-0 z-[1000] w-full text-black"
    >
      <nav className="relative mx-auto flex h-24 max-w-7xl items-center px-6">

        {/* Consultation Button */}
        <Link
          to={"/contact"}
          className="
            absolute right-6 top-1/2 -translate-y-1/2
            hidden sm:block
            border border-white/20
            bg-white/10
            px-5 py-3
            text-sm font-medium
            text-black
            backdrop-blur-md
            transition-all duration-300
            hover:border-white/50
            hover:bg-white/20
          "
        >
          اطلب استشارة
        </Link>

        {/* Menu */}
        <div className="group absolute left-6 top-1/2 -translate-y-1/2">

          {/* Menu Button */}
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="
              flex items-center gap-3
              border border-white/20
              bg-white/10
              px-5 py-3
              text-sm font-medium
              text-white
              backdrop-blur-md
              transition-all duration-300
              hover:border-white/50
              hover:bg-white/20
            "
          >
 

            <span
              className={`
                grid grid-cols-2 gap-[5px]
                transition-transform duration-300
                ${menuOpen ? "rotate-90" : ""}
              `}
            >
              <span className="h-[4px] w-[4px] rounded-full bg-black" />
              <span className="h-[4px] w-[4px] rounded-full bg-black" />
              <span className="h-[4px] w-[4px] rounded-full bg-black" />
              <span className="h-[4px] w-[4px] rounded-full bg-black" />
            </span>
          </button>

          {/* Dropdown */}
          <div
            className={`
              absolute left-0 top-full mt-3
              w-72
              origin-top-left
              border border-black/10
              bg-white/95
              text-black
              shadow-2xl
              backdrop-blur-xl

              transition-all
              duration-300
              ease-[cubic-bezier(0.22,1,0.36,1)]

              ${
                menuOpen
                  ? "visible translate-y-0 scale-100 opacity-100"
                  : "invisible translate-y-[-10px] scale-95 opacity-0"
              }

              group-hover:visible
              group-hover:translate-y-0
              group-hover:scale-100
              group-hover:opacity-100
            `}
          >
            <div className="p-2">

              <NavLink
                to="/"
                onClick={() => setMenuOpen(false)}
                className={navLinkClass}
              >
                الرئيسية
              </NavLink>

              <NavLink
                to="/services"
                onClick={() => setMenuOpen(false)}
                className={navLinkClass}
              >
                خدماتنا
              </NavLink>

              <NavLink
                to="/about"
                onClick={() => setMenuOpen(false)}
                className={navLinkClass}
              >
                عن المكتب
              </NavLink>

              <NavLink
                to="/projects"
                onClick={() => setMenuOpen(false)}
                className={navLinkClass}
              >
                مشاريعنا
              </NavLink>

              <NavLink
                to="/contact"
                onClick={() => setMenuOpen(false)}
                className={navLinkClass}
              >
                تواصل معنا
              </NavLink>

            </div>
          </div>
        </div>

        {/* Logo */}
        <NavLink
          to="/"
          className="
            absolute left-1/2 top-1/2
            -translate-x-1/2
            -translate-y-1/2
          "
        >
          <div className="relative h-32 w-40">

            <img
              src="/gear.png"
              alt=""
              className="absolute right-2/13 top-4/15 z-[1000] w-27"
              style={{
                transform: `rotate(${scrollY * 0.8}deg)`,
              }}
            />

            <img
              src="/logo.png"
              alt="المركز الهندسي للكهروميكانيكا"
              className="relative top-6 w-50 object-contain"
            />

          </div>
        </NavLink>

      </nav>
    </header>
  );
}
