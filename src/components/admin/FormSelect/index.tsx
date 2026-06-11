import RenderWhen from "@/components/RenderWhen";

interface FormSelectOption {
    value: string;
    label: string;
}

interface FormSelectProps {
    id: string;
    label: string;
    value: string;
    options: FormSelectOption[];
    help?: string;
    onChange: (value: string) => void;
    full?: boolean;
}

function fieldClassName(full: boolean) {
    if (full) return "form-field form-field-full";
    return "form-field";
}

export default function FormSelect({
    id,
    label,
    value,
    options,
    help,
    onChange,
    full
}: FormSelectProps) {
    const isFull = full ?? false;

    return (
        <div className={fieldClassName(isFull)}>
            <label className="form-label" htmlFor={id}>{label}</label>
            <select
                id={id}
                className="form-input"
                value={value}
                onChange={(e) => onChange(e.target.value)}
            >
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
            <RenderWhen when={Boolean(help)}>
                <span className="form-help">{help}</span>
            </RenderWhen>
        </div>
    );
}
