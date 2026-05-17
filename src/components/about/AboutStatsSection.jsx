import {
  aboutInfoSecBg,
  aboutProjectsCompeted,
  aboutSuccessfulYears,
  aboutClientRetention,
  aboutCountries,
} from "../../assets/images";

export default function AboutStatsSection() {
  return (
    <section
      className="py-20 md:py-35 lg:py-47 w-full relative"
      style={{
        background: `url(${aboutInfoSecBg}) center/cover no-repeat`,
      }}
    >
      <div className="main-wrapper">
        <div className="p-5 [@media(min-width:1025px)]:px-12 [@media(min-width:1025px)]:py-12.5 relative bg-glass-effect w-fit mx-auto shadow-[0px_4px_15px_rgba(0,0,0,0.55)]">
          <ul className="aboutInfos flex flex-col md:flex-row flex-wrap items-center justify-center text-center">
            <li className="py-3 [@media(min-width:1440px)]:py-5 px-10 [@media(min-width:1440px)]:px-15 mr-8 last:mr-0">
              <img className="w-5 md:w-8 lg:w-10 [@media(min-width:1440px)]:w-13 mx-auto" src={aboutProjectsCompeted} alt="Client 1" />
              <p className="[font-size:var(--fs-section-title)] font-bold">400 <span>+</span></p>
              <p className="text-[#FFDBDB] [font-size:var(--fs-body-lg)]">Projects Competed</p>
            </li>
            <li className="py-3 [@media(min-width:1440px)]:py-5 px-10 [@media(min-width:1440px)]:px-15 mr-8 last:mr-0">
              <img className="w-5 md:w-8 lg:w-10 [@media(min-width:1440px)]:w-13 mx-auto" src={aboutSuccessfulYears} alt="Client 2" />
              <p className="[font-size:var(--fs-section-title)] font-bold">15 <span>+</span></p>
              <p className="text-[#FFDBDB] [font-size:var(--fs-body-lg)]">Successful Years</p>
            </li>
            <li className="py-3 [@media(min-width:1440px)]:py-5 px-10 [@media(min-width:1440px)]:px-15 mr-8 last:mr-0">
              <img className="w-5 md:w-8 lg:w-10 [@media(min-width:1440px)]:w-13 mx-auto" src={aboutClientRetention} alt="Client 3" />
              <p className="[font-size:var(--fs-section-title)] font-bold">98 <span>%</span></p>
              <p className="text-[#FFDBDB] [font-size:var(--fs-body-lg)]">Client Retention</p>
            </li>
            <li className="py-3 [@media(min-width:1440px)]:py-5 px-10 [@media(min-width:1440px)]:px-15 mr-8 last:mr-0">
              <img className="w-5 md:w-8 lg:w-10 [@media(min-width:1440px)]:w-13 mx-auto" src={aboutCountries} alt="Client 4" />
              <p className="[font-size:var(--fs-section-title)] font-bold">10 <span>+</span></p>
              <p className="text-[#FFDBDB] [font-size:var(--fs-body-lg)]">Countries</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
