"use client";

import { useState, type FormEvent } from "react";
import RenderWhen from "@/components/RenderWhen";

type PartnershipType = "Partnership" | "Investment";

interface PartnershipPayload {
    fullName: string;
    company: string;
    email: string;
    phone: string;
    type: PartnershipType;
    budget: string;
    message: string;
}

const initialState: PartnershipPayload = {
    fullName: "",
    company: "",
    email: "",
    phone: "",
    type: "Partnership",
    budget: "",
    message: ""
};

function isValidEmail(value: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export default function PartnershipForm() {
    const [form, setForm] = useState<PartnershipPayload>(initialState);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState("");

    function handleChange<K extends keyof PartnershipPayload>(field: K, value: PartnershipPayload[K]) {
        setForm((prev) => ({ ...prev, [field]: value }));
    }

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setError("");
        setSubmitted(false);

        if (!form.fullName.trim()) {
            setError("Nama lengkap wajib diisi.");
            return;
        }

        if (!isValidEmail(form.email)) {
            setError("Email tidak valid.");
            return;
        }

        if (!form.message.trim()) {
            setError("Mohon ceritakan rencana Anda secara singkat.");
            return;
        }

        console.log("[PartnershipForm] submission", form);
        setForm(initialState);
        setSubmitted(true);
    }

    return (
        <form className="form-card" onSubmit={handleSubmit} noValidate>
            <div className="form-grid">
                <div className="form-field">
                    <label className="form-label" htmlFor="ps-name">Nama Lengkap</label>
                    <input
                        id="ps-name"
                        className="form-input"
                        type="text"
                        value={form.fullName}
                        onChange={(e) => handleChange("fullName", e.target.value)}
                    />
                </div>

                <div className="form-field">
                    <label className="form-label" htmlFor="ps-company">Perusahaan</label>
                    <input
                        id="ps-company"
                        className="form-input"
                        type="text"
                        value={form.company}
                        onChange={(e) => handleChange("company", e.target.value)}
                    />
                </div>

                <div className="form-field">
                    <label className="form-label" htmlFor="ps-email">Email</label>
                    <input
                        id="ps-email"
                        className="form-input"
                        type="email"
                        value={form.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                    />
                </div>

                <div className="form-field">
                    <label className="form-label" htmlFor="ps-phone">No. WhatsApp</label>
                    <input
                        id="ps-phone"
                        className="form-input"
                        type="tel"
                        value={form.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                    />
                </div>

                <div className="form-field">
                    <label className="form-label" htmlFor="ps-type">Jenis Pengajuan</label>
                    <select
                        id="ps-type"
                        className="form-input form-select"
                        value={form.type}
                        onChange={(e) => handleChange("type", e.target.value as PartnershipType)}
                    >
                        <option value="Partnership">Partnership</option>
                        <option value="Investment">Investment</option>
                    </select>
                </div>

                <div className="form-field">
                    <label className="form-label" htmlFor="ps-budget">Range Anggaran</label>
                    <input
                        id="ps-budget"
                        className="form-input"
                        type="text"
                        value={form.budget}
                        onChange={(e) => handleChange("budget", e.target.value)}
                        placeholder="Rp ... – ..."
                    />
                </div>

                <div className="form-field form-field-full">
                    <label className="form-label" htmlFor="ps-message">Cerita Singkat</label>
                    <textarea
                        id="ps-message"
                        className="form-textarea"
                        value={form.message}
                        onChange={(e) => handleChange("message", e.target.value)}
                        rows={5}
                        placeholder="Ceritakan ide partnership atau investasi yang Anda pikirkan..."
                    />
                </div>

                <RenderWhen when={Boolean(error)}>
                    <div className="form-field-full">
                        <p className="form-error">{error}</p>
                    </div>
                </RenderWhen>

                <RenderWhen when={submitted}>
                    <div className="form-field-full">
                        <div className="form-success">
                            Pengajuan terkirim. Tim kami akan meninjau dan menghubungi Anda dalam 3–5 hari kerja.
                        </div>
                    </div>
                </RenderWhen>
            </div>

            <div className="form-actions">
                <button className="btn btn-primary" type="submit">Kirim Pengajuan</button>
            </div>
        </form>
    );
}
