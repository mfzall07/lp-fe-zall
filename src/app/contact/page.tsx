import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import Image from "next/image";
import pageHeroStyles from "@/styles/PageHero.module.css";
import contactStyles from "@/styles/ContactPage.module.css";

export default function ContactPage() {
    return (
        <>
            <Navbar />

            <main>
                <section className={pageHeroStyles.pageHeroSimple}>
                    <div className={pageHeroStyles.pageHeroSimpleBg}>
                        <Image
                            src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1600&q=80"
                            alt="Hubungi Warkop Medan"
                            fill
                            style={{ objectFit: 'cover' }}
                            priority
                        />
                        <div className={pageHeroStyles.pageHeroSimpleOverlay}></div>
                    </div>
                    <div className={`container ${pageHeroStyles.pageHeroSimpleContent}`}>
                        <span className="eyebrow">Hubungi Kami</span>
                        <h1 className="heading-display">Mari Ngobrol<br />Sebentar</h1>
                        <p className="lead">
                            Reservasi, kerjasama media, atau sekadar pertanyaan tentang menu? Tinggalkan
                            pesan dan tim kami akan menghubungi Anda.
                        </p>
                    </div>
                </section>

                <section className="section">
                    <div className="container">
                        <div className={contactStyles.contactGrid}>
                            <div className={contactStyles.contactInfo}>
                                <h2 className="heading-2">PT Warkop Medan Indonesia</h2>
                                <p className="lead">
                                    Pusat layanan untuk semua outlet Warkop Medan. Kami merespons dalam 1–2 hari kerja.
                                </p>
                                <ul className={contactStyles.contactInfoList}>
                                    <li><strong>Email</strong>business@warkopmdj.com</li>
                                    <li><strong>WhatsApp</strong>+62 811-1180-7322</li>
                                    <li><strong>Alamat</strong>Cabang Ciputat — Tangerang Selatan</li>
                                </ul>
                            </div>
                            <div>
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}
