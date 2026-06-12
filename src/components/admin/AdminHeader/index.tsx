import Link from "next/link";
import styles from "./AdminHeader.module.css";

interface AdminHeaderProps {
    title: string;
}

export default function AdminHeader({ title }: AdminHeaderProps) {
    return (
        <header className={styles.adminHeader}>
            <h1 className="heading-3">{title}</h1>
            <div className="flex gap-md">
                <Link href="/" className="btn btn-ghost">Lihat Situs</Link>
                <Link href="/login" className="btn btn-outline">Keluar</Link>
            </div>
        </header>
    );
}
