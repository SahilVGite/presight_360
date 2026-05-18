"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { solutionSliderBg } from "../../assets/images";
import HeadPhonesIcon from "../../assets/icons/HeadPhonesIcon";
import BulbIcon from "../../assets/icons/BulbIcon";
import EyeIcon from "../../assets/icons/EyeIcon";
import MedicalKitIcon from "../../assets/icons/MedicalKitIcon";

const SOLUTIONS = [
  {
    title: "Quick Support",
    desc: "This is dummy text will be replaced with original content. This is dummy text will be replaced with original content. This is dummy text",
    icon: HeadPhonesIcon,
  },
  {
    title: "Oversight",
    desc: "This is dummy text will be replaced with original content. This is dummy text will be replaced with original content. This is dummy text",
    icon: EyeIcon,
  },
  {
    title: "Intelligence",
    desc: "This is dummy text will be replaced with original content. This is dummy text will be replaced with original content. This is dummy text",
    icon: BulbIcon,
  },
  {
    title: "Medical Integration",
    desc: "This is dummy text will be replaced with original content. This is dummy text will be replaced with original content. This is dummy text",
    icon: MedicalKitIcon,
  },
];

const SolutionsSlider = () => {
  return (
    <section
      className="solutions-slider-section py-16 md:py-22 lg:py-25 overflow-hidden"
      style={{
        backgroundImage: `url(${solutionSliderBg})`,
        backgroundPosition: "bottom",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="solutions-slider-wrap">
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          className="solutions-feature-swiper"
          centeredSlides
          loop
          grabCursor
          slidesPerView="auto"
          spaceBetween={20}
          initialSlide={1}
          navigation={{
            prevEl: ".solutions-slider-prev",
            nextEl: ".solutions-slider-next",
          }}
          pagination={{
            el: ".solutions-slider-pagination",
            clickable: true,
          }}
          breakpoints={{
            768: { spaceBetween: 28 },
            1280: { spaceBetween: 32 },
          }}
        >
          {SOLUTIONS.map((solution) => {
            const Icon = solution.icon;

            return (
              <SwiperSlide
                key={solution.title}
                className="solutions-feature-slide"
              >
                <article className="solutions-feature-card">
                  <div className="solutions-feature-header">
                    <span className="solutions-feature-icon">
                      <Icon className="solutions-feature-icon-svg" />
                    </span>
                    <h3>{solution.title}</h3>
                  </div>

                  <p>{solution.desc}</p>
                </article>
              </SwiperSlide>
            );
          })}
        </Swiper>

        <div
          className="solutions-slider-controls"
          aria-label="Solutions slider controls"
        >
          <button
            type="button"
            className="solutions-slider-arrow solutions-slider-prev"
            aria-label="Previous solution"
          >
            <ChevronLeft size={18} strokeWidth={2.4} />
          </button>
          <div className="solutions-slider-pagination" />
          <button
            type="button"
            className="solutions-slider-arrow solutions-slider-next"
            aria-label="Next solution"
          >
            <ChevronRight size={18} strokeWidth={2.4} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSlider;