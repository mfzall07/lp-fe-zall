import type { ReactNode } from "react";
import RenderWhen from "@/components/RenderWhen";
import styles from "./AdminCard.module.css";

interface AdminCardProps {
    title?: string;
    children: ReactNode;
}

export default function AdminCard({ title, children }: AdminCardProps) {
    return (
        <section className={styles.adminCard}>
            <RenderWhen when={Boolean(title)}>
                <h2 className={styles.adminCardTitle}>{title}</h2>
            </RenderWhen>
            {children}
        </section>
    );
}
