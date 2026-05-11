import { Link } from 'react-router-dom';
import Button from '../common/Button';

import halfGlobe from '../../assets/images/globeHalf.png';

import {
  securityIcon1,
  securityIcon2,
  securityIcon3,
  securityIcon4,
  securityIcon5,
  securityIcon6,
  securityIcon7,
  securityIcon8,
} from '../../assets/images';

const SOLUTIONS = [
  {
    icon: securityIcon1,
    title: 'Strategic Threat Intelligence & Geopolitical Risk',
    desc: 'PreSight 360 delivers comprehensive all-source intelligence to map global threat vectors and geopolitical risks.',
    href: '/solutions/strategic-intelligence',
  },
  {
    icon: securityIcon2,
    title: 'Protective Security Operations',
    desc: 'Our protective services division provides discreet, mission-tailored security for personnel, facilities, and assets in both stable and high-risk regions.',
    href: '/solutions/protective-security',
  },
  {
    icon: securityIcon3,
    title: 'Travel Risk Management',
    desc: 'We offer end-to-end travel risk management—combining pre-travel assessments, secure itinerary planning, and real-time monitoring.',
    href: '/solutions/travel-risk',
  },
  {
    icon: securityIcon4,
    title: 'Threat Intelligence',
    desc: 'We offer an intelligence-led cyber risk solution designed to proactively identify and neutralize digital threats.',
    href: '/solutions/threat-intelligence',
  },
  {
    icon: securityIcon5,
    title: 'This Is Dummy Text Will Be Replaced',
    desc: 'PreSight 360 delivers comprehensive all-source intelligence to map global threat vectors and geopolitical risks.',
    href: '/solutions/strategic-intelligence',
  },
  {
    icon: securityIcon6,
    title: 'Crisis Preparedness & Incident Response',
    desc: 'Our crisis management experts support organizations in preparing for and navigating disruptive events.',
    href: '/solutions/crisis-response',
  },
  {
    icon: securityIcon7,
    title: 'Investigative Services & Due Diligence',
    desc: 'PreSight 360 conducts discreet and robust investigative services to uncover critical information on individuals, entities, and operations.',
    href: '/solutions/security-risk',
  },
  {
    icon: securityIcon8,
    title: 'Surveillance Detection & Technical Countermeasures',
    desc: 'We provide advanced surveillance detection and Technical Surveillance Countermeasures (TSCM) services to safeguard sensitive communications and facilities.',
    href: '/solutions/threat-intelligence',
  },
];

export default function SecurityIntelligenceSection() {
  return (
    <section className="section-gradient relative overflow-hidden">
      {/* Globe Image */}
      <img
        src={halfGlobe}
        alt=""
        aria-hidden="true"
        className="absolute top-0 right-0 w-[72%] max-w-[1053px] h-auto pointer-events-none select-none z-0"
      />

      {/* Top Content */}
      <div className="relative z-10 pt-[clamp(60px,8vw,160px)] pb-[clamp(60px,8vw,136px)] pl-[clamp(24px,13vw,260px)] max-w-[1090px]">
        <h2 className="section-title uppercase leading-[1.1] tracking-[0.01em] mb-6 text-white ">
          Security Intelligence: The Insight Behind Confident Decisions
        </h2>

        <div className="max-w-[598px]">
          <p className="text-lg leading-[1.85] mb-6 text-white">
            PreSight 360 is a global provider of integrated risk intelligence and
            security solutions. We provides discreet, behind-the-scenes research
            and analysis that enables companies and VIPs to act with precision,
            clarity, and confidence. Our intelligence is designed for
            decision-makers operating in high-stakes environments - where risks
            are complex, and mistakes are costly.
          </p>

          <p className="text-lg leading-[1.85] mb-6 text-white">
            We apply our proprietary PASTIL framework - Politics, Alert-Levels,
            Security, Technology, Insights, and Logistics - to ensure no
            critical factor is overlooked. With Presight 360, leaders move
            forward knowing they have the intelligence advantage.
          </p>
        </div>

        <Button
          variant="primary"
          size="sm"
          showArrow
          as={Link}
          to="/solutions"
        >
          Explore Us
        </Button>
      </div>

      {/* Bottom Section */}
      <div className="relative overflow-hidden bg-water-image">
        <div className="relative z-10 mx-auto my-12 max-w-[1711px] p-12 bg-glass-effect">
          <h3 className="text-center font-display font-bold uppercase text-white mb-20 tracking-[0.07em] text-[clamp(0.9rem,3vw,2.8125rem)]">
            SMARTER SECURITY STARTS WITH BETTER INTELLIGENCE
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-20 gap-y-[2.875rem]">
            {SOLUTIONS.map(({ icon, title, desc, href }, i) => (
              <Link
                key={i}
                to={href}
                className="group block no-underline"
              >
                {/* Icon Box */}
                <div className="w-12 h-12 flex items-center justify-center mb-4 ">
                  <img
                    src={icon}
                    alt={title}
                  />
                </div>

                {/* Title */}
                <h4 className="font-display font-bold uppercase text-white mb-2 leading-snug text-[1.5rem]">
                  {title}
                </h4>

                {/* Description */}
                <p className="text-lg leading-[1.7] text-white">
                  {desc}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
