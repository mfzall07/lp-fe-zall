"use client";

import { useState, type FormEvent } from "react";
import RenderWhen from "@/components/RenderWhen";

interface ContactPayload {
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
}

const initialState: ContactPayload = {
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
};

function isValidEmail(value: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export default function ContactForm() {
    const [form, setForm] = useState<ContactPayload>(initialState);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState("");

    function handleChange(field: keyof ContactPayload, value: string) {
        setForm((prev) => ({ ...prev, [field]: value }));
    }

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setError("");
        setSubmitted(false);

        if (!form.name.trim()) {
            setError("Nama wajib diisi.");
            return;
        }

        if (!isValidEmail(form.email)) {
            setError("Email tidak valid.");
            return;
        }

        if (!form.message.trim()) {
            setError("Pesan tidak boleh kosong.");
            return;
        }

        console.log("[ContactForm] submission", form);
        setForm(initialState);
        setSubmitted(true);
    }

    return (
        <form className="form-card" onSubmit={handleSubmit} noValidate>
            <div className="form-grid">
                <div className="form-field">
                    <label className="form-label" htmlFor="contact-name">Nama Lengkap</label>
                    <input
                        id="contact-name"
                        className="form-input"
                        type="text"
                        value={form.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        placeholder="Nama Anda"
                    />
                </div>

                <div className="form-field">
                    <label className="form-label" htmlFor="contact-email">Email</label>
                    <input
                        id="contact-email"
                        className="form-input"
                        type="email"
                        value={form.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        placeholder="nama@email.com"
                    />
                </div>

                <div className="form-field">
                    <label className="form-label" htmlFor="contact-phone">No. WhatsApp</label>
                    <input
                        id="contact-phone"
                        className="form-input"
                        type="tel"
                        value={form.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                        placeholder="+62 ..."
                    />
                </div>

                <div className="form-field">
                    <label className="form-label" htmlFor="contact-subject">Subjek</label>
                    <input
                        id="contact-subject"
                        className="form-input"
                        type="text"
                        value={form.subject}
                        onChange={(e) => handleChange("subject", e.target.value)}
                        placeholder="Reservasi, pertanyaan, dll."
                    />
                </div>

                <div className="form-field form-field-full">
                    <label className="form-label" htmlFor="contact-message">Pesan</label>
                    <textarea
                        id="contact-message"
                        className="form-textarea"
                        value={form.message}
                        onChange={(e) => handleChange("message", e.target.value)}
                        placeholder="Tulis pesan Anda di sini..."
                        rows={5}
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
                            Terima kasih! Pesan Anda sudah kami terima. Tim kami akan segera menghubungi.
                        </div>
                    </div>
                </RenderWhen>
            </div>

            <div className="form-actions">
                <button className="btn btn-primary" type="submit">Kirim Pesan</button>
            </div>
        </form>
    );
}
