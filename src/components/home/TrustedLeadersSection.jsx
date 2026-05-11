import { Link } from 'react-router-dom';
import Button from '../common/Button';
import { guidingImg1, guidingImg2 } from '../../assets/images';

const TRUSTED_ITEMS = [
  {
    label: 'OUR INDUSTRIES',
    title: 'Trusted Across Industries, Worldwide',
    desc: 'Leveraging a multi-disciplinary team of intelligence analysts, cyber specialists, and field operatives, we deliver holistic threat management across key sectors including energy, aviation, technology, logistics, and development.',
    buttonTxt: 'Explore Industries',
    href: '/solutions',
    imgSrc: guidingImg1,
  },
  {
    label: 'OUR PRESENCE',
    title: 'Trusted Across Industries, Worldwide',
    desc: 'With operations spanning continents, our field operatives and analysts are embedded in the regions that matter most. PreSight 360 delivers real-time intelligence you can act on.',
    buttonTxt: 'Explore Now',
    href: '/about',
    imgSrc: guidingImg2,
  },
];

export default function TrustedLeadersSection() {
  return (
    <section className="section-gradient py-[clamp(4rem,8vw,8rem)] overflow-hidden">
      <div className="max-w-[95rem] mx-auto px-4 lg:px-8">
        {/* Heading */}
        <h2 className="max-w-[64.375rem] text-white section-title uppercase mb-16 pl-[3.75rem]">
          GUIDING LEADERS THROUGH RISK,
          WITH INSIGHT THEY CAN TRUST
        </h2>

        {/* Cards */}
        <div className="space-y-24">
          {TRUSTED_ITEMS.map((item, i) => (
            <div
              key={i}
              className="flex flex-row lg:flex-row items-center gap-20"
            >
              {/* Image */}
              <div className="w-full lg:w-[29.375rem] shrink-0">
                <img
                  src={item.imgSrc}
                  alt={item.label}
                  className="
                    w-full
                    object-cover
                    rounded-[2rem]
                  "
                />
              </div>

              {/* Content Card */}
              <div
                className="
                  relative
                  flex-1
                  rounded-[2rem]
                  px-8
                  py-10
                  bg-[rgba(255,255,255,0.04)]
                  border border-white/10
                  backdrop-blur-xl
                  shadow-[0_10px_40px_rgba(0,0,0,0.35)]
                "
              >
                {/* Left Accent Line */}
                <span className="absolute left-0 top-2/4 -translate-1/2 h-[166px] w-[4px] rounded-full bg-accent-red" />

                <div className="pl-6">
                  <p className="section-label uppercase tracking-[0.2em] mb-3">
                    {item.label}
                  </p>

                  <h3
                    className="
                      text-white
                      font-display
                      font-bold
                      text-[clamp(1.5rem,2vw,2.25rem)]
                      leading-tight
                      mb-5
                    "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                      text-white
                      text-sm
                      md:text-lg
                      leading-[1.8]
                      max-w-[900px]
                      mb-8
                    "
                  >
                    {item.desc}
                  </p>

                  <Link to={item.href}>
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
        <div className="mt-20 max-w-[51.25rem] pl-[3.75rem]">
          <p className="text-[#B4B4B4] text-[2rem] font-semibold uppercase leading-tight">
            CONFIDENTIAL INTELLIGENCE. UNMATCHED FORESIGHT<span className="text-[#6296FB]">.</span> <span className="text-[#DB3B3B] font-bold">UNSHAKEABLE LEADERSHIP.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
