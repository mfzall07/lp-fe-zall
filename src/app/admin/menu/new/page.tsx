import AdminHeader from "@/components/admin/AdminHeader";
import AdminCard from "@/components/admin/AdminCard";
import MenuForm from "@/components/admin/MenuForm";

export default function AdminMenuCreatePage() {
    return (
        <>
            <AdminHeader title="Menu / Baru" />
            <div className="admin-content">
                <div className="admin-page-head">
                    <div>
                        <h2 className="heading-2">Tambah Menu Baru</h2>
                        <p>Daftarkan item menu untuk ditampilkan di halaman menu publik.</p>
                    </div>
                </div>
                <AdminCard>
                    <MenuForm mode="create" />
                </AdminCard>
            </div>
        </>
    );
}
