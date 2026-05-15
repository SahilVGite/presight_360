import { useState, useRef } from "react";
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  MoveLeft,
  MoveRight,
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper/modules";
import "swiper/css";
import PageHero from "../components/common/PageHero";
import SectionHeader from "../components/common/SectionHeader";
import StatsBar from "../components/common/StatsBar";
import Card from "../components/common/Card";
import CTASection from "../components/common/CTASection";
import {
  aboutBannerBg,
  aboutInfoSecBg,
  aboutMapBg,
  aboutOverviewBg,
  aboutPgBgGradient,
  Team1,
  Team2,
  Team3,
  Team4,
  worldMap,
} from "../assets/images";
import VisionIcon from "../assets/icons/VisionIcon";
import MissionIcon from "../assets/icons/MissionIcon";
import ValuesIcon from "../assets/icons/ValuesIcon";

const TEAM = [
  { name: "Team Name", role: "Description", img: Team1 },
  { name: "Team Name", role: "Description", img: Team2 },
  { name: "Team Name", role: "Description", img: Team3 },
  { name: "Team Name", role: "Description", img: Team4 },
  { name: "Team Name", role: "Description", img: Team1 },
  { name: "Team Name", role: "Description", img: Team2 },
  { name: "Team Name", role: "Description", img: Team3 },
  { name: "Team Name", role: "Description", img: Team4 },
];

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

const EXPERTISE = [
  {
    title: "AI & Analytics",
    desc: "Harnessing cutting-edge AI to process and interpret vast intelligence datasets.",
  },
  {
    title: "Security & Public Safety Tech",
    desc: "Advanced technology solutions for threat detection and public protection.",
  },
  {
    title: "Engineering",
    desc: "Technical infrastructure and systems engineering for secure operations.",
  },
  {
    title: "Digital Government Transformation",
    desc: "Modernizing government systems with security-first digital strategies.",
  },
];

const CLIENTS = [
  "XEBO.ai",
  "Hushly",
  "KanTime",
  "XEBO.ai",
  "KanTime",
  "Hushly",
];

function AccordionItem({ icon, title, content, open, onClick }) {
  return (
    <div className="border-b border-white/15 pb-[53.6px] mb-[53.6px] last:border-b-0 last:pb-0 last:mb-0">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between text-left bg-transparent border-none cursor-pointer text-white p-0"
      >
        <span className="flex items-center gap-7">
          {icon}
          <span className="font-display font-bold text-[clamp(0.7rem,1.9rem,1.875rem)]">
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
        <p className="mt-[53.6px] text-[clamp(0.7rem,1vw,1.5rem)] leading-[1.2166] text-white">
          {content}
        </p>
      )}
    </div>
  );
}

