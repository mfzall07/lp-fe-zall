"use client";

import { useState, type FormEvent } from "react";
import FormField from "@/components/admin/FormField";
import FormTextArea from "@/components/admin/FormTextArea";
import RenderWhen from "@/components/RenderWhen";
import type { AboutContent } from "@/types";

interface HistoryEditorProps {
    initial: AboutContent;
}

export default function HistoryEditor({ initial }: HistoryEditorProps) {
    const [history, setHistory] = useState(initial.history);
    const [foundedYear, setFoundedYear] = useState(initial.foundedYear);
    const [foundedLocation, setFoundedLocation] = useState(initial.foundedLocation);
    const [error, setError] = useState("");
    const [done, setDone] = useState(false);

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setError("");
        setDone(false);

        if (!history.trim()) {
            setError("Narasi sejarah tidak boleh kosong.");
            return;
        }

        console.log("[HistoryEditor] save", { history, foundedYear, foundedLocation });
        setDone(true);
    }

    return (
        <form className="form-card" onSubmit={handleSubmit} noValidate>
            <div className="form-grid">
                <FormField id="hist-year" label="Tahun Berdiri" value={foundedYear} onChange={setFoundedYear} />
                <FormField id="hist-loc" label="Lokasi Pertama" value={foundedLocation} onChange={setFoundedLocation} />
                <FormTextArea id="hist-body" label="Narasi Sejarah" value={history} onChange={setHistory} rows={10} />

                <RenderWhen when={Boolean(error)}>
                    <div className="form-field-full">
                        <p className="form-error">{error}</p>
                    </div>
                </RenderWhen>

                <RenderWhen when={done}>
                    <div className="form-field-full">
                        <div className="form-success">Sejarah berhasil disimpan (mock).</div>
                    </div>
                </RenderWhen>
            </div>

            <div className="form-actions">
                <button type="submit" className="btn btn-primary">Simpan</button>
            </div>
        </form>
    );
}
