'use client'
import { useState } from "react";
import Link from "next/link";
import { ChevronUp } from "lucide-react";

export default function JobCard({ job }) {
    const [open, setOpen] = useState(true);
    return (
        <div className="!rounded-[1.25rem] overflow-hidden transition-all bg-glass-effect flex flex-col !shadow-none">
            <button
                onClick={() => setOpen(!open)}
                className="w-full text-left p-6 flex items-start justify-between gap-4 bg-transparent border-none cursor-pointer text-white"
            >
                <div>
                    <h3 className="font-bold mb-3.5 font-display [font-size:var(--fs-body-2xl)]">
                        {job.title}
                    </h3>
                    <div className="flex flex-wrap gap-2 [font-size:var(--fs-body-xs)]">
                        <span className="px-2 py-1 !rounded-sm bg-glass-effect text-white">
                            Open positions: {job.openings}
                        </span>
                        <span className="px-2 py-1 !rounded-sm bg-glass-effect text-white">
                            {job.experience}
                        </span>
                        <span className="px-2 py-1 !rounded-sm bg-glass-effect text-white">
                            {job.location}
                        </span>
                    </div>
                </div>
                <ChevronUp
                    size={35}
                    className={`text-white shrink-0 transition-transform duration-200 ${open ? "rotate-0" : "rotate-180"}`}
                />
            </button>

            {open && (
                <div className="px-6 pb-6">
                    <p className="[font-size:var(--fs-body-md)] mb-2 font-medium text-white">
                        Skills Required: {job.skills.join(", ")}
                    </p>
                    <ul className="space-y-1 mb-5 list-disc pl-5">
                        {[
                            job.desc,
                            "This is dummy text will be replaced with original content.",
                            "This is dummy text will be replaced with original content.",
                        ].map((item, i) => (
                            <li
                                key={i}
                                className="[font-size:var(--fs-body-sm)] font-medium text-white leading-[1.7]"
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                    <div className="flex justify-end">
                        <Link
                            href={`/careers/${job.id}/apply`}
                            className="btn-primary px-5 py-2 [font-size:var(--fs-body-sm)] no-underline"
                        >
                            Apply Now
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
}
