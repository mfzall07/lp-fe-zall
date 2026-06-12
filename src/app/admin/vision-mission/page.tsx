import AdminHeader from "@/components/admin/AdminHeader";
import AdminCard from "@/components/admin/AdminCard";
import VisionMissionEditor from "@/components/admin/VisionMissionEditor";
import { about } from "@/data/about";
import layoutStyles from "@/app/admin/AdminLayout.module.css";

export default function AdminVisionMissionPage() {
    return (
        <>
            <AdminHeader title="Visi, Misi, Ambisi" />
            <div className={layoutStyles.adminContent}>
                <div className={layoutStyles.adminPageHead}>
                    <div>
                        <h2 className="heading-2">Edit Visi, Misi, Ambisi</h2>
                        <p>Konten ini akan tampil di halaman Tentang Kami.</p>
                    </div>
                </div>
                <AdminCard>
                    <VisionMissionEditor initial={about} />
                </AdminCard>
            </div>
        </>
    );
}
