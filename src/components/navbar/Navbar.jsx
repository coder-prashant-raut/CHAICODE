import { useEffect, useState, useRef } from "react";
import { Menu, X, GraduationCap, BookOpen, FileText, Star } from "lucide-react";
import { Link } from 'react-router-dom';
import chailogowhite from "../../assets/chaicode-white.png";
import chailogoblack from "../../assets/chaicode-black.png";

const navItems = [
  { id: "cohort", label: "Cohort", icon: GraduationCap, size: 20 },
  { id: "udemy", label: "Udemy", icon: BookOpen, size: 16 },
  { id: "docs", label: "Docs", icon: FileText, size: 16 },
  { id: "reviews", label: "Reviews", icon: Star, size: 16 },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.y - b.boundingClientRect.y);
        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        } else {
          setActiveSection("");
        }
      },
      { threshold: 0.5 }
    );

    navItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <>
      <header>
        <nav
          ref={navRef}
          aria-label="Main navigation"
          className={`fixed top-0 left-0 right-0 z-100 transition-all duration-400 ease-in-out backdrop-blur-md px-3
            ${scrolled
              ? "bg-white/60 text-black shadow-xl border-b border-gray-200 rounded-xl mt-4 mx-4 md:mx-40 max-w-full py-0"
              : "bg-gradient-to-b from-slate-950 via-slate-90 rounded-none border-white/10 mt-0 mx-0 max-w-full py-2"
            } overflow-x-hidden`}
        >
          <div className="max-w-7xl mx-auto flex justify-between items-center h-16 relative">
            {/* Logo */}
            <Link to="/" className="font-bold text-lg" aria-label="ChaiCode Home">
              <img className="md:h-10 h-6" src={scrolled ? chailogoblack : chailogowhite} alt="ChaiCode logo" />
            </Link>

            {/* Desktop Navigation Links */}
            <ul className="hidden md:flex gap-6 text-sm font-medium" role="menubar">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.id} role="none">
                    <a
                      href={`#${item.id}`}
                      role="menuitem"
                      className={`flex items-center gap-1 transition-colors ${
                        activeSection === item.id
                          ? "text-orange-600 font-semibold"
                          : scrolled
                          ? "text-gray-900 hover:text-orange-600"
                          : "text-orange-100 hover:text-orange-300"
                      }`}
                    >
                      <Icon size={item.size} aria-hidden="true" />
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>

            {/* Desktop Login Button */}
            <Link to="/login">
              <button
                className="hidden md:block px-4 py-1.5 rounded-lg bg-orange-600 hover:bg-orange-700 text-white text-sm font-medium shadow-md transition-all duration-300"
                aria-label="Login"
              >
                Login
              </button>
            </Link>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`md:hidden ${scrolled ? "text-black" : "text-white"}`}
              aria-label="Toggle menu"
              aria-controls="mobile-menu"
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Dropdown */}
          <div
            id="mobile-menu"
            className={`md:hidden transition-all duration-300 overflow-hidden ${
              menuOpen ? "max-h-[500px]" : "max-h-0"
            }`}
          >
            <ul
              className={`max-w-7xl  mx-auto px-4 pb-6 pt-2 flex flex-col  gap-4 shadow-md rounded-b-xl ${
                scrolled ? "bg-white text-black" : "bg-slate-900 text-white"
              }`}
              role="menu"
              aria-label="Mobile Navigation"
            >
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.id} role="none"> 
                    <a
                      href={`#${item.id}`}
                      onClick={handleLinkClick}
                      role="menuitem"
                      className={`flex items-center gap-2 text-sm font-medium transition-colors ${
                        activeSection === item.id
                          ? "text-blue-600 font-semibold"
                          : scrolled
                          ? "text-gray-700 hover:text-blue-500"
                          : "text-white hover:text-blue-400"
                      }`}
                    >
                      <Icon size={18} aria-hidden="true" />
                      {item.label}
                    </a>
                  </li>
                );
              })}

              <li role="none">
                <Link to="/login">
                  <button
                    className="w-full px-4 py-2 rounded-md bg-orange-600 text-white hover:bg-orange-700 transition"
                    aria-label="Login"
                  >
                    Login
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      {/* Spacer */}
      <div className="h-14 sm:h-16" aria-hidden="true" />
    </>
  );
}
