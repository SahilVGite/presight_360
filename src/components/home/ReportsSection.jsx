import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { reportImg1, reportImg2, reportImg3 } from "../../assets/images";

const REPORTS = [
  {
    date: "Oct 9, 2025",
    category: "Prices, Marketing, and Trade",
    title: "Gasoline retail prices in the U.S. 2025, by state",
    desc: "On October 9, 2025, the price of regular gasoline was highest in California, at around 4.66 U.S. dollars per gallon. This was some 1.48&nbsp;dollars above the national average of 3.18 U.S. dollars. California's high motor fuel prices are largely determined by it being the...",
    imgClass: reportImg1,
    href: "/insights/from-insight-to-impact",
  },
  {
    date: "Oct 9, 2025",
    category: "Prices, Marketing, and Trade",
    title: "Gasoline retail prices in the U.S. 2025, by state",
    desc: "On October 9, 2025, the price of regular gasoline was highest in California, at around 4.66 U.S. dollars per gallon. This was some 1.48&nbsp;dollars above the national average of 3.18 U.S. dollars. California's high motor fuel prices are largely determined by it being the...",
    imgClass: reportImg2,
    href: "/insights/why-strategic-intelligence-matters",
  },
  {
    date: "Oct 9, 2025",
    category: "Prices, Marketing, and Trade",
    title: "Gasoline retail prices in the U.S. 2025, by state",
    desc: "On October 9, 2025, the price of regular gasoline was highest in California, at around 4.66 U.S. dollars per gallon. This was some 1.48&nbsp;dollars above the national average of 3.18 U.S. dollars. California's high motor fuel prices are largely determined by it being the...",
    imgClass: reportImg3,
    href: "/insights/navigating-uncertainty",
  },
  {
    date: "Oct 9, 2025",
    category: "Prices, Marketing, and Trade",
    title: "Gasoline retail prices in the U.S. 2025, by state",
    desc: "On October 9, 2025, the price of regular gasoline was highest in California, at around 4.66 U.S. dollars per gallon. This was some 1.48&nbsp;dollars above the national average of 3.18 U.S. dollars. California's high motor fuel prices are largely determined by it being the...",
    imgClass: reportImg1,
    href: "/insights/from-insight-to-impact",
  },
];

export default function ReportsSection() {
  return (
    <section
      className="pt-[clamp(60px,8vw,100px)] pb-[clamp(60px,8vw,100px)] relative"
      style={{ overflowX: "clip" }}
    >
      <div className="main-wrapper">
        {/* Heading */}
        <div className="mb-10 pl-0 md:pl-6 lg:pl-24">
          <p className="uppercase [font-size:var(--fs-body-md)] tracking-[0.18em] text-[#DB3B3B] font-semibold mb-3">
            Trending statistics
          </p>
          <h2 className="section-title">REPORTS</h2>
        </div>
      </div>

      {/* Slider — starts at left offset, bleeds full width to right */}
      <div
        className="reports-swiper-wrap"
        style={{ paddingLeft: "clamp(30px, 8vw, 100px)" }}
      >
        <Swiper
          modules={[Navigation, A11y]}
          spaceBetween={20}
          slidesPerView={1.2}
          navigation={false}
          grabCursor
          breakpoints={{
            640: { slidesPerView: 1.5 },
            900: { slidesPerView: 2.2 },
            1280: { slidesPerView: 2.45 },
            1600: { slidesPerView: 2.5 },
          }}
          style={{ overflow: "visible" }}
        >
          {REPORTS.map((report, i) => (
            <SwiperSlide key={i}>
              <Link
                href={report.href}
                className="no-underline flex [@media(max-width:610px)]:flex-col-reverse items-stretch gap-2 rounded-2xl overflow-hidden transition-all duration-200 group p-4 md:p-8 bg-glass-effect"
              >
                {/* Left — text content */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <p className="[font-size:var(--fs-body)] text-white/60 mb-2 leading-snug">
                      {report.date}&nbsp;
                      <span className="text-white/60 mx-1">|</span>
                      {report.category}
                    </p>

                    <h3 className="font-display font-bold text-white [font-size:var(--fs-body)] leading-snug mb-3">
                      {report.title}
                    </h3>

                    <p
                      className="[font-size:var(--fs-body-xs)] leading-[1.7] text-white/50 line-clamp-4"
                      dangerouslySetInnerHTML={{ __html: report.desc }}
                    />
                  </div>

                  {/* Read More button */}
                  <div className="mt-4">
                    <span className="inline-flex items-center gap-2 bg-[#DB3B3B] text-white [font-size:var(--fs-body-xs)] font-semibold px-4 py-2 rounded-full">
                      Read More
                      <span className="w-6 h-6 rounded-full bg-white/25 flex items-center justify-center shrink-0">
                        <ArrowRight size={12} />
                      </span>
                    </span>
                  </div>
                </div>

                {/* Right — chart image (white bg to mimic chart cards) */}
                <div className={`w-[42%] shrink-0`}>
                  <img
                    src={report.imgClass}
                    alt={report.title}
                    className="rounded-3xl"
                  />
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* Top Border */}
      <span className="absolute left-1/2 bottom-0 -translate-x-1/2 w-full max-w-[1465px] h-px bg-[#4E5E70]"></span>
    </section>
  );
}
