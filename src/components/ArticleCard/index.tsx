import Image from "next/image";
import type { Article } from "@/types";
import styles from "@/styles/Card.module.css";

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
        <article className={styles.card}>
            <div className={styles.cardMedia}>
                <Image src={article.imageSrc} alt={article.title} width={800} height={600} />
            </div>
            <div className={styles.cardBody}>
                <span className={styles.cardEyebrow}>{article.tag}</span>
                <h3 className={styles.cardTitle}>{article.title}</h3>
                <p className={styles.cardText}>{article.excerpt}</p>
                <div className={styles.cardMeta}>
                    <span>{article.author}</span>
                    <span className={styles.cardMetaDot} />
                    <span>{formatDate(article.date)}</span>
                </div>
            </div>
        </article>
    );
}
