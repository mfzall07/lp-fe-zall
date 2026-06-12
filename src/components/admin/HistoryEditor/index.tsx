"use client";

import { useState, type FormEvent } from "react";
import FormField from "@/components/admin/FormField";
import FormTextArea from "@/components/admin/FormTextArea";
import RenderWhen from "@/components/RenderWhen";
import type { AboutContent } from "@/types";
import formStyles from "@/styles/Form.module.css";

interface HistoryEditorProps {
    initial: AboutContent;
}

export default function HistoryEditor({ initial }: HistoryEditorProps) {
    const [history, setHistory] = useState(initial.history);
    const [foundedYear, setFoundedYear] = useState(initial.foundedYear);
    const [foundedLocation, setFoundedLocation] = useState(initial.foundedLocation);
    const [error, setError] = useState("");
    const [done, setDone] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setError("");
        setDone(false);

        if (!history.trim()) {
            setError("Narasi sejarah tidak boleh kosong.");
            return;
        }

        setIsSubmitting(true);
        console.log("[HistoryEditor] save", { history, foundedYear, foundedLocation });
        setDone(true);
        setIsSubmitting(false);
    }

    return (
        <form className={formStyles.formCard} onSubmit={handleSubmit} noValidate>
            <div className={formStyles.formGrid}>
                <FormField id="hist-year" label="Tahun Berdiri" value={foundedYear} onChange={setFoundedYear} />
                <FormField id="hist-loc" label="Lokasi Pertama" value={foundedLocation} onChange={setFoundedLocation} />
                <FormTextArea id="hist-body" label="Narasi Sejarah" value={history} onChange={setHistory} rows={10} />

                <RenderWhen when={Boolean(error)}>
                    <div className={formStyles.formFieldFull}>
                        <p className={formStyles.formError} role="alert">{error}</p>
                    </div>
                </RenderWhen>

                <RenderWhen when={done}>
                    <div className={formStyles.formFieldFull}>
                        <div className={formStyles.formSuccess} role="status" aria-live="polite">Sejarah berhasil disimpan (mock).</div>
                    </div>
                </RenderWhen>
            </div>

            <div className={formStyles.formActions}>
                <button type="submit" className="btn btn-primary" disabled={isSubmitting}>{isSubmitting ? "Menyimpan..." : "Simpan"}</button>
            </div>
        </form>
    );
}
