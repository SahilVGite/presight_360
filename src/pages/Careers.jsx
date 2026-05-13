import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, MapPin, ChevronUp } from "lucide-react";
import PageHero from "../components/common/PageHero";
import Card from "../components/common/Card";
import { careerBannerBg } from "../assets/images";
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
    const [open, setOpen] = useState(false);
    return (
        <div className="rounded-xl overflow-hidden transition-all border border-white\/08 bg-card-50 mb-3">
            <button
                onClick={() => setOpen(!open)}
                className="w-full text-left p-6 flex items-start justify-between gap-4 bg-transparent border-none cursor-pointer text-white"
            >
                <div>
                    <h3 className="font-bold mb-2 font-display text-[1.05rem] uppercase">
                        {job.title}
                    </h3>
                    <div className="flex flex-wrap gap-2 text-xs">
                        <span className="px-2 py-1 rounded bg-blue-dim text-secondary\/80">
                            Open positions: {job.openings}
                        </span>
                        <span className="px-2 py-1 rounded bg-white-06 text-secondary\/70">
                            {job.experience}
                        </span>
                        <span className="px-2 py-1 rounded bg-white-06 text-secondary\/70 flex items-center gap-1">
                            <MapPin size={10} /> {job.location}
                        </span>
                    </div>
                </div>
                <ChevronUp
                    size={18}
                    className={`text-white/40 shrink-0 mt-1 transition-transform duration-200 ${open ? "rotate-0" : "rotate-180"}`}
                />
            </button>

            {open && (
                <div className="px-6 pb-6">
                    <p className="text-xs mb-2 font-semibold text-secondary\/60">
                        Skills Required: {job.skills.join(", ")}
                    </p>
                    <ul className="space-y-1 mb-5">
                        {[
                            job.desc,
                            "This is dummy text will be replaced with original content.",
                            "This is dummy text will be replaced with original content.",
                        ].map((item, i) => (
                            <li
                                key={i}
                                className="text-xs flex gap-2 text-secondary\/65 leading-[1.7]"
                            >
                                <span className="text-accent-red shrink-0">›</span>
                                {item}
                            </li>
                        ))}
                    </ul>
                    <div className="flex justify-end">
                        <Link
                            to={`/careers/${job.id}/apply`}
                            className="btn-primary px-5 py-2 text-sm no-underline"
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
            <section className="py-32 gradientBgImg">
                <div className="main-wrapper">
                  <div className="w-full relative">
                    <p className="section-label mb-3">Opportunity Awaits</p>
                    <SectionHeader title="DO THE MOST IMPORTANT WORK OF YOUR CAREER, HELPING SAFEGUARD THE WORLD'S MOST IMPORTANT ORGANIZATIONS AND INDIVIDUALS AGAINST RISK." className="mb-10" />
                    <p className="text-[clamp(0.825rem,4vw,1.125rem)] leading-[2.0555]">
                        PreSight 360 is a global provider of integrated risk intelligence and security solutions. We provides discreet, behind-the-scenes research and analysis that enables companies and VIPs to act with precision, clarity, and confidence. Our intelligence is designed for decision-makers operating in high-stakes environments - where risks are complex, and mistakes are costly.
                    </p>
                    <p className="text-[clamp(0.825rem,4vw,1.125rem)] leading-[2.0555]">
                        We apply our proprietary PASTIL framework - Politics,Alert-Levels,Security,Technology,Insights,and Logistics - to ensure no critical factor is overlooked. With Presight 360,leaders move forward knowing they have the intelligence advantage.
                    </p>
                    <div className="pt-32">
                      <span class="absolute left-1/2 bottom-0 -translate-x-1/2 w-full max-w-[1465px] h-px bg-[#4E5E70]"></span>
                    </div>
                  </div>
                </div>
                <div className="main-wrapper">
                <div className="py-32">
                    <h2 className="text-center text-[2.125rem] font-bold text-[#DB3B3B]">
                        Search Jobs
                    </h2>
                    <p className="text-center text-lg text-white mb-11">
                        To begin the application process, search current openings and click
                        "Apply".
                    </p>

                    {/* Search bar */}
                    <div className="flex items-center flex-row sm:flex-row gap-0 mb-10 rounded-full overflow-hidden max-w-[71.25rem] mx-auto bg-glass-effect px-[3.75rem] py-5 pr-5">
                        <div className="flex items-center flex-1 gap-3">
                            {/* <Search size={15} className="text-white/30 shrink-0" /> */}
                            <div>
                                <label for="searchBox" className="w-full text-xl text-white">
                                    Find Open Jobs
                                </label>
                                <input
                                    type="text"
                                    id="searchBox"
                                    name="searchBox"
                                    placeholder="Search by job title/ref. code"
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                    className="bg-transparent border-none outline-none text-white text-base w-full"
                                />
                            </div>
                        </div>
                        <div className="w-px bg-white-06 self-stretch shrink-0 mx-[3.125rem]" />
                        <div className="flex items-center flex-1 gap-3">
                            {/* <MapPin size={15} className="text-white/30 shrink-0" /> */}
                            <div>
                                <label for="locationInput" className="w-full text-xl text-white">
                                    Location
                                </label>
                                <input
                                    type="text"
                                    id="locationInput"
                                    name="locationInput"
                                    placeholder="Office, data center, or remote locations"
                                    value={location}
                                    onChange={(e) => setLocation(e.target.value)}
                                    className="bg-transparent border-none outline-none text-white text-base w-full"
                                />
                            </div>
                        </div>
                        <button className="flex items-center justify-center w-[2.625rem] h-[2.625rem] rounded-full bg-accent-red border-none cursor-pointer text-white hover:bg-accent-red-hover transition-colors">
                            <Search size={20} />
                        </button>
                    </div>

                    <div className="py-8">
                        {filtered.length === 0 ? (
                            <p className="text-center text-sm text-secondary\/50">
                                No openings match your search.
                            </p>
                        ) : (
                            filtered.map((job) => <JobCard key={job.id} job={job} />)
                        )}
                    </div>
                </div>
                </div>
                <div className="main-wrapper grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                        {
                            title: "Success Stories",
                            desc: "Success Stories showcase real-world impact through client achievements, solved challenges, and measurable outcomes, highlighting how our intelligence-led insights and risk solutions drive confident decisions and lasting value.",
                        },
                        {
                            title: "Life At Presight360",
                            desc: "Life at Presight360 is about collaboration, curiosity, and purpose. We foster a culture where ideas are valued, growth is encouraged, and people work together to solve complex challenges with integrity, innovation, and impact.",
                        },
                    ].map((card, i) => (
                        <Card key={i} className="p-8">
                            <div className="rounded-lg mb-5 h-[160px] bg-blue-subtle border border-white\/04 flex items-center justify-center text-white/10 text-xs">
                                [ Image ]
                            </div>
                            <h3 className="font-bold mb-3 font-display text-[1.1rem] uppercase">
                                {card.title}
                            </h3>
                            <p className="text-sm leading-relaxed mb-5 text-secondary\/70">
                                {card.desc}
                            </p>
                            <button className="flex items-center gap-2 text-sm font-semibold text-accent-red bg-transparent border-none cursor-pointer">
                                → Read More
                            </button>
                        </Card>
                    ))}
                </div>
            </section>
        </>
    );
}
