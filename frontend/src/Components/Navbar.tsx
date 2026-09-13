import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-semibold transition-colors duration-300 ${
      isActive
        ? "text-blue-800"
        : "text-black hover:text-blue-800"
    }`;

  const mobileLinkClass = ({ isActive }: { isActive: boolean }) =>
    `block rounded-xl px-4 py-3.5 text-base font-semibold transition-all duration-300 ${
      isActive
        ? "bg-blue-50 text-blue-800"
        : "text-black hover:bg-blue-50 hover:text-blue-800"
    }`;

  return (
    <header
      dir="rtl"
      className="fixed left-0 top-0 z-50 w-full border-b border-black/10 bg-white/95 text-black backdrop-blur-md"
    >
      <nav className="relative mx-auto flex h-24 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-start lg:gap-x-8">
          <NavLink to="/" className={navLinkClass}>
            الرئيسية
          </NavLink>

          <NavLink to="/services" className={navLinkClass}>
            خدماتنا
          </NavLink>

          <NavLink to="/about" className={navLinkClass}>
            عن المكتب
          </NavLink>

          <NavLink to="/projects" className={navLinkClass}>
            مشاريعنا
          </NavLink>
        </div>

        {/* Logo */}
        <NavLink
          to="/"
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
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

        {/* Desktop CTA */}
        <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end">
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `rounded-full px-5 py-2.5 text-sm font-bold text-white shadow-lg transition-all duration-300 ${
                isActive
                  ? "bg-blue-800 shadow-blue-800/20"
                  : "bg-black shadow-black/10 hover:bg-blue-800 hover:shadow-blue-800/20"
              }`
            }
          >
            تواصل معنا
          </NavLink>
        </div>

        {/* Mobile Button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="rounded-lg p-2.5 text-blue-800 transition-all duration-300 hover:bg-blue-50 hover:text-black"
            aria-label="فتح القائمة"
          >
            <Bars3Icon className="size-7" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="relative z-50 lg:hidden"
      >
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm"
          aria-hidden="true"
        />

        <DialogPanel className="fixed inset-y-0 right-0 w-full max-w-sm overflow-y-auto border-l border-black/10 bg-white px-6 py-6 shadow-2xl">
          
          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-lg p-2 text-blue-800 transition-all duration-300 hover:bg-black/5 hover:text-black"
              aria-label="إغلاق القائمة"
            >
              <XMarkIcon className="size-7" />
            </button>

            <img
              src="/logo.png"
              alt="المركز الهندسي للكهروميكانيكا"
              className="w-20"
            />
          </div>

          <div className="mt-10">
            <div className="space-y-2">
              
              <NavLink
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className={mobileLinkClass}
              >
                الرئيسية
              </NavLink>

              <NavLink
                to="/about"
                onClick={() => setMobileMenuOpen(false)}
                className={mobileLinkClass}
              >
                عن المكتب
              </NavLink>

              <NavLink
                to="/services"
                onClick={() => setMobileMenuOpen(false)}
                className={mobileLinkClass}
              >
                خدماتنا
              </NavLink>

              <NavLink
                to="/projects"
                onClick={() => setMobileMenuOpen(false)}
                className={mobileLinkClass}
              >
                مشاريعنا
              </NavLink>

              <NavLink
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className={mobileLinkClass}
              >
                تواصل معنا
              </NavLink>

            </div>

            <div className="mt-8 border-t border-black/10 pt-8">
              <NavLink
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block rounded-xl bg-black px-5 py-3.5 text-center text-sm font-bold text-white transition-all duration-300 hover:bg-blue-800"
              >
                تواصل معنا
              </NavLink>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}