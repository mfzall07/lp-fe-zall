import Image from "next/image";
import Button from "@/components/Button";
import SectionTitle from "@/components/SectionTitle";
import { about } from "@/data/about";

export default function AboutSummary() {
    return (
        <section className="section section-cafe-story">
            <div className="container">
                <div className="cafe-story-wrapper">
                    <div className="cafe-story-content">
                        <SectionTitle
                            eyebrow="Tentang Kami"
                            title="Berangkat dari Medan, Tumbuh di Jakarta"
                            description="Cerita Warkop Medan dimulai dari kerinduan para founder akan cita rasa kampung halaman — dan keinginan agar lebih banyak orang ikut mencicipinya."
                        />

                        <div className="cafe-story-body">
                            <p className="lead">
                                Didirikan pada {about.foundedYear} di {about.foundedLocation}, kami terus tumbuh
                                sambil menjaga rasa yang otentik, tempat yang nyaman, dan pengalaman yang membangkitkan
                                nostalgia.
                            </p>
                            <div className="about-summary-cta">
                                <Button href="/about" variant="primary">
                                    Selengkapnya tentang kami
                                </Button>
                            </div>
                        </div>
                    </div>

                    <div className="cafe-story-visual">
                        <div className="cafe-story-image">
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
