import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import PageHero from '../components/common/PageHero';
import SectionHeader from '../components/common/SectionHeader';
import StatsBar from '../components/common/StatsBar';
import Card from '../components/common/Card';
import CTASection from '../components/common/CTASection';

const TEAM = [
  { name: 'Team Name', role: 'Description', img: null },
  { name: 'Team Name', role: 'Description', img: null },
  { name: 'Team Name', role: 'Description', img: null },
  { name: 'Team Name', role: 'Description', img: null },
];

const ACCORDION_ITEMS = [
  { title: 'Vision',  content: "To be the world's most trusted intelligence-driven security firm, empowering leaders to navigate uncertainty with clarity and confidence." },
  { title: 'Mission', content: "We provide discreet, behind-the-scenes research and analysis that enables companies and VIPs to act with precision, clarity, and confidence in high-stakes environments." },
  { title: 'Values',  content: "Integrity, discretion, excellence, and innovation guide everything we do. We are committed to our clients' success and safety in every engagement." },
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
    <div className="border-b border-white\/08 pb-4 mb-4">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between text-left bg-transparent border-none cursor-pointer text-white p-0"
      >
        <span className="flex items-center gap-3">
          <span className={`w-4 h-4 rounded-full shrink-0 ${open ? 'bg-accent-red' : 'bg-white/15'}`} />
          <span className="font-display font-bold text-base uppercase">{title}</span>
        </span>
        <ChevronDown
          size={18}
          className={`text-white/40 transition-transform duration-200 ${open ? 'rotate-180' : 'rotate-0'}`}
        />
      </button>
      {open && (
        <p className="mt-3 text-sm leading-relaxed pl-7 text-secondary\/75">
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
      <section className="py-20 px-6 bg-secondary">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <p className="section-label mb-3">Overview</p>
            <h2 className="section-title mb-6 text-[clamp(1.5rem,3vw,2.25rem)]">
              INTELLIGENCE TO MAP GLOBAL THREAT VECTORS AND GEOPOLITICAL RISKS
            </h2>
            <p className="text-sm leading-relaxed text-secondary\/75">
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
      <section className="py-20 px-6 bg-primary">
        <div className="max-w-6xl mx-auto">
          <p className="section-label mb-2">Our Team</p>
          <SectionHeader title="PRESIGHT 360 EXPERTS" className="mb-10" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {TEAM.map((member, i) => (
              <div key={i} className="text-center">
                <div className="rounded-xl overflow-hidden mb-3 aspect-square bg-blue-dim border border-white\/06">
                  {member.img ? (
                    <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-white/15 text-5xl">👤</div>
                  )}
                </div>
                <p className="font-semibold text-sm">{member.name}</p>
                <p className="text-xs mt-1 text-secondary\/60">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Presence Map */}
      <section className="py-20 px-6 gradient-cta">
        <div className="max-w-6xl mx-auto">
          <p className="section-label mb-2">Presight 360 Offices</p>
          <SectionHeader title="OUR PRESENCE" className="mb-10" />
          <div className="rounded-xl h-[300px] flex items-center justify-center bg-blue-subtle border border-white\/06 text-white/20 text-sm">
            [ World Map — integrate with a map library ]
          </div>
        </div>
      </section>

      <StatsBar />

      {/* Expertise Pillars */}
      <section className="py-20 px-6 bg-secondary">
        <div className="max-w-6xl mx-auto">
          <p className="section-label mb-2">Presight 360 Offices</p>
          <SectionHeader title="EXPERTISE PILLARS" className="mb-10" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {EXPERTISE.map((item, i) => (
              <Card key={i} className="p-6">
                <h3 className="font-bold mb-2 font-display text-base uppercase">{item.title}</h3>
                <p className="text-sm text-secondary\/70 leading-[1.7]">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="py-[60px] px-6 bg-primary border-t border-white\/05">
        <div className="max-w-6xl mx-auto">
          <p className="section-label mb-8 text-center">Associated Partners</p>
          <h2 className="section-title text-center mb-10">OUR CLIENTS</h2>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {CLIENTS.map((client, i) => (
              <div key={i} className="text-white/40 font-display font-bold text-[1.1rem] tracking-[0.05em]">
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
