import React from "react";
import Link from "next/link";
import Button from "../common/Button";
import { SuccessStories1, SuccessStories2, SuccessStoriesBg } from "../../assets/images";

const SuccessStories = () => {
  return (
    <section className="py-20" style={{backgroundImage: `url(${SuccessStoriesBg})`,backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
      <div className="main-wrapper">
        <div className="w-full [font-size:var(--fs-body)] mb-[3em]">
          <p className="[font-size:var(--fs-body-md)] text-accent-red font-bold">
            SUCCESS STORIES
          </p>
          <div className="flex flex-wrap items-center justify-between gap-2 [font-size:var(--fs-body)] mt-[0.75em]">
            <h2 className="font-display font-bold uppercase leading-[1.346] [font-size:var(--fs-section-title)] max-w-[35ch]">
              Strengthening Strategic Positioning Amid Global Volatility
            </h2>
            <Link href="/solutions">
              <Button
                variant="primary"
                size="md"
                showArrow
                className="whitespace-nowrap"
              >
                Explore All
              </Button>
            </Link>
          </div>
        </div>
        <div className="w-full flex flex-col lg:flex-row gap-12">
          <div className="flex flex-col gap-12 w-full max-w-full lg:max-w-[50%]">
            <img src={SuccessStories1} alt="" className="[@media(max-width:610px)]:aspect-4/3 rounded-2xl lg:rounded-4xl object-cover w-full h-full flex-1" />
            <div className="w-full relative flex-1">
                <img src={SuccessStories2} alt="" className="[@media(max-width:610px)]:aspect-4/3 rounded-2xl lg:rounded-4xl object-cover w-full h-full flex-1" />
                <p className="absolute top-1/2 left-1/2 transform -translate-1/2 max-w-[95%] w-full text-white [font-size:var(--fs-title-xl)] font-semibold capitalize">Smart intelligence, clear risks, stronger decisions for tomorrow’s leaders.</p>
            </div>
          </div>
          <div className="w-full max-w-full lg:max-w-[50%] bg-[rgba(255,255,255,0.05)] backdrop-blur-2xl border border-[rgba(255,255,255,0.1)] rounded-[30px] p-6 md:p-12">
            <h3 className="text-[calc(var(--fs-section-title-sm)-10px)] text-white font-display font-bold mb-6 leading-[1.2] capitalize">
              See risks early. Act smarter. Lead confidently with strategic
              intelligence.
            </h3>
            <p className="leading-[1.75] [font-size:var(--fs-body)] text-white my-[1.5em]">
              Actionable insights derived from data, trends, and analysis to
              support informed decision-making, long-term planning, competitive
              positioning, and sustainable business growth. Systematic
              recognition of potential threats across operations, markets,
              compliance, and strategy, helping organizations anticipate
              challenges before they impact performance. Evaluating the
              likelihood and impact of identified risks using structured
              frameworks to prioritize exposures, quantify consequences, and
              guide mitigation strategies. Risk Identification focuses on
              systematically uncovering potential threats that could impact
              business continuity.
            </p>
            <div className="flex justify-end">
              <Link href="/solutions" className="[font-size:var(--fs-body-lg)] font-medium text-accent-red font-display bg-white rounded-4xl px-3 py-1 border border-[#DB3B3B]">
                  Case Study
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
