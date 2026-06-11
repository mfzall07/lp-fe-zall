import { notFound } from "next/navigation";
import AdminHeader from "@/components/admin/AdminHeader";
import AdminCard from "@/components/admin/AdminCard";
import MenuForm from "@/components/admin/MenuForm";
import { menuItems } from "@/data/menu";

interface PageProps {
    params: Promise<{ id: string }>;
}

export default async function AdminMenuEditPage({ params }: PageProps) {
    const { id } = await params;
    const item = menuItems.find((m) => m.id === id);

    if (!item) return notFound();

    return (
        <>
            <AdminHeader title="Menu / Edit" />
            <div className="admin-content">
                <div className="admin-page-head">
                    <div>
                        <h2 className="heading-2">Edit Menu</h2>
                        <p>{item.name}</p>
                    </div>
                </div>
                <AdminCard>
                    <MenuForm mode="edit" initial={item} />
                </AdminCard>
            </div>
        </>
    );
}
