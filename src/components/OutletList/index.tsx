"use client";

import { useState, useEffect } from "react";
import OutletCard from "@/components/OutletCard";
import { OutletCardSkeleton } from "@/components/Skeleton";
import type { Outlet } from "@/types";

interface OutletListProps {
    outlets: Outlet[];
}

export default function OutletList({ outlets }: OutletListProps) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        setLoading(false);
    }, []);

    if (error) {
        return (
            <div className="section">
                <div className="container">
                    <p className="body-muted" role="alert">{error}</p>
                </div>
            </div>
        );
    }

    if (outlets.length === 0 && !loading) {
        return (
            <div className="empty-state">
                <h3>Belum ada outlet</h3>
                <p>Outlet baru sedang dipersiapkan. Pantau terus halaman ini.</p>
            </div>
        );
    }

    if (loading) {
        return (
            <div className="grid grid-3">
                {Array.from({ length: 3 }).map((_, i) => (
                    <OutletCardSkeleton key={i} />
                ))}
            </div>
        );
    }

    return (
        <div className="grid grid-3">
            {outlets.map((outlet) => (
                <OutletCard key={outlet.id} outlet={outlet} />
            ))}
        </div>
    );
}
