import RenderWhen from "@/components/RenderWhen";
import formStyles from "@/styles/Form.module.css";

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
    if (full) return `${formStyles.formField} ${formStyles.formFieldFull}`;
    return formStyles.formField;
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
            <label className={formStyles.formLabel} htmlFor={id}>{label}</label>
            <textarea
                id={id}
                className={formStyles.formTextarea}
                value={value}
                placeholder={placeholder}
                rows={resolvedRows}
                onChange={(e) => onChange(e.target.value)}
            />
            <RenderWhen when={Boolean(help)}>
                <span className={formStyles.formHelp}>{help}</span>
            </RenderWhen>
        </div>
    );
}
