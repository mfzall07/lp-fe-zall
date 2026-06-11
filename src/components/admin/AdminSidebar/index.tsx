"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface SidebarLink {
    href: string;
    label: string;
}

interface SidebarSection {
    label: string;
    links: SidebarLink[];
}

const sections: SidebarSection[] = [
    {
        label: "Overview",
        links: [{ href: "/admin", label: "Dashboard" }]
    },
    {
        label: "Konten",
        links: [
            { href: "/admin/menu", label: "Menu" },
            { href: "/admin/events", label: "Event" },
            { href: "/admin/articles", label: "Artikel" },
            { href: "/admin/outlets", label: "Outlet" }
        ]
    },
    {
        label: "Profil Brand",
        links: [
            { href: "/admin/history", label: "Sejarah" },
            { href: "/admin/vision-mission", label: "Visi, Misi, Ambisi" }
        ]
    },
    {
        label: "Inbox",
        links: [
            { href: "/admin/contact-list", label: "Pesan Kontak" },
            { href: "/admin/partnership-list", label: "Partnership & Investasi" }
        ]
    }
];

function isActive(pathname: string, href: string) {
    if (href === "/admin") return pathname === "/admin";
    return pathname.startsWith(href);
}

function linkClassName(active: boolean) {
    if (active) return "admin-sidebar-link admin-sidebar-link-active";
    return "admin-sidebar-link";
}

export default function AdminSidebar() {
    const pathname = usePathname();

    return (
        <aside className="admin-sidebar">
            <div className="admin-sidebar-brand">
                <span className="navbar-logo">W</span>
                <span className="admin-sidebar-brand-name">Warkop CMS</span>
            </div>

            <nav className="admin-sidebar-nav">
                {sections.map((section) => (
                    <div key={section.label}>
                        <div className="admin-sidebar-section-label">{section.label}</div>
                        {section.links.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={linkClassName(isActive(pathname, link.href))}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                ))}
            </nav>

            <div className="admin-sidebar-foot">
                <Link href="/" className="admin-sidebar-link">
                    ← Kembali ke situs
                </Link>
            </div>
        </aside>
    );
}
