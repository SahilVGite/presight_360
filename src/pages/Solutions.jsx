import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import PageHero from '../components/common/PageHero';
import Card from '../components/common/Card';
import CTASection from '../components/common/CTASection';

export const SOLUTIONS_DATA = [
  { slug: 'strategic-intelligence', title: 'Strategic Intelligence & Geopolitical Risk', summary: 'Understanding power, influence, and uncertainty in a complex world.', desc: 'PreSight 360 delivers strategic intelligence that transforms complex data into meaningful insights, enabling informed decision-making and long-term planning.', benefits: ['Significant Cost Savings', 'Operational & Contingency Planning', 'Global Consistency & Coverage', 'Evacuation And Repatriation'] },
  { slug: 'security-risk', title: 'Security Risk Assessment & Management', summary: 'Navigating uncertainty, securing success.', desc: 'Risk Assessment and Risk Management is a critical service offered by Alliance International Security Consulting. Our team utilizes a thorough and systematic approach to identify potential threats and evaluate their impact.', benefits: ['Risk Assessment In High, Medium, Low Risk Areas', 'On-Site Advisory And Support Consultation', 'Critical Infrastructure Risk Management', 'Disaster Recovery & Business Continuity'] },
  { slug: 'protective-security', title: 'Protective Security Operations', summary: 'Confidential intelligence that empowers leadership.', desc: 'Our protective security operations provide comprehensive coverage for executives, assets, and critical operations worldwide.', benefits: ['Executive Protection', 'Asset Security', 'Threat Monitoring', 'Rapid Response'] },
  { slug: 'crisis-response', title: 'Crisis Preparedness & Response', summary: 'Immediate crisis assistance and emergency response services worldwide.', desc: 'When a crisis strikes, PreSight 360 mobilizes rapidly to assess, respond, and resolve. Our global network ensures 24/7 readiness.', benefits: ['Crisis Readiness Assessment', 'Incident Response Planning', 'Business Continuity', 'Post-Crisis Analysis'] },
];

export default function Solutions() {
  return (
    <>
      <PageHero
        label="Our Solutions"
        title="SECURITY INTELLIGENCE: THE INSIGHT BEHIND CONFIDENT DECISIONS"
        subtitle="Smarter security starts with better intelligence."
      />

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

      <CTASection />
    </>
  );
}
