import SectionHeader from "../common/SectionHeader";
import Card from "../common/Card";
import {
  aboutExpertiesBg,
  expertise1,
  expertise2,
  expertise3,
  expertise4,
  siteLogo,
} from "../../assets/images";

const EXPERTISE = [
  {
    image: expertise1,
    title: "AI & Analytics",
    desc: "Harnessing cutting-edge AI to process and interpret vast intelligence datasets.",
  },
  {
    image: expertise2,
    title: "Security & Public Safety Tech",
    desc: "Advanced technology solutions for threat detection and public protection.",
  },
  {
    image: expertise3,
    title: "Engineering",
    desc: "Technical infrastructure and systems engineering for secure operations.",
  },
  {
    image: expertise4,
    title: "Digital Government Transformation",
    desc: "Modernizing government systems with security-first digital strategies.",
  },
];

export default function AboutExpertiseSection() {
  return (
    <section className="sec-gap" style={{
      background: `url(${aboutExpertiesBg}) bottom/cover no-repeat`,
    }}>
      <div className="main-wrapper">
        <p className="section-label [font-size:var(--fs-body-md)]! mb-2">Presight 360 Offices</p>
        <SectionHeader title="EXPERTISE PILLARS" className="mb-10" />
        <p className="text-white [font-size:var(--fs-body-md)] mb-13">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12.5 p-8 lg:p-12.5 rounded-[38px] bg-[rgba(0, 0, 0, 0.004)] border border-[rgba(255,255,255,0.1)] shadow-[0px_4px_15px_rgba(0,0,0,0.55)] backdrop-blur-2xl relative">
          {EXPERTISE.map((item, i) => {
            const isLeft = i % 2 === 0;
            const imageFirst = i < 2;
            return (
              <Card
                key={i}
                className={`p-6 [@media(min-width:1025px)]:p-9.5`}
              >
                {imageFirst ? (
                  <>
                    <img src={item.image} alt="expertise" className="rounded-xl" />
                    <h3 className={`font-bold mb-2 font-display [font-size:var(--fs-body-2xl)] uppercase mt-6  ${isLeft ? 'text-left pr-10 [@media(min-width:1025px)]:pr-20' : 'text-right pl-10 [@media(min-width:1025px)]:pl-20'}`}>
                      {item.title}
                    </h3>
                    <p className={`[font-size:var(--fs-body-md)] text-secondary\/70 leading-[1.7]  ${isLeft ? 'text-left pr-10 [@media(min-width:1025px)]:pr-20' : 'text-right pl-10 [@media(min-width:1025px)]:pl-20'}`}>
                      {item.desc}
                    </p>
                  </>
                ) : (
                  <>
                    <h3 className={`font-bold mb-2 font-display [font-size:var(--fs-body-2xl)] uppercase  ${isLeft ? 'text-left pr-10 [@media(min-width:1025px)]:pr-20' : 'text-right pl-10 [@media(min-width:1025px)]:pl-20'}`}>
                      {item.title}
                    </h3>
                    <p className={`[font-size:var(--fs-body-md)] mb-6 text-secondary\/70 leading-[1.7]  ${isLeft ? 'text-left pr-10 [@media(min-width:1025px)]:pr-20' : 'text-right pl-10 [@media(min-width:1025px)]:pl-20'}`}>
                      {item.desc}
                    </p>
                    <img src={item.image} alt="expertise" className="rounded-xl" />
                  </>
                )}
              </Card>
            );
          })}
          <div className="hidden md:block absolute top-1/2 left-1/2 transform -translate-1/2 bg-[#041246] h-auto w-[20%] max-w-78 max-h-78 aspect-square rounded-[100%]"><img src={siteLogo} alt="Presight 360" className="w-full h-full mx-auto object-contain max-w-[65%]" /></div>
        </div>
      </div>
    </section>
  );
}
