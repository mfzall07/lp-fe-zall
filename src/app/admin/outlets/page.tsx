import Link from "next/link";
import AdminHeader from "@/components/admin/AdminHeader";
import AdminCard from "@/components/admin/AdminCard";
import DataTable, { type DataTableColumn } from "@/components/admin/DataTable";
import { outlets } from "@/data/outlets";
import type { Outlet } from "@/types";

const columns: DataTableColumn<Outlet>[] = [
    { key: "name", header: "Nama", render: (row) => <strong>{row.name}</strong> },
    { key: "city", header: "Kota", render: (row) => row.city },
    { key: "hours", header: "Jam Buka", render: (row) => row.hours },
    { key: "phone", header: "Telepon", render: (row) => row.phone },
    {
        key: "actions",
        header: "",
        render: (row) => (
            <div className="data-table-actions">
                <Link href={`/admin/outlets/${row.id}/edit`} className="btn btn-ghost">Edit</Link>
            </div>
        )
    }
];

export default function AdminOutletsPage() {
    return (
        <>
            <AdminHeader title="Outlet" />
            <div className="admin-content">
                <div className="admin-page-head">
                    <div>
                        <h2 className="heading-2">Daftar Outlet</h2>
                        <p>Kelola informasi outlet yang tampil di situs publik.</p>
                    </div>
                    <Link href="/admin/outlets/new" className="btn btn-primary">Tambah Outlet</Link>
                </div>
                <AdminCard>
                    <DataTable columns={columns} rows={outlets} getRowKey={(row) => row.id} />
                </AdminCard>
            </div>
        </>
    );
}
