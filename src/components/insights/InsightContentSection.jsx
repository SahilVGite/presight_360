import Link from "next/link";
import { Dot, ChevronRight } from "lucide-react";
import { FacebookIcon } from "../../assets/icons/FacebookIcon";
import { TelegramIcon } from "../../assets/icons/TelegramIcon";
import { InstagramIcon } from "../../assets/icons/InstagramIcon";
import { ShareIcon } from "../../assets/icons/ShareIcon";
import { INSIGHTS_DATA } from "../../constants/insightsData";

const CATEGORIES = [
    { name: "Casestudy", count: 10 },
    { name: "Blogs", count: 18 },
    { name: "Risk Update", count: 13 },
    { name: "Global Risk", count: 17 },
    { name: "Insights", count: 24 },
    { name: "News", count: 21 },
];

export default function InsightContentSection({ insight }) {
    return (
        <section className="sec-gap">
            <div className="main-wrapper">
                <div className="flex flex-col md:flex-row justify-between gap-6 lg:gap-12.5 bg-[rgba(255,255,255,0.05)] backdrop-blur-2xl border border-[rgba(255,255,255,0.1)] p-7.5">
                    {/* Main content */}
                    <div className="md:col-span-2 w-full">
                        <div className="">
                            <p className="font-semibold text-accent-red [font-size:var(--fs-body-xl)] mb-3">
                                {insight.category}
                            </p>
                            <h2 className="font-display font-semibold mb-4 [font-size:var(--fs-title-lg)] leading-[1.623] max-w-[45ch]">
                                {insight.title}
                            </h2>
                            <div className="w-fit py-2 px-4 rounded-4xl flex items-center flex-wrap gap-y-2 [font-size:var(--fs-body-xs)] mb-8 text-white bg-[rgba(255,255,255,0.05)] backdrop-blur-2xl border border-[rgba(255,255,255,0.1)]">
                                <span className="flex items-center gap-1">
                                    By {insight.author}
                                </span>
                                <Dot size={16} className="text-white mx-1" />
                                <span className="flex items-center gap-1">
                                    2 Min Read
                                </span>
                                <Dot size={16} className="text-white mx-1" />
                                <span>20 Views</span>
                                <span className="ml-4 bg-[rgba(255,255,255,0.05)] backdrop-blur-2xl border border-[rgba(255,255,255,0.1)] rounded-full p-1">
                                    <ShareIcon />
                                </span>
                            </div>

                            <div className="prose text-secondary\/80 leading-[1.8] [font-size:var(--fs-body-sm)]">
                                <p className="mb-4">
                                    In today's fast-changing business
                                    environment, uncertainty is no
                                    longer an exception, it is the norm.
                                    Organizations that succeed are not
                                    those that avoid risk entirely, but
                                    those that understand it early and
                                    respond with clarity and confidence.
                                    This is where Strategic Intelligence
                                    and Risk Management play a critical
                                    role.
                                </p>
                                <p className="mb-4">
                                    Strategic intelligence refers to the
                                    process of collecting, analyzing,
                                    and interpreting data to support
                                    long-term decision-making. It goes
                                    beyond basic reporting by
                                    transforming raw information into
                                    actionable insights. These insights
                                    help leaders anticipate market
                                    shifts, understand competitor
                                    movements, identify growth
                                    opportunities, and align business
                                    strategies with future realities.
                                </p>

                                <div className="my-6 rounded-xl h-[240px] flex items-center justify-center bg-blue-subtle border border-white\/06 text-white/20 cursor-pointer">
                                    ▶ Video Player
                                </div>

                                <p className="mb-4">
                                    Risk is often perceived negatively,
                                    but in reality, it is an inherent
                                    part of growth and innovation.
                                    Strategic risk management begins
                                    with risk identification —
                                    recognizing potential threats across
                                    operations, finances, compliance,
                                    technology, and market dynamics.
                                    Once risks are identified, they are
                                    evaluated based on likelihood and
                                    impact.
                                </p>
                            </div>

                            {/* Share */}
                            <div className="flex items-center gap-2 mt-8 pt-6">
                                <span className="[font-size:var(--fs-body-lg)] font-roboto font-medium leading-normal">
                                    Share:
                                </span>
                                <Link
                                    href={"/"}
                                    className="text-white/40 bg-transparent border-none cursor-pointer p-1 hover:text-white/70 transition-colors"
                                >
                                    <FacebookIcon />
                                </Link>
                                <Link
                                    href={"/"}
                                    className="text-white/40 bg-transparent border-none cursor-pointer p-1 hover:text-white/70 transition-colors"
                                >
                                    <TelegramIcon />
                                </Link>
                                <Link
                                    href={"/"}
                                    className="text-white/40 bg-transparent border-none cursor-pointer p-1 hover:text-white/70 transition-colors"
                                >
                                    <InstagramIcon />
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <aside className="space-y-6 w-full md:w-[30%] md:max-w-88 shrink-0">
                        <div className="">
                            <h3 className="font-bold mb-1 md:mb-2 lg:mb-4 font-roboto [font-size:var(--fs-title-lg)] uppercase">
                                Recent Post
                            </h3>
                            <div className="space-y-6">
                                {INSIGHTS_DATA.slice(0, 5).map((post, i) => (
                                    <Link
                                        key={i}
                                        href={`/insights/${post.slug}`}
                                        className="flex items-center gap-3 group no-underline"
                                    >
                                        <div className="rounded shrink-0 w-16 lg:w-28 h-16 lg:h-28 bg-blue-dim flex items-center justify-center text-[calc(var(--fs-body-xs)-2px)] text-white/20">
                                            <img
                                                src={post.image}
                                                alt={post.title}
                                                className="aspect-square object-cover rounded-lg"
                                            />
                                        </div>
                                        <div>
                                            <p className="[font-size:var(--fs-body-xs)] font-roboto mb-3.5 text-white font-semibold flex flex-wrap items-center justify-between gap-0.5 lg:gap-3">
                                                <span className="px-[0.857em] py-[0.2em] bg-[rgba(255,255,255,0.05)] backdrop-blur-2xl border border-[rgba(255,255,255,0.1)] rounded-2xl">
                                                    {post.category}
                                                </span>
                                                <span className="opacity-60">
                                                    {post.readTime}
                                                </span>
                                            </p>
                                            <p className="line-clamp-2 font-roboto [font-size:var(--fs-body-md)] leading-snug group-hover:opacity-80 text-white/75">
                                                {post.title}
                                            </p>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>

                        <div className="">
                            <h3 className="font-bold mb-1 md:mb-2 lg:mb-4 font-roboto [font-size:var(--fs-title-lg)] uppercase">
                                Categories
                            </h3>
                            <ul className="">
                                {CATEGORIES.map((cat, i) => (
                                    <li key={i}>
                                        <button className="w-full flex items-center justify-between [font-size:var(--fs-body-lg)] font-medium py-1 md:py-2 lg:py-3 border-b border-white transition-colors bg-transparent cursor-pointer text-white text-left">
                                            <span className="flex items-center gap-2">
                                                <ChevronRight size={20} />
                                                {cat.name}
                                            </span>
                                            <span className="text-white/60 [font-size:var(--fs-body-sm)]">
                                                ({cat.count})
                                            </span>
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </aside>
                </div>
            </div>
        </section>
    );
}
