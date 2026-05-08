import { Link } from 'react-router-dom';
import { ArrowRight, Share2, X, MessageCircle, ArrowUp, AtSign } from 'lucide-react';
import { FOOTER_LINKS } from '../../constants/navigation';
import siteLogo from '../../assets/images/siteLogo.png';

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer
      style={{
        background: '#010810',
        borderTop: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <div className="space-y-4">
              <img src={siteLogo} alt="Presight 360" className="h-8 w-auto" />
              {/* Alliance International logo placeholder */}
              <div
                className="flex items-center gap-2 mt-3"
                style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.75rem', letterSpacing: '0.15em' }}
              >
                <div
                  className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold"
                  style={{ background: 'var(--color-accent-blue)', color: 'white' }}
                >
                  A
                </div>
                <span className="font-bold tracking-widest uppercase">Alliance International</span>
              </div>
            </div>

            {/* Newsletter */}
            <div className="mt-8">
              <p className="text-sm font-semibold mb-3" style={{ color: 'rgba(255,255,255,0.7)' }}>
                Subscribe to our newsletter
              </p>
              <div className="flex items-center gap-0">
                <input
                  type="email"
                  placeholder="mindora@email.ru"
                  className="input-dark text-sm"
                  style={{ borderRadius: '6px 0 0 6px', border: '1px solid rgba(255,255,255,0.08)' }}
                />
                <button
                  className="flex items-center justify-center px-4 py-3 flex-shrink-0"
                  style={{
                    background: 'var(--color-accent-red)',
                    borderRadius: '0 6px 6px 0',
                    color: 'white',
                  }}
                >
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* Tagline + Links */}
          <div className="md:col-span-2">
            <p
              className="text-sm mb-8 max-w-xs"
              style={{ color: 'rgba(255,255,255,0.45)', lineHeight: 1.7 }}
            >
              Providing stability and foresight for leaders navigating uncertainty in high-stakes environments worldwide
            </p>

            <div>
              <p
                className="text-xs uppercase tracking-widest mb-4 font-semibold"
                style={{ color: 'rgba(255,255,255,0.3)' }}
              >
                Info
              </p>
              <div className="divider mb-4" />
              <ul className="space-y-2">
                {FOOTER_LINKS.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-sm transition-colors"
                      style={{ color: 'rgba(255,255,255,0.6)' }}
                      onMouseEnter={(e) => (e.target.style.color = 'white')}
                      onMouseLeave={(e) => (e.target.style.color = 'rgba(255,255,255,0.6)')}
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
        <div className="divider mt-12 pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row gap-6 text-xs" style={{ color: 'rgba(255,255,255,0.35)' }}>
            <div>
              <p className="font-semibold uppercase tracking-wider mb-1" style={{ color: 'rgba(255,255,255,0.4)' }}>
                Corporate Office
              </p>
              <p>+62 899 077 632</p>
            </div>
            <div>
              <p className="font-semibold uppercase tracking-wider mb-1" style={{ color: 'rgba(255,255,255,0.4)' }}>
                Phone
              </p>
              <p>+62 556 783 472</p>
            </div>
            <div>
              <p className="font-semibold uppercase tracking-wider mb-1" style={{ color: 'rgba(255,255,255,0.4)' }}>
                Email
              </p>
              <p>mindora@gmail.com</p>
            </div>
          </div>

          {/* Social + Scroll to top */}
          <div className="flex items-center gap-3">
            <button
              onClick={scrollToTop}
              className="flex items-center justify-center w-9 h-9 rounded-full transition-all"
              style={{
                border: '1px solid rgba(255,255,255,0.15)',
                color: 'rgba(255,255,255,0.6)',
              }}
              aria-label="Back to top"
            >
              <ArrowUp size={15} />
            </button>
            {[
              { Icon: AtSign, label: 'Facebook' },
              { Icon: X, label: 'Twitter' },
              { Icon: Share2, label: 'Instagram' },
              { Icon: MessageCircle, label: 'WhatsApp' },
            ].map(({ Icon, label }) => (
              <button
                key={label}
                className="flex items-center justify-center w-9 h-9 rounded-full transition-all"
                style={{ border: '1px solid rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.5)' }}
                aria-label={label}
              >
                <Icon size={15} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
