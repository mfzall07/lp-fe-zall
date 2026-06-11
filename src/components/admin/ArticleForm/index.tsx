"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import FormField from "@/components/admin/FormField";
import FormTextArea from "@/components/admin/FormTextArea";
import RenderWhen from "@/components/RenderWhen";
import type { Article } from "@/types";

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

    function set<K extends keyof Article>(key: K, value: Article[K]) {
        setForm((prev) => ({ ...prev, [key]: value }));
    }

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setError("");
        setDone(false);

        if (!form.title.trim()) {
            setError("Judul wajib diisi.");
            return;
        }

        if (!form.body.trim()) {
            setError("Isi artikel tidak boleh kosong.");
            return;
        }

        console.log(`[ArticleForm] ${mode}`, form);
        setDone(true);
    }

    function handleCancel() {
        router.push("/admin/articles");
    }

    return (
        <form className="form-card" onSubmit={handleSubmit} noValidate>
            <div className="form-grid">
                <FormField id="ar-title" label="Judul" value={form.title} onChange={(v) => set("title", v)} full />
                <FormField id="ar-author" label="Penulis" value={form.author} onChange={(v) => set("author", v)} />
                <FormField id="ar-date" label="Tanggal Publikasi" value={form.date} type="date" onChange={(v) => set("date", v)} />
                <FormField id="ar-tag" label="Tag" value={form.tag} onChange={(v) => set("tag", v)} placeholder="Cerita, Kuliner, ..." />
                <FormField id="ar-image" label="URL Gambar" value={form.imageSrc} onChange={(v) => set("imageSrc", v)} />
                <FormTextArea id="ar-excerpt" label="Ringkasan" value={form.excerpt} onChange={(v) => set("excerpt", v)} rows={3} />
                <FormTextArea id="ar-body" label="Isi Artikel" value={form.body} onChange={(v) => set("body", v)} rows={10} />

                <RenderWhen when={Boolean(error)}>
                    <div className="form-field-full">
                        <p className="form-error">{error}</p>
                    </div>
                </RenderWhen>

                <RenderWhen when={done}>
                    <div className="form-field-full">
                        <div className="form-success">Perubahan tersimpan (mock — backend belum aktif).</div>
                    </div>
                </RenderWhen>
            </div>

            <div className="form-actions">
                <button type="button" className="btn btn-ghost" onClick={handleCancel}>Batal</button>
                <button type="submit" className="btn btn-primary">{resolveSubmitLabel(mode)}</button>
            </div>
        </form>
    );
}
