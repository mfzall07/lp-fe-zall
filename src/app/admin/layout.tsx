import AdminSidebar from "@/components/admin/AdminSidebar";

interface AdminLayoutProps {
    children: React.ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
    return (
        <div className="admin-shell">
            <AdminSidebar />
            <div className="admin-main">{children}</div>
        </div>
    );
}
