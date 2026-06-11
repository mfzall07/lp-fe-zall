import { notFound } from "next/navigation";
import AdminHeader from "@/components/admin/AdminHeader";
import AdminCard from "@/components/admin/AdminCard";
import EventForm from "@/components/admin/EventForm";
import { events } from "@/data/events";

interface PageProps {
    params: Promise<{ id: string }>;
}

export default async function AdminEventEditPage({ params }: PageProps) {
    const { id } = await params;
    const event = events.find((e) => e.id === id);

    if (!event) return notFound();

    return (
        <>
            <AdminHeader title="Event / Edit" />
            <div className="admin-content">
                <div className="admin-page-head">
                    <div>
                        <h2 className="heading-2">Edit Event</h2>
                        <p>{event.title}</p>
                    </div>
                </div>
                <AdminCard>
                    <EventForm mode="edit" initial={event} />
                </AdminCard>
            </div>
        </>
    );
}
