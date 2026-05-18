import PageHero from "../../components/common/PageHero";
import CTASection from "../../components/common/CTASection";
import SolutionsFaqSection from "../../components/solutions/SolutionsFaqSection";
import { solutionPgBg, solutionsPgBannerBg } from "../../assets/images";
import SolutionOverviewSection from "../../components/solutions/SolutionOverviewSection";
import SuccessStories from "../../components/solutions/SuccessStories";
import WhyChooseUs from "../../components/solutions/WhyChooseUs";
import SolutionBenefitsSection from "../../components/solutions/SolutionBenefitsSection";
import SolutionsSlider from "../../components/solutions/SolutionsSlider";

export default function Solutions() {
  return (
    <>
      <PageHero
        label="Our Solutions"
        title="Strategic Intelligence & Geopolitical Risk"
        bgImage={solutionsPgBannerBg}
        isStarsBg={true}
      />
      <div
        style={{
          background: `url(${solutionPgBg}) bottom/cover no-repeat`,
        }}
      >
        <SolutionOverviewSection />
        <SolutionsSlider />
        <SolutionBenefitsSection />
        <SuccessStories />
        <WhyChooseUs />
        <div className="mx-auto w-[75vw] h-0.5 bg-white/10 mt-20" />
        <SolutionsFaqSection />
      </div>
    </>
  );
}
