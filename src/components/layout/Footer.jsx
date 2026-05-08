import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUp } from 'lucide-react';
import { FOOTER_LINKS } from '../../constants/navigation';
import siteLogo from '../../assets/images/siteLogo.png';
import siteShortLogo from '../../assets/images/siteShortLogo.png';

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="gradient-footer border-t border-white\/06">
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">

          {/* Left — brand + newsletter */}
          <div>
            <div className="flex flex-col gap-3 mb-6">
              <img src={siteLogo} alt="Presight 360" className="h-8 w-auto" />
              <div className="flex items-center gap-2 mt-1">
                <div className="w-7 h-7 rounded bg-blue-badge border border-blue\/30 flex items-center justify-center shrink-0">
                  <img src={siteShortLogo} alt="Alliance" className="w-5 h-5 object-contain" />
                </div>
                <p className="font-bold uppercase text-white/70 text-[0.7rem] tracking-[0.15em]">
                  Alliance International
                </p>
              </div>
            </div>

            <div className="mt-8">
              <p className="text-xs font-semibold mb-3 uppercase tracking-wider text-white/50">
                Subscribe to our Newsletter
              </p>
              <div className="flex items-center">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="input-dark text-sm flex-1 rounded-r-none border-r-0"
                />
                <button className="flex items-center justify-center px-4 py-3 shrink-0 bg-accent-red rounded-r-md text-white border-none cursor-pointer hover:bg-accent-red-hover transition-colors">
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* Right — tagline + links */}
          <div>
            <p className="text-sm mb-8 max-w-xs text-white/40 leading-[1.7]">
              Providing stability and foresight for leaders navigating uncertainty in high-stakes environments worldwide.
            </p>
            <div>
              <p className="text-xs uppercase tracking-widest mb-3 font-semibold text-white/25">
                Info
              </p>
              <div className="divider mb-4" />
              <ul className="space-y-2">
                {FOOTER_LINKS.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-sm text-white/55 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-t border-white\/06">
          <div className="flex flex-col sm:flex-row gap-6 text-xs text-white/30">
            <div>
              <p className="font-semibold uppercase tracking-wider mb-1 text-white/40 text-[0.65rem]">Corporate Office</p>
              <p>+62 899 077 632</p>
            </div>
            <div>
              <p className="font-semibold uppercase tracking-wider mb-1 text-white/40 text-[0.65rem]">Phone</p>
              <p>+62 556 783 472</p>
            </div>
            <div>
              <p className="font-semibold uppercase tracking-wider mb-1 text-white/40 text-[0.65rem]">Email</p>
              <p>info@presight360.com</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={scrollToTop}
              className="flex items-center justify-center w-9 h-9 rounded-full border border-white\/12 text-white/50 bg-transparent cursor-pointer hover:text-white hover:border-white/30 transition-all"
              aria-label="Back to top"
            >
              <ArrowUp size={15} />
            </button>
            <p className="text-xs text-white/25">
              © 2025 Presight 360. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
