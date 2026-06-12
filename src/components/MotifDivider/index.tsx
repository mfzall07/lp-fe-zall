import styles from "./MotifDivider.module.css";

interface MotifDividerProps {
    tone?: "default" | "soft";
}

export default function MotifDivider({ tone }: MotifDividerProps) {
    const resolvedTone = tone ?? "default";

    return (
        <div
            className={`${styles.motifDivider} ${resolvedTone === "soft" ? styles.motifDividerSoft : ""}`}
            aria-hidden="true"
        >
            <span className={styles.motifDividerLine} />
            <span className={styles.motifDividerDot} />
            <span className={styles.motifDividerLine} />
        </div>
    );
}
