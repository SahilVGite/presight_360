import { useState } from 'react';
import { Plus } from 'lucide-react';
import PageHero from '../components/common/PageHero';
import SectionHeader from '../components/common/SectionHeader';
import CTASection from '../components/common/CTASection';
import { industriesBannerBg, industriesMainImg } from '../assets/images';

const SECTORS = [
  { id: 'aviation',    label: 'Aviation',     desc: 'PreSight 360 provides aviation sector clients with comprehensive threat intelligence, security protocols, and crisis response planning to safeguard operations globally.',    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=900&q=80' },
  { id: 'energy',      label: 'Energy',       desc: 'Critical energy infrastructure requires robust protection. We deliver integrated risk management for oil & gas, renewables, and utility sectors.',                        image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=900&q=80' },
  { id: 'technology',  label: 'Technology',   desc: 'In a rapidly evolving threat landscape, our technology sector services cover cyber-physical risk, executive protection, and strategic intelligence.',                   image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&q=80' },
  { id: 'logistic',    label: 'Logistic',     desc: 'Supply chain disruptions have significant impact. We secure logistics operations from origin to destination with end-to-end intelligence.',                             image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=900&q=80' },
  { id: 'development', label: 'Development',  desc: 'Development organizations operating in fragile states rely on our field expertise to ensure staff safety, program continuity, and compliance.',                        image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&q=80' },
  { id: 'finance',     label: 'Finance',      desc: 'Financial institutions face unique threats. Our intelligence services help protect assets, executives, and operations in volatile markets.',                            image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=900&q=80' },
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
          <div className='flex  [@media(max-width:1023px)]:flex-col gap-22 items-center justify-between'>
            <div className='max-w-full lg:max-w-[55%]'>
              <p className="section-label mb-2">Overview</p>
              <SectionHeader title="Immediate crisis assistance and emergency response services worldwide." className="mb-10" />
              <p className='[font-size:var(--fs-body-md)] leading-[2.0555]'>
                PreSight 360 is a global intelligence-driven security firm dedicated to mitigating risk for governments, NGOs, corporations and high-net-worth clients operating in challenging, high-threat settings. Our multidisciplinary team combines veteran analysts, technical experts and field operatives to deliver integrated risk management across diverse sectors – from energy and aviation to technology, finance, logistics, agriculture and development. We fuse open-source and classified intelligence with local field knowledge to provide a 360-degree view of emerging threats. By anticipating geopolitical shifts, criminal trends and insider risks, we help clients make informed decisions and maintain continuity of critical operations worldwide.
              </p>
            </div>
            <div className='max-w-141.5 lg:max-w-[34%]'>
              <img src={industriesMainImg} alt="Industries Overview" className='rounded-[20px]' />
            </div>
          </div>
          {/* ── Key Sectors ── */}
          <div className='mt-32.5 pb-12'>
            <p className="section-label mb-2">Industries we work with</p>
            <SectionHeader title="Key Sectors" className="mb-10" />

            {/* Desktop: Horizontal Accordion */}
            <div className="sectors-h-accordion">
              {SECTORS.map((sector) => (
                <div
                  key={sector.id}
                  className={`sha-card${activeSector.id === sector.id ? ' sha-card--active' : ''}`}
                  onMouseEnter={() => setActiveSector(sector)}
                  onClick={() => setActiveSector(sector)}
                >
                  <div className="sha-card__plus"><Plus /></div>

                  <div className="sha-card__active-content">
                    <div className="sha-card__img-wrap">
                      <img src={sector.image} alt={sector.label} />
                    </div>
                    <div className="sha-card__text">
                      <h3 className="sha-card__title">{sector.label}</h3>
                      <p className="sha-card__desc">{sector.desc}</p>
                    </div>
                  </div>

                  <div className="sha-card__label"><span>{sector.label}</span></div>
                </div>
              ))}
            </div>

            {/* Mobile / Tablet: Vertical Accordion */}
            <div className="sectors-v-accordion">
              {SECTORS.map((sector) => (
                <div
                  key={sector.id}
                  className={`sva-item${activeSector.id === sector.id ? ' sva-item--active' : ''}`}
                >
                  <button className="sva-item__btn" onClick={() => setActiveSector(sector)}>
                    <div className="sva-item__btn-left">
                      <span className="sva-item__icon"><Plus /></span>
                      <span className="sva-item__name">{sector.label}</span>
                    </div>
                  </button>
                  <div className="sva-item__body">
                    <div className="sva-item__body-inner">
                      <img src={sector.image} alt={sector.label} className="sva-item__img" />
                      <p className="sva-item__desc">{sector.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* <CTASection /> */}
    </>
  );
}
