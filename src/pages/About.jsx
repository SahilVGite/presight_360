import { useState, useRef } from "react";
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  MoveLeft,
  MoveRight,
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y, Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import PageHero from "../components/common/PageHero";
import SectionHeader from "../components/common/SectionHeader";
import StatsBar from "../components/common/StatsBar";
import Card from "../components/common/Card";
import CTASection from "../components/common/CTASection";
import {
  aboutBannerBg,
  aboutClientRetention,
  aboutCountries,
  aboutExpertiesBg,
  aboutInfoSecBg,
  aboutMapBg,
  aboutOverviewBg,
  aboutPgBgGradient,
  aboutProjectsCompeted,
  aboutSuccessfulYears,
  Client1,
  Client2,
  Client3,
  expertise1,
  expertise2,
  expertise3,
  expertise4,
  ourClientsBg,
  siteLogo,
  Team1,
  Team2,
  Team3,
  Team4,
  worldMap,
} from "../assets/images";
import VisionIcon from "../assets/icons/VisionIcon";
import MissionIcon from "../assets/icons/MissionIcon";
import ValuesIcon from "../assets/icons/ValuesIcon";
import LocationSection from "../components/home/LocationSection";

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
    image: expertise1,
    title: "AI & Analytics",
    desc: "Harnessing cutting-edge AI to process and interpret vast intelligence datasets.",
  },
  {
    image: expertise2,
    title: "Security & Public Safety Tech",
    desc: "Advanced technology solutions for threat detection and public protection.",
  },
  {
    image: expertise3,
    title: "Engineering",
    desc: "Technical infrastructure and systems engineering for secure operations.",
  },
  {
    image: expertise4,
    title: "Digital Government Transformation",
    desc: "Modernizing government systems with security-first digital strategies.",
  },
];

