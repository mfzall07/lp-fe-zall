"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import FormField from "@/components/admin/FormField";
import FormTextArea from "@/components/admin/FormTextArea";
import FormSelect from "@/components/admin/FormSelect";
import RenderWhen from "@/components/RenderWhen";
import { menuCategories } from "@/data/menu";
import type { MenuCategory, MenuItem } from "@/types";

interface MenuFormProps {
    initial?: MenuItem;
    mode: "create" | "edit";
}

const emptyMenu: MenuItem = {
    id: "",
    name: "",
    category: "Kopi",
    description: "",
    price: 0,
    imageSrc: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&q=80",
    isSignature: false
};

const categoryOptions = menuCategories.map((category) => ({
    value: category,
    label: category
}));

function resolveInitial(initial: MenuItem | undefined) {
    if (initial) return initial;
    return emptyMenu;
}

function resolveSubmitLabel(mode: "create" | "edit") {
    if (mode === "edit") return "Simpan Perubahan";
    return "Tambahkan Menu";
}

function isValidCategory(value: string): value is MenuCategory {
    return menuCategories.includes(value as MenuCategory);
}

function parsePrice(input: string) {
    const cleaned = input.replace(/[^0-9]/g, "");
    if (cleaned.length === 0) return 0;
    return parseInt(cleaned, 10);
}

export default function MenuForm({ initial, mode }: MenuFormProps) {
    const router = useRouter();
    const [form, setForm] = useState<MenuItem>(resolveInitial(initial));
    const [error, setError] = useState("");
    const [done, setDone] = useState(false);

    function set<K extends keyof MenuItem>(key: K, value: MenuItem[K]) {
        setForm((prev) => ({ ...prev, [key]: value }));
    }

    function handleCategoryChange(value: string) {
        if (!isValidCategory(value)) return;
        set("category", value);
    }

    function handlePriceChange(value: string) {
        set("price", parsePrice(value));
    }

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setError("");
        setDone(false);

        if (!form.name.trim()) {
            setError("Nama menu wajib diisi.");
            return;
        }

        if (!form.description.trim()) {
            setError("Deskripsi menu wajib diisi.");
            return;
        }

        if (form.price <= 0) {
            setError("Harga harus lebih dari nol.");
            return;
        }

        console.log(`[MenuForm] ${mode}`, form);
        setDone(true);
    }

    function handleCancel() {
        router.push("/admin/menu");
    }

    return (
        <form className="form-card" onSubmit={handleSubmit} noValidate>
            <div className="form-grid">
                <FormField
                    id="mn-name"
                    label="Nama Menu"
                    value={form.name}
                    onChange={(v) => set("name", v)}
                    full
                />
                <FormSelect
                    id="mn-category"
                    label="Kategori"
                    value={form.category}
                    options={categoryOptions}
                    onChange={handleCategoryChange}
                />
                <FormField
                    id="mn-price"
                    label="Harga (Rp)"
                    value={String(form.price)}
                    onChange={handlePriceChange}
                    placeholder="22000"
                    help="Masukkan angka tanpa titik."
                />
                <FormField
                    id="mn-image"
                    label="URL Gambar"
                    value={form.imageSrc}
                    onChange={(v) => set("imageSrc", v)}
                    full
                />
                <FormTextArea
                    id="mn-description"
                    label="Deskripsi"
                    value={form.description}
                    onChange={(v) => set("description", v)}
                    rows={4}
                />

                <div className="form-field form-field-full form-checkbox">
                    <label htmlFor="mn-signature" className="form-checkbox-label">
                        <input
                            id="mn-signature"
                            type="checkbox"
                            checked={form.isSignature}
                            onChange={(e) => set("isSignature", e.target.checked)}
                        />
                        <span>Tandai sebagai menu signature</span>
                    </label>
                    <span className="form-help">Menu signature akan ditampilkan di halaman beranda.</span>
                </div>

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
