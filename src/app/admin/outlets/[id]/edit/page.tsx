import { notFound } from "next/navigation";
import AdminHeader from "@/components/admin/AdminHeader";
import AdminCard from "@/components/admin/AdminCard";
import OutletForm from "@/components/admin/OutletForm";
import { outlets } from "@/data/outlets";
import layoutStyles from "@/app/admin/AdminLayout.module.css";

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
            <div className={layoutStyles.adminContent}>
                <div className={layoutStyles.adminPageHead}>
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
