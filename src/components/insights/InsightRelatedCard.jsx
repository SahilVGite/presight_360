import Link from 'next/link';
import { Calendar } from 'lucide-react';
import Card from '../common/Card';

export default function InsightRelatedCard({ post }) {
    return (
        <Link href={`/insights/${post.slug}`} className="block no-underline">
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
                            <img src={post.avatar} alt={post.author} />{" "}
                            {post.author}
                        </span>
                        <span className="flex items-center gap-1.5">
                            <Calendar size={11} /> {post.date}
                        </span>
                    </div>
                </div>
            </Card>
        </Link>
    );
}
