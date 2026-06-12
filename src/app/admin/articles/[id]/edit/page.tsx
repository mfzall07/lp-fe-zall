import { notFound } from "next/navigation";
import AdminHeader from "@/components/admin/AdminHeader";
import AdminCard from "@/components/admin/AdminCard";
import ArticleForm from "@/components/admin/ArticleForm";
import { articles } from "@/data/articles";
import layoutStyles from "@/app/admin/AdminLayout.module.css";

interface PageProps {
    params: Promise<{ id: string }>;
}

export default async function AdminArticleEditPage({ params }: PageProps) {
    const { id } = await params;
    const article = articles.find((a) => a.id === id);

    if (!article) return notFound();

    return (
        <>
            <AdminHeader title="Artikel / Edit" />
            <div className={layoutStyles.adminContent}>
                <div className={layoutStyles.adminPageHead}>
                    <div>
                        <h2 className="heading-2">Edit Artikel</h2>
                        <p>{article.title}</p>
                    </div>
                </div>
                <AdminCard>
                    <ArticleForm mode="edit" initial={article} />
                </AdminCard>
            </div>
        </>
    );
}
