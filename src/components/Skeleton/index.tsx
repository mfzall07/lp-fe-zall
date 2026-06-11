interface SkeletonProps {
    className?: string;
}

export default function Skeleton({ className = "" }: SkeletonProps) {
    return <div className={`skeleton ${className}`} aria-hidden="true" />;
}

export function MenuCardSkeleton() {
    return (
        <div className="menu-card skeleton-card">
            <div className="menu-card-media">
                <Skeleton className="skeleton-media" />
            </div>
            <div className="menu-card-body">
                <Skeleton className="skeleton-eyebrow" />
                <Skeleton className="skeleton-title" />
                <Skeleton className="skeleton-text" />
                <Skeleton className="skeleton-text skeleton-text-short" />
                <Skeleton className="skeleton-price" />
            </div>
        </div>
    );
}

export function OutletCardSkeleton() {
    return (
        <div className="outlet-card skeleton-card">
            <div className="outlet-card-media">
                <Skeleton className="skeleton-media" />
            </div>
            <div className="outlet-card-body">
                <Skeleton className="skeleton-eyebrow" />
                <Skeleton className="skeleton-title" />
                <Skeleton className="skeleton-text" />
                <Skeleton className="skeleton-text skeleton-text-short" />
                <Skeleton className="skeleton-btn" />
            </div>
        </div>
    );
}

export function EventCardSkeleton() {
    return (
        <div className="card skeleton-card">
            <div className="card-media">
                <Skeleton className="skeleton-media" />
            </div>
            <div className="card-body">
                <Skeleton className="skeleton-eyebrow" />
                <Skeleton className="skeleton-title" />
                <Skeleton className="skeleton-text" />
                <Skeleton className="skeleton-text skeleton-text-short" />
                <Skeleton className="skeleton-meta" />
            </div>
        </div>
    );
}

export function ArticleCardSkeleton() {
    return (
        <div className="card skeleton-card">
            <div className="card-media">
                <Skeleton className="skeleton-media" />
            </div>
            <div className="card-body">
                <Skeleton className="skeleton-eyebrow" />
                <Skeleton className="skeleton-title" />
                <Skeleton className="skeleton-text" />
                <Skeleton className="skeleton-text skeleton-text-short" />
                <Skeleton className="skeleton-meta" />
            </div>
        </div>
    );
}
