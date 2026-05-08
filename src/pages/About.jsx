import PageHero from '../components/common/PageHero';
import SectionHeader from '../components/common/SectionHeader';
import StatsBar from '../components/common/StatsBar';
import Card from '../components/common/Card';
import CTASection from '../components/common/CTASection';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const TEAM = [
  { name: 'Team Name', role: 'Description', img: null },
  { name: 'Team Name', role: 'Description', img: null },
  { name: 'Team Name', role: 'Description', img: null },
  { name: 'Team Name', role: 'Description', img: null },
];

const ACCORDION_ITEMS = [
  {
    title: 'Vision',
    content:
      'To be the world\'s most trusted intelligence-driven security firm, empowering leaders to navigate uncertainty with clarity and confidence.',
  },
  {
    title: 'Mission',
    content:
      'We provide discreet, behind-the-scenes research and analysis that enables companies and VIPs to act with precision, clarity, and confidence in high-stakes environments.',
  },
  {
    title: 'Values',
    content:
      'Integrity, discretion, excellence, and innovation guide everything we do. We are committed to our clients\' success and safety in every engagement.',
  },
];

const EXPERTISE = [
  { title: 'AI & Analytics', desc: 'Harnessing cutting-edge AI to process and interpret vast intelligence datasets.' },
  { title: 'Security & Public Safety Tech', desc: 'Advanced technology solutions for threat detection and public protection.' },
  { title: 'Engineering', desc: 'Technical infrastructure and systems engineering for secure operations.' },
  { title: 'Digital Government Transformation', desc: 'Modernizing government systems with security-first digital strategies.' },
];

const CLIENTS = ['XEBO.ai', 'Hushly', 'KanTime', 'XEBO.ai', 'KanTime', 'Hushly'];

function AccordionItem({ title, content }) {
  const [open, setOpen] = useState(title === 'Vision');
  return (
    <div
      style={{ borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '16px', marginBottom: '16px' }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between text-left"
        style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'white', padding: 0 }}
      >
        <span className="flex items-center gap-3">
          <span
            className="w-4 h-4 rounded-full"
            style={{ background: open ? 'var(--color-accent-red)' : 'rgba(255,255,255,0.15)', flexShrink: 0 }}
          />
          <span style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 700, textTransform: 'uppercase' }}>
            {title}
          </span>
        </span>
        <ChevronDown
          size={18}
          style={{ color: 'rgba(255,255,255,0.4)', transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }}
        />
      </button>
      {open && (
        <p className="mt-3 text-sm leading-relaxed pl-7" style={{ color: 'rgba(168,192,214,0.75)' }}>
          {content}
        </p>
      )}
    </div>
  );
}

export default function About() {
  return (
    <>
      <PageHero
        label="About Us"
        title="GLOBAL INTELLIGENCE-DRIVEN SECURITY FIRM DEDICATED TO MITIGATING RISK"
      />

      {/* Overview + VMV */}
      <section style={{ padding: '80px 24px', background: 'var(--color-bg-secondary)' }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <p className="section-label mb-3">Overview</p>
            <h2 className="section-title mb-6" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)' }}>
              INTELLIGENCE TO MAP GLOBAL THREAT VECTORS AND GEOPOLITICAL RISKS
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: 'rgba(168,192,214,0.75)' }}>
              PreSight 360 is a global intelligence-driven security firm dedicated to mitigating risk for governments, NGOs, corporations and high-net-worth clients operating in challenging, high-threat settings. Our multidisciplinary team combines veteran analysts, technical experts and field operatives to deliver integrated risk management across diverse sectors.
            </p>
          </div>
          <div>
            {ACCORDION_ITEMS.map((item) => (
              <AccordionItem key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section style={{ padding: '80px 24px', background: 'var(--color-bg-primary)' }}>
        <div className="max-w-6xl mx-auto">
          <p className="section-label mb-2">Our Team</p>
          <SectionHeader title="PRESIGHT 360 EXPERTS" className="mb-10" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {TEAM.map((member, i) => (
              <div key={i} className="text-center">
                <div
                  className="rounded-xl overflow-hidden mb-3"
                  style={{ aspectRatio: '1', background: 'rgba(26,107,219,0.1)', border: '1px solid rgba(255,255,255,0.06)' }}
                >
                  {member.img ? (
                    <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center" style={{ color: 'rgba(255,255,255,0.15)', fontSize: '3rem' }}>
                      👤
                    </div>
                  )}
                </div>
                <p className="font-semibold text-sm">{member.name}</p>
                <p className="text-xs mt-1" style={{ color: 'rgba(168,192,214,0.6)' }}>{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Presence Map */}
      <section
        style={{
          padding: '80px 24px',
          background: 'linear-gradient(180deg, #05152a 0%, #020b18 100%)',
        }}
      >
        <div className="max-w-6xl mx-auto">
          <p className="section-label mb-2">Presight 360 Offices</p>
          <SectionHeader title="OUR PRESENCE" className="mb-10" />
          <div
            className="rounded-xl flex items-center justify-center"
            style={{
              height: '300px',
              background: 'rgba(26,107,219,0.06)',
              border: '1px solid rgba(255,255,255,0.06)',
              color: 'rgba(255,255,255,0.2)',
              fontSize: '0.875rem',
            }}
          >
            [ World Map — integrate with a map library ]
          </div>
        </div>
      </section>

      <StatsBar />

      {/* Expertise Pillars */}
      <section style={{ padding: '80px 24px', background: 'var(--color-bg-secondary)' }}>
        <div className="max-w-6xl mx-auto">
          <p className="section-label mb-2">Presight 360 Offices</p>
          <SectionHeader title="EXPERTISE PILLARS" className="mb-10" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {EXPERTISE.map((item, i) => (
              <Card key={i} className="p-6">
                <h3
                  className="font-bold mb-2"
                  style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', textTransform: 'uppercase' }}
                >
                  {item.title}
                </h3>
                <p className="text-sm" style={{ color: 'rgba(168,192,214,0.7)', lineHeight: 1.7 }}>
                  {item.desc}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Clients */}
      <section style={{ padding: '60px 24px', background: 'var(--color-bg-primary)', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="max-w-6xl mx-auto">
          <p className="section-label mb-8 text-center">Associated Partners</p>
          <h2 className="section-title text-center mb-10">OUR CLIENTS</h2>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {CLIENTS.map((client, i) => (
              <div key={i} style={{ color: 'rgba(255,255,255,0.4)', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.1rem', letterSpacing: '0.05em' }}>
                {client}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
