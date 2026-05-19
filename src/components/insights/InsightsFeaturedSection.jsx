import Link from 'next/link';
import { Calendar } from 'lucide-react';
import { INSIGHTS_DATA } from '../../constants/insightsData';
import Button from '../common/Button';

export default function InsightsFeaturedSection() {
  const featured = INSIGHTS_DATA[3];

  return (
    <section className="sec-gap">
      <div className="main-wrapper">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="py-[2em] md:py-[4em] [@media(min-width:1440px)]:py-[4.687em] px-[2em] md:px-[4em] [@media(min-width:1440px)]:px-[8.125em] [font-size:var(--fs-body)] bg-[rgba(255,255,255,0.02)] backdrop-blur-xl flex flex-col justify-center">
            <h2 className="mb-[0.666em] font-display font-medium leading-[1.2666] [font-size:var(--fs-title-base)]">
              {featured.title}
            </h2>
            <div className="flex items-center gap-4 [font-size:var(--fs-body-sm)] mb-[1.428em] text-white">
              <span className="flex items-center gap-1.5"><img src={featured.avatar} alt={featured.author} /> {featured.author}</span>
              <span className="flex items-center gap-1.5"><Calendar size={11} /> {featured.date}</span>
            </div>
            <p className="[font-size:var(--fs-body)] leading-relaxed mb-[1.25em] text-white">
              {featured.excerpt}
            </p>
            <Link href={`/insights/${featured.slug}`}>
              <Button variant="primary" size="md" showArrow>
                Continue Reading
              </Button>
            </Link>
          </div>
          <div className="flex items-center justify-center text-white/40 [font-size:var(--fs-body-xs)]">
            <img src={featured.image} alt={featured.title} className='w-full h-full object-cover' />
          </div>
        </div>
      </div>
    </section>
  );
}
