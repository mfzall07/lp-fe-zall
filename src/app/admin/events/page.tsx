import Link from "next/link";
import AdminHeader from "@/components/admin/AdminHeader";
import AdminCard from "@/components/admin/AdminCard";
import DataTable, { type DataTableColumn } from "@/components/admin/DataTable";
import { events } from "@/data/events";
import type { EventItem } from "@/types";

const columns: DataTableColumn<EventItem>[] = [
    {
        key: "title",
        header: "Judul",
        render: (row) => <strong>{row.title}</strong>
    },
    {
        key: "tag",
        header: "Kategori",
        render: (row) => <span className="tag">{row.tag}</span>
    },
    {
        key: "location",
        header: "Lokasi",
        render: (row) => row.location
    },
    {
        key: "date",
        header: "Tanggal",
        render: (row) => row.date
    },
    {
        key: "actions",
        header: "",
        render: (row) => (
            <div className="data-table-actions">
                <Link href={`/admin/events/${row.id}/edit`} className="btn btn-ghost">Edit</Link>
            </div>
        )
    }
];

export default function AdminEventsPage() {
    return (
        <>
            <AdminHeader title="Event" />
            <div className="admin-content">
                <div className="admin-page-head">
                    <div>
                        <h2 className="heading-2">Daftar Event</h2>
                        <p>Kelola semua event yang akan tayang di situs publik.</p>
                    </div>
                    <Link href="/admin/events/new" className="btn btn-primary">
                        Tambah Event
                    </Link>
                </div>
                <AdminCard>
                    <DataTable
                        columns={columns}
                        rows={events}
                        getRowKey={(row) => row.id}
                        emptyTitle="Belum ada event"
                        emptyDescription="Klik 'Tambah Event' untuk membuat event pertama."
                    />
                </AdminCard>
            </div>
        </>
    );
}
