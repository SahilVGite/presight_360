import dynamic from 'next/dynamic';
import HeroSection from '../components/home/HeroSection';
import SecurityIntelligenceSection from '../components/home/SecurityIntelligenceSection';
import TrustedLeadersSection from '../components/home/TrustedLeadersSection';
import WhyPresightSection from '../components/home/WhyPresightSection';
import StrategySection from '../components/home/StrategySection';
import LocationSection from '../components/home/LocationSection';
import CertificationsSection from '../components/home/CertificationsSection';
import CTASection from '../components/common/CTASection';

const ReportsSection = dynamic(() => import('../components/home/ReportsSection'), { ssr: false });

export default function Home() {
  return (
    <>
      <HeroSection />
      <SecurityIntelligenceSection />
      <TrustedLeadersSection />
      <WhyPresightSection />
      <StrategySection />
      <div className='bg-report relative w-full h-full'>
        <ReportsSection />
        <LocationSection />
      </div>
      <div className='section-gradient relative overflow-hidden'>
        <CertificationsSection />
        <CTASection />
      </div>
    </>
  );
}
