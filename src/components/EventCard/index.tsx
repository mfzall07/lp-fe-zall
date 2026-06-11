import Image from "next/image";
import type { EventItem } from "@/types";

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
        <article className="card">
            <div className="card-media">
                <Image src={event.imageSrc} alt={event.title} width={800} height={600} />
            </div>
            <div className="card-body">
                <span className="card-eyebrow">{event.tag}</span>
                <h3 className="card-title">{event.title}</h3>
                <p className="card-text">{event.excerpt}</p>
                <div className="card-meta">
                    <span>{formatDate(event.date)}</span>
                    <span className="card-meta-dot" />
                    <span>{event.location}</span>
                </div>
            </div>
        </article>
    );
}
