import HeroSection from '../components/home/HeroSection';
import SecurityIntelligenceSection from '../components/home/SecurityIntelligenceSection';
import TrustedLeadersSection from '../components/home/TrustedLeadersSection';
import WhyPresightSection from '../components/home/WhyPresightSection';
import StrategySection from '../components/home/StrategySection';
import ReportsSection from '../components/home/ReportsSection';
import LocationSection from '../components/home/LocationSection';
import CertificationsSection from '../components/home/CertificationsSection';
import CTASection from '../components/common/CTASection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <SecurityIntelligenceSection />
      <TrustedLeadersSection />
      <WhyPresightSection />
      <StrategySection />
      <ReportsSection />
      <LocationSection />
      <CertificationsSection />
      <CTASection />
    </>
  );
}
