import Image from "next/image";
import Button from "@/components/Button";
import styles from "./Hero.module.css";

interface HeroStat {
    value: string;
    label: string;
}

const stats: HeroStat[] = [
    { value: "2022", label: "Berdiri sejak" },
    { value: "3", label: "Outlet aktif" },
    { value: "100%", label: "Cita rasa Medan" }
];

export default function Hero() {
    return (
        <section className={styles.heroCafe}>
            <div className={styles.heroCafeBg}>
                <Image
                    src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1600&q=80"
                    alt="Suasana warkop Medan"
                    fill
                    style={{ objectFit: 'cover' }}
                    priority
                />
                <div className={styles.heroCafeOverlay}></div>
            </div>

            <div className={`container ${styles.heroCafeContent}`}>
                <div className={styles.heroCafeBadge}>
                    <span>PT Warkop Medan Indonesia</span>
                </div>

                <h1 className={styles.heroCafeTitle}>
                    Rasa Medan,<br />
                    Hangat di Hati Jakarta
                </h1>

                <p className={styles.heroCafeLead}>
                    Kopi sanger, masakan rumahan, dan suasana warkop yang membangkitkan nostalgia kota Medan.
                    Tiga outlet kami siap menyambut setiap perantau dan pecinta kuliner Sumatra.
                </p>

                <div className={styles.heroCafeActions}>
                    <Button href="/outlets" variant="primary">
                        Lihat Outlet Kami
                    </Button>
                    <Button href="/about" variant="secondary">
                        Cerita Warkop Medan
                    </Button>
                </div>

                <div className={styles.heroCafeStats}>
                    {stats.map((stat) => (
                        <div key={stat.label} className={styles.heroCafeStat}>
                            <div className={styles.heroCafeStatValue}>{stat.value}</div>
                            <div className={styles.heroCafeStatLabel}>{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>

            <div className={styles.heroCafeScroll}>
                <span>Scroll untuk jelajah</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M8 3V13M8 13L12 9M8 13L4 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>
        </section>
    );
}
