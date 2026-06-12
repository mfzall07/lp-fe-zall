import Link from "next/link";
import AdminHeader from "@/components/admin/AdminHeader";
import AdminCard from "@/components/admin/AdminCard";
import { events } from "@/data/events";
import { articles } from "@/data/articles";
import { outlets } from "@/data/outlets";
import { menuItems } from "@/data/menu";
import { contactSubmissions, partnershipSubmissions } from "@/data/contacts";
import { ROUTES } from "@/constants/routes";
import dashStyles from "@/styles/AdminDashboard.module.css";
import layoutStyles from "./AdminLayout.module.css";
import dtStyles from "@/components/admin/DataTable/DataTable.module.css";

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
    { href: ROUTES.ADMIN_MENU_NEW, label: "Tambah Menu", description: "Daftarkan item menu baru atau menu signature." },
    { href: ROUTES.ADMIN_EVENTS_NEW, label: "Tambah Event", description: "Buat event baru untuk salah satu outlet." },
    { href: ROUTES.ADMIN_ARTICLES_NEW, label: "Tulis Artikel", description: "Bagikan cerita dari dapur Warkop Medan." },
    { href: ROUTES.ADMIN_OUTLETS_NEW, label: "Tambah Outlet", description: "Daftarkan outlet baru di sistem." }
];

export default function AdminDashboardPage() {
    return (
        <>
            <AdminHeader title="Dashboard" />
            <div className={layoutStyles.adminContent}>
                <div className={dashStyles.adminStats}>
                    {stats.map((stat) => (
                        <div key={stat.label} className={dashStyles.adminStat}>
                            <div className={dashStyles.adminStatLabel}>{stat.label}</div>
                            <div className={dashStyles.adminStatValue}>{stat.value}</div>
                        </div>
                    ))}
                </div>

                <AdminCard title="Aksi Cepat">
                    <div className="grid grid-2">
                        {shortcuts.map((shortcut) => (
                            <Link key={shortcut.href} href={shortcut.href} className={dashStyles.adminShortcut}>
                                <h3 className="heading-3">{shortcut.label}</h3>
                                <p className="body-muted">{shortcut.description}</p>
                            </Link>
                        ))}
                    </div>
                </AdminCard>

                <AdminCard title="Pengajuan Partnership Terbaru">
                    <ul className={dashStyles.adminInbox}>
                        {partnershipSubmissions.slice(0, 3).map((entry) => (
                            <li key={entry.id} className={dashStyles.adminInboxItem}>
                                <div>
                                    <strong>{entry.fullName}</strong>
                                    <span className="body-muted"> · {entry.company}</span>
                                </div>
                                <span className={`${dtStyles.tag} ${dtStyles.tagAccent}`}>{entry.type}</span>
                            </li>
                        ))}
                    </ul>
                </AdminCard>
            </div>
        </>
    );
}
