import SectionHeader from "../common/SectionHeader";
import { industriesMainImg } from "../../assets/images";

export default function IndustriesOverviewSection() {
  return (
    <div className='flex  [@media(max-width:1023px)]:flex-col gap-22 items-center justify-between'>
      <div className='max-w-full lg:max-w-[55%]'>
        <p className="section-label mb-2">Overview</p>
        <SectionHeader title="Immediate crisis assistance and emergency response services worldwide." className="mb-10" />
        <p className='[font-size:var(--fs-body-md)] leading-[2.0555]'>
          PreSight 360 is a global intelligence-driven security firm dedicated to mitigating risk for governments, NGOs, corporations and high-net-worth clients operating in challenging, high-threat settings. Our multidisciplinary team combines veteran analysts, technical experts and field operatives to deliver integrated risk management across diverse sectors – from energy and aviation to technology, finance, logistics, agriculture and development. We fuse open-source and classified intelligence with local field knowledge to provide a 360-degree view of emerging threats. By anticipating geopolitical shifts, criminal trends and insider risks, we help clients make informed decisions and maintain continuity of critical operations worldwide.
        </p>
      </div>
      <div className='max-w-141.5 lg:max-w-[34%]'>
        <img src={industriesMainImg} alt="Industries Overview" className='rounded-[20px]' />
      </div>
    </div>
  );
}
