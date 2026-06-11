import Link from "next/link";
import AdminHeader from "@/components/admin/AdminHeader";
import AdminCard from "@/components/admin/AdminCard";
import DataTable, { type DataTableColumn } from "@/components/admin/DataTable";
import RenderWhen from "@/components/RenderWhen";
import { menuItems, formatPrice } from "@/data/menu";
import type { MenuItem } from "@/types";

const columns: DataTableColumn<MenuItem>[] = [
    { key: "name", header: "Nama", render: (row) => <strong>{row.name}</strong> },
    { key: "category", header: "Kategori", render: (row) => <span className="tag">{row.category}</span> },
    { key: "price", header: "Harga", render: (row) => formatPrice(row.price) },
    {
        key: "signature",
        header: "Signature",
        render: (row) => (
            <RenderWhen when={row.isSignature}>
                <span className="tag tag-accent">Signature</span>
            </RenderWhen>
        )
    },
    {
        key: "actions",
        header: "",
        render: (row) => (
            <div className="data-table-actions">
                <Link href={`/admin/menu/${row.id}/edit`} className="btn btn-ghost">Edit</Link>
            </div>
        )
    }
];

export default function AdminMenuPage() {
    return (
        <>
            <AdminHeader title="Menu" />
            <div className="admin-content">
                <div className="admin-page-head">
                    <div>
                        <h2 className="heading-2">Daftar Menu</h2>
                        <p>Kelola item menu, harga, dan penanda signature yang muncul di beranda.</p>
                    </div>
                    <Link href="/admin/menu/new" className="btn btn-primary">Tambah Menu</Link>
                </div>
                <AdminCard>
                    <DataTable columns={columns} rows={menuItems} getRowKey={(row) => row.id} />
                </AdminCard>
            </div>
        </>
    );
}
