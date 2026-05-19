"use client";

import { useState } from "react";
import { keyBenefits } from "../../assets/images";
import CustomRightArrow from "../../assets/icons/customRightArrow";

const BENEFITS_DATA = [
  {
    number: "01",
    title: "Significant Cost Savings",
    desc: "This is dummy text will be replaced with original content. This is dummy text will be replaced with original content. This is dummy text",
  },
  {
    number: "02",
    title: "Operational And Contingency Planning",
    desc: "This is dummy text will be replaced with original content. This is dummy text will be replaced with original content. This is dummy text",
  },
  {
    number: "03",
    title: "Global Consistency & Coverage",
    desc: "This is dummy text will be replaced with original content. This is dummy text will be replaced with original content. This is dummy text",
  },
  {
    number: "04",
    title: "Evacuation And Repatriation",
    desc: "This is dummy text will be replaced with original content. This is dummy text will be replaced with original content. This is dummy text",
  },
];

export default function SolutionBenefitsSection() {
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <section className="py-25">
      <div className="main-wrapper">
        <p className="uppercase mb-4 text-accent-red font-semibold [font-size:var(--fs-body-md)]">
          Key Benefits
        </p>

        <h2 className="font-display font-semibold uppercase leading-[1.346] [font-size:var(--fs-section-title)] mt-[0.3269em] mb-[0.7615em] max-w-[40ch]">
          Driving Competitive Advantage Through Insight and Foresight
        </h2>

        <div className="flex flex-col lg:flex-row items-center gap-20">
          {/* Left Side */}
          <div className="w-full">
            {BENEFITS_DATA.map((item, index) => {
              const isActive = activeIndex === index;

              return (
                <div
                  key={index}
                  className="border-b border-white/20 last:border-none"
                >
                  <button
                    onClick={() => setActiveIndex(index)}
                    className="w-full flex items-center gap-4 p-3 lg:p-6 text-left"
                  >
                    {/* Number */}
                    <p
                      className={`[font-size:var(--fs-title-sm)] mr-2 md:mr-4 lg:mr-[1.5571em] transition-colors duration-300 ${
                        isActive ? "text-accent-red" : "text-white"
                      }`}
                    >
                      {item.number}
                    </p>

                    {/* Content */}
                    <div className="flex-1">
                      <p
                        className={`font-display [font-size:var(--fs-title-base)] uppercase tracking-[0.001em] transition-colors duration-300 ${
                          isActive ? "text-accent-red" : "text-white"
                        }`}
                      >
                        {item.title}
                      </p>
                    </div>

                    {/* Arrow */}
                    <CustomRightArrow
                      color={isActive ? "#DB3B3B" : "#FFFFFF"}
                      className={`ml-auto transition-all duration-300 w-8 md:w-10 lg:w-12.5 ${
                        isActive ? "rotate-320" : "text-white"
                      }`}
                    />
                  </button>

                  <div
                    className={`grid transition-all duration-500 ease-in-out ${
                      isActive
                        ? "grid-rows-[1fr] opacity-100 p-3 lg:p-6 pt-0! ml-4 max-w-[80ch]"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="border-l-2 border-[#DB3B3B] pl-4">
                        <p className="text-white/80 leading-[1.7] [font-size:var(--fs-body-md)]">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Image */}
          <div className="max-w-152.5 w-full shrink">
            <img
              src={keyBenefits}
              alt=""
              className="rounded-[30px] object-cover w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
