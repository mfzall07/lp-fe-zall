import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import OutletList from "@/components/OutletList";
import CustomerPersonaGallery from "@/components/CustomerPersonaGallery";
import { outlets } from "@/data/outlets";
import { customers } from "@/data/customers";
import Image from "next/image";

export default function OutletsPage() {
    return (
        <>
            <Navbar />

            <main>
                <section className="page-hero-simple">
                    <div className="page-hero-simple-bg">
                        <Image
                            src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=1600&q=80"
                            alt="Outlet Warkop Medan"
                            fill
                            style={{ objectFit: 'cover' }}
                            priority
                        />
                        <div className="page-hero-simple-overlay"></div>
                    </div>
                    <div className="container page-hero-simple-content">
                        <span className="eyebrow">Outlet & Customer</span>
                        <h1 className="heading-display">Tiga Outlet,<br />Satu Rasa Medan</h1>
                        <p className="lead">
                            Mampir ke outlet terdekat — atau jelajahi semua cabang Warkop Medan di Jakarta
                            dan sekitarnya.
                        </p>
                    </div>
                </section>

                <section className="section">
                    <div className="container">
                        <OutletList outlets={outlets} />
                    </div>
                </section>

                <section className="section section-alt">
                    <CustomerPersonaGallery personas={customers} />
                </section>
            </main>

            <Footer />
        </>
    );
}
