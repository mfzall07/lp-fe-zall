"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import FormField from "@/components/admin/FormField";
import FormTextArea from "@/components/admin/FormTextArea";
import RenderWhen from "@/components/RenderWhen";
import type { EventItem } from "@/types";
import { ROUTES } from "@/constants/routes";
import { VALIDATION_MESSAGES, SUCCESS_MESSAGES } from "@/constants/messages";
import formStyles from "@/styles/Form.module.css";

interface EventFormProps {
    initial?: EventItem;
    mode: "create" | "edit";
}

const emptyEvent: EventItem = {
    id: "",
    title: "",
    excerpt: "",
    body: "",
    date: "",
    location: "",
    imageSrc: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80",
    tag: ""
};

function resolveInitial(initial: EventItem | undefined) {
    if (initial) return initial;
    return emptyEvent;
}

function resolveSubmitLabel(mode: "create" | "edit") {
    if (mode === "edit") return "Simpan Perubahan";
    return "Buat Event";
}

export default function EventForm({ initial, mode }: EventFormProps) {
    const router = useRouter();
    const [form, setForm] = useState<EventItem>(resolveInitial(initial));
    const [error, setError] = useState("");
    const [done, setDone] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    function set<K extends keyof EventItem>(key: K, value: EventItem[K]) {
        setForm((prev) => ({ ...prev, [key]: value }));
    }

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setError("");
        setDone(false);

        if (!form.title.trim()) {
            setError(VALIDATION_MESSAGES.EVENT_TITLE_REQUIRED);
            return;
        }

        if (!form.date.trim()) {
            setError(VALIDATION_MESSAGES.EVENT_DATE_REQUIRED);
            return;
        }

        setIsSubmitting(true);
        console.log(`[EventForm] ${mode}`, form);
        setDone(true);
        setIsSubmitting(false);
    }

    function handleCancel() {
        router.push(ROUTES.ADMIN_EVENTS);
    }

    return (
        <form className={formStyles.formCard} onSubmit={handleSubmit} noValidate>
            <div className={formStyles.formGrid}>
                <FormField id="ev-title" label="Judul" value={form.title} onChange={(v) => set("title", v)} full />
                <FormField id="ev-tag" label="Kategori" value={form.tag} onChange={(v) => set("tag", v)} placeholder="Komunitas, Live Music, Workshop" />
                <FormField id="ev-date" label="Tanggal" value={form.date} type="date" onChange={(v) => set("date", v)} />
                <FormField id="ev-location" label="Lokasi" value={form.location} onChange={(v) => set("location", v)} full />
                <FormTextArea id="ev-excerpt" label="Ringkasan" value={form.excerpt} onChange={(v) => set("excerpt", v)} rows={3} />
                <FormTextArea id="ev-body" label="Deskripsi Lengkap" value={form.body} onChange={(v) => set("body", v)} rows={7} />
                <FormField id="ev-image" label="URL Gambar" value={form.imageSrc} onChange={(v) => set("imageSrc", v)} full help="Path SVG/JPG di /public/images" />

                <RenderWhen when={Boolean(error)}>
                    <div className={formStyles.formFieldFull}>
                        <p className={formStyles.formError} role="alert">{error}</p>
                    </div>
                </RenderWhen>

                <RenderWhen when={done}>
                    <div className={formStyles.formFieldFull}>
                        <div className={formStyles.formSuccess} role="status" aria-live="polite">{SUCCESS_MESSAGES.MOCK_SAVED}</div>
                    </div>
                </RenderWhen>
            </div>

            <div className={formStyles.formActions}>
                <button type="button" className="btn btn-ghost" onClick={handleCancel}>Batal</button>
                <button type="submit" className="btn btn-primary" disabled={isSubmitting}>{isSubmitting ? "Menyimpan..." : resolveSubmitLabel(mode)}</button>
            </div>
        </form>
    );
}
