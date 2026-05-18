'use client'
import { useState, useEffect } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Button from "../common/Button";
import InsightRelatedCard from "./InsightRelatedCard";

export default function InsightRelatedSection({ related }) {
    const [isSlider, setIsSlider] = useState(false);

    useEffect(() => {
        const check = () => setIsSlider(window.innerWidth <= 1336);
        check();
        window.addEventListener("resize", check);
        return () => window.removeEventListener("resize", check);
    }, []);

    return (
        <section className="py-25">
            <div className="main-wrapper">
                <div className="flex items-center justify-between mb-16">
                    <h2 className="font-display font-[800] [font-size:var(--fs-title-lg)] text-accent-red uppercase">
                        Related Post
                    </h2>
                    <Link href={`/insights`}>
                        <Button variant="primary" size="md" showArrow>
                            View All
                        </Button>
                    </Link>
                </div>
                {isSlider ? (
                    <Swiper
                        modules={[Pagination]}
                        pagination={{ clickable: true }}
                        spaceBetween={20}
                        breakpoints={{
                            0: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                        className="w-full related-swiper"
                    >
                        {related.map((post, i) => (
                            <SwiperSlide key={`${post.slug}-${i}`}>
                                <InsightRelatedCard post={post} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                ) : (
                    <div className="grid grid-cols-4 gap-5">
                        {related.map((post, i) => (
                            <InsightRelatedCard key={`${post.slug}-${i}`} post={post} />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}
