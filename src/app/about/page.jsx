import PageHero from '../../components/common/PageHero'
import { aboutBannerBg, aboutPgBgGradient } from '../../assets/images'
import AboutOverviewSection from '../../components/about/AboutOverviewSection'
import AboutTeamSection from '../../components/about/AboutTeamSection'
import AboutPresenceSection from '../../components/about/AboutPresenceSection'
import AboutStatsSection from '../../components/about/AboutStatsSection'
import AboutExpertiseSection from '../../components/about/AboutExpertiseSection'
import AboutClientsSection from '../../components/about/AboutClientsSection'

export default function About() {
  return (
    <>
      <PageHero
        label="About Us"
        title="GLOBAL INTELLIGENCE-DRIVEN SECURITY FIRM DEDICATED TO MITIGATING RISK"
        isStarsBg={true}
        bgImage={aboutBannerBg}
      />
      <main
        style={{
          background: `url(${aboutPgBgGradient}) center/cover no-repeat`,
        }}
      >
        <AboutOverviewSection />
        <AboutTeamSection />
        <AboutPresenceSection />
        <AboutStatsSection />
        <AboutExpertiseSection />
        <AboutClientsSection />
      </main>
    </>
  )
}
