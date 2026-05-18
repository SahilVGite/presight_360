import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { soulOverview1, soulOverview2, soulOverview3 } from '../../assets/images';

export default function SolutionOverviewSection() {
  return (
    <section className="py-25">
      <div className="main-wrapper">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 [@media(min-width:1600px)]:gap-23.5">
          <div className='w-full max-w-full lg:max-w-[65%] [@media(min-width:1600px)]:max-w-[50%]'>
            <p className="[font-size:var(--fs-body-md)] text-accent-red font-bold">Overview</p>
            <h2 className="font-display font-bold uppercase leading-[1.346] [font-size:var(--fs-section-title)] mt-[0.3269em] mb-[0.7615em]">
              Understanding Power, Influence, and Uncertainty in a Complex World
            </h2>
            <p className="[font-size:var(--fs-body-md)] leading-[2.0555]">
              PreSight 360 is a global intelligence-driven security firm dedicated to mitigating risk for governments, NGOs, corporations and high-net-worth clients operating in challenging, high-threat settings. Our multidisciplinary team combines veteran analysts, technical experts and field operatives to deliver integrated risk management across diverse sectors - from energy and aviation to technology, finance, logistics, agriculture and development. We fuse open-source and classified intelligence with local field knowledge to provide a 360-degree view of emerging threats. By anticipating geopolitical shifts, criminal trends and insider risks, we help clients make informed decisions and maintain continuity of critical operations worldwide.
            </p>
          </div>

          <div className="flex items-center justify-center gap-4 [@media(min-width:1600px)]:gap-9 w-full max-w-full md:max-w-[50%] lg:max-w-[35%] [@media(min-width:1600px)]:max-w-[45%]">
            <div className=''>
              <img src={soulOverview1} alt="Overview" className='aspect-[0.66/1] object-cover rounded-[20px]' />
            </div>
            <div className='flex flex-col gap-4 [@media(min-width:1600px)]:gap-9'>
              <img src={soulOverview2} alt="Overview" className='aspect-[0.95/1] object-cover rounded-[20px]' />
              <img src={soulOverview3} alt="Overview" className='aspect-[0.95/1] object-cover rounded-[20px]' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
