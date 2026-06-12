import AdminSidebar from "@/components/admin/AdminSidebar";
import styles from "./AdminLayout.module.css";

interface AdminLayoutProps {
    children: React.ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
    return (
        <div className={styles.adminShell}>
            <AdminSidebar />
            <div className={styles.adminMain}>{children}</div>
        </div>
    );
}
