import PageHero from '../../components/common/PageHero';
import CTASection from '../../components/common/CTASection';
import SolutionsGridSection from '../../components/solutions/SolutionsGridSection';
import { solutionsPgBannerBg } from '../../assets/images';

export { SOLUTIONS_DATA } from '../../constants/solutionsData';

export default function Solutions() {
  return (
    <>
      <PageHero
        label="Our Solutions"
        title="SECURITY INTELLIGENCE: THE INSIGHT BEHIND CONFIDENT DECISIONS"
        subtitle="Smarter security starts with better intelligence."
        bgImage={solutionsPgBannerBg}
        isStarsBg={true}
      />
      <SolutionsGridSection />
      <CTASection />
    </>
  );
}
