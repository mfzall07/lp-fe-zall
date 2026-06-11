import MenuList from "@/components/MenuList";
import SectionTitle from "@/components/SectionTitle";
import Button from "@/components/Button";
import { menuItems } from "@/data/menu";

const signatureItems = menuItems.filter((item) => item.isSignature);

export default function MenuShowcase() {
    return (
        <section className="section section-menu-showcase">
            <div className="container">
                <div className="menu-showcase-header">
                    <SectionTitle
                        eyebrow="Menu Signature"
                        title="Rasa Medan yang Bikin Pulang Sebentar"
                        description="Dari Kopi Sanger sampai Mie Balap, ini menu yang paling sering dicari pelanggan setia kami."
                    />
                </div>
                <MenuList items={signatureItems} />
                <div className="menu-showcase-cta">
                    <Button href="/menu" variant="outline">Lihat seluruh menu</Button>
                </div>
            </div>
        </section>
    );
}
