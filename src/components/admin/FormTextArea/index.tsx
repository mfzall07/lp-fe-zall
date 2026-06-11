import RenderWhen from "@/components/RenderWhen";

interface FormTextAreaProps {
    id: string;
    label: string;
    value: string;
    placeholder?: string;
    rows?: number;
    help?: string;
    onChange: (value: string) => void;
    full?: boolean;
}

function fieldClassName(full: boolean) {
    if (full) return "form-field form-field-full";
    return "form-field";
}

export default function FormTextArea({
    id,
    label,
    value,
    placeholder,
    rows,
    help,
    onChange,
    full
}: FormTextAreaProps) {
    const resolvedRows = rows ?? 5;
    const isFull = full ?? true;

    return (
        <div className={fieldClassName(isFull)}>
            <label className="form-label" htmlFor={id}>{label}</label>
            <textarea
                id={id}
                className="form-textarea"
                value={value}
                placeholder={placeholder}
                rows={resolvedRows}
                onChange={(e) => onChange(e.target.value)}
            />
            <RenderWhen when={Boolean(help)}>
                <span className="form-help">{help}</span>
            </RenderWhen>
        </div>
    );
}
