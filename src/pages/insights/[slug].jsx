import { useRouter } from "next/router";
import Link from "next/link";
import PageHero from "../../components/common/PageHero";
import { insightListingBg } from "../../assets/images";
import { INSIGHTS_DATA } from "../../constants/insightsData";
import InsightContentSection from "../../components/insights/InsightContentSection";
import InsightRelatedSection from "../../components/insights/InsightRelatedSection";

export default function InsightDetail() {
    const { slug } = useRouter().query;
    const insight = INSIGHTS_DATA.find((i) => i.slug === slug);
    const related = INSIGHTS_DATA.filter((i) => i.slug !== slug).slice(0, 4);

    if (!insight) {
        return (
            <div className="pt-30 text-center min-h-[60vh] flex items-center justify-center">
                <div>
                    <p className="text-white/50 mb-4">Article not found.</p>
                    <Link
                        href="/insights"
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
                style={{
                    background: `url(${insightListingBg}) top/cover no-repeat`,
                }}
            >
                <InsightContentSection insight={insight} />
                <div className="mx-auto w-[75vw] h-0.5 bg-white/10" />
                <InsightRelatedSection related={related} />
            </main>
        </>
    );
}

export async function getServerSideProps() {
  return { props: {} }
}
