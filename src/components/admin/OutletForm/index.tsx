"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import FormField from "@/components/admin/FormField";
import FormTextArea from "@/components/admin/FormTextArea";
import RenderWhen from "@/components/RenderWhen";
import type { Outlet } from "@/types";
import { ROUTES } from "@/constants/routes";
import { VALIDATION_MESSAGES, SUCCESS_MESSAGES } from "@/constants/messages";
import formStyles from "@/styles/Form.module.css";

interface OutletFormProps {
    initial?: Outlet;
    mode: "create" | "edit";
}

const emptyOutlet: Outlet = {
    id: "",
    name: "",
    address: "",
    city: "",
    hours: "",
    phone: "",
    imageSrc: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=80",
    mapsUrl: ""
};

function resolveInitial(initial: Outlet | undefined) {
    if (initial) return initial;
    return emptyOutlet;
}

function resolveSubmitLabel(mode: "create" | "edit") {
    if (mode === "edit") return "Simpan Perubahan";
    return "Tambah Outlet";
}

export default function OutletForm({ initial, mode }: OutletFormProps) {
    const router = useRouter();
    const [form, setForm] = useState<Outlet>(resolveInitial(initial));
    const [error, setError] = useState("");
    const [done, setDone] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    function set<K extends keyof Outlet>(key: K, value: Outlet[K]) {
        setForm((prev) => ({ ...prev, [key]: value }));
    }

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setError("");
        setDone(false);

        if (!form.name.trim()) {
            setError(VALIDATION_MESSAGES.OUTLET_NAME_REQUIRED);
            return;
        }

        if (!form.address.trim()) {
            setError(VALIDATION_MESSAGES.OUTLET_ADDRESS_REQUIRED);
            return;
        }

        setIsSubmitting(true);
        console.log(`[OutletForm] ${mode}`, form);
        setDone(true);
        setIsSubmitting(false);
    }

    function handleCancel() {
        router.push(ROUTES.ADMIN_OUTLETS);
    }

    return (
        <form className={formStyles.formCard} onSubmit={handleSubmit} noValidate>
            <div className={formStyles.formGrid}>
                <FormField id="ol-name" label="Nama Outlet" value={form.name} onChange={(v) => set("name", v)} full />
                <FormField id="ol-city" label="Kota" value={form.city} onChange={(v) => set("city", v)} />
                <FormField id="ol-phone" label="Telepon / WA" value={form.phone} onChange={(v) => set("phone", v)} type="tel" />
                <FormField id="ol-hours" label="Jam Buka" value={form.hours} onChange={(v) => set("hours", v)} placeholder="07.00 – 23.00 WIB" />
                <FormField id="ol-maps" label="URL Google Maps" value={form.mapsUrl} onChange={(v) => set("mapsUrl", v)} type="url" />
                <FormField id="ol-image" label="URL Gambar" value={form.imageSrc} onChange={(v) => set("imageSrc", v)} />
                <FormTextArea id="ol-address" label="Alamat Lengkap" value={form.address} onChange={(v) => set("address", v)} rows={3} />

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
