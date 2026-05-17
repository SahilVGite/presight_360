import { useState } from "react";
import Link from "next/link";
import { Search, MapPin, ChevronUp, ArrowRight } from "lucide-react";
import PageHero from "../components/common/PageHero";
import Card from "../components/common/Card";
import { careerBannerBg, successStoryImg1, successStoryImg2 } from "../assets/images";
import SectionHeader from "../components/common/SectionHeader";

export const JOBS_DATA = [
    {
        id: 1,
        title: "Sr. Manager",
        openings: 1,
        experience: "7+ years",
        location: "Area name, Location",
        skills: [
            "Curriculum Designing & Management",
            "Good Communication Skills",
            "University, School Co-ordination",
            "Open for learning",
        ],
        desc: "Lead strategic initiatives and manage a high-performing team in a fast-paced, intelligence-driven environment.",
    },
    {
        id: 2,
        title: "Intelligence Analyst",
        openings: 2,
        experience: "3+ years",
        location: "Remote / On-site",
        skills: [
            "Research & Analysis",
            "Geopolitical Knowledge",
            "Report Writing",
            "Data Interpretation",
        ],
        desc: "Analyze global threat environments and produce actionable intelligence reports for senior leadership.",
    },
    {
        id: 3,
        title: "Security Operations Specialist",
        openings: 1,
        experience: "5+ years",
        location: "Area name, Location",
        skills: [
            "Security Operations",
            "Risk Assessment",
            "Crisis Response",
            "Team Leadership",
        ],
        desc: "Oversee day-to-day security operations and coordinate with field teams across multiple jurisdictions.",
    },
    {
        id: 4,
        title: "Intern UI/Frontend Developer",
        openings: 2,
        experience: "0-1 years",
        location: "Remote",
        skills: ["React", "Tailwind CSS", "Figma", "HTML/CSS"],
        desc: "Join our digital team and help build cutting-edge intelligence platforms and internal tools.",
    },
];

