import AdminHeader from "@/components/admin/AdminHeader";
import AdminCard from "@/components/admin/AdminCard";
import HistoryEditor from "@/components/admin/HistoryEditor";
import { about } from "@/data/about";
import layoutStyles from "@/app/admin/AdminLayout.module.css";

export default function AdminHistoryPage() {
    return (
        <>
            <AdminHeader title="Sejarah" />
            <div className={layoutStyles.adminContent}>
                <div className={layoutStyles.adminPageHead}>
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
