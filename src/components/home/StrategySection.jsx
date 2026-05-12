import { Link } from 'react-router-dom';
import Button from '../common/Button';
import { strategyImg1, strategyImg2, strategyImg3 } from '../../assets/images';

const STRATEGY_ITEMS = [
  {
    title: 'This is dummy text will be replaced with text',
    desc: 'This is dummy text will be replaced with original content. This is dummy text will be replaced with original content.',
    imgClass: strategyImg1,
    href: '/solutions',
    large: true,
  },
  {
    title: 'Threat Intelligence & Monitoring',
    desc: 'This is dummy text will be replaced with original content. This is dummy text will be replaced with original content.',
    imgClass: strategyImg2,
    href: '/solutions/threat-intelligence',
  },
  {
    title: 'Network Security Architecture',
    desc: 'This is dummy text will be replaced with original content. This is dummy text will be replaced with original content.',
    imgClass: strategyImg3,
    href: '/solutions/security-risk',
  },
];

export default function StrategySection() {
  return (
    <section className="section-gradient relative overflow-hidden pt-[11.25rem] pb-[6rem]">
      <div className="main-wrapper px-6 xl:px-0 ">

        {/* Top Border */}
        <span className="absolute left-1/2 top-[6.625rem] -translate-x-1/2 w-full max-w-[1465px] h-px bg-[#4E5E70]"></span>

        {/* Heading */}
        <div className="mb-[3.5rem] pl-0 xl:pl-[8.75rem] ">
          <p className="uppercase text-lg tracking-[0.18em] text-[#DB3B3B] font-semibold mb-8">
            Trending Insight
          </p>

          <h2 className="section-title">
            WHERE STRATEGY MEETS FORESIGHT
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          {/* Large Top Card */}
          <Link
            to={STRATEGY_ITEMS[0].href}
            className="group rounded-[1.35rem] overflow-hidden flex [@media(max-width:767px)]:flex-col items-stretch transition-all duration-300 md:col-span-2 bg-glass-effect"
          >
            {/* Content */}
            <div className="flex-1 pt-8 p-4 md:p-[2.3rem] flex flex-col justify-center">
              <h3 className="text-white font-bold leading-[1.1] text-[clamp(1.5rem,4vw,2.625rem)] max-w-[37.3125rem] mb-5">
                {STRATEGY_ITEMS[0].title}
              </h3>

              <p className="text-white text-[clamp(1rem,2.5vw,1.25rem)] leading-[1.5] max-w-[37.3125rem]">
                {STRATEGY_ITEMS[0].desc}
              </p>
            </div>

            {/* Image */}
            <div className="w-full md:w-[46%] p-4 flex items-center">
                <img src={STRATEGY_ITEMS[0].imgClass} alt={STRATEGY_ITEMS[0].title}  className='rounded-[1.25rem]'/>
            </div>
          </Link>

          {/* Bottom Cards */}
          {STRATEGY_ITEMS.slice(1).map((item, i) => (
            <Link
              key={i}
              to={item.href}
              className="group rounded-[1.35rem] bg-glass-effect pt-8 p-4 md:px-8 md:pt-17.5 md:pb-13.5 overflow-hidden transition-all duration-300"
            >
              <div className="pb-4">
                <h3 className="text-white  text-[clamp(1.5rem,4vw,2.625rem)] leading-[1.15] font-bold mb-4">
                  {item.title}
                </h3>

                <p className="text-white text-[clamp(1rem,2.5vw,1.25rem)] leading-[1.5]">
                  {item.desc}
                </p>
              </div>

              <div className="">
                <img src={item.imgClass} alt={item.title} className='rounded-[1.25rem]'/>
              </div>
            </Link>
          ))}
        </div>

        {/* Button */}
        <div className="mt-[3.5rem] pl-0 xl:pl-[15.875rem]">
          <Link to="/solutions">
            <Button variant="primary" size="sm" showArrow>
              Explore Now
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
