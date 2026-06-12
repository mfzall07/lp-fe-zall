import LoginForm from "@/components/LoginForm";
import LoginAside from "@/components/LoginAside";
import styles from "@/components/LoginAside/AuthLayout.module.css";

export default function LoginPage() {
    return (
        <div className={styles.authShell}>
            <LoginAside />
            <main className={styles.authMain}>
                <LoginForm />
            </main>
        </div>
    );
}
