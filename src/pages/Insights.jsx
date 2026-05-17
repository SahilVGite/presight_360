import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import PageHero from '../components/common/PageHero';
import Card from '../components/common/Card';
import { Avatar1, Avatar2, Avatar3, dummyUserIcon, insight1, insight2, insight3, insight4, insightListing, insightListingBg } from '../assets/images';
import Button from '../components/common/Button';
import SectionHeader from '../components/common/SectionHeader';

export const INSIGHTS_DATA = [
  { slug: 'from-insight-to-impact', category: 'Insights', image: insight2, title: 'From Insight to Impact: Understanding Strategic Intelligence and Risk Management', author: 'Seth Stanton', avatar: Avatar1, date: '07 Apr, 2025', readTime: '2 min read', excerpt: "In today's fast-changing business environment, uncertainty is no longer an exception, it is the norm." },
  { slug: 'why-strategic-intelligence-matters', category: 'News', image: insight3, title: 'Why Strategic Intelligence and Risk Awareness Matter More Than Ever', author: 'Bianca Fontana', avatar: Avatar2, date: '07 Apr, 2025', readTime: '3 min read', excerpt: 'Organizations that succeed are not those that avoid risk entirely, but those that understand it early.' },
  { slug: 'navigating-uncertainty', category: 'Casestudy', image: insight4, title: 'Navigating Uncertainty: The Role of Strategic Intelligence and Risk Concepts', author: 'Claudia Pridham', avatar: Avatar3, date: '07 Apr, 2025', readTime: '4 min read', excerpt: 'A deep dive into how leading organizations build resilience through strategic foresight.' },
  { slug: 'crisis-response-israel-iran', category: 'News', image: insight1, title: "Crisis Response Under Pressure: Sicuro Group's Israel-Iran Escalation Response", author: 'Shafiq B', avatar: dummyUserIcon, date: '16 Jan, 2025', readTime: '5 min read', excerpt: "In today’s fast-changing business environment, uncertainty is no longer an exception, it is the norm. Organizations that succeed are not those that avoid risk entirely, but those that understand it early and respond with clarity and confidence. This is where Strategic Intelligence and Risk Management play a critical role." },
  { slug: 'from-insight-to-impact', category: 'Insights', image: insight2, title: 'From Insight to Impact: Understanding Strategic Intelligence and Risk Management', author: 'Seth Stanton', avatar: Avatar1, date: '07 Apr, 2025', readTime: '2 min read', excerpt: "In today's fast-changing business environment, uncertainty is no longer an exception, it is the norm." },
  { slug: 'why-strategic-intelligence-matters', category: 'News', image: insight3, title: 'Why Strategic Intelligence and Risk Awareness Matter More Than Ever', author: 'Bianca Fontana', avatar: Avatar2, date: '07 Apr, 2025', readTime: '3 min read', excerpt: 'Organizations that succeed are not those that avoid risk entirely, but those that understand it early.' },
  { slug: 'navigating-uncertainty', category: 'Casestudy', image: insight4, title: 'Navigating Uncertainty: The Role of Strategic Intelligence and Risk Concepts', author: 'Claudia Pridham', avatar: Avatar3, date: '07 Apr, 2025', readTime: '4 min read', excerpt: 'A deep dive into how leading organizations build resilience through strategic foresight.' },
  { slug: 'crisis-response-israel-iran', category: 'News', image: insight1, title: "Crisis Response Under Pressure: Sicuro Group's Israel-Iran Escalation Response", author: 'Shafiq B', avatar: dummyUserIcon, date: '16 Jan, 2025', readTime: '5 min read', excerpt: "In today’s fast-changing business environment, uncertainty is no longer an exception, it is the norm. Organizations that succeed are not those that avoid risk entirely, but those that understand it early and respond with clarity and confidence. This is where Strategic Intelligence and Risk Management play a critical role." },
  { slug: 'from-insight-to-impact', category: 'Insights', image: insight2, title: 'From Insight to Impact: Understanding Strategic Intelligence and Risk Management', author: 'Seth Stanton', avatar: Avatar1, date: '07 Apr, 2025', readTime: '2 min read', excerpt: "In today's fast-changing business environment, uncertainty is no longer an exception, it is the norm." },
  { slug: 'why-strategic-intelligence-matters', category: 'News', image: insight3, title: 'Why Strategic Intelligence and Risk Awareness Matter More Than Ever', author: 'Bianca Fontana', avatar: Avatar2, date: '07 Apr, 2025', readTime: '3 min read', excerpt: 'Organizations that succeed are not those that avoid risk entirely, but those that understand it early.' },
  { slug: 'navigating-uncertainty', category: 'Casestudy', image: insight4, title: 'Navigating Uncertainty: The Role of Strategic Intelligence and Risk Concepts', author: 'Claudia Pridham', avatar: Avatar3, date: '07 Apr, 2025', readTime: '4 min read', excerpt: 'A deep dive into how leading organizations build resilience through strategic foresight.' },
  { slug: 'crisis-response-israel-iran', category: 'News', image: insight1, title: "Crisis Response Under Pressure: Sicuro Group's Israel-Iran Escalation Response", author: 'Shafiq B', avatar: dummyUserIcon, date: '16 Jan, 2025', readTime: '5 min read', excerpt: "In today’s fast-changing business environment, uncertainty is no longer an exception, it is the norm. Organizations that succeed are not those that avoid risk entirely, but those that understand it early and respond with clarity and confidence. This is where Strategic Intelligence and Risk Management play a critical role." },
  { slug: 'from-insight-to-impact', category: 'Insights', image: insight2, title: 'From Insight to Impact: Understanding Strategic Intelligence and Risk Management', author: 'Seth Stanton', avatar: Avatar1, date: '07 Apr, 2025', readTime: '2 min read', excerpt: "In today's fast-changing business environment, uncertainty is no longer an exception, it is the norm." },
  { slug: 'why-strategic-intelligence-matters', category: 'News', image: insight3, title: 'Why Strategic Intelligence and Risk Awareness Matter More Than Ever', author: 'Bianca Fontana', avatar: Avatar2, date: '07 Apr, 2025', readTime: '3 min read', excerpt: 'Organizations that succeed are not those that avoid risk entirely, but those that understand it early.' },
  { slug: 'navigating-uncertainty', category: 'Casestudy', image: insight4, title: 'Navigating Uncertainty: The Role of Strategic Intelligence and Risk Concepts', author: 'Claudia Pridham', avatar: Avatar3, date: '07 Apr, 2025', readTime: '4 min read', excerpt: 'A deep dive into how leading organizations build resilience through strategic foresight.' },
  { slug: 'crisis-response-israel-iran', category: 'News', image: insight1, title: "Crisis Response Under Pressure: Sicuro Group's Israel-Iran Escalation Response", author: 'Shafiq B', avatar: dummyUserIcon, date: '16 Jan, 2025', readTime: '5 min read', excerpt: "In today’s fast-changing business environment, uncertainty is no longer an exception, it is the norm. Organizations that succeed are not those that avoid risk entirely, but those that understand it early and respond with clarity and confidence. This is where Strategic Intelligence and Risk Management play a critical role." },
];

