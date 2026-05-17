import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Card from '../common/Card';
import { SOLUTIONS_DATA } from '../../constants/solutionsData';

export default function SolutionsGridSection() {
  return (
    <section className="py-20 px-6 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SOLUTIONS_DATA.map((sol) => (
            <Link key={sol.slug} href={`/solutions/${sol.slug}`} className="block no-underline">
              <Card className="p-7 h-full group">
                <h3 className="font-bold mb-3 font-display [font-size:var(--fs-body-md)] uppercase leading-[1.2]">
                  {sol.title}
                </h3>
                <p className="[font-size:var(--fs-body-sm)] mb-4 text-secondary\/70 leading-[1.7]">
                  {sol.desc}
                </p>
                <div className="mt-auto flex items-center gap-2 [font-size:var(--fs-body-sm)] font-semibold group-hover:gap-3 transition-all text-accent-red font-display uppercase tracking-[0.05em]">
                  View Details <ArrowRight size={14} />
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
