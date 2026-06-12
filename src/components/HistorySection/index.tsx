import Image from "next/image";
import { about } from "@/data/about";
import styles from "./HistorySection.module.css";

export default function HistorySection() {
    return (
        <section className="section">
            <div className={`container ${styles.historyGrid}`}>
                <div className={styles.historyVisual}>
                    <Image
                        src="https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=800&q=80"
                        alt="Sejarah Warkop Medan"
                        width={800}
                        height={1000}
                        style={{ objectFit: 'cover' }}
                    />
                    <div className={styles.historyBadge}>
                        <div className={styles.historyBadgeYear}>{about.foundedYear}</div>
                        <div className={styles.historyBadgeLabel}>Berdiri di {about.foundedLocation}</div>
                    </div>
                </div>

                <div className={styles.historyBody}>
                    <span className="eyebrow">Sejarah Kami</span>
                    <h2 className="heading-1 mt-md">Cerita Warkop Medan di Jakarta</h2>
                    <p>{about.history}</p>
                </div>
            </div>
        </section>
    );
}
