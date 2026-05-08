import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function CTASection({
  label = 'GET IN TOUCH',
  title = 'CONTACT US FOR INTELLIGENCE AND ADVISORY SERVICES',
  actions = [
    { label: 'Talk With Us',        href: '/contact' },
    { label: 'Book An Appointment', href: '/contact' },
  ],
}) {
  return (
    <section className="gradient-cta py-20 px-6 border-t border-white\/05">
      <div className="max-w-6xl mx-auto">
        {label && <p className="section-label mb-4">{label}</p>}
        <h2 className="font-display font-[800] uppercase max-w-[600px] leading-[1.15] mb-10 text-[clamp(1.5rem,3.5vw,2.5rem)]">
          {title}
        </h2>

        <div className="flex flex-col sm:flex-row gap-4">
          {actions.map((action, i) => (
            <Link key={i} to={action.href} className="no-underline">
              <button className="group border border-white\/15 rounded-lg px-6 py-4 bg-white-03 text-white text-[0.9rem] font-medium w-full sm:w-[280px] text-left cursor-pointer flex items-center justify-between transition-all duration-200 font-display hover:border-red\/45 hover:bg-red-badge/6">
                <span>{action.label}</span>
                <ArrowRight size={16} className="text-accent-red shrink-0" />
              </button>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
