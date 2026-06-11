import LoginForm from "@/components/LoginForm";
import LoginAside from "@/components/LoginAside";

export default function LoginPage() {
    return (
        <div className="auth-shell">
            <LoginAside />
            <main className="auth-main">
                <LoginForm />
            </main>
        </div>
    );
}
