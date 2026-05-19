import Link from "next/link";
import Button from "../common/Button";
import { guidingImg1, guidingImg2 } from "../../assets/images";

const TRUSTED_ITEMS = [
  {
    label: "OUR INDUSTRIES",
    title: "Trusted Across Industries, Worldwide",
    desc: "Leveraging a multi-disciplinary team of intelligence analysts, cyber specialists, and field operatives, we deliver holistic threat management across key sectors including energy, aviation, technology, logistics, and development.",
    buttonTxt: "Explore Industries",
    href: "/solutions",
    imgSrc: guidingImg1,
  },
  {
    label: "OUR PRESENCE",
    title: "Trusted Across Industries, Worldwide",
    desc: "With operations spanning continents, our field operatives and analysts are embedded in the regions that matter most. PreSight 360 delivers real-time intelligence you can act on.",
    buttonTxt: "Explore Now",
    href: "/about",
    imgSrc: guidingImg2,
  },
];

export default function TrustedLeadersSection() {
  return (
    <section className="section-gradient sec-gap overflow-hidden">
      <div className="main-wrapper px-4 lg:px-8">
        {/* Heading */}
        <h2 className="max-w-257.5 text-white section-title uppercase mb-16 pl-0 md:pl-6 lg:pl-12.5">
          GUIDING LEADERS THROUGH RISK, WITH INSIGHT THEY CAN TRUST
        </h2>

        {/* Cards */}
        <div className="space-y-24">
          {TRUSTED_ITEMS.map((item, i) => (
            <div
              key={i}
              className="flex [@media(max-width:850px)]:flex-col items-center gap-10 lg:gap-20"
            >
              {/* Image */}
              <div className="w-full [@media(min-width:851px)]:w-117.5 shrink-0">
                <img
                  src={item.imgSrc}
                  alt={item.label}
                  className="
                    w-full
                    object-cover
                    rounded-4xl
                  "
                />
              </div>

              {/* Content Card */}
              <div
                className="
                  relative
                  flex-1
                  rounded-4xl
                  px-4
                  md:px-8
                  py-10
                  bg-[rgba(255,255,255,0.04)]
                  border border-white/10
                  backdrop-blur-xl
                  shadow-[0_10px_40px_rgba(0,0,0,0.35)]
                "
              >
                {/* Left Accent Line */}
                <span className="absolute left-0 top-2/4 -translate-1/2 min-h-41.5 w-1 rounded-full bg-accent-red" />

                <div className="pl-6">
                  <p className="section-label uppercase mb-3 text-white">
                    {item.label}
                  </p>

                  <h3
                    className="
                      text-white
                      font-display
                      font-bold
                      [font-size:var(--fs-title-xl)]
                      leading-tight
                      mb-5
                    "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                      text-white
                      [font-size:var(--fs-body-sm)]
                      md:[font-size:var(--fs-body-md)]
                      leading-[1.8]
                      max-w-225
                      mb-8
                    "
                  >
                    {item.desc}
                  </p>

                  <Link href={item.href}>
                    <Button variant="primary" size="sm" showArrow>
                      {item.buttonTxt}
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Text */}
        <div className="mt-20 max-w-[51.25rem] pl-0 md:pl-6 lg:pl-12.5">
          <p className="text-[#B4B4B4] [font-size:var(--fs-title-md)] font-semibold uppercase leading-tight">
            CONFIDENTIAL INTELLIGENCE. UNMATCHED FORESIGHT
            <span className="text-[#6296FB]">.</span>{" "}
            <span className="text-[#DB3B3B] font-bold">
              UNSHAKEABLE LEADERSHIP.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
