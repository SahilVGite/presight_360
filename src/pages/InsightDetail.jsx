import { useParams, Link } from "react-router-dom";
import {
    User,
    Clock,
    Send,
    ArrowLeft,
    Calendar,
    ChevronRight,
    Dot,
} from "lucide-react";
import PageHero from "../components/common/PageHero";
import Card from "../components/common/Card";
import { INSIGHTS_DATA } from "./Insights";
import { insightListingBg } from "../assets/images";
import Button from "../components/common/Button";
import { FacebookIcon } from "../assets/icons/FacebookIcon";
import { TelegramIcon } from "../assets/icons/TelegramIcon";
import { InstagramIcon } from "../assets/icons/InstagramIcon";
import { ShareIcon } from "../assets/icons/ShareIcon";

const CATEGORIES = [
    { name: "Casestudy", count: 10 },
    { name: "Blogs", count: 18 },
    { name: "Risk Update", count: 13 },
    { name: "Global Risk", count: 17 },
    { name: "Insights", count: 24 },
    { name: "News", count: 21 },
];

export default function InsightDetail() {
    const { slug } = useParams();
    const insight = INSIGHTS_DATA.find((i) => i.slug === slug);
    const related = INSIGHTS_DATA.filter((i) => i.slug !== slug).slice(0, 4);

    if (!insight) {
        return (
            <div className="pt-30 text-center min-h-[60vh] flex items-center justify-center">
                <div>
                    <p className="text-white/50 mb-4">Article not found.</p>
                    <Link
                        to="/insights"
                        className="text-accent-red no-underline hover:underline"
                    >
                        ← Back to Insights
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <>
            <PageHero
                label="Insights"
                title={insight.title}
                bgImage={insight.image}
                isGradientBg={false}
            />
            <main
                className=""
                style={{
                    background: `url(${insightListingBg}) top/cover no-repeat`,
                }}
            >
                <section className="py-25">
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
                                        <Dot
                                            size={16}
                                            className="text-white mx-1"
                                        />
                                        <span className="flex items-center gap-1">
                                            2 Min Read
                                        </span>
                                        <Dot
                                            size={16}
                                            className="text-white mx-1"
                                        />
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
                                            to={"/"}
                                            className="text-white/40 bg-transparent border-none cursor-pointer p-1 hover:text-white/70 transition-colors"
                                        >
                                            <FacebookIcon />
                                        </Link>
                                        <Link
                                            to={"/"}
                                            className="text-white/40 bg-transparent border-none cursor-pointer p-1 hover:text-white/70 transition-colors"
                                        >
                                            <TelegramIcon />
                                        </Link>
                                        <Link
                                            to={"/"}
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
                                        {INSIGHTS_DATA.slice(0, 5).map(
                                            (post, i) => (
                                                <Link
                                                    key={i}
                                                    to={`/insights/${post.slug}`}
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
                                            ),
                                        )}
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
                                                        <ChevronRight
                                                            size={20}
                                                        />
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

                <div className="mx-auto w-[75vw] h-0.5 bg-white/10" />

                {/* Related Posts */}
                <section className="py-25">
                    <div className="main-wrapper">
                        <div className="flex items-center justify-between mb-16">
                            <h2 className="font-display font-[800] [font-size:var(--fs-title-lg)] text-accent-red uppercase">
                                Related Post
                            </h2>
                            <Link to={`/insights`}>
                                <Button variant="primary" size="md" showArrow>
                                    View All
                                </Button>
                            </Link>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
                            {related.map((post) => (
                                <Link
                                    key={post.slug}
                                    to={`/insights/${post.slug}`}
                                    className="block no-underline"
                                >
                                    <Card className="overflow-hidden group h-full p-5">
                                        <div className="bg-[linear-gradient(135deg,rgba(26,107,219,0.2)_0%,rgba(7,29,56,0.8)_100%)] flex items-center justify-center text-white/10 [font-size:var(--fs-body-xs)]">
                                            <img
                                                src={post.image}
                                                alt={post.title}
                                                className="aspect-[2.04/1] rounded-[10px] w-full h-auto"
                                            />
                                        </div>
                                        <div className="mt-2.5">
                                            <h3 className="line-clamp-3 font-bold mb-3 leading-snug group-hover:opacity-80 transition-opacity font-display [font-size:var(--fs-body)] uppercase">
                                                {post.title}
                                            </h3>
                                            <div className="flex items-center gap-4 [font-size:var(--fs-body-sm)] text-white">
                                                <span className="flex items-center gap-1.5">
                                                    <img
                                                        src={post.avatar}
                                                        alt={post.author}
                                                    />{" "}
                                                    {post.author}
                                                </span>
                                                <span className="flex items-center gap-1.5">
                                                    <Calendar size={11} />{" "}
                                                    {post.date}
                                                </span>
                                            </div>
                                        </div>
                                    </Card>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
