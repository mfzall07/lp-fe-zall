import RenderWhen from "@/components/RenderWhen";

interface FormFieldProps {
    id: string;
    label: string;
    value: string;
    placeholder?: string;
    type?: "text" | "email" | "tel" | "url" | "date" | "password";
    help?: string;
    onChange: (value: string) => void;
    full?: boolean;
}

function fieldClassName(full: boolean) {
    if (full) return "form-field form-field-full";
    return "form-field";
}

export default function FormField({
    id,
    label,
    value,
    placeholder,
    type,
    help,
    onChange,
    full
}: FormFieldProps) {
    const resolvedType = type ?? "text";
    const isFull = full ?? false;

    return (
        <div className={fieldClassName(isFull)}>
            <label className="form-label" htmlFor={id}>{label}</label>
            <input
                id={id}
                className="form-input"
                type={resolvedType}
                value={value}
                placeholder={placeholder}
                onChange={(e) => onChange(e.target.value)}
            />
            <RenderWhen when={Boolean(help)}>
                <span className="form-help">{help}</span>
            </RenderWhen>
        </div>
    );
}
