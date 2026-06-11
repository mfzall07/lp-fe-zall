import AdminHeader from "@/components/admin/AdminHeader";
import AdminCard from "@/components/admin/AdminCard";
import ArticleForm from "@/components/admin/ArticleForm";

export default function AdminArticleCreatePage() {
    return (
        <>
            <AdminHeader title="Artikel / Baru" />
            <div className="admin-content">
                <div className="admin-page-head">
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
