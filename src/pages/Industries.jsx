import { useState } from 'react';
import { Plus } from 'lucide-react';
import PageHero from '../components/common/PageHero';
import SectionHeader from '../components/common/SectionHeader';
import CTASection from '../components/common/CTASection';
import { industriesBannerBg, industriesMainImg } from '../assets/images';

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
        // subtitle="PreSight 360 is a global intelligence-driven security firm dedicated to mitigating risk for governments, NGOs, corporations and high-net-worth clients operating in challenging, high-threat settings."
        bgImage={industriesBannerBg}
        isStarsBg={true}
      />

      <section className="py-20 px-6 gradientBgImg industries-section">
        <div className="main-wrapper">
          <div className='flex gap-44 items-center justify-between'>
            <div className='max-w-231.75'>
              <p className="section-label mb-2">Overview</p>
              <SectionHeader title="Immediate crisis assistance and emergency response services worldwide." className="mb-10" />
              <p className='text-[clamp(0.825rem,4vw,1.125rem)] leading-[2.0555]'>
                PreSight 360 is a global intelligence-driven security firm dedicated to mitigating risk for governments, NGOs, corporations and high-net-worth clients operating in challenging, high-threat settings. Our multidisciplinary team combines veteran analysts, technical experts and field operatives to deliver integrated risk management across diverse sectors – from energy and aviation to technology, finance, logistics, agriculture and development. We fuse open-source and classified intelligence with local field knowledge to provide a 360-degree view of emerging threats. By anticipating geopolitical shifts, criminal trends and insider risks, we help clients make informed decisions and maintain continuity of critical operations worldwide.
              </p>
            </div>
            <div className='max-w-141.5'>
              <img src={industriesMainImg} alt="Industries Overview" className='rounded-[20px]' />
            </div>
          </div>
          <div className='mt-32.5'>
            <div>
              <p className="section-label mb-2">Industries we work with</p>
              <SectionHeader title="Key Sectors" className="mb-10" />
            </div>
          </div>
        </div>
      </section>

      {/* <CTASection /> */}
    </>
  );
}
