import AdminHeader from "@/components/admin/AdminHeader";
import AdminCard from "@/components/admin/AdminCard";
import MenuForm from "@/components/admin/MenuForm";
import layoutStyles from "@/app/admin/AdminLayout.module.css";

export default function AdminMenuCreatePage() {
    return (
        <>
            <AdminHeader title="Menu / Baru" />
            <div className={layoutStyles.adminContent}>
                <div className={layoutStyles.adminPageHead}>
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
