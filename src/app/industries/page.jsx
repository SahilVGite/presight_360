import PageHero from '../../components/common/PageHero'
import { industriesBannerBg } from '../../assets/images'
import IndustriesOverviewSection from '../../components/industries/IndustriesOverviewSection'
import IndustriesSectorsSection from '../../components/industries/IndustriesSectorsSection'

export default function Industries() {
  return (
    <>
      <PageHero
        label="Industries"
        title="IMMEDIATE CRISIS ASSISTANCE AND EMERGENCY RESPONSE SERVICES WORLDWIDE."
        bgImage={industriesBannerBg}
        isStarsBg={true}
      />
      <section className="sec-gap px-6 gradientBgImg industries-section">
        <div className="main-wrapper">
          <IndustriesOverviewSection />
          <IndustriesSectorsSection />
        </div>
      </section>
    </>
  )
}
