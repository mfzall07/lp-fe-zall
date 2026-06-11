"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Button from "@/components/Button";

interface NavLinkItem {
    href: string;
    label: string;
}

const navLinks: NavLinkItem[] = [
    { href: "/", label: "Beranda" },
    { href: "/about", label: "Tentang Kami" },
    { href: "/menu", label: "Menu" },
    { href: "/outlets", label: "Outlet" },
    { href: "/events", label: "Event & Artikel" },
    { href: "/contact", label: "Kontak" }
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
            <div className="container navbar-inner">
                <Link href="/" className="navbar-brand">
                    <span className="navbar-logo">W</span>
                    <span className="navbar-brand-text">
                        <span className="navbar-brand-name">Warkop Medan</span>
                        <span className="navbar-brand-tag">di Jakarta</span>
                    </span>
                </Link>

                <nav>
                    <ul className="navbar-nav">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <Link href={link.href} className="navbar-link">
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="navbar-cta">
                    <Button href="/partnership" variant="outline">
                        Partnership
                    </Button>
                </div>
            </div>
        </header>
    );
}
