"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { SOLUTIONS_DATA } from "../../constants/solutionsData";
import { solutionFaqBg } from "../../assets/images";

export default function SolutionsGridSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-20" style={{backgroundImage: `url(${solutionFaqBg})`,backgroundPosition: 'bottom', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
      <div className="main-wrapper">
        <p className="uppercase mb-8 text-accent-red font-semibold [font-size:var(--fs-body-md)]">
          Frequently asked question
        </p>

        <h2 className="section-title mb-[0.5em]">
          Clarifying Strategic Intelligence & Risk Concepts
        </h2>

        <p className="leading-[1.75] [font-size:var(--fs-body-md)] text-white mb-10">
          Strategic Intelligence transforms complex data into meaningful
          insights that support informed decision-making and long-term planning.
          By analyzing market trends, competitor movements, customer behavior,
          and internal performance, it enables organizations to anticipate
          change.
        </p>

        <div className="flex flex-col">
          {SOLUTIONS_DATA.map((sol, index) => {
            const isActive = activeIndex === index;

            return (
              <div
                key={sol.slug}
                className={`relative overflow-hidden border-b border-white/10 last:border-none transition-all duration-500 ${
                  isActive ? "min-h-55" : "min-h-22"
                }`}
              >
                {/* Background Image */}
                <div
                  className={`absolute inset-y-4 right-0 h-auto w-full rounded-lg lg:rounded-r-lg max-w-full lg:max-w-[40%] bg-cover bg-center transition-all duration-500 ${
                    isActive ? "opacity-100" : "opacity-70"
                  }`}
                  style={{
                    backgroundImage: `url(${sol.image})`,
                  }}
                />

                {/* Dark Overlay */}
                {isActive && (<div className="absolute inset-x-0 inset-y-4 bg-[linear-gradient(90deg,rgba(250,250,252,0.05)_0%,rgba(255,255,255,0)_80%)] rounded-lg" />)}

                {/* Content */}
                <div className="relative z-10 py-4">
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full flex items-center justify-between text-left p-6"
                  >
                    <h3 className="font-bold text-white uppercase font-display [font-size:var(--fs-body-md)]">
                      {sol.title}
                    </h3>
                  </button>

                  <div
                    className={`grid transition-all duration-500 ease-in-out ${isActive && "pb-4"} ${
                      isActive
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-6 max-w-full lg:max-w-[60%]">
                        <p className="text-white/80 leading-[1.8] [font-size:var(--fs-body-sm)]">
                          {sol.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
