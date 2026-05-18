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
      <section className="py-32 [@media(max-width:1536px)]:py-20  [@media(max-width:900px)]:py-10 gradientBgImg">
        <CareersIntroSection />
        <CareersJobSearchSection />
        <CareersStoriesSection />
      </section>
    </>
  )
}
