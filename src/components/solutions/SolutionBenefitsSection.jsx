import { CheckCircle } from 'lucide-react';

export default function SolutionBenefitsSection({ solution }) {
  return (
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
  );
}
