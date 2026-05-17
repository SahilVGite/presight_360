import { useRouter } from 'next/router';
import Link from 'next/link';
import PageHero from '../../components/common/PageHero';
import CTASection from '../../components/common/CTASection';
import SolutionOverviewSection from '../../components/solutions/SolutionOverviewSection';
import SolutionBenefitsSection from '../../components/solutions/SolutionBenefitsSection';
import { SOLUTIONS_DATA } from '../../constants/solutionsData';

export default function SolutionDetail() {
  const { slug } = useRouter().query;
  const solution = SOLUTIONS_DATA.find((s) => s.slug === slug);

  if (!solution) {
    return (
      <div className="pt-30 text-center min-h-[60vh] flex items-center justify-center">
        <div>
          <p className="text-white/50 mb-4">Solution not found.</p>
          <Link href="/solutions" className="text-accent-red no-underline hover:underline">← Back to Solutions</Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <PageHero label="Our Solutions" title={solution.title} />
      <SolutionOverviewSection solution={solution} />
      <SolutionBenefitsSection solution={solution} />
      <CTASection />
    </>
  );
}

export async function getServerSideProps() {
  return { props: {} }
}
