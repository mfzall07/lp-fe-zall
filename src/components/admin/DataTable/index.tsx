import type { ReactNode } from "react";
import EmptyState from "@/components/admin/EmptyState";
import styles from "./DataTable.module.css";

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
    caption?: string;
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
    emptyDescription,
    caption
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
        <table className={styles.dataTable}>
            <caption className="sr-only">{caption ?? "Data table"}</caption>
            <thead>
                <tr>
                    {columns.map((col) => (
                        <th key={col.key} scope="col">{col.header}</th>
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
