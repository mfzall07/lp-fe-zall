import Link from "next/link";
import AdminHeader from "@/components/admin/AdminHeader";
import AdminCard from "@/components/admin/AdminCard";
import DataTable, { type DataTableColumn } from "@/components/admin/DataTable";
import { articles } from "@/data/articles";
import type { Article } from "@/types";
import { ROUTES } from "@/constants/routes";
import layoutStyles from "@/app/admin/AdminLayout.module.css";
import dtStyles from "@/components/admin/DataTable/DataTable.module.css";

const columns: DataTableColumn<Article>[] = [
    { key: "title", header: "Judul", render: (row) => <strong>{row.title}</strong> },
    { key: "tag", header: "Tag", render: (row) => <span className={dtStyles.tag}>{row.tag}</span> },
    { key: "author", header: "Penulis", render: (row) => row.author },
    { key: "date", header: "Tanggal", render: (row) => row.date },
    {
        key: "actions",
        header: "",
        render: (row) => (
            <div className={dtStyles.dataTableActions}>
                <Link href={`/admin/articles/${row.id}/edit`} className="btn btn-ghost">Edit</Link>
            </div>
        )
    }
];

export default function AdminArticlesPage() {
    return (
        <>
            <AdminHeader title="Artikel" />
            <div className={layoutStyles.adminContent}>
                <div className={layoutStyles.adminPageHead}>
                    <div>
                        <h2 className="heading-2">Daftar Artikel</h2>
                        <p>Kelola publikasi artikel di halaman event & artikel.</p>
                    </div>
                    <Link href={ROUTES.ADMIN_ARTICLES_NEW} className="btn btn-primary">Tulis Artikel</Link>
                </div>
                <AdminCard>
                    <DataTable columns={columns} rows={articles} getRowKey={(row) => row.id} />
                </AdminCard>
            </div>
        </>
    );
}
