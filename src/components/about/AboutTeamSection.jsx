import { useState, useRef } from "react";
import { MoveLeft, MoveRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper/modules";
import "swiper/css";
import SectionHeader from "../common/SectionHeader";
import { Team1, Team2, Team3, Team4 } from "../../assets/images";

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

export default function AboutTeamSection() {
  const teamSwiperRef = useRef(null);
  const [teamBeginning, setTeamBeginning] = useState(true);
  const [teamEnd, setTeamEnd] = useState(false);

  return (
    <section className="py-20">
      <div className="main-wrapper">
        <p className="section-label [font-size:var(--fs-body-md)]! mb-2">
          Core Team
        </p>
        <SectionHeader title="PRESIGHT 360 EXPERTS" className="mb-20" />

        <div className="team-swiper-outer relative [@media(max-width:1800px)]:max-w-[95%] mx-auto">
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
  );
}
