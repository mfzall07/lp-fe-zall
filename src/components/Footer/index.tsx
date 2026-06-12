import Link from "next/link";
import RenderWhen from "@/components/RenderWhen";
import {
    FOOTER_EXPLORE_LINKS,
    FOOTER_CONTACT_LINKS,
    FOOTER_SOCIAL_LINKS
} from "@/constants/navigation";
import { brandSettings } from "@/data/brand";
import styles from "./Footer.module.css";

const currentYear = new Date().getFullYear();

export default function Footer() {
    return (
        <footer className={styles.footer} aria-label="Footer navigation">
            <div className="container">
                <div className={styles.footerGrid}>
                    <div className={styles.footerBrand}>
                        <div className={styles.footerBrandLogo}>
                            <RenderWhen when={Boolean(brandSettings.logoUrl)}>
                                <img src={brandSettings.logoUrl} alt={brandSettings.brandName} className={styles.footerLogoImg} />
                            </RenderWhen>
                            <RenderWhen when={!brandSettings.logoUrl}>
                                <span className={styles.footerLogo}>{brandSettings.logoBadgeLetter}</span>
                            </RenderWhen>
                            <div className={styles.footerBrandText}>
                                <span className={styles.footerBrandName}>{brandSettings.brandName}</span>
                                <span className={styles.footerBrandTag}>{brandSettings.brandTag}</span>
                            </div>
                        </div>
                        <p>
                            PT Warkop Medan Indonesia. Menghadirkan rasa, suasana, dan nostalgia khas Medan
                            untuk semua perantau dan pecinta kuliner di Pulau Jawa.
                        </p>
                    </div>

                    <div>
                        <h4>Jelajahi</h4>
                        <ul className={styles.footerLinks}>
                            {FOOTER_EXPLORE_LINKS.map((link) => (
                                <li key={link.href}>
                                    <Link href={link.href}>{link.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4>Kontak</h4>
                        <ul className={styles.footerLinks}>
                            {FOOTER_CONTACT_LINKS.map((link) => (
                                <li key={link.href}>
                                    <a href={link.href} target={link.href.startsWith('http') || link.href.startsWith('mailto:') ? '_blank' : undefined} rel={link.href.startsWith('http') || link.href.startsWith('mailto:') ? 'noopener noreferrer' : undefined}>
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4>Ikuti Kami</h4>
                        <ul className={styles.footerLinks}>
                            {FOOTER_SOCIAL_LINKS.map((link) => (
                                <li key={link.href}>
                                    <a href={link.href} target="_blank" rel="noopener noreferrer">
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className={styles.footerBottom}>
                    <span>© {currentYear} PT Warkop Medan Indonesia. All rights reserved.</span>
                    <span>Dibuat dengan cinta dari Medan.</span>
                </div>
            </div>
        </footer>
    );
}
