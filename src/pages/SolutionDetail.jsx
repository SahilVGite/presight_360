import { useParams, Link } from 'react-router-dom';
import { CheckCircle, ArrowLeft } from 'lucide-react';
import PageHero from '../components/common/PageHero';
import CTASection from '../components/common/CTASection';
import { SOLUTIONS_DATA } from './Solutions';

export default function SolutionDetail() {
  const { slug } = useParams();
  const solution = SOLUTIONS_DATA.find((s) => s.slug === slug);

  if (!solution) {
    return (
      <div style={{ paddingTop: '120px', textAlign: 'center', minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div>
          <p style={{ color: 'rgba(255,255,255,0.5)', marginBottom: '16px' }}>Solution not found.</p>
          <Link to="/solutions" style={{ color: 'var(--color-accent-red)' }}>← Back to Solutions</Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <PageHero label="Our Solutions" title={solution.title} />

      {/* Overview */}
      <section style={{ padding: '80px 24px', background: 'var(--color-bg-secondary)' }}>
        <div className="max-w-6xl mx-auto">
          <Link
            to="/solutions"
            className="flex items-center gap-2 text-sm mb-10 transition-colors"
            style={{ color: 'rgba(168,192,214,0.6)' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'white')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(168,192,214,0.6)')}
          >
            <ArrowLeft size={14} /> Back to Solutions
          </Link>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-label mb-3">Overview</p>
              <h2
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  lineHeight: 1.1,
                  marginBottom: '20px',
                }}
              >
                {solution.summary.toUpperCase()}
              </h2>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(168,192,214,0.75)' }}>
                {solution.desc}
              </p>
            </div>

            <div
              className="rounded-xl"
              style={{
                aspectRatio: '4/3',
                background: 'rgba(26,107,219,0.08)',
                border: '1px solid rgba(255,255,255,0.06)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'rgba(255,255,255,0.15)',
                fontSize: '0.875rem',
              }}
            >
              [ Solution Image ]
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section style={{ padding: '80px 24px', background: 'var(--color-bg-primary)' }}>
        <div className="max-w-6xl mx-auto">
          <p className="section-label mb-4">Key Benefits</p>
          <div
            className="rounded-xl p-8"
            style={{ border: '1px solid rgba(232,70,42,0.2)', background: 'rgba(232,70,42,0.03)' }}
          >
            <div className="space-y-4">
              {solution.benefits.map((benefit, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 p-5 rounded-xl"
                  style={{ background: 'rgba(7,29,56,0.8)', border: '1px solid rgba(255,255,255,0.06)' }}
                >
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(26,107,219,0.15)', color: 'var(--color-accent-blue-light)' }}
                  >
                    <CheckCircle size={18} />
                  </div>
                  <p
                    className="font-bold"
                    style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', textTransform: 'uppercase' }}
                  >
                    {benefit}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
