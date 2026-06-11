import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import AboutSummary from "@/components/AboutSummary";
import SectionTitle from "@/components/SectionTitle";
import OutletList from "@/components/OutletList";
import EventList from "@/components/EventList";
import MenuShowcase from "@/components/MenuShowcase";
import MotifDivider from "@/components/MotifDivider";
import Button from "@/components/Button";
import { outlets } from "@/data/outlets";
import { events } from "@/data/events";

const previewOutlets = outlets.slice(0, 3);
const previewEvents = events.slice(0, 3);

export default function HomePage() {
    return (
        <>
            <Navbar />

            <main>
                <Hero />
                <AboutSummary />
                <MenuShowcase />

                <section className="section section-alt">
                    <div className="container">
                        <MotifDivider />
                        <SectionTitle
                            eyebrow="Outlet Kami"
                            title="Tiga Tempat untuk Pulang Sebentar"
                            description="Setiap outlet menyajikan rasa Medan yang sama otentiknya — dengan suasana yang hangat dan nyaman."
                        />
                        <OutletList outlets={previewOutlets} />
                        <div className="about-summary-cta">
                            <Button href="/outlets" variant="outline">Lihat semua outlet</Button>
                        </div>
                    </div>
                </section>

                <section className="section">
                    <div className="container">
                        <MotifDivider />
                        <SectionTitle
                            eyebrow="Event Terdekat"
                            title="Selalu Ada yang Seru"
                            description="Dari ngopi bareng komunitas, malam musik, hingga workshop barista — Warkop Medan selalu punya cerita."
                        />
                        <EventList events={previewEvents} />
                        <div className="about-summary-cta">
                            <Button href="/events" variant="outline">Lihat semua event & artikel</Button>
                        </div>
                    </div>
                </section>

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
