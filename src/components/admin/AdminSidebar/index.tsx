"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import RenderWhen from "@/components/RenderWhen";
import { ADMIN_SIDEBAR_SECTIONS } from "@/constants/navigation";
import { ROUTES } from "@/constants/routes";
import { brandSettings } from "@/data/brand";
import styles from "./AdminSidebar.module.css";

function isActive(pathname: string, href: string) {
    if (href === ROUTES.ADMIN) return pathname === ROUTES.ADMIN;
    return pathname.startsWith(href);
}

function linkClassName(active: boolean) {
    if (active) return `${styles.adminSidebarLink} ${styles.adminSidebarLinkActive}`;
    return styles.adminSidebarLink;
}

export default function AdminSidebar() {
    const pathname = usePathname();

    return (
        <aside className={styles.adminSidebar} aria-label="Admin navigation">
            <div className={styles.adminSidebarBrand}>
                <RenderWhen when={Boolean(brandSettings.logoUrl)}>
                    <img src={brandSettings.logoUrl} alt={brandSettings.brandName} className={styles.adminSidebarLogoImg} />
                </RenderWhen>
                <RenderWhen when={!brandSettings.logoUrl}>
                    <span className={styles.adminSidebarLogo}>{brandSettings.logoBadgeLetter}</span>
                </RenderWhen>
                <span className={styles.adminSidebarBrandName}>{brandSettings.cmsName}</span>
            </div>

            <nav className={styles.adminSidebarNav}>
                {ADMIN_SIDEBAR_SECTIONS.map((section) => (
                    <div key={section.label}>
                        <p className={styles.adminSidebarSectionLabel}>{section.label}</p>
                        {section.links.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={linkClassName(isActive(pathname, link.href))}
                                aria-current={isActive(pathname, link.href) ? "page" : undefined}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                ))}
            </nav>

            <div className={styles.adminSidebarFoot}>
                <Link href={ROUTES.HOME} className={styles.adminSidebarLink}>
                    ← Kembali ke situs
                </Link>
            </div>
        </aside>
    );
}
