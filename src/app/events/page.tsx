import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EventList from "@/components/EventList";
import ArticleList from "@/components/ArticleList";
import SectionTitle from "@/components/SectionTitle";
import { events } from "@/data/events";
import { articles } from "@/data/articles";
import Image from "next/image";
import pageHeroStyles from "@/styles/PageHero.module.css";

export default function EventsPage() {
    return (
        <>
            <Navbar />

            <main>
                <section className={pageHeroStyles.pageHeroSimple}>
                    <div className={pageHeroStyles.pageHeroSimpleBg}>
                        <Image
                            src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1600&q=80"
                            alt="Event Warkop Medan"
                            fill
                            style={{ objectFit: 'cover' }}
                            priority
                        />
                        <div className={pageHeroStyles.pageHeroSimpleOverlay}></div>
                    </div>
                    <div className={`container ${pageHeroStyles.pageHeroSimpleContent}`}>
                        <span className="eyebrow">Event & Artikel</span>
                        <h1 className="heading-display">Cerita, Acara,<br />dan Insight dari Dapur Kami</h1>
                        <p className="lead">
                            Update event terbaru di setiap outlet dan tulisan-tulisan tentang kopi, kuliner,
                            dan budaya Medan.
                        </p>
                    </div>
                </section>

                <section className="section">
                    <div className="container">
                        <SectionTitle
                            eyebrow="Event"
                            title="Event Terdekat"
                            description="Ngopi bareng, live music, workshop, dan acara komunitas yang akan datang."
                        />
                        <EventList events={events} />
                    </div>
                </section>

                <section className="section section-alt">
                    <div className="container">
                        <SectionTitle
                            eyebrow="Artikel"
                            title="Dari Dapur Warkop Medan"
                            description="Cerita di balik menu, operasional, dan budaya Medan yang kami bawa ke Jakarta."
                        />
                        <ArticleList articles={articles} />
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}
