import { Link } from 'react-router-dom';
import Button from '../common/Button';

const SOLUTIONS = [
  { icon: '🛡', title: 'Strategic Intelligence & Geopolitical Risk', desc: 'Understanding power, influence, and uncertainty in a complex world.', href: '/solutions/strategic-intelligence' },
  { icon: '🔒', title: 'Protective Security Operations', desc: 'Confidential intelligence that empowers leadership and protects what matters most.', href: '/solutions/protective-security' },
  { icon: '✈', title: 'Travel Risk Management', desc: 'Comprehensive travel risk assessments and real-time support for international operations.', href: '/solutions/travel-risk' },
  { icon: '🎯', title: 'Threat Intelligence', desc: 'Actionable threat data and analysis to keep your people and assets safe.', href: '/solutions/threat-intelligence' },
  { icon: '📋', title: 'This is Dummy Text', desc: 'This dummy text will be replaced with original content once provided.', href: '/solutions/strategic-intelligence' },
  { icon: '🚨', title: 'Crisis Preparedness & Incident Response', desc: 'Immediate crisis assistance and emergency response services worldwide.', href: '/solutions/crisis-response' },
  { icon: '🔍', title: 'Investigative Services & Due Diligence', desc: 'Deep background research and investigative capabilities for risk-aware decisions.', href: '/solutions/security-risk' },
  { icon: '⚡', title: 'Intelligence Detection & Threat Reporting', desc: 'Continuous monitoring and threat detection across high-risk environments.', href: '/solutions/threat-intelligence' },
];

export default function SecurityIntelligenceSection() {
  return (
    <section className="bg-secondary py-20 px-6 relative overflow-hidden">
      {/* Decorative globe */}
      <div className="absolute -right-[60px] top-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full bg-globe-image opacity-25 pointer-events-none" />
      <div className="absolute -right-[60px] top-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full pointer-events-none bg-[radial-gradient(circle,transparent_40%,var(--color-bg-secondary)_75%)]" />

      <div className="max-w-6xl mx-auto relative">
        <div className="max-w-xl mb-4">
          <p className="section-label mb-3">Our Solutions</p>
          <h2 className="font-display font-[900] uppercase leading-[1.1] tracking-[0.01em] mb-4 text-[clamp(1.6rem,3.5vw,2.4rem)]">
            SECURITY INTELLIGENCE: THE INSIGHT BEHIND CONFIDENT DECISIONS
          </h2>
          <p className="text-sm leading-relaxed mb-8 text-secondary\/75">
            PreSight 360 is a global intelligence-driven security firm dedicated to mitigating risk for governments, NGOs, corporations and high-net-worth clients. Our multidisciplinary team delivers integrated risk management across diverse sectors.
          </p>
          <Button variant="primary" size="sm" showArrow as={Link} to="/solutions">
            Learn More
          </Button>
        </div>

        <p className="text-sm font-semibold uppercase tracking-[0.15em] mt-12 mb-6 text-white/40">
          SMARTER SECURITY STARTS WITH BETTER INTELLIGENCE
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {SOLUTIONS.map((sol, i) => (
            <Link
              key={i}
              to={sol.href}
              className="group block rounded-xl p-4 transition-all duration-200 border border-white\/07 bg-card-70 hover:border-blue\/35 hover:bg-card-70 no-underline"
            >
              <div className="w-9 h-9 rounded-lg flex items-center justify-center mb-3 text-base bg-blue-dim">
                {sol.icon}
              </div>
              <h3 className="text-xs font-bold mb-1.5 leading-snug uppercase font-display text-white/90">
                {sol.title}
              </h3>
              <p className="text-xs leading-relaxed text-secondary\/55">
                {sol.desc}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
