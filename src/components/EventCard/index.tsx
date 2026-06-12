import Image from "next/image";
import type { EventItem } from "@/types";
import styles from "@/styles/Card.module.css";

interface EventCardProps {
    event: EventItem;
}

function formatDate(iso: string) {
    const d = new Date(iso);
    return d.toLocaleDateString("id-ID", {
        day: "numeric",
        month: "long",
        year: "numeric"
    });
}

export default function EventCard({ event }: EventCardProps) {
    return (
        <article className={styles.card}>
            <div className={styles.cardMedia}>
                <Image src={event.imageSrc} alt={event.title} width={800} height={600} />
            </div>
            <div className={styles.cardBody}>
                <span className={styles.cardEyebrow}>{event.tag}</span>
                <h3 className={styles.cardTitle}>{event.title}</h3>
                <p className={styles.cardText}>{event.excerpt}</p>
                <div className={styles.cardMeta}>
                    <span>{formatDate(event.date)}</span>
                    <span className={styles.cardMetaDot} />
                    <span>{event.location}</span>
                </div>
            </div>
        </article>
    );
}
