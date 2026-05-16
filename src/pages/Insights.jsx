import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import PageHero from '../components/common/PageHero';
import Card from '../components/common/Card';

export const INSIGHTS_DATA = [
  { slug: 'from-insight-to-impact', category: 'Insights', title: 'From Insight to Impact: Understanding Strategic Intelligence and Risk Management', author: 'Seth Stanton', date: '07 Apr, 2025', readTime: '2 min read', excerpt: "In today's fast-changing business environment, uncertainty is no longer an exception, it is the norm." },
  { slug: 'why-strategic-intelligence-matters', category: 'News', title: 'Why Strategic Intelligence and Risk Awareness Matter More Than Ever', author: 'Bianca Fontana', date: '07 Apr, 2025', readTime: '3 min read', excerpt: 'Organizations that succeed are not those that avoid risk entirely, but those that understand it early.' },
  { slug: 'navigating-uncertainty', category: 'Casestudy', title: 'Navigating Uncertainty: The Role of Strategic Intelligence and Risk Concepts', author: 'Claudia Pridham', date: '07 Apr, 2025', readTime: '4 min read', excerpt: 'A deep dive into how leading organizations build resilience through strategic foresight.' },
  { slug: 'crisis-response-israel-iran', category: 'News', title: "Crisis Response Under Pressure: Sicuro Group's Israel-Iran Escalation Response", author: 'Shafiq B', date: '16 Jan, 2025', readTime: '5 min read', excerpt: "In today's fast-changing business environment, uncertainty is no longer an exception, it is the norm." },
];

function InsightCard({ insight }) {
  return (
    <Link to={`/insights/${insight.slug}`} className="block no-underline">
      <Card className="overflow-hidden group h-full">
        <div className="h-[180px] bg-[linear-gradient(135deg,rgba(26,107,219,0.2)_0%,rgba(7,29,56,0.8)_100%)] flex items-center justify-center text-white/10 [font-size:var(--fs-body-xs)]">
          [ Article Image ]
        </div>
        <div className="p-5">
          <p className="[font-size:var(--fs-body-xs)] mb-2 font-semibold uppercase tracking-wider text-accent-red">
            {insight.category}
          </p>
          <h3 className="font-bold mb-3 leading-snug group-hover:opacity-80 transition-opacity font-display [font-size:var(--fs-body)] uppercase">
            {insight.title}
          </h3>
          <div className="flex items-center gap-3 [font-size:var(--fs-body-xs)]text-secondary\/50">
            <span className="flex items-center gap-1"><User size={11} /> {insight.author}</span>
            <span className="flex items-center gap-1"><Calendar size={11} /> {insight.date}</span>
          </div>
        </div>
      </Card>
    </Link>
  );
}

export default function Insights() {
  const featured = INSIGHTS_DATA[3];

  return (
    <>
      <PageHero label="Insights" title="NEWS & INTELLIGENCE INSIGHTS" />

      {/* Featured */}
      <section className="py-[60px] px-6 bg-secondary">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-xl overflow-hidden grid grid-cols-1 md:grid-cols-2 border border-white\/08">
            <div className="p-8 flex flex-col justify-center bg-card-70">
              <p className="[font-size:var(--fs-body-xs)] mb-3 font-semibold uppercase tracking-wider text-accent-red">
                {featured.category}
              </p>
              <h2 className="mb-4 font-display font-[800] uppercase leading-[1.15] [font-size:var(--fs-title-sm)]">
                {featured.title}
              </h2>
              <div className="flex items-center gap-3 [font-size:var(--fs-body-xs)]mb-5 text-secondary\/50">
                <span className="flex items-center gap-1"><User size={11} /> {featured.author}</span>
                <span className="flex items-center gap-1"><Calendar size={11} /> {featured.date}</span>
              </div>
              <p className="[font-size:var(--fs-body-sm)] leading-relaxed mb-6 text-secondary\/70">
                {featured.excerpt}
              </p>
              <Link to={`/insights/${featured.slug}`} className="btn-primary px-5 py-2 [font-size:var(--fs-body-sm)] self-start no-underline">
                Continue Reading <ArrowRight size={14} />
              </Link>
            </div>
            <div className="min-h-[260px] bg-[linear-gradient(135deg,rgba(26,107,219,0.15)_0%,rgba(7,29,56,0.6)_100%)] flex items-center justify-center text-white/10 [font-size:var(--fs-body-xs)]">
              [ Featured Image ]
            </div>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-[60px] px-6 bg-primary">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-display font-[800] [font-size:var(--fs-body-2xl)] text-accent-red uppercase">
              News &amp; Insight
            </h2>
            <button className="btn-outline px-4 py-2 [font-size:var(--fs-body-xs)] flex items-center gap-1.5">
              Latest Topic ▾
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {INSIGHTS_DATA.map((insight) => (
              <InsightCard key={insight.slug} insight={insight} />
            ))}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center gap-2 mt-12">
            <button className="w-8 h-8 flex items-center justify-center rounded border border-white\/10 text-white/50 bg-transparent cursor-pointer hover:border-white/30 transition-colors">
              <ChevronLeft size={14} />
            </button>
            {[1, 2, 3, '...', 30].map((p, i) => (
              <button
                key={i}
                className={`w-8 h-8 flex items-center justify-center rounded [font-size:var(--fs-body-xs)] border border-white\/10 cursor-pointer transition-colors ${p === 2 ? 'bg-accent-red text-white' : 'bg-transparent text-white/50 hover:border-white/30'}`}
              >
                {p}
              </button>
            ))}
            <button className="w-8 h-8 flex items-center justify-center rounded border border-white\/10 text-white/50 bg-transparent cursor-pointer hover:border-white/30 transition-colors">
              <ChevronRight size={14} />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
