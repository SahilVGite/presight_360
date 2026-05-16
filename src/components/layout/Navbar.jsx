import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, Menu, X } from "lucide-react";
import { NAV_LINKS } from "../../constants/navigation";
import siteLogo from "../../assets/images/siteLogo.png";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (path) =>
    location.pathname === path || location.pathname.startsWith(path + "/");

  return (
    <header className="fixed top-4 md:top-8 lg:top-14 left-0 right-0 z-50 px-3 md:px-5">
      <div className="max-w-[1792px] mx-auto flex items-center gap-3">

        {/* Main pill */}
        <div
          className={[
            "flex-1 rounded-full overflow-hidden relative flex items-center justify-between px-4 md:px-8 lg:pl-20 lg:pr-8 py-2.5 md:py-3.5 transition-all duration-300 backdrop-blur-nav",
            scrolled
              ? "border border-[#FEFEFE] shadow-[0_4px_24px_rgba(0,0,0,0.5)] bg-transparent"
              : "border border-[#FEFEFE] bg-transparent",
          ].join(" ")}
        >
          {/* Logo */}
          <Link to="/" className="relative z-10 shrink-0">
            <img
              src={siteLogo}
              alt="Presight 360"
              className="w-[130px] sm:w-[160px] md:w-[180px] lg:w-[200px] max-w-full h-auto"
            />
          </Link>

          <div className="flex items-center gap-2">
            {/* Desktop Nav */}
            <ul className="hidden lg:flex items-center gap-1 xl:gap-2 relative z-10 flex-1 justify-center">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={[
                      "block px-3 xl:px-4.5 py-2.5 xl:py-3 text-[calc(var(--fs-body-xs)+1px)] xl:[font-size:var(--fs-body)] font-normal rounded-full transition-all duration-200 whitespace-nowrap font-display tracking-[0.01em] leading-tight",
                      isActive(link.path)
                        ? "border border-accent-red text-accent-red bg-[rgba(232,70,42,0.08)]"
                        : "border border-[#FEFEFE] text-[#FEFEFE] bg-transparent hover:bg-white/5 hover:border-white/50",
                    ].join(" ")}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Right: Contact + Hamburger */}
            <div className="relative z-10 shrink-0 flex items-center gap-2">
              <Link
                to="/contact"
                className="hidden lg:inline-flex items-center bg-accent-red hover:bg-accent-red-hover text-white font-normal text-[calc(var(--fs-body-xs)+1px)] xl:[font-size:var(--fs-body)] px-3 xl:px-4.5 py-2.5 xl:py-3 rounded-full whitespace-nowrap font-display transition-colors duration-200 no-underline tracking-[0.01em] leading-tight"
              >
                Contact Us
              </Link>

              <button
                className="lg:hidden flex items-center justify-center w-8 h-8 rounded-full border border-white/20 text-white/80 bg-transparent cursor-pointer"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X size={16} /> : <Menu size={16} />}
              </button>
            </div>
          </div>
        </div>

        {/* Search icon */}
        <button
          className="hidden lg:flex items-center justify-center shrink-0 w-[26px] h-[26px] text-white cursor-pointer"
          aria-label="Search"
        >
          <Search size={26} />
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="max-w-[1741px] mx-auto mt-2 rounded-2xl overflow-hidden bg-glass border border-white/10 backdrop-blur-nav">
          <ul className="py-3">
            {NAV_LINKS.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={[
                    "block px-5 py-3 text-[calc(var(--fs-body-sm)+1px)] font-normal font-display transition-colors",
                    isActive(link.path) ? "text-accent-red" : "text-white/75 hover:text-white",
                  ].join(" ")}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="px-5 pt-2 pb-3">
              <Link
                to="/contact"
                className="block bg-accent-red text-white font-normal text-[calc(var(--fs-body-sm)+1px)] px-5 py-2.5 rounded-full text-center font-display no-underline hover:bg-accent-red-hover transition-colors"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
