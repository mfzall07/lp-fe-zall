"use client";

import { useState, type FormEvent } from "react";
import FormField from "@/components/admin/FormField";
import RenderWhen from "@/components/RenderWhen";
import type { BrandSettings } from "@/types";
import formStyles from "@/styles/Form.module.css";
import { VALIDATION_MESSAGES, SUCCESS_MESSAGES } from "@/constants/messages";

interface BrandSettingsEditorProps {
    initial: BrandSettings;
}

function resolveSubmitLabel(isSubmitting: boolean) {
    if (isSubmitting) return "Menyimpan...";
    return "Simpan";
}

export default function BrandSettingsEditor({ initial }: BrandSettingsEditorProps) {
    const [form, setForm] = useState<BrandSettings>(initial);
    const [error, setError] = useState("");
    const [done, setDone] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    function set<K extends keyof BrandSettings>(key: K, value: BrandSettings[K]) {
        setForm((prev) => ({ ...prev, [key]: value }));
    }

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setError("");
        setDone(false);

        if (!form.brandName.trim()) {
            setError(VALIDATION_MESSAGES.NAME_REQUIRED);
            return;
        }

        setIsSubmitting(true);
        console.log("[BrandSettingsEditor] save", form);
        setDone(true);
        setIsSubmitting(false);
    }

    return (
        <form className={formStyles.formCard} onSubmit={handleSubmit} noValidate>
            <div className={formStyles.formGrid}>
                <FormField
                    id="brand-logo-url"
                    label="URL Logo"
                    value={form.logoUrl}
                    onChange={(v) => set("logoUrl", v)}
                    type="url"
                    placeholder="https://example.com/logo.png"
                    help="Kosongkan untuk menggunakan badge huruf."
                    full
                />
                <FormField
                    id="brand-badge-letter"
                    label="Huruf Badge (fallback)"
                    value={form.logoBadgeLetter}
                    onChange={(v) => set("logoBadgeLetter", v)}
                    placeholder="W"
                    help="Ditampilkan jika URL Logo kosong. Maks 2 karakter."
                />
                <FormField
                    id="brand-name"
                    label="Nama Brand"
                    value={form.brandName}
                    onChange={(v) => set("brandName", v)}
                    placeholder="Warkop Medan"
                />
                <FormField
                    id="brand-tag"
                    label="Tagline / Subteks"
                    value={form.brandTag}
                    onChange={(v) => set("brandTag", v)}
                    placeholder="di Jakarta"
                />
                <FormField
                    id="brand-cms-name"
                    label="Nama Sidebar CMS"
                    value={form.cmsName}
                    onChange={(v) => set("cmsName", v)}
                    placeholder="Warkop CMS"
                />

                <RenderWhen when={Boolean(error)}>
                    <div className={formStyles.formFieldFull}>
                        <p className={formStyles.formError} role="alert">{error}</p>
                    </div>
                </RenderWhen>

                <RenderWhen when={done}>
                    <div className={formStyles.formFieldFull}>
                        <div className={formStyles.formSuccess} role="status" aria-live="polite">
                            {SUCCESS_MESSAGES.MOCK_SAVED}
                        </div>
                    </div>
                </RenderWhen>
            </div>

            <div className={formStyles.formActions}>
                <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                    {resolveSubmitLabel(isSubmitting)}
                </button>
            </div>
        </form>
    );
}
