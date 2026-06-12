import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MenuByCategory from "@/components/MenuByCategory";
import { menuItems } from "@/data/menu";
import Image from "next/image";
import pageHeroStyles from "@/styles/PageHero.module.css";

export default function MenuPage() {
    return (
        <>
            <Navbar />

            <main>
                <section className={pageHeroStyles.pageHeroSimple}>
                    <div className={pageHeroStyles.pageHeroSimpleBg}>
                        <Image
                            src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=1600&q=80"
                            alt="Menu Warkop Medan"
                            fill
                            style={{ objectFit: 'cover' }}
                            priority
                        />
                        <div className={pageHeroStyles.pageHeroSimpleOverlay}></div>
                    </div>
                    <div className={`container ${pageHeroStyles.pageHeroSimpleContent}`}>
                        <span className="eyebrow">Menu</span>
                        <h1 className="heading-display">Cita Rasa Medan,<br />Disajikan Hangat</h1>
                        <p className="lead">
                            Mulai dari Kopi Sanger andalan, mie balap dengan smoky wok, hingga bika ambon
                            yang lahir di Jl. Ambon Medan. Pilih favoritmu, atau cicipi semuanya.
                        </p>
                    </div>
                </section>

                <section className="section">
                    <div className="container">
                        <MenuByCategory items={menuItems} />
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}
