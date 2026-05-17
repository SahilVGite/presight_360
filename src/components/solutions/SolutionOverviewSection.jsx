import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function SolutionOverviewSection({ solution }) {
  return (
    <section className="py-20 px-6 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <Link
          href="/solutions"
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
  );
}
