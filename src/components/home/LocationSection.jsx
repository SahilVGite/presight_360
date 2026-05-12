import { worldMap } from "../../assets/images";

const LOCATIONS = [
    { topClass: 'top-[35%]', leftClass: 'left-[22%]', label: 'New York' },
    { topClass: 'top-[40%]', leftClass: 'left-[45%]', label: 'London' },
    { topClass: 'top-[42%]', leftClass: 'left-[55%]', label: 'Dubai' },
    { topClass: 'top-[55%]', leftClass: 'left-[72%]', label: 'Singapore' },
    { topClass: 'top-[60%]', leftClass: 'left-[80%]', label: 'Sydney' },
];

export default function LocationSection() {
    return (
        <section className="pt-[clamp(60px,8vw,100px)] pb-[clamp(60px,8vw,100px)] relative overflow-hidden">
            <div className="main-wrapper">
                <div className="mb-10 pl-0 md:pl-6 lg:pl-24">
                    <p className="uppercase text-lg tracking-[0.18em] text-[#DB3B3B] font-semibold mb-3">
                        Presight 360 Offices
                    </p>
                    <h2 className="section-title">Our Location</h2>
                </div>
                <div className="w-full mx-auto mt-14">
                    <img src={worldMap} alt="World Map"  className="w-full h-auto"/>
                </div>
                {/* World Map */}
                <div className="rounded-xl overflow-hidden relative">
                    {LOCATIONS.map((dot, i) => (
                        <div
                            key={i}
                            className={`absolute -translate-x-1/2 -translate-y-1/2 ${dot.topClass} ${dot.leftClass}`}
                        >
                            <div className="w-2.5 h-2.5 rounded-full bg-accent-red shadow-[0_0_0_4px_rgba(232,70,42,0.3)] relative z-10" />
                            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-[rgba(2,11,24,0.85)] text-white text-[0.6rem] font-semibold px-1.5 py-0.5 rounded whitespace-nowrap border border-white/10">
                                {dot.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
