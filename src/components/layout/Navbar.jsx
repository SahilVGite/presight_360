import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, Menu, X } from "lucide-react";
import { NAV_LINKS } from "../../constants/navigation";
import siteLogo from "../../assets/images/siteLogo.png";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const isActive = (path) =>
    location.pathname === path || location.pathname.startsWith(path + "/");

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full float-left clear-both"
      style={{ padding: scrolled ? "10px 24px" : "16px 24px" }}
    >
      <div className="head-wrapper mx-auto">
        <nav
          className="nav-pill flex items-center justify-between px-8 py-3.5"
          style={{ transition: "all 0.3s ease" }}
        >
          {/* Logo */}
          <div className="siteLogo">
            <Link to="/" className="shrink-0">
              <img
                src={siteLogo}
                alt="Presight 360"
                className="w-full h-auto max-w-50"
              />
            </Link>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <button
              className="hidden md:flex items-center justify-center w-9 rounded-full transition-colors"
              style={{ color: "rgba(255,255,255,0.6)" }}
              aria-label="Search"
            >
              <Search size={18} />
            </button>

            {/* Desktop Nav */}
            <ul className="hidden md:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="px-4.5 py-3 text-sm font-medium rounded-full transition-all duration-200 block"
                    style={{
                      color: isActive(link.path)
                        ? "#e8462a"
                        : "rgba(255,255,255,0.75)",
                      border: isActive(link.path)
                        ? "1px solid rgba(232,70,42,0.4)"
                        : "1px solid rgba(254, 254, 254, 1)",
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <Link
              to="/contact"
              className="btn-primary hidden md:inline-flex px-5 py-2 text-sm"
            >
              Contact Us
            </Link>

            {/* Mobile toggle */}
            <button
              className="md:hidden flex items-center justify-center w-9 rounded-full"
              style={{
                color: "rgba(255,255,255,0.8)",
                border: "1px solid rgba(255,255,255,0.12)",
              }}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div
            className="md:hidden mt-2 mx-4 rounded-2xl overflow-hidden animate-fade-in"
            style={{
              background: "rgba(7, 29, 56, 0.98)",
              border: "1px solid rgba(255,255,255,0.08)",
              backdropFilter: "blur(20px)",
            }}
          >
            <ul className="py-4">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="block px-6 py-3 text-sm font-medium transition-colors"
                    style={{
                      color: isActive(link.path)
                        ? "#e8462a"
                        : "rgba(255,255,255,0.75)",
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="px-6 pt-3 pb-2">
                <Link
                  to="/contact"
                  className="btn-primary px-5 py-2 text-sm w-full justify-center"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
