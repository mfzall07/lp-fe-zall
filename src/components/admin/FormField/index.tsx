import RenderWhen from "@/components/RenderWhen";
import formStyles from "@/styles/Form.module.css";

interface FormFieldProps {
    id: string;
    label: string;
    value: string;
    placeholder?: string;
    type?: "text" | "email" | "tel" | "url" | "date" | "password";
    help?: string;
    onChange: (value: string) => void;
    full?: boolean;
    required?: boolean;
    error?: string;
}

function fieldClassName(full: boolean) {
    if (full) return `${formStyles.formField} ${formStyles.formFieldFull}`;
    return formStyles.formField;
}

export default function FormField({
    id,
    label,
    value,
    placeholder,
    type,
    help,
    onChange,
    full,
    required,
    error
}: FormFieldProps) {
    const resolvedType = type ?? "text";
    const isFull = full ?? false;
    const errorId = error ? `${id}-error` : undefined;

    return (
        <div className={fieldClassName(isFull)}>
            <label className={formStyles.formLabel} htmlFor={id}>{label}</label>
            <input
                id={id}
                className={formStyles.formInput}
                type={resolvedType}
                value={value}
                placeholder={placeholder}
                onChange={(e) => onChange(e.target.value)}
                aria-required={required}
                aria-describedby={errorId}
            />
            <RenderWhen when={Boolean(help)}>
                <span className={formStyles.formHelp}>{help}</span>
            </RenderWhen>
            <RenderWhen when={Boolean(error)}>
                <span id={errorId} className={formStyles.formError} role="alert">{error}</span>
            </RenderWhen>
        </div>
    );
}
