import { useState } from 'react';
import { Plus } from 'lucide-react';
import PageHero from '../components/common/PageHero';
import SectionHeader from '../components/common/SectionHeader';
import CTASection from '../components/common/CTASection';

const SECTORS = [
  { id: 'aviation',    label: 'Aviation',     desc: 'PreSight 360 provides aviation sector clients with comprehensive threat intelligence, security protocols, and crisis response planning to safeguard operations globally.' },
  { id: 'energy',      label: 'Energy',       desc: 'Critical energy infrastructure requires robust protection. We deliver integrated risk management for oil & gas, renewables, and utility sectors.' },
  { id: 'technology',  label: 'Technology',   desc: 'In a rapidly evolving threat landscape, our technology sector services cover cyber-physical risk, executive protection, and strategic intelligence.' },
  { id: 'logistic',    label: 'Logistic',     desc: 'Supply chain disruptions have significant impact. We secure logistics operations from origin to destination with end-to-end intelligence.' },
  { id: 'development', label: 'Development',  desc: 'Development organizations operating in fragile states rely on our field expertise to ensure staff safety, program continuity, and compliance.' },
  { id: 'finance',     label: 'Finance',      desc: 'Financial institutions face unique threats. Our intelligence services help protect assets, executives, and operations in volatile markets.' },
];

export default function Industries() {
  const [activeSector, setActiveSector] = useState(SECTORS[0]);

  return (
    <>
      <PageHero
        label="Industries"
        title="IMMEDIATE CRISIS ASSISTANCE AND EMERGENCY RESPONSE SERVICES WORLDWIDE."
        subtitle="PreSight 360 is a global intelligence-driven security firm dedicated to mitigating risk for governments, NGOs, corporations and high-net-worth clients operating in challenging, high-threat settings."
      />

      <section className="py-20 px-6 bg-secondary">
        <div className="max-w-6xl mx-auto">
          <p className="section-label mb-2">Industries We Work With</p>
          <SectionHeader title="KEY SECTORS" className="mb-10" />

          <div className="rounded-xl overflow-hidden border border-white\/08">
            <div className="flex flex-col sm:flex-row overflow-x-auto">
              {/* Sidebar */}
              <div className="sm:min-w-[160px] bg-card-60 border-b sm:border-b-0 sm:border-r border-white\/06">
                {SECTORS.map((sector) => {
                  const active = activeSector.id === sector.id;
                  return (
                    <button
                      key={sector.id}
                      onClick={() => setActiveSector(sector)}
                      className={[
                        'w-full text-left px-5 py-4 text-sm font-semibold transition-all flex items-center justify-between font-display uppercase tracking-[0.05em] border-none cursor-pointer',
                        active
                          ? 'bg-blue-glow text-white border-l-2 border-accent-red'
                          : 'bg-transparent text-secondary\/60 border-l-2 border-transparent hover:text-white/80',
                      ].join(' ')}
                    >
                      {sector.label}
                      <Plus size={14} className="shrink-0" />
                    </button>
                  );
                })}
              </div>

              {/* Content */}
              <div className="flex-1 p-8 bg-secondary-60 min-h-[320px]">
                <h3 className="font-display font-[800] text-[1.75rem] uppercase mb-4">
                  {activeSector.label}
                </h3>
                <p className="text-sm leading-relaxed text-secondary\/75 max-w-[500px]">
                  {activeSector.desc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
