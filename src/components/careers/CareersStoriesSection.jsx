import { ArrowRight } from "lucide-react";
import { successStoryImg1, successStoryImg2 } from "../../assets/images";

const STORIES = [
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
];

export default function CareersStoriesSection() {
    return (
        <div className="main-wrapper grid grid-cols-1 lg:grid-cols-2 gap-12">
            {STORIES.map((card, i) => (
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
    );
}
