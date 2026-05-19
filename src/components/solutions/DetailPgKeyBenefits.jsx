import React from "react";
import {
  keyDetails1,
  keyDetails2,
  keyDetails3,
  keyDetails4,
  keyDetailsIcon1,
  keyDetailsIcon2,
  keyDetailsIcon3,
  keyDetailsIcon4,
} from "../../assets/images";

const key_benefits = [
  {
    title: "Risk Assessment in High, Medium, low Risk areas.",
    image: keyDetails1,
    icon: keyDetailsIcon1,
  },
  {
    title: "On-site Advisory and Support Consultation.",
    image: keyDetails2,
    icon: keyDetailsIcon2,
  },
  {
    title: "Critical Infrastructure Risk Management.",
    image: keyDetails3,
    icon: keyDetailsIcon3,
  },
  {
    title: "Disaster Recovery & Business Continuity.",
    image: keyDetails4,
    icon: keyDetailsIcon4,
  },
];

const DetailPgKeyBenefits = () => {
  return (
    <section className="relative z-10">
      <div className="main-wrapper">
        <div className="px-5 md:px-10 py-4 md:py-8 bg-[rgba(255,255,255,0.05)] backdrop-blur-2xl border border-[rgba(255,255,255,0.1)] rounded-[20px]">
          <p className="uppercase mb-4 text-accent-red font-semibold [font-size:var(--fs-body-md)]">
            KEY BENEFITS
          </p>
          <ul>
            {key_benefits.map((item, index) => (
              <li
                key={index}
                className="md:flex items-stretch justify-between gap-4 bg-[#001848] rounded-3xl overflow-hidden mb-6 last:mb-0 relative group"
              >
                <div className="flex items-center gap-4 md:gap-8 [@media(min-width:1366px)]:gap-11 p-5 md:p-10 [@media(min-width:1366px)]:p-15 md:max-w-[65%] [@media(min-width:1366px)]:max-w-[60%]">
                  <img
                    src={item.icon}
                    alt={`Benefit ${index + 1}`}
                    className="w-7 [@media(min-width:1366px)]:w-10 h-7 [@media(min-width:1366px)]:h-10 mt-1 shrink-0"
                  />
                  <h4 className="text-[calc(var(--fs-title-xl)-4px)] md:text-[calc(var(--fs-title-xl)+4px)] leading-[1.705] font-bold text-white max-w-[20ch]">
                    {item.title}
                  </h4>
                </div>
                <img src={item.image} alt={item.title} className="md:max-w-[40%] [@media(min-width:1366px)]:max-w-[40%] [@media(max-width:767px)]:w-full md:absolute md:inset-y-0 md:right-0 object-cover md:h-full" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default DetailPgKeyBenefits;
