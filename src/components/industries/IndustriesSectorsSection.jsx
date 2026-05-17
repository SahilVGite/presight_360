import { useState } from 'react';
import { Plus } from 'lucide-react';
import SectionHeader from '../common/SectionHeader';

const SECTORS = [
  { id: 'aviation',    label: 'Aviation',     desc: 'PreSight 360 provides aviation sector clients with comprehensive threat intelligence, security protocols, and crisis response planning to safeguard operations globally.',    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=900&q=80' },
  { id: 'energy',      label: 'Energy',       desc: 'Critical energy infrastructure requires robust protection. We deliver integrated risk management for oil & gas, renewables, and utility sectors.',                        image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=900&q=80' },
  { id: 'technology',  label: 'Technology',   desc: 'In a rapidly evolving threat landscape, our technology sector services cover cyber-physical risk, executive protection, and strategic intelligence.',                   image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&q=80' },
  { id: 'logistic',    label: 'Logistic',     desc: 'Supply chain disruptions have significant impact. We secure logistics operations from origin to destination with end-to-end intelligence.',                             image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=900&q=80' },
  { id: 'development', label: 'Development',  desc: 'Development organizations operating in fragile states rely on our field expertise to ensure staff safety, program continuity, and compliance.',                        image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&q=80' },
  { id: 'finance',     label: 'Finance',      desc: 'Financial institutions face unique threats. Our intelligence services help protect assets, executives, and operations in volatile markets.',                            image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=900&q=80' },
];

export default function IndustriesSectorsSection() {
  const [activeSector, setActiveSector] = useState(SECTORS[0]);

  return (
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
  );
}
