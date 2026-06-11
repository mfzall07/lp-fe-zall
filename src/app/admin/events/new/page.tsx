import AdminHeader from "@/components/admin/AdminHeader";
import AdminCard from "@/components/admin/AdminCard";
import EventForm from "@/components/admin/EventForm";

export default function AdminEventCreatePage() {
    return (
        <>
            <AdminHeader title="Event / Baru" />
            <div className="admin-content">
                <div className="admin-page-head">
                    <div>
                        <h2 className="heading-2">Buat Event Baru</h2>
                        <p>Isi detail event yang akan tayang di halaman publik.</p>
                    </div>
                </div>
                <AdminCard>
                    <EventForm mode="create" />
                </AdminCard>
            </div>
        </>
    );
}
