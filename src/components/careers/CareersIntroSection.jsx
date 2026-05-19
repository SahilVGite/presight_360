import SectionHeader from "../common/SectionHeader";

export default function CareersIntroSection() {
    return (
        <div className="main-wrapper">
            <div className="w-full relative">
                <p className="section-label mb-3">Opportunity Awaits</p>
                <SectionHeader title="DO THE MOST IMPORTANT WORK OF YOUR CAREER, HELPING SAFEGUARD THE WORLD'S MOST IMPORTANT ORGANIZATIONS AND INDIVIDUALS AGAINST RISK." className="mb-10" />
                <p className="[font-size:var(--fs-body-md)] leading-[2.0555]">
                    PreSight 360 is a global provider of integrated risk intelligence and security solutions. We provides discreet, behind-the-scenes research and analysis that enables companies and VIPs to act with precision, clarity, and confidence. Our intelligence is designed for decision-makers operating in high-stakes environments - where risks are complex, and mistakes are costly.
                </p>
                <p className="[font-size:var(--fs-body-md)] leading-[2.0555]">
                    We apply our proprietary PASTIL framework - Politics,Alert-Levels,Security,Technology,Insights,and Logistics - to ensure no critical factor is overlooked. With Presight 360,leaders move forward knowing they have the intelligence advantage.
                </p>
                <div className="pt-32 [@media(max-width:1536px)]:pt-20 [@media(max-width:900px)]:pt-10">
                    <span className="absolute left-1/2 bottom-0 -translate-x-1/2 w-full max-w-[1465px] h-px bg-[#4E5E70]"></span>
                </div>
            </div>
        </div>
    );
}
