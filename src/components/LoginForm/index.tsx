"use client";

import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
import RenderWhen from "@/components/RenderWhen";
import { ROUTES } from "@/constants/routes";
import { VALIDATION_MESSAGES } from "@/constants/messages";
import authStyles from "@/components/LoginAside/AuthLayout.module.css";
import formStyles from "@/styles/Form.module.css";

export default function LoginForm() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setError("");

        if (!email.trim()) {
            setError(VALIDATION_MESSAGES.EMAIL_REQUIRED);
            return;
        }

        if (!password.trim()) {
            setError(VALIDATION_MESSAGES.PASSWORD_REQUIRED);
            return;
        }

        setIsSubmitting(true);
        console.log("[LoginForm] login attempt", { email });
        router.push(ROUTES.ADMIN);
    }

    return (
        <div className={authStyles.authCard}>
            <div className={authStyles.authCardHead}>
                <span className="eyebrow">Sign in</span>
                <h1 className={authStyles.authCardTitle}>Masuk ke CMS</h1>
                <p className={authStyles.authCardLead}>
                    Silakan masuk dengan akun yang telah diberikan oleh admin pusat.
                </p>
            </div>

            <form className={authStyles.authForm} onSubmit={handleSubmit} noValidate>
                <div className={formStyles.formField}>
                    <label className={formStyles.formLabel} htmlFor="login-email">Email</label>
                    <input
                        id="login-email"
                        className={formStyles.formInput}
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="admin@warkopmedan.id"
                        autoComplete="email"
                    />
                </div>

                <div className={formStyles.formField}>
                    <div className={authStyles.authLabelRow}>
                        <label className={formStyles.formLabel} htmlFor="login-password">Password</label>
                        <a href="#" className={authStyles.authForgot}>Lupa password?</a>
                    </div>
                    <input
                        id="login-password"
                        className={formStyles.formInput}
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Masukkan password"
                        autoComplete="current-password"
                    />
                </div>

                <RenderWhen when={Boolean(error)}>
                    <p className={formStyles.formError} role="alert">{error}</p>
                </RenderWhen>

                <button className={`btn btn-primary btn-block ${authStyles.authSubmit}`} type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Memproses..." : "Masuk ke Dashboard"}
                </button>
            </form>

            <div className={authStyles.authFoot}>
                Belum punya akses? <a href="#">Hubungi admin pusat</a>
            </div>
        </div>
    );
}
