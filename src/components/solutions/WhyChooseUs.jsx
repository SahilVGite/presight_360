import React from "react";
import Link from "next/link";
import Button from "../common/Button";

const WhyChooseUs = () => {
  return (
    <section className=" relative py-12 px-6 lg:p-25 overflow-hidden flex items-center backdrop-blur-sm">
      {/* Background image */}
      <div className="absolute inset-0 bg-whyChooseUsBg" />
      <div className="absolute inset-0 gradient-why-overlay" />

      <div className="relative max-w-427.75 p-6 md:p-12 lg:p-24 mx-auto w-full bg-glass-effect">
        <p className="[font-size:var(--fs-body-md)] font-bold leading-normal text-accent-red uppercase mb-8">
          Why Choose Us
        </p>
        <h2 className="section-title mb-[1em]">
          Assessing Emerging Risks and Strategic Implications with our core
          services
        </h2>
        <Link href="/contact">
          <Button
            variant="primary"
            size="sm"
            showArrow
            className="whitespace-nowrap"
          >
            Contact Us 
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default WhyChooseUs;