const CLIENTS = [
  Client1,
  Client2,
  Client3,
  Client1,
  Client2,
  Client3,
  Client1,
  Client2,
  Client3,
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
          className="py-20"
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
        <section className="py-20">
          <div className="main-wrapper">
            <p className="section-label [font-size:var(--fs-body-md)]! mb-2">
              Core Team
            </p>
            <SectionHeader title="PRESIGHT 360 EXPERTS" className="mb-20" />

            <div className="team-swiper-outer relative [@media(max-width:1800px)]:max-w-[95%] mx-auto">
              {/* Prev button */}
              <button
                onClick={() => teamSwiperRef.current?.slidePrev()}
                disabled={teamBeginning}
                className="team-nav-btn absolute right-[calc(100%-40px)] [@media(min-width:1801px)]:right-[calc(100%+24px)] top-[45%] -translate-y-1/2 z-10"
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
                      <p className="font-bold [font-size:var(--fs-body-2xl)] text-white">
                        {member.name}
                      </p>
                      <p className="[font-size:var(--fs-body-md)] text-white">
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
                className="team-nav-btn absolute left-[calc(100%-40px)] [@media(min-width:1801px)]:left-[calc(100%+24px)] top-[45%] -translate-y-1/2 z-10"
                aria-label="Next"
              >
                <MoveRight size={34} />
              </button>
            </div>
          </div>
        </section>

        {/* Presence Map */}
        <section
          className="py-20"
          style={{
            background: `url(${aboutMapBg}) top/100% 200% no-repeat`,
          }}
        >
          <div className="main-wrapper">
            <LocationSection />
          </div>
        </section>

        <section
          className="py-20 md:py-35 lg:py-47 w-full relative"
          style={{
            background: `url(${aboutInfoSecBg}) center/cover no-repeat`,
          }}
        >
          <div className="main-wrapper">
            <div className="p-5 [@media(min-width:1025px)]:px-12 [@media(min-width:1025px)]:py-12.5 relative bg-glass-effect w-fit mx-auto shadow-[0px_4px_15px_rgba(0,0,0,0.55)]">
                <ul className="aboutInfos flex flex-col md:flex-row flex-wrap  items-center justify-center text-center">
                    <li className="py-3 [@media(min-width:1440px)]:py-5 px-10 [@media(min-width:1440px)]:px-15 mr-8 last:mr-0">
                        <img className="w-5 md:w-8 lg:w-10 [@media(min-width:1440px)]:w-13 mx-auto" src={aboutProjectsCompeted} alt="Client 1" />
                        <p className="[font-size:var(--fs-section-title)] font-bold">400 <span>+</span></p>
                        <p className="text-[#FFDBDB] [font-size:var(--fs-body-lg)]">Projects Competed</p>
                    </li>
                    <li className="py-3 [@media(min-width:1440px)]:py-5 px-10 [@media(min-width:1440px)]:px-15 mr-8 last:mr-0">
                        <img className="w-5 md:w-8 lg:w-10 [@media(min-width:1440px)]:w-13 mx-auto" src={aboutSuccessfulYears} alt="Client 2" />
                        <p className="[font-size:var(--fs-section-title)] font-bold">15 <span>+</span></p>
                        <p className="text-[#FFDBDB] [font-size:var(--fs-body-lg)]">Successful Years</p>
                    </li>
                    <li className="py-3 [@media(min-width:1440px)]:py-5 px-10 [@media(min-width:1440px)]:px-15 mr-8 last:mr-0">
                        <img className="w-5 md:w-8 lg:w-10 [@media(min-width:1440px)]:w-13 mx-auto" src={aboutClientRetention} alt="Client 3" />
                        <p className="[font-size:var(--fs-section-title)] font-bold">98 <span>%</span></p>
                        <p className="text-[#FFDBDB] [font-size:var(--fs-body-lg)]">Client Retention</p>
                    </li>
                    <li className="py-3 [@media(min-width:1440px)]:py-5 px-10 [@media(min-width:1440px)]:px-15 mr-8 last:mr-0">
                        <img className="w-5 md:w-8 lg:w-10 [@media(min-width:1440px)]:w-13 mx-auto" src={aboutCountries} alt="Client 4" />
                        <p className="[font-size:var(--fs-section-title)] font-bold">10 <span>+</span></p>
                        <p className="text-[#FFDBDB] [font-size:var(--fs-body-lg)]">Countries</p>
                    </li>
                </ul>
            </div>
          </div>
        </section>

        {/* Expertise Pillars */}
        <section className="py-25" style={{
            background: `url(${aboutExpertiesBg}) bottom/cover no-repeat`,
          }}>
          <div className="main-wrapper">
            <p className="section-label [font-size:var(--fs-body-md)]! mb-2">Presight 360 Offices</p>
            <SectionHeader title="EXPERTISE PILLARS" className="mb-10" />
            <p className="text-white [font-size:var(--fs-body-md)] mb-13">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12.5 p-8 lg:p-12.5 rounded-[38px] bg-[rgba(0, 0, 0, 0.004)] border border-[rgba(255,255,255,0.1)] shadow-[0px_4px_15px_rgba(0,0,0,0.55)] backdrop-blur-2xl relative">
              {EXPERTISE.map((item, i) => {
                const isLeft = i % 2 === 0;
                const imageFirst = i < 2;
                return (
                  <Card
                    key={i}
                    className={`p-6 [@media(min-width:1025px)]:p-9.5`}
                  >
                    {imageFirst ? (
                      <>
                        <img src={item.image} alt="expertise" className="rounded-xl" />
                        <h3 className={`font-bold mb-2 font-display [font-size:var(--fs-body-2xl)] uppercase mt-6  ${isLeft ? 'text-left pr-10 [@media(min-width:1025px)]:pr-20' : 'text-right pl-10 [@media(min-width:1025px)]:pl-20'}`}>
                          {item.title}
                        </h3>
                        <p className={`[font-size:var(--fs-body-md)] text-secondary\/70 leading-[1.7]  ${isLeft ? 'text-left pr-10 [@media(min-width:1025px)]:pr-20' : 'text-right pl-10 [@media(min-width:1025px)]:pl-20'}`}>
                          {item.desc}
                        </p>
                      </>
                    ) : (
                      <>
                        <h3 className={`font-bold mb-2 font-display [font-size:var(--fs-body-2xl)] uppercase  ${isLeft ? 'text-left pr-10 [@media(min-width:1025px)]:pr-20' : 'text-right pl-10 [@media(min-width:1025px)]:pl-20'}`}>
                          {item.title}
                        </h3>
                        <p className={`[font-size:var(--fs-body-md)] mb-6 text-secondary\/70 leading-[1.7]  ${isLeft ? 'text-left pr-10 [@media(min-width:1025px)]:pr-20' : 'text-right pl-10 [@media(min-width:1025px)]:pl-20'}`}>
                          {item.desc}
                        </p>
                        <img src={item.image} alt="expertise" className="rounded-xl" />
                      </>
                    )}
                  </Card>
                );
              })}
              <div className="hidden md:block absolute top-1/2 left-1/2 transform -translate-1/2 bg-[#041246] h-auto w-[20%] max-w-78 max-h-78 aspect-square rounded-[100%]"><img src={siteLogo} alt="Presight 360" className="w-full h-full mx-auto object-contain max-w-[65%]" /></div>
            </div>
          </div>
        </section>

        {/* Clients */}
        <section className="py-25 overflow-hidden" style={{
            background: `url(${ourClientsBg}) bottom/cover no-repeat`,
          }}>
          <div className="main-wrapper">
            <p className="section-label [font-size:var(--fs-body-md)]! mb-2">Associated Partners</p>
            <SectionHeader title="OUR CLIENTS" className=" mb-25" />
            <div className="overflow-hidden w-full">
                <div
                className="flex items-center"
                style={{ width: 'max-content', animation: 'marquee 18s linear infinite' }}
                >
                {[...CLIENTS, ...CLIENTS].map((client, i) => (
                    <div
                    key={i}
                    className="flex items-center justify-center px-8 sm:px-12 lg:px-16 py-6 shrink-0"
                    >
                    <img
                        src={client}
                        alt={`Client ${i + 1}`}
                        className="h-10 sm:h-12 lg:h-14 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity duration-300"
                    />
                    </div>
                ))}
                </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
