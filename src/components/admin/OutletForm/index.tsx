"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import FormField from "@/components/admin/FormField";
import FormTextArea from "@/components/admin/FormTextArea";
import RenderWhen from "@/components/RenderWhen";
import type { Outlet } from "@/types";

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

    function set<K extends keyof Outlet>(key: K, value: Outlet[K]) {
        setForm((prev) => ({ ...prev, [key]: value }));
    }

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setError("");
        setDone(false);

        if (!form.name.trim()) {
            setError("Nama outlet wajib diisi.");
            return;
        }

        if (!form.address.trim()) {
            setError("Alamat outlet wajib diisi.");
            return;
        }

        console.log(`[OutletForm] ${mode}`, form);
        setDone(true);
    }

    function handleCancel() {
        router.push("/admin/outlets");
    }

    return (
        <form className="form-card" onSubmit={handleSubmit} noValidate>
            <div className="form-grid">
                <FormField id="ol-name" label="Nama Outlet" value={form.name} onChange={(v) => set("name", v)} full />
                <FormField id="ol-city" label="Kota" value={form.city} onChange={(v) => set("city", v)} />
                <FormField id="ol-phone" label="Telepon / WA" value={form.phone} onChange={(v) => set("phone", v)} type="tel" />
                <FormField id="ol-hours" label="Jam Buka" value={form.hours} onChange={(v) => set("hours", v)} placeholder="07.00 – 23.00 WIB" />
                <FormField id="ol-maps" label="URL Google Maps" value={form.mapsUrl} onChange={(v) => set("mapsUrl", v)} type="url" />
                <FormField id="ol-image" label="URL Gambar" value={form.imageSrc} onChange={(v) => set("imageSrc", v)} />
                <FormTextArea id="ol-address" label="Alamat Lengkap" value={form.address} onChange={(v) => set("address", v)} rows={3} />

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
