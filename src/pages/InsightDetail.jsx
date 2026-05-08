import { useParams, Link } from 'react-router-dom';
import { Calendar, User, Clock, Share2, Send, Link2, ArrowLeft } from 'lucide-react';
import PageHero from '../components/common/PageHero';
import Card from '../components/common/Card';
import { INSIGHTS_DATA } from './Insights';

const CATEGORIES = [
  { name: 'Casestudy', count: 10 },
  { name: 'Blogs', count: 18 },
  { name: 'Risk Update', count: 13 },
  { name: 'Global Risk', count: 17 },
  { name: 'Insights', count: 24 },
  { name: 'News', count: 21 },
];

export default function InsightDetail() {
  const { slug } = useParams();
  const insight = INSIGHTS_DATA.find((i) => i.slug === slug);
  const related = INSIGHTS_DATA.filter((i) => i.slug !== slug).slice(0, 4);

  if (!insight) {
    return (
      <div style={{ paddingTop: '120px', textAlign: 'center', minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div>
          <p style={{ color: 'rgba(255,255,255,0.5)', marginBottom: '16px' }}>Article not found.</p>
          <Link to="/insights" style={{ color: 'var(--color-accent-red)' }}>← Back to Insights</Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <PageHero label="Insights" title={insight.title} />

      <section style={{ padding: '80px 24px', background: 'var(--color-bg-secondary)' }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Main content */}
          <div className="md:col-span-2">
            <Link
              to="/insights"
              className="flex items-center gap-2 text-sm mb-8 transition-colors"
              style={{ color: 'rgba(168,192,214,0.6)' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'white')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(168,192,214,0.6)')}
            >
              <ArrowLeft size={14} /> Back to Insights
            </Link>

            <div
              className="rounded-xl p-8"
              style={{ background: 'rgba(7,29,56,0.6)', border: '1px solid rgba(255,255,255,0.07)' }}
            >
              <p className="section-label mb-3">{insight.category}</p>
              <h2
                style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)', fontWeight: 800, textTransform: 'uppercase', marginBottom: '16px', lineHeight: 1.2 }}
              >
                Why Strategic Intelligence and Risk Awareness Matter More Than Ever
              </h2>
              <div className="flex flex-wrap gap-4 text-xs mb-8" style={{ color: 'rgba(168,192,214,0.5)' }}>
                <span className="flex items-center gap-1"><User size={11} /> By Charles Herron</span>
                <span className="flex items-center gap-1"><Clock size={11} /> 2 Min Read</span>
                <span>• 20 Views</span>
              </div>

              <div className="prose" style={{ color: 'rgba(168,192,214,0.8)', lineHeight: 1.8, fontSize: '0.9rem' }}>
                <p className="mb-4">
                  In today's fast-changing business environment, uncertainty is no longer an exception, it is the norm. Organizations that succeed are not those that avoid risk entirely, but those that understand it early and respond with clarity and confidence. This is where Strategic Intelligence and Risk Management play a critical role.
                </p>
                <p className="mb-4">
                  Strategic intelligence refers to the process of collecting, analyzing, and interpreting data to support long-term decision-making. It goes beyond basic reporting by transforming raw information into actionable insights. These insights help leaders anticipate market shifts, understand competitor movements, identify growth opportunities, and align business strategies with future realities.
                </p>

                {/* Video placeholder */}
                <div
                  className="my-6 rounded-xl flex items-center justify-center"
                  style={{ height: '240px', background: 'rgba(26,107,219,0.08)', border: '1px solid rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.2)', cursor: 'pointer' }}
                >
                  ▶ Video Player
                </div>

                <p className="mb-4">
                  Risk is often perceived negatively, but in reality, it is an inherent part of growth and innovation. Strategic risk management begins with risk identification — recognizing potential threats across operations, finances, compliance, technology, and market dynamics. Once risks are identified, they are evaluated based on likelihood and impact.
                </p>
              </div>

              {/* Share */}
              <div className="flex items-center gap-4 mt-8 pt-6" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                <span className="text-xs" style={{ color: 'rgba(168,192,214,0.5)' }}>Share:</span>
                {[Facebook, Send, Instagram].map((Icon, i) => (
                  <button key={i} style={{ color: 'rgba(255,255,255,0.4)', background: 'none', border: 'none', cursor: 'pointer', padding: 4 }}>
                    <Icon size={16} />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* Recent Posts */}
            <Card className="p-5">
              <h3 className="font-bold mb-4" style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', textTransform: 'uppercase' }}>
                Recent Post
              </h3>
              <div className="space-y-4">
                {INSIGHTS_DATA.slice(0, 5).map((post, i) => (
                  <Link key={i} to={`/insights/${post.slug}`} className="flex gap-3 group">
                    <div
                      className="rounded flex-shrink-0"
                      style={{ width: '52px', height: '52px', background: 'rgba(26,107,219,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.6rem', color: 'rgba(255,255,255,0.2)' }}
                    >
                      img
                    </div>
                    <div>
                      <p className="text-xs mb-1" style={{ color: 'var(--color-accent-red)', fontWeight: 600 }}>
                        {post.category} · {post.readTime}
                      </p>
                      <p className="text-xs leading-snug group-hover:opacity-80" style={{ color: 'rgba(255,255,255,0.75)' }}>
                        {post.title.substring(0, 50)}...
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </Card>

            {/* Categories */}
            <Card className="p-5">
              <h3 className="font-bold mb-4" style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', textTransform: 'uppercase' }}>
                Categories
              </h3>
              <ul className="space-y-2">
                {CATEGORIES.map((cat, i) => (
                  <li key={i}>
                    <button
                      className="w-full flex items-center justify-between text-sm py-1 transition-colors"
                      style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(168,192,214,0.7)', textAlign: 'left' }}
                    >
                      <span className="flex items-center gap-2">
                        <span style={{ color: 'rgba(255,255,255,0.3)' }}>›</span>
                        {cat.name}
                      </span>
                      <span style={{ color: 'rgba(255,255,255,0.3)' }}>({cat.count})</span>
                    </button>
                  </li>
                ))}
              </ul>
            </Card>
          </aside>
        </div>
      </section>

      {/* Related Posts */}
      <section style={{ padding: '60px 24px', background: 'var(--color-bg-primary)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-accent-red)', textTransform: 'uppercase' }}>
              Related Post
            </h2>
            <Link to="/insights" className="btn-primary px-4 py-2 text-xs">
              View All →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
            {related.map((post) => (
              <Link key={post.slug} to={`/insights/${post.slug}`} className="block">
                <Card className="overflow-hidden h-full group">
                  <div style={{ height: '120px', background: 'rgba(26,107,219,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,0.1)', fontSize: '0.6rem' }}>
                    [ img ]
                  </div>
                  <div className="p-4">
                    <p className="text-xs font-bold mb-2" style={{ fontFamily: 'var(--font-display)', textTransform: 'uppercase', lineHeight: 1.3, color: 'rgba(255,255,255,0.85)' }}>
                      {post.title}
                    </p>
                    <p className="text-xs" style={{ color: 'rgba(168,192,214,0.5)' }}>
                      By {post.author} · {post.date}
                    </p>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
