import { ROUTES } from "./routes";

export interface NavLinkItem {
    href: string;
    label: string;
}

export interface SidebarLink {
    href: string;
    label: string;
}

export interface SidebarSection {
    label: string;
    links: SidebarLink[];
}

export const NAV_LINKS: NavLinkItem[] = [
    { href: ROUTES.HOME, label: "Beranda" },
    { href: ROUTES.ABOUT, label: "Tentang Kami" },
    { href: ROUTES.MENU, label: "Menu" },
    { href: ROUTES.OUTLETS, label: "Outlet" },
    { href: ROUTES.EVENTS, label: "Event & Artikel" },
    { href: ROUTES.CONTACT, label: "Kontak" }
];

export const FOOTER_EXPLORE_LINKS: NavLinkItem[] = [
    { href: ROUTES.ABOUT, label: "Tentang Kami" },
    { href: ROUTES.MENU, label: "Menu" },
    { href: ROUTES.OUTLETS, label: "Outlet" },
    { href: ROUTES.EVENTS, label: "Event & Artikel" }
];

export const FOOTER_CONTACT_LINKS: NavLinkItem[] = [
    { href: ROUTES.CONTACT, label: "Hubungi Kami" },
    { href: "https://wa.me/6281111807322?text=Halo%20Warkop%20Medan%2C%20saya%20tertarik%20untuk%20diskusi%20tentang%20Partnership%20dan%20Investasi.%20Bisakah%20kita%20bicara%20lebih%20lanjut%3F", label: "Partnership & Investasi" },
    { href: ROUTES.LOGIN, label: "Login Admin" }
];

export const FOOTER_SOCIAL_LINKS: NavLinkItem[] = [
    { href: "https://www.instagram.com/warkopmdj", label: "Instagram" },
    { href: "https://www.tiktok.com/@_warkopmdj", label: "TikTok" },
    { href: "https://wa.me/6281111807322", label: "WhatsApp" },
    { href: "mailto:business@warkopmdj.com", label: "Email" }
];

export const ADMIN_SIDEBAR_SECTIONS: SidebarSection[] = [
    {
        label: "Overview",
        links: [{ href: ROUTES.ADMIN, label: "Dashboard" }]
    },
    {
        label: "Konten",
        links: [
            { href: ROUTES.ADMIN_MENU, label: "Menu" },
            { href: ROUTES.ADMIN_EVENTS, label: "Event" },
            { href: ROUTES.ADMIN_ARTICLES, label: "Artikel" },
            { href: ROUTES.ADMIN_OUTLETS, label: "Outlet" }
        ]
    },
    {
        label: "Profil Brand",
        links: [
            { href: ROUTES.ADMIN_HISTORY, label: "Sejarah" },
            { href: ROUTES.ADMIN_VISION_MISSION, label: "Visi, Misi, Ambisi" },
            { href: ROUTES.ADMIN_BRAND_SETTINGS, label: "Brand & Logo" }
        ]
    },
    {
        label: "Inbox",
        links: [
            { href: ROUTES.ADMIN_CONTACT_LIST, label: "Pesan Kontak" },
            { href: ROUTES.ADMIN_PARTNERSHIP_LIST, label: "Partnership & Investasi" }
        ]
    }
];
