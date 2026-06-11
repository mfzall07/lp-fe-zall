"use client";

import { useState, useEffect } from "react";
import MenuCard from "@/components/MenuCard";
import { MenuCardSkeleton } from "@/components/Skeleton";
import type { MenuItem } from "@/types";

interface MenuListProps {
    items: MenuItem[];
}

export default function MenuList({ items }: MenuListProps) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(false);
    }, []);

    if (items.length === 0 && !loading) {
        return (
            <div className="empty-state">
                <h3>Menu sedang disusun</h3>
                <p>Tim dapur kami sedang merapikan menu. Pantau halaman ini, ya.</p>
            </div>
        );
    }

    if (loading) {
        return (
            <div className="grid grid-3">
                {Array.from({ length: 9 }).map((_, i) => (
                    <MenuCardSkeleton key={i} />
                ))}
            </div>
        );
    }

    return (
        <div className="grid grid-3">
            {items.map((item) => (
                <MenuCard key={item.id} item={item} />
            ))}
        </div>
    );
}
