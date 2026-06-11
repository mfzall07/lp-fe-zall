import { notFound } from "next/navigation";
import AdminHeader from "@/components/admin/AdminHeader";
import AdminCard from "@/components/admin/AdminCard";
import OutletForm from "@/components/admin/OutletForm";
import { outlets } from "@/data/outlets";

interface PageProps {
    params: Promise<{ id: string }>;
}

export default async function AdminOutletEditPage({ params }: PageProps) {
    const { id } = await params;
    const outlet = outlets.find((o) => o.id === id);

    if (!outlet) return notFound();

    return (
        <>
            <AdminHeader title="Outlet / Edit" />
            <div className="admin-content">
                <div className="admin-page-head">
                    <div>
                        <h2 className="heading-2">Edit Outlet</h2>
                        <p>{outlet.name}</p>
                    </div>
                </div>
                <AdminCard>
                    <OutletForm mode="edit" initial={outlet} />
                </AdminCard>
            </div>
        </>
    );
}
