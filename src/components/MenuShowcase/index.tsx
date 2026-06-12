import MenuList from "@/components/MenuList";
import SectionTitle from "@/components/SectionTitle";
import Button from "@/components/Button";
import { menuItems } from "@/data/menu";
import styles from "./MenuShowcase.module.css";

const signatureItems = menuItems.filter((item) => item.isSignature);

export default function MenuShowcase() {
    return (
        <section className={styles.sectionMenuShowcase}>
            <div className="container">
                <div className={styles.menuShowcaseHeader}>
                    <SectionTitle
                        eyebrow="Menu Signature"
                        title="Rasa Medan yang Bikin Pulang Sebentar"
                        description="Dari Kopi Sanger sampai Mie Balap, ini menu yang paling sering dicari pelanggan setia kami."
                    />
                </div>
                <MenuList items={signatureItems} />
                <div className={styles.menuShowcaseCta}>
                    <Button href="/menu" variant="outline">Lihat seluruh menu</Button>
                </div>
            </div>
        </section>
    );
}
