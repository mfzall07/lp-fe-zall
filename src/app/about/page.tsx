import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HistorySection from "@/components/HistorySection";
import VisionMissionAmbition from "@/components/VisionMissionAmbition";
import Image from "next/image";

export default function AboutPage() {
    return (
        <>
            <Navbar />

            <main>
                <section className="page-hero-about">
                    <div className="page-hero-about-bg">
                        <Image
                            src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1600&q=80"
                            alt="Warkop Medan Interior"
                            fill
                            style={{ objectFit: 'cover' }}
                            priority
                        />
                        <div className="page-hero-about-overlay"></div>
                    </div>
                    <div className="container page-hero-about-content">
                        <span className="eyebrow">Tentang Kami</span>
                        <h1 className="heading-display">Warkop Medan,<br />Lahir dari Rindu pada Rasa</h1>
                        <p className="lead">
                            Cerita lengkap di balik PT Warkop Medan Indonesia: sejarah, visi, misi, dan
                            ambisi yang menuntun langkah kami.
                        </p>
                    </div>
                </section>

                <HistorySection />
                <VisionMissionAmbition />

                <section className="section">
                    <div className="container">
                        <div className="ambition-banner">
                            <span className="eyebrow">Ambisi Kami</span>
                            <h2>Menjadi top of mind kuliner Medan di Pulau Jawa.</h2>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}
