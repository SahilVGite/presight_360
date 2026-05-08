import { useState } from 'react';
import { Plus } from 'lucide-react';
import PageHero from '../components/common/PageHero';
import SectionHeader from '../components/common/SectionHeader';
import CTASection from '../components/common/CTASection';

const SECTORS = [
  {
    id: 'aviation',
    label: 'Aviation',
    desc: 'PreSight 360 provides aviation sector clients with comprehensive threat intelligence, security protocols, and crisis response planning to safeguard operations globally.',
  },
  {
    id: 'energy',
    label: 'Energy',
    desc: 'Critical energy infrastructure requires robust protection. We deliver integrated risk management for oil & gas, renewables, and utility sectors.',
  },
  {
    id: 'technology',
    label: 'Technology',
    desc: 'In a rapidly evolving threat landscape, our technology sector services cover cyber-physical risk, executive protection, and strategic intelligence.',
  },
  {
    id: 'logistic',
    label: 'Logistic',
    desc: 'Supply chain disruptions have significant impact. We secure logistics operations from origin to destination with end-to-end intelligence.',
  },
  {
    id: 'development',
    label: 'Development',
    desc: 'Development organizations operating in fragile states rely on our field expertise to ensure staff safety, program continuity, and compliance.',
  },
  {
    id: 'finance',
    label: 'Finance',
    desc: 'Financial institutions face unique threats. Our intelligence services help protect assets, executives, and operations in volatile markets.',
  },
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

      <section style={{ padding: '80px 24px', background: 'var(--color-bg-secondary)' }}>
        <div className="max-w-6xl mx-auto">
          <p className="section-label mb-2">Industries We Work With</p>
          <SectionHeader title="KEY SECTORS" className="mb-10" />

          {/* Sector accordion / tabs */}
          <div
            className="rounded-xl overflow-hidden"
            style={{ border: '1px solid rgba(255,255,255,0.08)' }}
          >
            <div className="flex overflow-x-auto">
              {/* Sidebar list */}
              <div
                style={{
                  minWidth: '160px',
                  background: 'rgba(7,29,56,0.6)',
                  borderRight: '1px solid rgba(255,255,255,0.06)',
                }}
              >
                {SECTORS.map((sector) => (
                  <button
                    key={sector.id}
                    onClick={() => setActiveSector(sector)}
                    className="w-full text-left px-5 py-4 text-sm font-semibold transition-all flex items-center justify-between"
                    style={{
                      fontFamily: 'var(--font-display)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      background: activeSector.id === sector.id ? 'rgba(26,107,219,0.12)' : 'transparent',
                      color: activeSector.id === sector.id ? 'white' : 'rgba(168,192,214,0.6)',
                      borderLeft: activeSector.id === sector.id ? '2px solid var(--color-accent-red)' : '2px solid transparent',
                      border: 'none',
                      cursor: 'pointer',
                    }}
                  >
                    {sector.label}
                    <Plus size={14} style={{ flexShrink: 0 }} />
                  </button>
                ))}
              </div>

              {/* Content area */}
              <div className="flex-1 p-8" style={{ background: 'rgba(5,21,42,0.6)', minHeight: '320px' }}>
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.75rem',
                    fontWeight: 800,
                    textTransform: 'uppercase',
                    marginBottom: '16px',
                  }}
                >
                  {activeSector.label}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(168,192,214,0.75)', maxWidth: '500px' }}>
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
