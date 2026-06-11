import Image from "next/image";
import { about } from "@/data/about";

export default function HistorySection() {
    return (
        <section className="section section-history">
            <div className="container history-grid">
                <div className="history-visual">
                    <Image
                        src="https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=800&q=80"
                        alt="Sejarah Warkop Medan"
                        width={800}
                        height={1000}
                        style={{ objectFit: 'cover' }}
                    />
                    <div className="history-badge">
                        <div className="history-badge-year">{about.foundedYear}</div>
                        <div className="history-badge-label">Berdiri di {about.foundedLocation}</div>
                    </div>
                </div>

                <div className="history-body">
                    <span className="eyebrow">Sejarah Kami</span>
                    <h2 className="heading-1 mt-md">Cerita Warkop Medan di Jakarta</h2>
                    <p>{about.history}</p>
                </div>
            </div>
        </section>
    );
}
