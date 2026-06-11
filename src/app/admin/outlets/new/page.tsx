import AdminHeader from "@/components/admin/AdminHeader";
import AdminCard from "@/components/admin/AdminCard";
import OutletForm from "@/components/admin/OutletForm";

export default function AdminOutletCreatePage() {
    return (
        <>
            <AdminHeader title="Outlet / Baru" />
            <div className="admin-content">
                <div className="admin-page-head">
                    <div>
                        <h2 className="heading-2">Tambah Outlet Baru</h2>
                        <p>Daftarkan outlet baru di sistem.</p>
                    </div>
                </div>
                <AdminCard>
                    <OutletForm mode="create" />
                </AdminCard>
            </div>
        </>
    );
}
