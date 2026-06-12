import type { ReactNode } from "react";
import RenderWhen from "@/components/RenderWhen";
import styles from "./EmptyState.module.css";

interface EmptyStateProps {
    title: string;
    description?: string;
    action?: ReactNode;
}

export default function EmptyState({ title, description, action }: EmptyStateProps) {
    return (
        <div className={styles.emptyState}>
            <h3>{title}</h3>
            <RenderWhen when={Boolean(description)}>
                <p>{description}</p>
            </RenderWhen>
            <RenderWhen when={Boolean(action)}>
                <div className="mt-md">{action}</div>
            </RenderWhen>
        </div>
    );
}
