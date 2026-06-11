import type { ReactNode } from "react";
import EmptyState from "@/components/admin/EmptyState";

export interface DataTableColumn<T> {
    key: string;
    header: string;
    render: (row: T) => ReactNode;
}

interface DataTableProps<T> {
    columns: DataTableColumn<T>[];
    rows: T[];
    getRowKey: (row: T) => string;
    emptyTitle?: string;
    emptyDescription?: string;
}

function resolveEmptyTitle(title: string | undefined) {
    if (title) return title;
    return "Belum ada data";
}

function resolveEmptyDescription(desc: string | undefined) {
    if (desc) return desc;
    return "Data akan muncul di sini setelah ditambahkan.";
}

export default function DataTable<T>({
    columns,
    rows,
    getRowKey,
    emptyTitle,
    emptyDescription
}: DataTableProps<T>) {
    if (rows.length === 0) {
        return (
            <EmptyState
                title={resolveEmptyTitle(emptyTitle)}
                description={resolveEmptyDescription(emptyDescription)}
            />
        );
    }

    return (
        <table className="data-table">
            <thead>
                <tr>
                    {columns.map((col) => (
                        <th key={col.key}>{col.header}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {rows.map((row) => (
                    <tr key={getRowKey(row)}>
                        {columns.map((col) => (
                            <td key={col.key}>{col.render(row)}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
