import styles from "./Skeleton.module.css";

interface SkeletonProps {
    className?: string;
}

export default function Skeleton({ className = "" }: SkeletonProps) {
    return <div className={`${styles.skeleton} ${className}`} aria-hidden="true" />;
}

export function MenuCardSkeleton() {
    return (
        <div className={`menu-card ${styles.skeletonCard}`}>
            <div className="menu-card-media">
                <Skeleton className={styles.skeletonMedia} />
            </div>
            <div className="menu-card-body">
                <Skeleton className={styles.skeletonEyebrow} />
                <Skeleton className={styles.skeletonTitle} />
                <Skeleton className={styles.skeletonText} />
                <Skeleton className={`${styles.skeletonText} ${styles.skeletonTextShort}`} />
                <Skeleton className={styles.skeletonPrice} />
            </div>
        </div>
    );
}

export function OutletCardSkeleton() {
    return (
        <div className={`outlet-card ${styles.skeletonCard}`}>
            <div className="outlet-card-media">
                <Skeleton className={styles.skeletonMedia} />
            </div>
            <div className="outlet-card-body">
                <Skeleton className={styles.skeletonEyebrow} />
                <Skeleton className={styles.skeletonTitle} />
                <Skeleton className={styles.skeletonText} />
                <Skeleton className={`${styles.skeletonText} ${styles.skeletonTextShort}`} />
                <Skeleton className={styles.skeletonBtn} />
            </div>
        </div>
    );
}

export function EventCardSkeleton() {
    return (
        <div className={`card ${styles.skeletonCard}`}>
            <div className="card-media">
                <Skeleton className={styles.skeletonMedia} />
            </div>
            <div className="card-body">
                <Skeleton className={styles.skeletonEyebrow} />
                <Skeleton className={styles.skeletonTitle} />
                <Skeleton className={styles.skeletonText} />
                <Skeleton className={`${styles.skeletonText} ${styles.skeletonTextShort}`} />
                <Skeleton className={styles.skeletonMeta} />
            </div>
        </div>
    );
}

export function ArticleCardSkeleton() {
    return (
        <div className={`card ${styles.skeletonCard}`}>
            <div className="card-media">
                <Skeleton className={styles.skeletonMedia} />
            </div>
            <div className="card-body">
                <Skeleton className={styles.skeletonEyebrow} />
                <Skeleton className={styles.skeletonTitle} />
                <Skeleton className={styles.skeletonText} />
                <Skeleton className={`${styles.skeletonText} ${styles.skeletonTextShort}`} />
                <Skeleton className={styles.skeletonMeta} />
            </div>
        </div>
    );
}
