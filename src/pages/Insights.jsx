import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import PageHero from '../components/common/PageHero';
import Card from '../components/common/Card';

export const INSIGHTS_DATA = [
  {
    slug: 'from-insight-to-impact',
    category: 'Insights',
    title: 'From Insight to Impact: Understanding Strategic Intelligence and Risk Management',
    author: 'Seth Stanton',
    date: '07 Apr, 2025',
    readTime: '2 min read',
    excerpt: 'In today\'s fast-changing business environment, uncertainty is no longer an exception, it is the norm.',
  },
  {
    slug: 'why-strategic-intelligence-matters',
    category: 'News',
    title: 'Why Strategic Intelligence and Risk Awareness Matter More Than Ever',
    author: 'Bianca Fontana',
    date: '07 Apr, 2025',
    readTime: '3 min read',
    excerpt: 'Organizations that succeed are not those that avoid risk entirely, but those that understand it early.',
  },
  {
    slug: 'navigating-uncertainty',
    category: 'Casestudy',
    title: 'Navigating Uncertainty: The Role of Strategic Intelligence and Risk Concepts',
    author: 'Claudia Pridham',
    date: '07 Apr, 2025',
    readTime: '4 min read',
    excerpt: 'A deep dive into how leading organizations build resilience through strategic foresight.',
  },
  {
    slug: 'crisis-response-israel-iran',
    category: 'News',
    title: "Crisis Response Under Pressure: Sicuro Group's Israel-Iran Escalation Response",
    author: 'Shafiq B',
    date: '16 Jan, 2025',
    readTime: '5 min read',
    excerpt: 'In today\'s fast-changing business environment, uncertainty is no longer an exception, it is the norm.',
  },
];

function InsightCard({ insight }) {
  return (
    <Link to={`/insights/${insight.slug}`} className="block">
      <Card className="overflow-hidden group h-full">
        {/* Image placeholder */}
        <div
          style={{
            height: '180px',
            background: 'linear-gradient(135deg, rgba(26,107,219,0.2) 0%, rgba(7,29,56,0.8) 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'rgba(255,255,255,0.1)',
            fontSize: '0.75rem',
          }}
        >
          [ Article Image ]
        </div>
        <div className="p-5">
          <p className="text-xs mb-2 font-semibold uppercase tracking-wider" style={{ color: 'var(--color-accent-red)' }}>
            {insight.category}
          </p>
          <h3
            className="font-bold mb-3 leading-snug group-hover:opacity-80 transition-opacity"
            style={{ fontFamily: 'var(--font-display)', fontSize: '0.95rem', textTransform: 'uppercase' }}
          >
            {insight.title}
          </h3>
          <div className="flex items-center gap-3 text-xs" style={{ color: 'rgba(168,192,214,0.5)' }}>
            <span className="flex items-center gap-1">
              <User size={11} /> {insight.author}
            </span>
            <span className="flex items-center gap-1">
              <Calendar size={11} /> {insight.date}
            </span>
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
      <section style={{ padding: '60px 24px', background: 'var(--color-bg-secondary)' }}>
        <div className="max-w-6xl mx-auto">
          <div
            className="rounded-xl overflow-hidden grid grid-cols-1 md:grid-cols-2"
            style={{ border: '1px solid rgba(255,255,255,0.08)' }}
          >
            <div className="p-8 flex flex-col justify-center" style={{ background: 'rgba(7,29,56,0.7)' }}>
              <p className="text-xs mb-3 font-semibold uppercase tracking-wider" style={{ color: 'var(--color-accent-red)' }}>
                {featured.category}
              </p>
              <h2
                className="mb-4"
                style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.2rem, 2.5vw, 1.75rem)', fontWeight: 800, textTransform: 'uppercase', lineHeight: 1.15 }}
              >
                {featured.title}
              </h2>
              <div className="flex items-center gap-3 text-xs mb-5" style={{ color: 'rgba(168,192,214,0.5)' }}>
                <span className="flex items-center gap-1"><User size={11} /> {featured.author}</span>
                <span className="flex items-center gap-1"><Calendar size={11} /> {featured.date}</span>
              </div>
              <p className="text-sm leading-relaxed mb-6" style={{ color: 'rgba(168,192,214,0.7)' }}>
                {featured.excerpt}
              </p>
              <Link
                to={`/insights/${featured.slug}`}
                className="btn-primary px-5 py-2 text-sm self-start"
              >
                Continue Reading <ArrowRight size={14} />
              </Link>
            </div>
            <div
              style={{
                minHeight: '260px',
                background: 'linear-gradient(135deg, rgba(26,107,219,0.15) 0%, rgba(7,29,56,0.6) 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'rgba(255,255,255,0.1)',
                fontSize: '0.75rem',
              }}
            >
              [ Featured Image ]
            </div>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section style={{ padding: '60px 24px', background: 'var(--color-bg-primary)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-accent-red)', textTransform: 'uppercase' }}>
              News &amp; Insight
            </h2>
            <button
              className="btn-outline px-4 py-2 text-xs"
              style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
            >
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
            <button className="w-8 h-8 flex items-center justify-center rounded" style={{ border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.5)', background: 'none', cursor: 'pointer' }}>
              <ChevronLeft size={14} />
            </button>
            {[1, 2, 3, '...', 30].map((p, i) => (
              <button
                key={i}
                className="w-8 h-8 flex items-center justify-center rounded text-xs"
                style={{
                  border: '1px solid rgba(255,255,255,0.1)',
                  background: p === 2 ? 'var(--color-accent-red)' : 'none',
                  color: p === 2 ? 'white' : 'rgba(255,255,255,0.5)',
                  cursor: 'pointer',
                }}
              >
                {p}
              </button>
            ))}
            <button className="w-8 h-8 flex items-center justify-center rounded" style={{ border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.5)', background: 'none', cursor: 'pointer' }}>
              <ChevronRight size={14} />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
