import PageHero from "../../components/common/PageHero";
import { insightListing, insightListingBg } from "../../assets/images";
import InsightsFeaturedSection from "../../components/insights/InsightsFeaturedSection";
import InsightsGridSection from "../../components/insights/InsightsGridSection";

export { INSIGHTS_DATA } from "../../constants/insightsData";

export default function Insights() {
    return (
        <>
            <PageHero
                label="Insights"
                title="NEWS & INTELLIGENCE INSIGHTS"
                bgImage={insightListing}
                isGradientBg={false}
            />
            <main
                style={{
                    background: `url(${insightListingBg}) top/cover no-repeat`,
                }}
            >
                <InsightsFeaturedSection />
                <div className="mx-auto w-[75vw] h-0.5 bg-white/10" />
                <InsightsGridSection />
            </main>
        </>
    );
}
