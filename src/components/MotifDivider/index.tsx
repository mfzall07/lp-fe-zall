interface MotifDividerProps {
    tone?: "default" | "soft";
}

function resolveClassName(tone: "default" | "soft") {
    if (tone === "soft") return "motif-divider motif-divider-soft";
    return "motif-divider";
}

export default function MotifDivider({ tone }: MotifDividerProps) {
    const resolvedTone = tone ?? "default";

    return (
        <div className={resolveClassName(resolvedTone)} aria-hidden="true">
            <span className="motif-divider-line" />
            <span className="motif-divider-dot" />
            <span className="motif-divider-line" />
        </div>
    );
}
