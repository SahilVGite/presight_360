import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Eye, Globe, Zap } from 'lucide-react';
import Button from '../components/common/Button';
import StatsBar from '../components/common/StatsBar';
import SectionHeader from '../components/common/SectionHeader';
import Card from '../components/common/Card';

const SOLUTIONS = [
  {
    icon: <Shield size={22} />,
    title: 'Strategic Intelligence & Geopolitical Risk',
    desc: 'Understanding power, influence, and uncertainty in a complex world.',
    href: '/solutions/strategic-intelligence',
  },
  {
    icon: <Eye size={22} />,
    title: 'Security Risk Assessment & Management',
    desc: 'Navigating uncertainty, securing success through systematic risk evaluation.',
    href: '/solutions/security-risk',
  },
  {
    icon: <Globe size={22} />,
    title: 'Protective Security Operations',
    desc: 'Confidential intelligence that empowers leadership and protects what matters most.',
    href: '/solutions/protective-security',
  },
  {
    icon: <Zap size={22} />,
    title: 'Crisis Preparedness & Response',
    desc: 'Immediate crisis assistance and emergency response services worldwide.',
    href: '/solutions/crisis-response',
  },
];

const INDUSTRIES = ['Energy', 'Aviation', 'Technology', 'Logistic', 'Finance', 'Development'];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative overflow-hidden"
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          paddingTop: '100px',
          background: 'linear-gradient(135deg, #020b18 0%, #05152a 60%, #071d38 100%)',
        }}
      >
        {/* Radial glow */}
        <div
          style={{
            position: 'absolute',
            right: 0,
            top: 0,
            width: '60%',
            height: '100%',
            background: 'radial-gradient(ellipse at 80% 40%, rgba(26,107,219,0.18) 0%, transparent 65%)',
            pointerEvents: 'none',
          }}
        />

        <div className="relative max-w-6xl mx-auto px-6 py-24">
          <div className="max-w-3xl animate-fade-in-up">
            <p className="section-label mb-4">Presight 360</p>
            <h1
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.5rem, 6vw, 5rem)',
                fontWeight: 900,
                lineHeight: 1.0,
                textTransform: 'uppercase',
                letterSpacing: '0.02em',
                marginBottom: '28px',
              }}
            >
              CONFIDENTIAL INSIGHT THAT EMPOWERS LEADERSHIP
            </h1>
            <p
              className="text-base leading-relaxed mb-10 max-w-xl"
              style={{ color: 'rgba(168,192,214,0.8)' }}
            >
              PreSight 360 is a global intelligence-driven security firm dedicated to mitigating risk for governments, NGOs, corporations, and high-net-worth clients operating in challenging, high-threat settings.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/solutions">
                <Button variant="primary" size="lg" showArrow>
                  Our Solutions
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" size="lg">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section
        style={{ padding: '80px 24px', background: 'var(--color-bg-secondary)' }}
      >
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            label="Our Solutions"
            title="SECURITY INTELLIGENCE: THE INSIGHT BEHIND CONFIDENT DECISIONS"
            subtitle="Smarter security starts with better intelligence."
            className="mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {SOLUTIONS.map((sol, i) => (
              <Link key={i} to={sol.href} className="block">
                <Card className="p-6 h-full group">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                    style={{ background: 'rgba(26,107,219,0.15)', color: 'var(--color-accent-blue-light)' }}
                  >
                    {sol.icon}
                  </div>
                  <h3
                    className="font-semibold mb-2"
                    style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', textTransform: 'uppercase' }}
                  >
                    {sol.title}
                  </h3>
                  <p className="text-sm" style={{ color: 'rgba(168,192,214,0.7)', lineHeight: 1.7 }}>
                    {sol.desc}
                  </p>
                  <div
                    className="mt-4 flex items-center gap-2 text-sm font-medium group-hover:gap-3 transition-all"
                    style={{ color: 'var(--color-accent-red)' }}
                  >
                    Explore <ArrowRight size={14} />
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <StatsBar />

      {/* Industries */}
      <section style={{ padding: '80px 24px', background: 'var(--color-bg-primary)' }}>
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            label="Industries We Work With"
            title="KEY SECTORS"
            className="mb-10"
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {INDUSTRIES.map((ind, i) => (
              <Link
                key={i}
                to="/industries"
                className="card-dark p-5 text-center group cursor-pointer"
              >
                <p
                  className="font-semibold text-sm uppercase tracking-wide"
                  style={{ fontFamily: 'var(--font-display)', color: 'rgba(255,255,255,0.7)' }}
                >
                  {ind}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Presight 360 */}
      <section
        style={{
          padding: '80px 24px',
          background: 'linear-gradient(180deg, #05152a 0%, #020b18 100%)',
          borderTop: '1px solid rgba(255,255,255,0.05)',
        }}
      >
        <div className="max-w-6xl mx-auto text-center">
          <p className="section-label mb-4">Why Presight 360</p>
          <h2 className="section-title mb-6" style={{ maxWidth: '700px', margin: '0 auto 24px' }}>
            WHERE STRATEGY MEETS FORESIGHT
          </h2>
          <p
            className="text-sm max-w-2xl mx-auto leading-relaxed mb-10"
            style={{ color: 'rgba(168,192,214,0.75)' }}
          >
            At PreSight 360, we merge global intelligence capabilities with operational readiness to help clients succeed in high-stakes environments. Our approach is defined by precision, discretion, and relentless commitment to foresight.
          </p>
          <Link to="/about">
            <Button variant="primary" size="md" showArrow>
              Learn More About Us
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
