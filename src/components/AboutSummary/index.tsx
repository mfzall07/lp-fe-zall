import Image from "next/image";
import Button from "@/components/Button";
import SectionTitle from "@/components/SectionTitle";
import { about } from "@/data/about";
import styles from "./AboutSummary.module.css";

export default function AboutSummary() {
    return (
        <section className={`section ${styles.sectionCafeStory}`}>
            <div className="container">
                <div className={styles.cafeStoryWrapper}>
                    <div className={styles.cafeStoryContent}>
                        <SectionTitle
                            eyebrow="Tentang Kami"
                            title="Berangkat dari Medan, Tumbuh di Jakarta"
                            description="Cerita Warkop Medan dimulai dari kerinduan para founder akan cita rasa kampung halaman — dan keinginan agar lebih banyak orang ikut mencicipinya."
                        />

                        <div className={styles.cafeStoryBody}>
                            <p className="lead">
                                Didirikan pada {about.foundedYear} di {about.foundedLocation}, kami terus tumbuh
                                sambil menjaga rasa yang otentik, tempat yang nyaman, dan pengalaman yang membangkitkan
                                nostalgia.
                            </p>
                            <div className={styles.aboutSummaryCta}>
                                <Button href="/about" variant="primary">
                                    Selengkapnya tentang kami
                                </Button>
                            </div>
                        </div>
                    </div>

                    <div className={styles.cafeStoryVisual}>
                        <div className={styles.cafeStoryImage}>
                            <Image
                                src="https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=800&q=80"
                                alt="Suasana Warkop Medan"
                                fill
                                style={{ objectFit: "cover" }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
