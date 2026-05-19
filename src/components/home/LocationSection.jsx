'use client'
import { useState } from "react";
import { worldMap } from "../../assets/images";

const LOCATIONS = [
    { posClass: "top-[30%] left-[47%]", country: "UK",       city: "London"        },
    { posClass: "top-[33%] left-[52%]", country: "France",   city: "Paris"         },
    { posClass: "top-[35%] left-[54%]", country: "Italy",    city: "Rome"          },
    { posClass: "top-[36%] left-[58%]", country: "UAE",      city: "Dubai"         },
    { posClass: "top-[43%] left-[66%]", country: "India",    city: "Mumbai"        },
    { posClass: "top-[55%] left-[52%]", country: "Kenya",    city: "Nairobi"       },
    { posClass: "top-[62%] left-[55%]", country: "Tanzania", city: "Dar es Salaam" },
];

export default function LocationSection() {
    const [hovered, setHovered] = useState(null);

    return (
        <section className="sec-gap relative overflow-hidden">
            <div className="main-wrapper">
                <div className="mb-10 pl-0 md:pl-6 lg:pl-24">
                    <p className="uppercase [font-size:var(--fs-body-md)]! tracking-[0.18em] text-[#DB3B3B] font-semibold mb-3">
                        Presight 360 Offices
                    </p>
                    <h2 className="section-title">Our Location</h2>
                </div>

                <div className="w-full mx-auto mt-14 relative">
                    <img src={worldMap} alt="World Map" className="w-full h-auto block" />

                    {LOCATIONS.map((dot, i) => (
                        <div
                            key={i}
                            className={`absolute -translate-x-1/2 -translate-y-1/2 z-10 ${dot.posClass}`}
                            onMouseEnter={() => setHovered(i)}
                            onMouseLeave={() => setHovered(null)}
                        >
                            {/* Pulse ring */}
                            <span className="absolute inset-0 rounded-full bg-accent-red opacity-30 animate-ping" />
                            {/* Glow ring */}
                            <span className="absolute -inset-1 rounded-full bg-accent-red opacity-15" />
                            {/* Dot */}
                            <div className="relative w-3 h-3 rounded-full bg-accent-red shadow-[0_0_0_3px_rgba(219,59,59,0.35)] cursor-pointer" />

                            {/* Tooltip */}
                            {hovered === i && (
                                <div className="absolute bottom-[calc(100%+10px)] left-1/2 -translate-x-1/2 z-20 pointer-events-none flex flex-col items-center">
                                    <div className="bg-white rounded-[6px] px-3 py-2 min-w-[90px] text-center shadow-[0_4px_20px_rgba(0,0,0,0.35)] whitespace-nowrap">
                                        <p className="text-[calc(var(--fs-body-xs)-2px)] font-bold uppercase tracking-[0.12em] text-accent-red mb-0.5">
                                            {dot.country}
                                        </p>
                                        <p className="[font-size:var(--fs-body-xs)] font-semibold text-[#020b18] leading-tight">
                                            {dot.city}
                                        </p>
                                    </div>
                                    {/* Caret using Tailwind border utilities */}
                                    <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-white" />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
