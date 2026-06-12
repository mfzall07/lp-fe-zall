"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "@/components/Button";
import RenderWhen from "@/components/RenderWhen";
import { NAV_LINKS } from "@/constants/navigation";
import { ROUTES } from "@/constants/routes";
import { brandSettings } from "@/data/brand";
import styles from "./Navbar.module.css";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
            <div className={`container ${styles.navbarInner}`}>
                <Link href={ROUTES.HOME} className={styles.navbarBrand} aria-label={brandSettings.brandName}>
                    <RenderWhen when={Boolean(brandSettings.logoUrl)}>
                        <img src={brandSettings.logoUrl} alt={brandSettings.brandName} className={styles.navbarLogoImg} />
                    </RenderWhen>
                    <RenderWhen when={!brandSettings.logoUrl}>
                        <span className={styles.navbarLogo}>{brandSettings.logoBadgeLetter}</span>
                    </RenderWhen>
                    <span className={styles.navbarBrandText}>
                        <span className={styles.navbarBrandName}>{brandSettings.brandName}</span>
                        <span className={styles.navbarBrandTag}>{brandSettings.brandTag}</span>
                    </span>
                </Link>

                <nav aria-label="Main navigation">
                    <ul className={styles.navbarNav}>
                        {NAV_LINKS.map((link) => (
                            <li key={link.href}>
                                <Link href={link.href} className={styles.navbarLink} aria-current={pathname === link.href ? "page" : undefined}>
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className={styles.navbarCta}>
                    <Button href={ROUTES.PARTNERSHIP} variant="outline">
                        Partnership
                    </Button>
                </div>
            </div>
        </header>
    );
}
