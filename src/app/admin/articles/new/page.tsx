import AdminHeader from "@/components/admin/AdminHeader";
import AdminCard from "@/components/admin/AdminCard";
import ArticleForm from "@/components/admin/ArticleForm";
import layoutStyles from "@/app/admin/AdminLayout.module.css";

export default function AdminArticleCreatePage() {
    return (
        <>
            <AdminHeader title="Artikel / Baru" />
            <div className={layoutStyles.adminContent}>
                <div className={layoutStyles.adminPageHead}>
                    <div>
                        <h2 className="heading-2">Tulis Artikel Baru</h2>
                        <p>Bagikan cerita dari dapur Warkop Medan ke publik.</p>
                    </div>
                </div>
                <AdminCard>
                    <ArticleForm mode="create" />
                </AdminCard>
            </div>
        </>
    );
}
