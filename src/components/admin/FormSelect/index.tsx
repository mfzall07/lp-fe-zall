import RenderWhen from "@/components/RenderWhen";
import formStyles from "@/styles/Form.module.css";

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
    if (full) return `${formStyles.formField} ${formStyles.formFieldFull}`;
    return formStyles.formField;
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
            <label className={formStyles.formLabel} htmlFor={id}>{label}</label>
            <select
                id={id}
                className={formStyles.formInput}
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
                <span className={formStyles.formHelp}>{help}</span>
            </RenderWhen>
        </div>
    );
}
