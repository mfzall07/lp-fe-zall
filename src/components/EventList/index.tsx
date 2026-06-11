"use client";

import { useState, useEffect } from "react";
import EventCard from "@/components/EventCard";
import { EventCardSkeleton } from "@/components/Skeleton";
import type { EventItem } from "@/types";

interface EventListProps {
    events: EventItem[];
}

export default function EventList({ events }: EventListProps) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(false);
    }, []);

    if (events.length === 0 && !loading) {
        return (
            <div className="empty-state">
                <h3>Belum ada event</h3>
                <p>Event berikutnya akan diumumkan di sini. Stay tuned!</p>
            </div>
        );
    }

    if (loading) {
        return (
            <div className="grid grid-3">
                {Array.from({ length: 3 }).map((_, i) => (
                    <EventCardSkeleton key={i} />
                ))}
            </div>
        );
    }

    return (
        <div className="grid grid-3">
            {events.map((event) => (
                <EventCard key={event.id} event={event} />
            ))}
        </div>
    );
}
