import { useState } from "react";
import { Search } from "lucide-react";
import { JOBS_DATA } from "../../constants/careersData";
import JobCard from "./JobCard";

export default function CareersJobSearchSection() {
    const [search, setSearch] = useState("");
    const [location, setLocation] = useState("");

    const filtered = JOBS_DATA.filter(
        (j) =>
            j.title.toLowerCase().includes(search.toLowerCase()) &&
            j.location.toLowerCase().includes(location.toLowerCase()),
    );

    return (
        <div className="main-wrapper">
            <div className="py-32 [@media(max-width:1536px)]:py-20 [@media(max-width:900px)]:py-10 relative">
                <h2 className="text-center [font-size:var(--fs-title-lg)] [@media(max-width:900px)]:[font-size:var(--fs-title-base)] font-bold text-[#DB3B3B]">
                    Search Jobs
                </h2>
                <p className="text-center [font-size:var(--fs-body-md)] text-white mb-11">
                    To begin the application process, search current openings and click
                    "Apply".
                </p>

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
    );
}
