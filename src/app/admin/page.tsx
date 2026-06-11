import Link from "next/link";
import AdminHeader from "@/components/admin/AdminHeader";
import AdminCard from "@/components/admin/AdminCard";
import { events } from "@/data/events";
import { articles } from "@/data/articles";
import { outlets } from "@/data/outlets";
import { menuItems } from "@/data/menu";
import { contactSubmissions, partnershipSubmissions } from "@/data/contacts";

interface Stat {
    label: string;
    value: string;
}

const stats: Stat[] = [
    { label: "Outlet", value: String(outlets.length) },
    { label: "Menu", value: String(menuItems.length) },
    { label: "Event", value: String(events.length) },
    { label: "Artikel", value: String(articles.length) },
    { label: "Pesan Baru", value: String(contactSubmissions.filter((c) => c.status === "new").length) }
];

interface Shortcut {
    href: string;
    label: string;
    description: string;
}

const shortcuts: Shortcut[] = [
    { href: "/admin/menu/new", label: "Tambah Menu", description: "Daftarkan item menu baru atau menu signature." },
    { href: "/admin/events/new", label: "Tambah Event", description: "Buat event baru untuk salah satu outlet." },
    { href: "/admin/articles/new", label: "Tulis Artikel", description: "Bagikan cerita dari dapur Warkop Medan." },
    { href: "/admin/outlets/new", label: "Tambah Outlet", description: "Daftarkan outlet baru di sistem." }
];

export default function AdminDashboardPage() {
    return (
        <>
            <AdminHeader title="Dashboard" />
            <div className="admin-content">
                <div className="admin-stats">
                    {stats.map((stat) => (
                        <div key={stat.label} className="admin-stat">
                            <div className="admin-stat-label">{stat.label}</div>
                            <div className="admin-stat-value">{stat.value}</div>
                        </div>
                    ))}
                </div>

                <AdminCard title="Aksi Cepat">
                    <div className="grid grid-2">
                        {shortcuts.map((shortcut) => (
                            <Link key={shortcut.href} href={shortcut.href} className="admin-shortcut">
                                <h3 className="heading-3">{shortcut.label}</h3>
                                <p className="body-muted">{shortcut.description}</p>
                            </Link>
                        ))}
                    </div>
                </AdminCard>

                <AdminCard title="Pengajuan Partnership Terbaru">
                    <ul className="admin-inbox">
                        {partnershipSubmissions.slice(0, 3).map((entry) => (
                            <li key={entry.id} className="admin-inbox-item">
                                <div>
                                    <strong>{entry.fullName}</strong>
                                    <span className="body-muted"> · {entry.company}</span>
                                </div>
                                <span className="tag tag-accent">{entry.type}</span>
                            </li>
                        ))}
                    </ul>
                </AdminCard>
            </div>
        </>
    );
}
