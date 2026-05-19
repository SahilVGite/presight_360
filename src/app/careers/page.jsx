import PageHero from '../../components/common/PageHero'
import { careerBannerBg } from '../../assets/images'
import CareersIntroSection from '../../components/careers/CareersIntroSection'
import CareersJobSearchSection from '../../components/careers/CareersJobSearchSection'
import CareersStoriesSection from '../../components/careers/CareersStoriesSection'

export default function Careers() {
  return (
    <>
      <PageHero
        label="Careers"
        title="BUILD MEANINGFUL CAREERS THAT SHAPE SMARTER DECISIONS AND STRONGER FUTURES."
        bgImage={careerBannerBg}
        isGradientBg={false}
      />
      <section className="sec-gap gradientBgImg">
        <CareersIntroSection />
        <CareersJobSearchSection />
        <CareersStoriesSection />
      </section>
    </>
  )
}