export default function About() {
  const [openIndex, setOpenIndex] = useState(0);
  const teamSwiperRef = useRef(null);
  const [teamBeginning, setTeamBeginning] = useState(true);
  const [teamEnd, setTeamEnd] = useState(false);
  return (
    <>
      <PageHero
        label="About Us"
        title="GLOBAL INTELLIGENCE-DRIVEN SECURITY FIRM DEDICATED TO MITIGATING RISK"
        isStarsBg={true}
        bgImage={aboutBannerBg}
      />

      <main
        className={``}
        style={{
          background: `url(${aboutPgBgGradient}) center/cover no-repeat`,
        }}
      >
        {/* Overview + VMV */}
        <section
          className="py-20 px-6"
          style={{
            background: `url(${aboutOverviewBg}) center/100% 100% no-repeat`,
          }}
        >
          <div className="main-wrapper flex justify-between items-stretch gap-12">
            <div className="max-w-[60%] p-12 rounded-[38px] bg-[rgba(0, 0, 0, 0.004)] border border-[rgba(255,255,255,0.1)] backdrop-blur-md relative">
              <div className="absolute bg-accent-red w-[2.5px] h-[70%] left-0 top-1/2 transform -translate-y-1/2" />
              <p className="section-label text-[clamp(0.7rem,1.5rem,1.125rem)]! mb-10">
                Overview
              </p>
              <h2 className="section-title mb-10 text-[clamp(1.5rem,3vw,2.25rem)]">
                INTELLIGENCE TO MAP GLOBAL THREAT VECTORS AND GEOPOLITICAL RISKS
              </h2>
              <p className="text-[clamp(0.7rem,1.5rem,1.125rem)] text-secondary\/75 leading-[1.9444]">
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
            <div className="max-w-[40%] w-full py-15 px-12 rounded-[38px] bg-[rgba(0, 0, 0, 0.004)] border border-[rgba(255,255,255,0.1)] backdrop-blur-md relative shadow-[0px_4px_15px_rgba(0,0,0,0.55)]">
              <div className="absolute bg-accent-red w-[2.5px] h-[70%] left-0 top-1/2 transform -translate-y-1/2" />

              {ACCORDION_ITEMS.map((item, index) => (
                <AccordionItem
                  key={item.title}
                  {...item}
                  open={openIndex === index}
                  onClick={() => {
                    // prevents closing all
                    if (openIndex !== index) {
                      setOpenIndex(index);
                    }
                  }}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-20 px-6">
          <div className="main-wrapper">
            <p className="section-label text-[clamp(0.7rem,1.5rem,1.125rem)]! mb-2">
              Core Team
            </p>
            <SectionHeader title="PRESIGHT 360 EXPERTS" className="mb-20" />

            <div className="team-swiper-outer relative">
              {/* Prev button */}
              <button
                onClick={() => teamSwiperRef.current?.slidePrev()}
                disabled={teamBeginning}
                className="team-nav-btn absolute  right-[calc(100%+24px)] top-[45%] -translate-y-1/2 z-10"
                aria-label="Previous"
              >
                <MoveLeft size={34} />
              </button>

              <Swiper
                modules={[Navigation, A11y]}
                spaceBetween={24}
                slidesPerView={1.2}
                breakpoints={{
                  640: { slidesPerView: 2 },
                  900: { slidesPerView: 3 },
                  1200: { slidesPerView: 4 },
                }}
                onSwiper={(swiper) => {
                  teamSwiperRef.current = swiper;
                  setTeamBeginning(swiper.isBeginning);
                  setTeamEnd(swiper.isEnd);
                }}
                onSlideChange={(swiper) => {
                  setTeamBeginning(swiper.isBeginning);
                  setTeamEnd(swiper.isEnd);
                }}
              >
                {TEAM.map((member, i) => (
                  <SwiperSlide key={i}>
                    <div className="text-left">
                      <div className="rounded-[20px] overflow-hidden mb-3">
                        <img
                          src={member.img}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <p className="font-bold text-[clamp(0.7rem,1vw,1.5rem)] text-white">
                        {member.name}
                      </p>
                      <p className="text-[clamp(0.7rem,1.5rem,1.125rem)] text-white">
                        {member.role}
                      </p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Next button */}
              <button
                onClick={() => teamSwiperRef.current?.slideNext()}
                disabled={teamEnd}
                className="team-nav-btn absolute left-[calc(100%+24px)] top-[45%] -translate-y-1/2 z-10"
                aria-label="Next"
              >
                <MoveRight size={34} />
              </button>
            </div>
          </div>
        </section>

        {/* Presence Map */}
        <section
          className="py-20 px-6"
          style={{
            background: `url(${aboutMapBg}) top/100% 200% no-repeat`,
          }}
        >
          <div className="main-wrapper">
            <p className="section-label text-[clamp(0.7rem,1.5rem,1.125rem)]! mb-2">
              Presight 360 Offices
            </p>
            <SectionHeader title="OUR PRESENCE" className="mb-10" />
            <div className="w-full mx-auto mt-14">
              <img src={worldMap} alt="World Map" className="w-full h-auto" />
            </div>
          </div>
        </section>

        <section
          className="py-20 md:py-35 lg:py-47 px-6 w-full relative"
          style={{
            background: `url(${aboutInfoSecBg}) center/cover no-repeat`,
          }}
        >
          <div className="main-wrapper">
            <div className="px-12 py-12.5"></div>
          </div>
        </section>

        {/* Expertise Pillars */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <p className="section-label mb-2">Presight 360 Offices</p>
            <SectionHeader title="EXPERTISE PILLARS" className="mb-10" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {EXPERTISE.map((item, i) => (
                <Card key={i} className="p-6">
                  <h3 className="font-bold mb-2 font-display text-base uppercase">
                    {item.title}
                  </h3>
                  <p className="text-sm text-secondary\/70 leading-[1.7]">
                    {item.desc}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Clients */}
        <section className="py-[60px] px-6 border-t border-white\/05">
          <div className="max-w-6xl mx-auto">
            <p className="section-label mb-8 text-center">
              Associated Partners
            </p>
            <h2 className="section-title text-center mb-10">OUR CLIENTS</h2>
            <div className="flex flex-wrap items-center justify-center gap-8">
              {CLIENTS.map((client, i) => (
                <div
                  key={i}
                  className="text-white/40 font-display font-bold text-[1.1rem] tracking-[0.05em]"
                >
                  {client}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
