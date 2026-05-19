'use client'
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { aboutOverviewBg } from "../../assets/images";
import VisionIcon from "../../assets/icons/VisionIcon";
import MissionIcon from "../../assets/icons/MissionIcon";
import ValuesIcon from "../../assets/icons/ValuesIcon";

const ACCORDION_ITEMS = [
  {
    icon: <VisionIcon />,
    title: "Vision",
    content:
      "To be the world's most trusted intelligence-driven security firm, empowering leaders to navigate uncertainty with clarity and confidence.",
  },
  {
    icon: <MissionIcon />,
    title: "Mission",
    content:
      "We provide discreet, behind-the-scenes research and analysis that enables companies and VIPs to act with precision, clarity, and confidence in high-stakes environments.",
  },
  {
    icon: <ValuesIcon />,
    title: "Values",
    content:
      "Integrity, discretion, excellence, and innovation guide everything we do. We are committed to our clients' success and safety in every engagement.",
  },
];

function AccordionItem({ icon, title, content, open, onClick }) {
  return (
    <div className="[font-size:var(--fs-body-2xl)] border-b border-white/15 pb-[2.333em] mb-[2.333em] last:border-b-0 last:pb-0 last:mb-0">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between text-left bg-transparent border-none cursor-pointer text-white p-0"
      >
        <span className="flex items-center gap-7">
          {icon}
          <span className="font-display font-bold [font-size:var(--fs-title-base)]">
            {title}
          </span>
        </span>

        <ChevronDown
          size={34}
          className={`text-white transition-transform duration-200 ${
            open ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>

      {open && (
        <p className="mt-[2.333em] [font-size:var(--fs-body-2xl)] leading-[1.2166] text-white">
          {content}
        </p>
      )}
    </div>
  );
}

export default function AboutOverviewSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section
      className="sec-gap"
      style={{
        background: `url(${aboutOverviewBg}) center/100% 100% no-repeat`,
      }}
    >
      <div className="main-wrapper flex flex-col lg:flex-row justify-between items-stretch gap-12">
        <div className="lg:max-w-[60%] p-12 rounded-[38px] bg-[rgba(0, 0, 0, 0.004)] border border-[rgba(255,255,255,0.1)] backdrop-blur-md relative">
          <div className="absolute bg-accent-red w-[2.5px] h-[70%] left-0 top-1/2 transform -translate-y-1/2" />
          <p className="section-label [font-size:var(--fs-body-md)]! mb-10">
            Overview
          </p>
          <h2 className="section-title mb-10 [font-size:var(--fs-title-xl)]">
            INTELLIGENCE TO MAP GLOBAL THREAT VECTORS AND GEOPOLITICAL RISKS
          </h2>
          <p className="[font-size:var(--fs-body-md)] text-secondary\/75 leading-[1.9444]">
            PreSight 360 is a global intelligence-driven security firm
            dedicated to mitigating risk for governments, NGOs, corporations
            and high-net-worth clients operating in challenging, high-threat
            settings. Our multidisciplinary team combines veteran analysts,
            technical experts and field operatives to deliver integrated
            risk management across diverse sectors – from energy and
            aviation to technology, finance, logistics, agriculture and
            development. We fuse open-source and classified intelligence
            with local field knowledge to provide a 360-degree view of
            emerging threats. By anticipating geopolitical shifts, criminal
            trends and insider risks, we help clients make informed
            decisions and maintain continuity of critical operations
            worldwide.
          </p>
        </div>
        <div className="lg:max-w-[40%] w-full py-15 px-12 rounded-[38px] bg-[rgba(0, 0, 0, 0.004)] border border-[rgba(255,255,255,0.1)] backdrop-blur-md relative shadow-[0px_4px_15px_rgba(0,0,0,0.55)]">
          <div className="absolute bg-accent-red w-[2.5px] h-[70%] left-0 top-1/2 transform -translate-y-1/2" />

          {ACCORDION_ITEMS.map((item, index) => (
            <AccordionItem
              key={item.title}
              {...item}
              open={openIndex === index}
              onClick={() => {
                if (openIndex !== index) {
                  setOpenIndex(index);
                }
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
