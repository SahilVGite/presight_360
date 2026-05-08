import { Link } from 'react-router-dom';
import Button from '../common/Button';

const TRUSTED_ITEMS = [
  {
    label: 'OUR SOLUTIONS',
    title: 'Trusted Across Industries, Worldwide',
    desc: "PreSight 360 provides end-to-end intelligence-led security solutions for the world's most demanding environments. Our approach is defined by precision, discretion, and relentless commitment to foresight.",
    href: '/solutions',
    imgClass: 'bg-trusted-1',
  },
  {
    label: 'OUR PRESENCE',
    title: 'Trusted Across Industries, Worldwide',
    desc: 'With operations spanning continents, our field operatives and analysts are embedded in the regions that matter most. PreSight 360 delivers real-time intelligence you can act on.',
    href: '/about',
    imgClass: 'bg-trusted-2',
  },
];

export default function TrustedLeadersSection() {
  return (
    <section className="bg-primary py-20 px-6 border-t border-white/05">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs font-bold uppercase tracking-[0.2em] mb-2 text-white/35">
          GUIDING LEADERS THROUGH RISK
        </p>
        <h2 className="section-title mb-10 max-w-[700px] text-[clamp(1.5rem,3.5vw,2.4rem)]">
          GUIDING LEADERS THROUGH RISK, WITH INSIGHT THEY CAN TRUST
        </h2>

        <div className="space-y-6">
          {TRUSTED_ITEMS.map((item, i) => (
            <div
              key={i}
              className="flex flex-col md:flex-row items-stretch rounded-xl overflow-hidden border border-white/07"
            >
              {/* Image */}
              <div className={`w-full md:max-w-[280px] min-h-[200px] shrink-0 relative ${item.imgClass}`}>
                <div className="absolute inset-0 bg-[rgba(2,11,24,0.3)]" />
              </div>
              {/* Content */}
              <div className="flex flex-col justify-center p-7 flex-1 bg-card-60">
                <p className="section-label mb-2">{item.label}</p>
                <h3 className="font-display font-bold uppercase text-[1.15rem] mb-2.5">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed mb-5 text-secondary/70">
                  {item.desc}
                </p>
                <Link to={item.href}>
                  <Button variant="primary" size="sm" showArrow>Learn More</Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <p className="text-xs font-bold uppercase tracking-widest mb-1 text-white/35">
            CONFIDENTIAL INTELLIGENCE. UNMATCHED
          </p>
          <p className="text-sm font-bold uppercase tracking-wider text-accent-red">
            FORESIGHT. UNSHAKEABLE LEADERSHIP.
          </p>
        </div>
      </div>
    </section>
  );
}
