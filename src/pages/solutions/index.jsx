import PageHero from '../../components/common/PageHero';
import CTASection from '../../components/common/CTASection';
import SolutionsGridSection from '../../components/solutions/SolutionsGridSection';

export { SOLUTIONS_DATA } from '../../constants/solutionsData';

export default function Solutions() {
  return (
    <>
      <PageHero
        label="Our Solutions"
        title="SECURITY INTELLIGENCE: THE INSIGHT BEHIND CONFIDENT DECISIONS"
        subtitle="Smarter security starts with better intelligence."
      />
      <SolutionsGridSection />
      <CTASection />
    </>
  );
}
