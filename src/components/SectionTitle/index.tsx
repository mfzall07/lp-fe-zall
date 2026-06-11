import RenderWhen from "@/components/RenderWhen";

interface SectionTitleProps {
    eyebrow?: string;
    title: string;
    description?: string;
    align?: "center" | "left";
}

function getClassName(align: "center" | "left") {
    if (align === "left") return "section-header section-header-left";
    return "section-header";
}

export default function SectionTitle({ eyebrow, title, description, align }: SectionTitleProps) {
    const resolvedAlign = align ?? "center";
    const className = getClassName(resolvedAlign);

    return (
        <div className={className}>
            <RenderWhen when={Boolean(eyebrow)}>
                <span className="eyebrow">{eyebrow}</span>
            </RenderWhen>
            <h2 className="heading-1">{title}</h2>
            <RenderWhen when={Boolean(description)}>
                <p className="lead">{description}</p>
            </RenderWhen>
        </div>
    );
}
