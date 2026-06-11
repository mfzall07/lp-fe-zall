import Link from "next/link";

interface FooterLink {
    href: string;
    label: string;
}

const exploreLinks: FooterLink[] = [
    { href: "/about", label: "Tentang Kami" },
    { href: "/menu", label: "Menu" },
    { href: "/outlets", label: "Outlet" },
    { href: "/events", label: "Event & Artikel" }
];

const contactLinks: FooterLink[] = [
    { href: "/contact", label: "Hubungi Kami" },
    { href: "https://wa.me/6281111807322?text=Halo%20Warkop%20Medan%2C%20saya%20tertarik%20untuk%20diskusi%20tentang%20Partnership%20dan%20Investasi.%20Bisakah%20kita%20bicara%20lebih%20lanjut%3F", label: "Partnership & Investasi" },
    { href: "/login", label: "Login Admin" }
];

const socialLinks: FooterLink[] = [
    { href: "https://www.instagram.com/warkopmdj", label: "Instagram" },
    { href: "https://www.tiktok.com/@_warkopmdj", label: "TikTok" },
    { href: "https://wa.me/6281111807322", label: "WhatsApp" },
    { href: "mailto:business@warkopmdj.com", label: "Email" }
];

const currentYear = new Date().getFullYear();

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <div className="footer-brand-logo">
                            <span className="footer-logo">W</span>
                            <div className="footer-brand-text">
                                <span className="footer-brand-name">Warkop Medan</span>
                                <span className="footer-brand-tag">di Jakarta</span>
                            </div>
                        </div>
                        <p>
                            PT Warkop Medan Indonesia. Menghadirkan rasa, suasana, dan nostalgia khas Medan
                            untuk semua perantau dan pecinta kuliner di Pulau Jawa.
                        </p>
                    </div>

                    <div>
                        <h4>Jelajahi</h4>
                        <ul className="footer-links">
                            {exploreLinks.map((link) => (
                                <li key={link.href}>
                                    <Link href={link.href}>{link.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4>Kontak</h4>
                        <ul className="footer-links">
                            {contactLinks.map((link) => (
                                <li key={link.href}>
                                    <a href={link.href} target={link.href.startsWith('http') ? '_blank' : undefined} rel={link.href.startsWith('http') ? 'noreferrer' : undefined}>
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4>Ikuti Kami</h4>
                        <ul className="footer-links">
                            {socialLinks.map((link) => (
                                <li key={link.href}>
                                    <a href={link.href} target="_blank" rel="noreferrer">
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <span>© {currentYear} PT Warkop Medan Indonesia. All rights reserved.</span>
                    <span>Dibuat dengan cinta dari Medan.</span>
                </div>
            </div>
        </footer>
    );
}
