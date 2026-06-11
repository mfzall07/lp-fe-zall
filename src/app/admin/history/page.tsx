import AdminHeader from "@/components/admin/AdminHeader";
import AdminCard from "@/components/admin/AdminCard";
import HistoryEditor from "@/components/admin/HistoryEditor";
import { about } from "@/data/about";

export default function AdminHistoryPage() {
    return (
        <>
            <AdminHeader title="Sejarah" />
            <div className="admin-content">
                <div className="admin-page-head">
                    <div>
                        <h2 className="heading-2">Edit Sejarah Brand</h2>
                        <p>Narasi yang tampil di halaman Tentang Kami.</p>
                    </div>
                </div>
                <AdminCard>
                    <HistoryEditor initial={about} />
                </AdminCard>
            </div>
        </>
    );
}
