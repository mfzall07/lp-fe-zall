"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import FormField from "@/components/admin/FormField";
import FormTextArea from "@/components/admin/FormTextArea";
import RenderWhen from "@/components/RenderWhen";
import type { Article } from "@/types";
import { ROUTES } from "@/constants/routes";
import { VALIDATION_MESSAGES, SUCCESS_MESSAGES } from "@/constants/messages";
import formStyles from "@/styles/Form.module.css";

interface ArticleFormProps {
    initial?: Article;
    mode: "create" | "edit";
}

const emptyArticle: Article = {
    id: "",
    title: "",
    excerpt: "",
    body: "",
    author: "",
    date: "",
    imageSrc: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80",
    tag: ""
};

function resolveInitial(initial: Article | undefined) {
    if (initial) return initial;
    return emptyArticle;
}

function resolveSubmitLabel(mode: "create" | "edit") {
    if (mode === "edit") return "Simpan Perubahan";
    return "Publikasikan";
}

export default function ArticleForm({ initial, mode }: ArticleFormProps) {
    const router = useRouter();
    const [form, setForm] = useState<Article>(resolveInitial(initial));
    const [error, setError] = useState("");
    const [done, setDone] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    function set<K extends keyof Article>(key: K, value: Article[K]) {
        setForm((prev) => ({ ...prev, [key]: value }));
    }

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setError("");
        setDone(false);

        if (!form.title.trim()) {
            setError(VALIDATION_MESSAGES.ARTICLE_TITLE_REQUIRED);
            return;
        }

        if (!form.body.trim()) {
            setError(VALIDATION_MESSAGES.ARTICLE_BODY_REQUIRED);
            return;
        }

        setIsSubmitting(true);
        console.log(`[ArticleForm] ${mode}`, form);
        setDone(true);
        setIsSubmitting(false);
    }

    function handleCancel() {
        router.push(ROUTES.ADMIN_ARTICLES);
    }

    return (
        <form className={formStyles.formCard} onSubmit={handleSubmit} noValidate>
            <div className={formStyles.formGrid}>
                <FormField id="ar-title" label="Judul" value={form.title} onChange={(v) => set("title", v)} full />
                <FormField id="ar-author" label="Penulis" value={form.author} onChange={(v) => set("author", v)} />
                <FormField id="ar-date" label="Tanggal Publikasi" value={form.date} type="date" onChange={(v) => set("date", v)} />
                <FormField id="ar-tag" label="Tag" value={form.tag} onChange={(v) => set("tag", v)} placeholder="Cerita, Kuliner, ..." />
                <FormField id="ar-image" label="URL Gambar" value={form.imageSrc} onChange={(v) => set("imageSrc", v)} />
                <FormTextArea id="ar-excerpt" label="Ringkasan" value={form.excerpt} onChange={(v) => set("excerpt", v)} rows={3} />
                <FormTextArea id="ar-body" label="Isi Artikel" value={form.body} onChange={(v) => set("body", v)} rows={10} />

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
