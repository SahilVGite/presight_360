import { useParams, Link } from 'react-router-dom';
import { User, Clock, Send, ArrowLeft } from 'lucide-react';
import PageHero from '../components/common/PageHero';
import Card from '../components/common/Card';
import { INSIGHTS_DATA } from './Insights';

const CATEGORIES = [
  { name: 'Casestudy', count: 10 },
  { name: 'Blogs',     count: 18 },
  { name: 'Risk Update', count: 13 },
  { name: 'Global Risk', count: 17 },
  { name: 'Insights',  count: 24 },
  { name: 'News',      count: 21 },
];

export default function InsightDetail() {
  const { slug } = useParams();
  const insight = INSIGHTS_DATA.find((i) => i.slug === slug);
  const related = INSIGHTS_DATA.filter((i) => i.slug !== slug).slice(0, 4);

  if (!insight) {
    return (
      <div className="pt-[120px] text-center min-h-[60vh] flex items-center justify-center">
        <div>
          <p className="text-white/50 mb-4">Article not found.</p>
          <Link to="/insights" className="text-accent-red no-underline hover:underline">← Back to Insights</Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <PageHero label="Insights" title={insight.title} />

      <section className="py-20 px-6 bg-secondary">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Main content */}
          <div className="md:col-span-2">
            <Link
              to="/insights"
              className="flex items-center gap-2 [font-size:var(--fs-body-sm)] mb-8 text-secondary\/60 hover:text-white transition-colors no-underline"
            >
              <ArrowLeft size={14} /> Back to Insights
            </Link>

            <div className="rounded-xl p-8 bg-card-60 border border-white\/07">
              <p className="section-label mb-3">{insight.category}</p>
              <h2 className="font-display font-[800] uppercase mb-4 leading-[1.2] [font-size:var(--fs-title-sm)]">
                Why Strategic Intelligence and Risk Awareness Matter More Than Ever
              </h2>
              <div className="flex flex-wrap gap-4 [font-size:var(--fs-body-xs)] mb-8 text-secondary\/50">
                <span className="flex items-center gap-1"><User size={11} /> By Charles Herron</span>
                <span className="flex items-center gap-1"><Clock size={11} /> 2 Min Read</span>
                <span>• 20 Views</span>
              </div>

              <div className="prose text-secondary\/80 leading-[1.8] [font-size:var(--fs-body-sm)]">
                <p className="mb-4">
                  In today's fast-changing business environment, uncertainty is no longer an exception, it is the norm. Organizations that succeed are not those that avoid risk entirely, but those that understand it early and respond with clarity and confidence. This is where Strategic Intelligence and Risk Management play a critical role.
                </p>
                <p className="mb-4">
                  Strategic intelligence refers to the process of collecting, analyzing, and interpreting data to support long-term decision-making. It goes beyond basic reporting by transforming raw information into actionable insights. These insights help leaders anticipate market shifts, understand competitor movements, identify growth opportunities, and align business strategies with future realities.
                </p>

                <div className="my-6 rounded-xl h-[240px] flex items-center justify-center bg-blue-subtle border border-white\/06 text-white/20 cursor-pointer">
                  ▶ Video Player
                </div>

                <p className="mb-4">
                  Risk is often perceived negatively, but in reality, it is an inherent part of growth and innovation. Strategic risk management begins with risk identification — recognizing potential threats across operations, finances, compliance, technology, and market dynamics. Once risks are identified, they are evaluated based on likelihood and impact.
                </p>
              </div>

              {/* Share */}
              <div className="flex items-center gap-4 mt-8 pt-6 border-t border-white\/08">
                <span className="[font-size:var(--fs-body-xs)] text-secondary\/50">Share:</span>
                {[Send].map((Icon, i) => (
                  <button key={i} className="text-white/40 bg-transparent border-none cursor-pointer p-1 hover:text-white/70 transition-colors">
                    <Icon size={16} />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            <Card className="p-5">
              <h3 className="font-bold mb-4 font-display [font-size:var(--fs-body)] uppercase">Recent Post</h3>
              <div className="space-y-4">
                {INSIGHTS_DATA.slice(0, 5).map((post, i) => (
                  <Link key={i} to={`/insights/${post.slug}`} className="flex gap-3 group no-underline">
                    <div className="rounded shrink-0 w-[52px] h-[52px] bg-blue-dim flex items-center justify-center text-[calc(var(--fs-body-xs)-2px)] text-white/20">
                      img
                    </div>
                    <div>
                      <p className="[font-size:var(--fs-body-xs)] mb-1 text-accent-red font-semibold">
                        {post.category} · {post.readTime}
                      </p>
                      <p className="[font-size:var(--fs-body-xs)] leading-snug group-hover:opacity-80 text-white/75">
                        {post.title.substring(0, 50)}...
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </Card>

            <Card className="p-5">
              <h3 className="font-bold mb-4 font-display [font-size:var(--fs-body)] uppercase">Categories</h3>
              <ul className="space-y-2">
                {CATEGORIES.map((cat, i) => (
                  <li key={i}>
                    <button className="w-full flex items-center justify-between [font-size:var(--fs-body-sm)] py-1 transition-colors bg-transparent border-none cursor-pointer text-secondary\/70 hover:text-white text-left">
                      <span className="flex items-center gap-2">
                        <span className="text-white/30">›</span>
                        {cat.name}
                      </span>
                      <span className="text-white/30">({cat.count})</span>
                    </button>
                  </li>
                ))}
              </ul>
            </Card>
          </aside>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-[60px] px-6 bg-primary">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-display font-[800] [font-size:var(--fs-body-2xl)] text-accent-red uppercase">Related Post</h2>
            <Link to="/insights" className="btn-primary px-4 py-2 [font-size:var(--fs-body-xs)] no-underline">View All →</Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
            {related.map((post) => (
              <Link key={post.slug} to={`/insights/${post.slug}`} className="block no-underline">
                <Card className="overflow-hidden h-full group">
                  <div className="h-[120px] bg-blue-dim flex items-center justify-center text-white/10 text-[calc(var(--fs-body-xs)-2px)]">
                    [ img ]
                  </div>
                  <div className="p-4">
                    <p className="[font-size:var(--fs-body-xs)] font-bold mb-2 font-display uppercase leading-[1.3] text-white/85">
                      {post.title}
                    </p>
                    <p className="[font-size:var(--fs-body-xs)] text-secondary\/50">
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
