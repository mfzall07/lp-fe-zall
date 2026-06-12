import Link from "next/link";
import RenderWhen from "@/components/RenderWhen";
import { brandSettings } from "@/data/brand";
import styles from "./AuthLayout.module.css";

export default function LoginAside() {
    return (
        <aside className={styles.authAside}>
            <Link href="/" className={styles.authAsideBrand}>
                <RenderWhen when={Boolean(brandSettings.logoUrl)}>
                    <img src={brandSettings.logoUrl} alt={brandSettings.brandName} className={styles.authAsideBrandLogoImg} />
                </RenderWhen>
                <RenderWhen when={!brandSettings.logoUrl}>
                    <span className={styles.authAsideBrandNavbarLogo}>{brandSettings.logoBadgeLetter}</span>
                </RenderWhen>
                <span className="navbar-brand-text">
                    <span className={styles.authAsideBrandName}>{brandSettings.brandName}</span>
                    <span className={styles.authAsideBrandTag}>{brandSettings.brandTag}</span>
                </span>
            </Link>

            <div className={styles.authAsideBody}>
                <p className={`eyebrow ${styles.authAsideEyebrow}`}>Content Studio</p>
                <h2 className={styles.authAsideTitle}>
                    Kelola cerita, menu, dan event Warkop Medan dari satu tempat.
                </h2>
                <p className={styles.authAsideText}>
                    CMS internal untuk tim Warkop Medan di Jakarta. Setiap perubahan langsung
                    tersinkronisasi ke seluruh outlet.
                </p>
            </div>

            <div className={styles.authAsideFoot}>
                <span>© PT Warkop Medan Indonesia</span>
                <Link href="/">Kembali ke situs</Link>
            </div>
        </aside>
    );
}
