"use client";

import { useState, type FormEvent } from "react";
import FormTextArea from "@/components/admin/FormTextArea";
import RenderWhen from "@/components/RenderWhen";
import type { AboutContent } from "@/types";
import formStyles from "@/styles/Form.module.css";

interface VisionMissionEditorProps {
    initial: AboutContent;
}

export default function VisionMissionEditor({ initial }: VisionMissionEditorProps) {
    const [vision, setVision] = useState(initial.vision);
    const [missionRaw, setMissionRaw] = useState(initial.mission.join("\n"));
    const [ambition, setAmbition] = useState(initial.ambition);
    const [error, setError] = useState("");
    const [done, setDone] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setError("");
        setDone(false);

        if (!vision.trim()) {
            setError("Visi tidak boleh kosong.");
            return;
        }

        if (!ambition.trim()) {
            setError("Ambisi tidak boleh kosong.");
            return;
        }

        const mission = missionRaw
            .split("\n")
            .map((line) => line.trim())
            .filter((line) => line.length > 0);

        setIsSubmitting(true);
        console.log("[VisionMissionEditor] save", { vision, mission, ambition });
        setDone(true);
        setIsSubmitting(false);
    }

    return (
        <form className={formStyles.formCard} onSubmit={handleSubmit} noValidate>
            <div className={formStyles.formGrid}>
                <FormTextArea id="vma-vision" label="Visi" value={vision} onChange={setVision} rows={3} />
                <FormTextArea
                    id="vma-mission"
                    label="Misi (satu poin per baris)"
                    value={missionRaw}
                    onChange={setMissionRaw}
                    rows={6}
                    help="Setiap baris akan menjadi satu poin misi."
                />
                <FormTextArea id="vma-ambition" label="Ambisi" value={ambition} onChange={setAmbition} rows={3} />

                <RenderWhen when={Boolean(error)}>
                    <div className={formStyles.formFieldFull}>
                        <p className={formStyles.formError} role="alert">{error}</p>
                    </div>
                </RenderWhen>

                <RenderWhen when={done}>
                    <div className={formStyles.formFieldFull}>
                        <div className={formStyles.formSuccess} role="status" aria-live="polite">Visi, misi, dan ambisi tersimpan (mock).</div>
                    </div>
                </RenderWhen>
            </div>

            <div className={formStyles.formActions}>
                <button type="submit" className="btn btn-primary" disabled={isSubmitting}>{isSubmitting ? "Menyimpan..." : "Simpan"}</button>
            </div>
        </form>
    );
}
