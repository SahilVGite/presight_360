import { Link } from 'react-router-dom';
import Button from '../common/Button';

const STRATEGY_ITEMS = [
  {
    title: 'This is dummy text will be replaced with text',
    desc: 'This is dummy text will be replaced with original content. This is dummy text will be replaced with original content.',
    imgClass: 'bg-strategy-1',
    href: '/solutions',
  },
  {
    title: 'Threat Intelligence & Monitoring',
    desc: 'This is dummy text will be replaced with original content. This is dummy text will be replaced with original content.',
    imgClass: 'bg-strategy-2',
    href: '/solutions/threat-intelligence',
  },
  {
    title: 'Network Security Architecture',
    desc: 'This is dummy text will be replaced with original content. This is dummy text will be replaced with original content.',
    imgClass: 'bg-strategy-3',
    href: '/solutions/security-risk',
  },
];

export default function StrategySection() {
  return (
    <section className="bg-secondary py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="section-label mb-3">Presight 360</p>
        <h2 className="section-title mb-10 text-[clamp(1.5rem,3.5vw,2.4rem)]">
          WHERE STRATEGY MEETS FORESIGHT
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {STRATEGY_ITEMS.map((item, i) => (
            <Link
              key={i}
              to={item.href}
              className="group block rounded-xl overflow-hidden transition-all duration-200 border border-white/07 bg-card-70 hover:border-blue/35 no-underline"
            >
              <div className={`h-[180px] relative ${item.imgClass}`}>
                <div className="absolute inset-0 bg-[rgba(2,11,24,0.25)]" />
              </div>
              <div className="p-5">
                <h3 className="font-bold mb-2 leading-snug uppercase text-sm font-display text-white/90">
                  {item.title}
                </h3>
                <p className="text-xs leading-relaxed mb-4 text-secondary/60">
                  {item.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8">
          <Link to="/solutions">
            <Button variant="primary" size="sm" showArrow>
              Learn More
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
