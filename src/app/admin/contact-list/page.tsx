import AdminHeader from "@/components/admin/AdminHeader";
import AdminCard from "@/components/admin/AdminCard";
import DataTable, { type DataTableColumn } from "@/components/admin/DataTable";
import { contactSubmissions } from "@/data/contacts";
import type { ContactSubmission } from "@/types";
import dtStyles from "@/components/admin/DataTable/DataTable.module.css";
import layoutStyles from "@/app/admin/AdminLayout.module.css";

const statusLabel: Record<ContactSubmission["status"], string> = {
    new: "Baru",
    read: "Dibaca",
    replied: "Dibalas"
};

const columns: DataTableColumn<ContactSubmission>[] = [
    { key: "name", header: "Nama", render: (row) => <strong>{row.name}</strong> },
    { key: "subject", header: "Subjek", render: (row) => row.subject },
    { key: "email", header: "Email", render: (row) => row.email },
    {
        key: "status",
        header: "Status",
        render: (row) => <span className={dtStyles.tag}>{statusLabel[row.status]}</span>
    },
    {
        key: "createdAt",
        header: "Tanggal",
        render: (row) => new Date(row.createdAt).toLocaleString("id-ID")
    }
];

export default function AdminContactListPage() {
    return (
        <>
            <AdminHeader title="Pesan Kontak" />
            <div className={layoutStyles.adminContent}>
                <div className={layoutStyles.adminPageHead}>
                    <div>
                        <h2 className="heading-2">Pesan Masuk dari Halaman Kontak</h2>
                        <p>Daftar pengirim pesan via formulir publik /contact.</p>
                    </div>
                </div>
                <AdminCard>
                    <DataTable
                        columns={columns}
                        rows={contactSubmissions}
                        getRowKey={(row) => row.id}
                        emptyTitle="Belum ada pesan masuk"
                    />
                </AdminCard>
            </div>
        </>
    );
}
