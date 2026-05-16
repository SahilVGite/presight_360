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
      <div className="pt-[120px] text-center min-h-[60vh] flex items-center justify-center">
        <div>
          <p className="text-white/50 mb-4">Solution not found.</p>
          <Link to="/solutions" className="text-accent-red no-underline hover:underline">← Back to Solutions</Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <PageHero label="Our Solutions" title={solution.title} />

      {/* Overview */}
      <section className="py-20 px-6 bg-secondary">
        <div className="max-w-6xl mx-auto">
          <Link
            to="/solutions"
            className="flex items-center gap-2 [font-size:var(--fs-body-sm)] mb-10 text-secondary\/60 hover:text-white transition-colors no-underline"
          >
            <ArrowLeft size={14} /> Back to Solutions
          </Link>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-label mb-3">Overview</p>
              <h2 className="font-display font-[800] uppercase leading-[1.1] mb-5 [font-size:var(--fs-title-xl)]">
                {solution.summary.toUpperCase()}
              </h2>
              <p className="[font-size:var(--fs-body-sm)] leading-relaxed text-secondary\/75">
                {solution.desc}
              </p>
            </div>

            <div className="rounded-xl aspect-[4/3] bg-blue-subtle border border-white\/06 flex items-center justify-center text-white/15 [font-size:var(--fs-body-sm)]">
              [ Solution Image ]
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 px-6 bg-primary">
        <div className="max-w-6xl mx-auto">
          <p className="section-label mb-4">Key Benefits</p>
          <div className="rounded-xl p-8 border border-[rgba(232,70,42,0.2)] bg-[rgba(232,70,42,0.03)]">
            <div className="space-y-4">
              {solution.benefits.map((benefit, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 p-5 rounded-xl bg-[rgba(7,29,56,0.8)] border border-white\/06"
                >
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 bg-blue-dim text-accent-blue-light">
                    <CheckCircle size={18} />
                  </div>
                  <p className="font-bold font-display [font-size:var(--fs-body)] uppercase">
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
