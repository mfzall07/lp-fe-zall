import type { ReactNode } from "react";
import RenderWhen from "@/components/RenderWhen";

interface AdminCardProps {
    title?: string;
    children: ReactNode;
}

export default function AdminCard({ title, children }: AdminCardProps) {
    return (
        <section className="admin-card">
            <RenderWhen when={Boolean(title)}>
                <h2 className="admin-card-title">{title}</h2>
            </RenderWhen>
            {children}
        </section>
    );
}
