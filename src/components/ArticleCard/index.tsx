import Image from "next/image";
import type { Article } from "@/types";

interface ArticleCardProps {
    article: Article;
}

function formatDate(iso: string) {
    const d = new Date(iso);
    return d.toLocaleDateString("id-ID", {
        day: "numeric",
        month: "long",
        year: "numeric"
    });
}

export default function ArticleCard({ article }: ArticleCardProps) {
    return (
        <article className="card">
            <div className="card-media">
                <Image src={article.imageSrc} alt={article.title} width={800} height={600} />
            </div>
            <div className="card-body">
                <span className="card-eyebrow">{article.tag}</span>
                <h3 className="card-title">{article.title}</h3>
                <p className="card-text">{article.excerpt}</p>
                <div className="card-meta">
                    <span>{article.author}</span>
                    <span className="card-meta-dot" />
                    <span>{formatDate(article.date)}</span>
                </div>
            </div>
        </article>
    );
}
