import Link from "next/link";
import AdminHeader from "@/components/admin/AdminHeader";
import AdminCard from "@/components/admin/AdminCard";
import DataTable, { type DataTableColumn } from "@/components/admin/DataTable";
import RenderWhen from "@/components/RenderWhen";
import { menuItems, formatPrice } from "@/data/menu";
import type { MenuItem } from "@/types";
import { ROUTES } from "@/constants/routes";
import layoutStyles from "@/app/admin/AdminLayout.module.css";
import dtStyles from "@/components/admin/DataTable/DataTable.module.css";

const columns: DataTableColumn<MenuItem>[] = [
    { key: "name", header: "Nama", render: (row) => <strong>{row.name}</strong> },
    { key: "category", header: "Kategori", render: (row) => <span className={dtStyles.tag}>{row.category}</span> },
    { key: "price", header: "Harga", render: (row) => formatPrice(row.price) },
    {
        key: "signature",
        header: "Signature",
        render: (row) => (
            <RenderWhen when={row.isSignature}>
                <span className={`${dtStyles.tag} ${dtStyles.tagAccent}`}>Signature</span>
            </RenderWhen>
        )
    },
    {
        key: "actions",
        header: "",
        render: (row) => (
            <div className={dtStyles.dataTableActions}>
                <Link href={`/admin/menu/${row.id}/edit`} className="btn btn-ghost">Edit</Link>
            </div>
        )
    }
];

export default function AdminMenuPage() {
    return (
        <>
            <AdminHeader title="Menu" />
            <div className={layoutStyles.adminContent}>
                <div className={layoutStyles.adminPageHead}>
                    <div>
                        <h2 className="heading-2">Daftar Menu</h2>
                        <p>Kelola item menu, harga, dan penanda signature yang muncul di beranda.</p>
                    </div>
                    <Link href={ROUTES.ADMIN_MENU_NEW} className="btn btn-primary">Tambah Menu</Link>
                </div>
                <AdminCard>
                    <DataTable columns={columns} rows={menuItems} getRowKey={(row) => row.id} />
                </AdminCard>
            </div>
        </>
    );
}
