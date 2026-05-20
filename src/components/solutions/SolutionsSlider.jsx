"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { solutionSliderBg } from "../../assets/images";
import HeadPhonesIcon from "../../assets/icons/HeadPhonesIcon";
import BulbIcon from "../../assets/icons/BulbIcon";
import EyeIcon from "../../assets/icons/EyeIcon";
import MedicalKitIcon from "../../assets/icons/MedicalKitIcon";

const PAGINATION_SELECTOR = ".solutions-slider-pagination";

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
  const sliderRef = useRef(null);

  return (
    <section
      className="solutions-slider-section sec-gap overflow-hidden"
      style={{
        backgroundImage: `url(${solutionSliderBg})`,
        backgroundPosition: "center",
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="solutions-slider-wrap">
        <Swiper
          ref={sliderRef}
          modules={[Pagination, A11y]}
          className="solutions-feature-swiper"
          centeredSlides
          slideToClickedSlide
          grabCursor
          slidesPerView="auto"
          spaceBetween={20}
          initialSlide={1}
          speed={500}
          pagination={{
            el: PAGINATION_SELECTOR,
            clickable: true,
          }}
          breakpoints={{
            768: { spaceBetween: 24 },
            1280: { spaceBetween: 28 },
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
            onClick={() => sliderRef.current?.swiper.slidePrev()}
          >
            <ChevronLeft size={18} strokeWidth={2.4} />
          </button>
          <div className="solutions-slider-pagination" />
          <button
            type="button"
            className="solutions-slider-arrow solutions-slider-next"
            aria-label="Next solution"
            onClick={() => sliderRef.current?.swiper.slideNext()}
          >
            <ChevronRight size={18} strokeWidth={2.4} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSlider;
