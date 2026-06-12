"use client";

import { useState, type FormEvent } from "react";
import RenderWhen from "@/components/RenderWhen";
import { VALIDATION_MESSAGES, SUCCESS_MESSAGES } from "@/constants/messages";
import styles from "@/styles/Form.module.css";

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
    const [isSubmitting, setIsSubmitting] = useState(false);

    function handleChange(field: keyof ContactPayload, value: string) {
        setForm((prev) => ({ ...prev, [field]: value }));
    }

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setError("");
        setSubmitted(false);

        if (!form.name.trim()) {
            setError(VALIDATION_MESSAGES.NAME_REQUIRED);
            return;
        }

        if (!isValidEmail(form.email)) {
            setError(VALIDATION_MESSAGES.EMAIL_INVALID);
            return;
        }

        if (!form.message.trim()) {
            setError(VALIDATION_MESSAGES.MESSAGE_REQUIRED);
            return;
        }

        setIsSubmitting(true);
        console.log("[ContactForm] submission", form);
        setForm(initialState);
        setSubmitted(true);
        setIsSubmitting(false);
    }

    return (
        <form className={styles.formCard} onSubmit={handleSubmit} noValidate>
            <div className={styles.formGrid}>
                <div className={styles.formField}>
                    <label className={styles.formLabel} htmlFor="contact-name">Nama Lengkap</label>
                    <input
                        id="contact-name"
                        className={styles.formInput}
                        type="text"
                        value={form.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        placeholder="Nama Anda"
                    />
                </div>

                <div className={styles.formField}>
                    <label className={styles.formLabel} htmlFor="contact-email">Email</label>
                    <input
                        id="contact-email"
                        className={styles.formInput}
                        type="email"
                        value={form.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        placeholder="nama@email.com"
                    />
                </div>

                <div className={styles.formField}>
                    <label className={styles.formLabel} htmlFor="contact-phone">No. WhatsApp</label>
                    <input
                        id="contact-phone"
                        className={styles.formInput}
                        type="tel"
                        value={form.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                        placeholder="+62 ..."
                    />
                </div>

                <div className={styles.formField}>
                    <label className={styles.formLabel} htmlFor="contact-subject">Subjek</label>
                    <input
                        id="contact-subject"
                        className={styles.formInput}
                        type="text"
                        value={form.subject}
                        onChange={(e) => handleChange("subject", e.target.value)}
                        placeholder="Reservasi, pertanyaan, dll."
                    />
                </div>

                <div className={`${styles.formField} ${styles.formFieldFull}`}>
                    <label className={styles.formLabel} htmlFor="contact-message">Pesan</label>
                    <textarea
                        id="contact-message"
                        className={styles.formTextarea}
                        value={form.message}
                        onChange={(e) => handleChange("message", e.target.value)}
                        placeholder="Tulis pesan Anda di sini..."
                        rows={5}
                    />
                </div>

                <RenderWhen when={Boolean(error)}>
                    <div className={styles.formFieldFull}>
                        <p className={styles.formError} role="alert">{error}</p>
                    </div>
                </RenderWhen>

                <RenderWhen when={submitted}>
                    <div className={styles.formFieldFull}>
                        <div className={styles.formSuccess} role="status" aria-live="polite">
                            {SUCCESS_MESSAGES.CONTACT_SENT}
                        </div>
                    </div>
                </RenderWhen>
            </div>

            <div className={styles.formActions}>
                <button className="btn btn-primary" type="submit" disabled={isSubmitting}>{isSubmitting ? "Mengirim..." : "Kirim Pesan"}</button>
            </div>
        </form>
    );
}