function InsightCard({ insight }) {
  return (
    <Link to={`/insights/${insight.slug}`} className="block no-underline">
      <Card className="overflow-hidden group h-full p-5">
        <div className="bg-[linear-gradient(135deg,rgba(26,107,219,0.2)_0%,rgba(7,29,56,0.8)_100%)] flex items-center justify-center text-white/10 [font-size:var(--fs-body-xs)]">
          <img src={insight.image} alt={insight.title} className='aspect-[2.04/1] rounded-[10px] w-full h-auto' />
        </div>
        <div className="mt-2.5">
          <h3 className="line-clamp-2 font-bold mb-3 leading-snug group-hover:opacity-80 transition-opacity font-display [font-size:var(--fs-body)] uppercase">
            {insight.title}
          </h3>
          <div className="flex items-center gap-4 [font-size:var(--fs-body-sm)] text-white">
                <span className="flex items-center gap-1.5"><img src={insight.avatar} alt={insight.author} /> {insight.author}</span>
                <span className="flex items-center gap-1.5"><Calendar size={11} /> {insight.date}</span>
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
      <PageHero label="Insights" title="NEWS & INTELLIGENCE INSIGHTS" bgImage={insightListing} />
    <main className='' style={{
        background: `url(${insightListingBg}) top/cover no-repeat`,
    }}>
      {/* Featured */}
      <section className="py-25">
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
                <Link to={`/insights/${featured.slug}`}>
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

      <div className='mx-auto w-[75vw] h-0.5 bg-white/10' />

      {/* Grid */}
      <section className="py-25">
        <div className="main-wrapper">
          <div className="flex items-center justify-between mb-16">
            <div className=''>
                <h2 className="font-display [font-size:var(--fs-title-lg)] font-bold text-accent-red leading-loose">
              News &amp; Insight
            </h2>
            <p className='[font-size:var(--fs-body-md)]'>To begin the application process, search current openings and click “Apply”.</p>
            </div>
            <div className='relative'>
                <select name="" id="" className='appearance-none rounded-[150px] focus:border-none shadow-[0px_10px_20px_rgba(0,0,0,0.08)] bg-[rgba(255,255,255,0.1)] border-none text-white [font-size:var(--fs-body)] px-6 py-4 pr-10 cursor-pointer'>
                    <option value="" selected disabled>Latest Totpic</option>
                    <option value="">Option 1</option>
                    <option value="">Option 2</option>
                    <option value="">Option 3</option>
                </select>
                <span className='absolute pointer-events-none top-1/2 right-3.5 transform -translate-1/2'>▾</span>
            </div>
          </div>
          {/* <SectionHeader title="News &amp; Insight" className="mb-10" /> */}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8.5">
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
    </main>
    </>
  );
}
