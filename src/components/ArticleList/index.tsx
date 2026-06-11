"use client";

import { useState, useEffect } from "react";
import ArticleCard from "@/components/ArticleCard";
import { ArticleCardSkeleton } from "@/components/Skeleton";
import type { Article } from "@/types";

interface ArticleListProps {
    articles: Article[];
}

export default function ArticleList({ articles }: ArticleListProps) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(false);
    }, []);

    if (articles.length === 0 && !loading) {
        return (
            <div className="empty-state">
                <h3>Belum ada artikel</h3>
                <p>Tulisan dari dapur kami akan segera tayang.</p>
            </div>
        );
    }

    if (loading) {
        return (
            <div className="grid grid-3">
                {Array.from({ length: 3 }).map((_, i) => (
                    <ArticleCardSkeleton key={i} />
                ))}
            </div>
        );
    }

    return (
        <div className="grid grid-3">
            {articles.map((article) => (
                <ArticleCard key={article.id} article={article} />
            ))}
        </div>
    );
}