function JobCard({ job }) {
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

export default function Careers() {
    const [search, setSearch] = useState("");
    const [location, setLocation] = useState("");

    const filtered = JOBS_DATA.filter(
        (j) =>
            j.title.toLowerCase().includes(search.toLowerCase()) &&
            j.location.toLowerCase().includes(location.toLowerCase()),
    );

    return (
        <>
            <PageHero
                label="Careers"
                title="BUILD MEANINGFUL CAREERS THAT SHAPE SMARTER DECISIONS AND STRONGER FUTURES."
                bgImage={careerBannerBg}
                isGradientBg={false}
            />

            {/* Intro */}
            <section className="py-32 [@media(max-width:1536px)]:py-20  [@media(max-width:900px)]:py-10 gradientBgImg">
                <div className="main-wrapper">
                    <div className="w-full relative">
                        <p className="section-label mb-3">Opportunity Awaits</p>
                        <SectionHeader title="DO THE MOST IMPORTANT WORK OF YOUR CAREER, HELPING SAFEGUARD THE WORLD'S MOST IMPORTANT ORGANIZATIONS AND INDIVIDUALS AGAINST RISK." className="mb-10" />
                        <p className="[font-size:var(--fs-body-md)] leading-[2.0555]">
                            PreSight 360 is a global provider of integrated risk intelligence and security solutions. We provides discreet, behind-the-scenes research and analysis that enables companies and VIPs to act with precision, clarity, and confidence. Our intelligence is designed for decision-makers operating in high-stakes environments - where risks are complex, and mistakes are costly.
                        </p>
                        <p className="[font-size:var(--fs-body-md)] leading-[2.0555]">
                            We apply our proprietary PASTIL framework - Politics,Alert-Levels,Security,Technology,Insights,and Logistics - to ensure no critical factor is overlooked. With Presight 360,leaders move forward knowing they have the intelligence advantage.
                        </p>
                        <div className="pt-32 [@media(max-width:1536px)]:pt-20 [@media(max-width:900px)]:pt-10">
                            <span className="absolute left-1/2 bottom-0 -translate-x-1/2 w-full max-w-[1465px] h-px bg-[#4E5E70]"></span>
                        </div>
                    </div>
                </div>
                <div className="main-wrapper">
                    <div className="py-32 [@media(max-width:1536px)]:py-20 [@media(max-width:900px)]:py-10 relative">
                        <h2 className="text-center [font-size:var(--fs-title-lg)] [@media(max-width:900px)]:[font-size:var(--fs-title-base)] font-bold text-[#DB3B3B]">
                            Search Jobs
                        </h2>
                        <p className="text-center [font-size:var(--fs-body-md)] text-white mb-11">
                            To begin the application process, search current openings and click
                            "Apply".
                        </p>

                        {/* Search bar */}
                        <div className="flex max-[600px]:flex-col flex-row items-center gap-0 mb-10 rounded-full overflow-hidden max-w-[71.25rem] mx-auto bg-glass-effect px-[3.75rem] py-2.5 pr-5 max-[900px]:px-8 max-[900px]:pr-4">
                            <div className="w-full flex items-center flex-row gap-0">
                                <div className="flex items-center flex-1 gap-3">
                                    <div>
                                        <label htmlFor="searchBox" className="w-full [font-size:var(--fs-body-lg)] text-white">
                                            Find Open Jobs
                                        </label>
                                        <input
                                            type="text"
                                            id="searchBox"
                                            name="searchBox"
                                            placeholder="Search by job title/ref. code"
                                            value={search}
                                            onChange={(e) => setSearch(e.target.value)}
                                            className="bg-transparent border-none outline-none text-white [font-size:var(--fs-body)] w-full"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="w-px bg-[#E9EBEE]/30 self-stretch shrink-0 mx-[3.125rem] [@media(max-width:1536px)]:mx-4 [@media(max-width:600px)]:mx-0 [@media(max-width:600px)]:my-4 [@media(max-width:600px)]:w-full [@media(max-width:600px)]:h-px" />
                            <div className="w-full flex items-center flex-row gap-0">
                                <div className="flex items-center flex-1 gap-3">
                                    <div>
                                        <label htmlFor="locationInput" className="w-full [font-size:var(--fs-body-lg)] text-white">
                                            Location
                                        </label>
                                        <input
                                            type="text"
                                            id="locationInput"
                                            name="locationInput"
                                            placeholder="Office, data center, or remote locations"
                                            value={location}
                                            onChange={(e) => setLocation(e.target.value)}
                                            className="bg-transparent border-none outline-none text-white [font-size:var(--fs-body)] w-full"
                                        />
                                    </div>
                                </div>
                                <button className="flex items-center justify-center w-[2.625rem] h-[2.625rem] rounded-full bg-accent-red border-none cursor-pointer text-white hover:bg-accent-red-hover transition-colors">
                                    <Search size={20} />
                                </button>
                            </div>
                        </div>

                        <div className="max-h-[75rem] overflow-y-auto pr-3 custom-scrollbar ">
                            {filtered.length === 0 ? (
                                <p className="text-center [font-size:var(--fs-body-sm)] text-secondary">
                                    No openings match your search.
                                </p>
                            ) : (
                                <div className="space-y-6">
                                    {filtered.map((job) => (
                                        <JobCard key={job.id} job={job} />
                                    ))}
                                </div>
                            )}
                        </div>
                        <div>
                            <span className="absolute left-1/2 bottom-20 [@media(max-width:1536px)]:bottom-10 [@media(max-width:900px)]:bottom-5 -translate-x-1/2 w-full max-w-[1465px] h-px bg-[#4E5E70]"></span>
                        </div>
                    </div>
                </div>
                <div className="main-wrapper grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {[
                        {
                            img: successStoryImg1,
                            title: "Success Stories",
                            desc: "Success Stories showcase real-world impact through client achievements, solved challenges, and measurable outcomes, highlighting how our intelligence-led insights and risk solutions drive confident decisions and lasting value.",
                        },
                        {
                            img: successStoryImg2,
                            title: "Life At Presight360",
                            desc: "Life at Presight360 is about collaboration, curiosity, and purpose. We foster a culture where ideas are valued, growth is encouraged, and people work together to solve complex challenges with integrity, innovation, and impact.",
                        },
                    ].map((card, i) => (
                        <div key={i} className="bg-glass-effect overflow-hidden !rounded-[1.875rem]">
                            <div className="rounded-lg flex items-center justify-center [font-size:var(--fs-body-xs)]">
                                <img src={card.img} alt={card.title} className="w-full h-full object-cover" />
                            </div>
                            <div className="p-6">
                                <h3 className="font-semibold mb-3 [font-size:var(--fs-title-md)] [@media(max-width:900px)]:[font-size:var(--fs-body-2xl)] uppercase">
                                    {card.title}
                                </h3>
                                <p className="[font-size:var(--fs-body-md)] leading-relaxed mb-5 text-white font-light [@media(max-width:900px)]:[font-size:var(--fs-body)]">
                                    {card.desc}
                                </p>
                                <button className="flex items-center gap-2 [font-size:var(--fs-body-sm)] font-bold text-white bg-transparent border-none cursor-pointer">
                                    <span className="text-white [font-size:var(--fs-body)] font-bold bg-[#DB3B3B] rounded-full p-4 [@media(max-width:900px)]:p- flex justify-center items-center">
                                        <ArrowRight size={24} />
                                    </span>
                                    Read More
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}
