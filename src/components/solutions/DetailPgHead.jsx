import React from "react";
import { solutionsDetailsCircle } from "../../assets/images";

const DetailPgHead = () => {
  return (
    <section className="pb-25 relative">
      <div className="main-wrapper relative z-10">
        <img
          src={solutionsDetailsCircle}
          alt=""
          className="absolute -z-1 w-full h-auto inset-x-0 bottom-[-30%] lg:bottom-[-40%] [@media(max-width:767px)]:hidden"
        />
        <div className="md:max-w-[75%] lg:max-w-[60%] mx-auto text-center">
          <h2 className="font-display font-bold uppercase leading-[1.346] [font-size:var(--fs-section-title)] mt-[0.3269em] mb-[0.7615em]">
            Navigating uncertainty, securing success.
          </h2>
          <p className="[font-size:var(--fs-body-md)] leading-[2.0555] text-white">
            Risk Assessment and Risk Managementis a critical service offered by
            Alliance International Security Consulting.Ourteam of experts
            utilizes a thorough and systematic approach to identify potential
            threats and evaluate theirimpact on your organization.By
            understanding the risks,we can develop and implement effective
            strategies to mitigate and manage them. Ourrisk management services
            help organizations prepare for, respond to,and recoverfrom any
            disruptive events while ensuring business continuity.With our
            expertise,you can have peace of mind knowing that your
            assets,people,and reputation are protected.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DetailPgHead;
