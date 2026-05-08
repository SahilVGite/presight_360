import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const REPORTS = [
  {
    category: 'Insights',
    title: 'Counter retail prices in the U.S. are rising sharply',
    desc: 'This is dummy text will be replaced with original content.',
    date: '07 Apr, 2025',
    imgClass: 'bg-report-1',
    href: '/insights/from-insight-to-impact',
  },
  {
    category: 'News',
    title: 'Counter retail prices in the U.S. are rising sharply',
    desc: 'This is dummy text will be replaced with original content.',
    date: '07 Apr, 2025',
    imgClass: 'bg-report-2',
    href: '/insights/why-strategic-intelligence-matters',
  },
  {
    category: 'Report',
    title: 'Counter retail prices in the U.S. are rising sharply',
    desc: 'This is dummy text will be replaced with original content.',
    date: '07 Apr, 2025',
    imgClass: 'bg-report-3',
    href: '/insights/navigating-uncertainty',
  },
];

export default function ReportsSection() {
  return (
    <section className="bg-primary py-20 px-6 border-t border-white/05">
      <div className="max-w-6xl mx-auto">
        <p className="section-label mb-3">Presight 360</p>
        <h2 className="section-title mb-10 text-[clamp(1.5rem,3vw,2rem)]">
          REPORTS
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {REPORTS.map((report, i) => (
            <Link
              key={i}
              to={report.href}
              className="group block rounded-xl overflow-hidden transition-all duration-200 border border-white/07 bg-card-60 hover:border-blue/35 no-underline"
            >
              {/* Image area */}
              <div className={`h-[140px] relative ${report.imgClass}`}>
                <div className="absolute inset-0 bg-overlay" />
                <div className="absolute top-2.5 left-2.5 bg-red-badge text-white text-[0.65rem] font-bold px-2 py-0.5 rounded uppercase tracking-[0.05em]">
                  {report.category}
                </div>
              </div>

              <div className="p-4">
                <h3 className="text-xs font-bold mb-2 leading-snug uppercase font-display text-white/85">
                  {report.title}
                </h3>
                <p className="text-xs mb-3 text-secondary/55">
                  {report.desc}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-secondary/40">{report.date}</span>
                  <span className="text-xs font-semibold flex items-center gap-1 text-accent-red">
                    Read <ArrowRight size={11} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
