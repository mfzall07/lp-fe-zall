"use client";

import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
import RenderWhen from "@/components/RenderWhen";

export default function LoginForm() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setError("");

        if (!email.trim()) {
            setError("Email wajib diisi.");
            return;
        }

        if (!password.trim()) {
            setError("Password wajib diisi.");
            return;
        }

        console.log("[LoginForm] login attempt", { email });
        router.push("/admin");
    }

    return (
        <div className="auth-card">
            <div className="auth-card-head">
                <span className="eyebrow">Sign in</span>
                <h1 className="auth-card-title">Masuk ke CMS</h1>
                <p className="auth-card-lead">
                    Silakan masuk dengan akun yang telah diberikan oleh admin pusat.
                </p>
            </div>

            <form className="auth-form" onSubmit={handleSubmit} noValidate>
                <div className="form-field">
                    <label className="form-label" htmlFor="login-email">Email</label>
                    <input
                        id="login-email"
                        className="form-input"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="admin@warkopmedan.id"
                        autoComplete="email"
                    />
                </div>

                <div className="form-field">
                    <div className="auth-label-row">
                        <label className="form-label" htmlFor="login-password">Password</label>
                        <a href="#" className="auth-forgot">Lupa password?</a>
                    </div>
                    <input
                        id="login-password"
                        className="form-input"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Masukkan password"
                        autoComplete="current-password"
                    />
                </div>

                <RenderWhen when={Boolean(error)}>
                    <p className="form-error">{error}</p>
                </RenderWhen>

                <button className="btn btn-primary btn-block auth-submit" type="submit">
                    Masuk ke Dashboard
                </button>
            </form>

            <div className="auth-foot">
                Belum punya akses? <a href="#">Hubungi admin pusat</a>
            </div>
        </div>
    );
}
