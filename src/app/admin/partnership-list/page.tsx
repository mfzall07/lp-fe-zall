import AdminHeader from "@/components/admin/AdminHeader";
import AdminCard from "@/components/admin/AdminCard";
import DataTable, { type DataTableColumn } from "@/components/admin/DataTable";
import { partnershipSubmissions } from "@/data/contacts";
import type { PartnershipSubmission } from "@/types";

const statusLabel: Record<PartnershipSubmission["status"], string> = {
    new: "Baru",
    reviewing: "Direview",
    accepted: "Diterima",
    declined: "Ditolak"
};

const columns: DataTableColumn<PartnershipSubmission>[] = [
    { key: "fullName", header: "Nama", render: (row) => <strong>{row.fullName}</strong> },
    { key: "company", header: "Perusahaan", render: (row) => row.company },
    { key: "type", header: "Jenis", render: (row) => <span className="tag tag-accent">{row.type}</span> },
    { key: "budget", header: "Budget", render: (row) => row.budget },
    {
        key: "status",
        header: "Status",
        render: (row) => <span className="tag">{statusLabel[row.status]}</span>
    },
    {
        key: "createdAt",
        header: "Tanggal",
        render: (row) => new Date(row.createdAt).toLocaleString("id-ID")
    }
];

export default function AdminPartnershipListPage() {
    return (
        <>
            <AdminHeader title="Partnership & Investasi" />
            <div className="admin-content">
                <div className="admin-page-head">
                    <div>
                        <h2 className="heading-2">Pengajuan Partnership & Investasi</h2>
                        <p>Daftar pengaju via formulir publik /partnership.</p>
                    </div>
                </div>
                <AdminCard>
                    <DataTable
                        columns={columns}
                        rows={partnershipSubmissions}
                        getRowKey={(row) => row.id}
                        emptyTitle="Belum ada pengajuan"
                    />
                </AdminCard>
            </div>
        </>
    );
}
