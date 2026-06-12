import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PartnershipForm from "@/components/PartnershipForm";
import Image from "next/image";
import pageHeroStyles from "@/styles/PageHero.module.css";
import contactStyles from "@/styles/ContactPage.module.css";

export default function PartnershipPage() {
    return (
        <>
            <Navbar />

            <main>
                <section className={pageHeroStyles.pageHeroSimple}>
                    <div className={pageHeroStyles.pageHeroSimpleBg}>
                        <Image
                            src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1600&q=80"
                            alt="Partnership Warkop Medan"
                            fill
                            style={{ objectFit: 'cover' }}
                            priority
                        />
                        <div className={pageHeroStyles.pageHeroSimpleOverlay}></div>
                    </div>
                    <div className={`container ${pageHeroStyles.pageHeroSimpleContent}`}>
                        <span className="eyebrow">Partnership & Investment</span>
                        <h1 className="heading-display">Tumbuh Bersama<br />Warkop Medan</h1>
                        <p className="lead">
                            Kami terbuka untuk kerjasama supply, kolaborasi brand, hingga investasi untuk
                            pembukaan outlet baru. Ceritakan rencana Anda.
                        </p>
                    </div>
                </section>

                <section className="section">
                    <div className="container">
                        <div className={contactStyles.contactGrid}>
                            <div className={contactStyles.contactInfo}>
                                <h2 className="heading-2">Apa yang Kami Cari</h2>
                                <p className="lead">
                                    Kami memprioritaskan partner yang berbagi visi otentisitas rasa dan
                                    pengalaman pelanggan.
                                </p>
                                <ul className={contactStyles.contactInfoList}>
                                    <li><strong>Partnership</strong>Supply bahan, kolaborasi brand, media.</li>
                                    <li><strong>Investment</strong>Pembukaan outlet baru di Jabodetabek.</li>
                                    <li><strong>Respons</strong>3–5 hari kerja setelah pengajuan.</li>
                                </ul>
                            </div>
                            <div>
                                <PartnershipForm />
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}
