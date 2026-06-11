import Link from "next/link";

export default function LoginAside() {
    return (
        <aside className="auth-aside">
            <Link href="/" className="auth-aside-brand">
                <span className="navbar-logo">W</span>
                <span className="navbar-brand-text">
                    <span className="navbar-brand-name">Warkop Medan</span>
                    <span className="navbar-brand-tag">di Jakarta</span>
                </span>
            </Link>

            <div className="auth-aside-body">
                <p className="eyebrow auth-aside-eyebrow">Content Studio</p>
                <h2 className="auth-aside-title">
                    Kelola cerita, menu, dan event Warkop Medan dari satu tempat.
                </h2>
                <p className="auth-aside-text">
                    CMS internal untuk tim Warkop Medan di Jakarta. Setiap perubahan langsung
                    tersinkronisasi ke seluruh outlet.
                </p>
            </div>

            <div className="auth-aside-foot">
                <span>© PT Warkop Medan Indonesia</span>
                <Link href="/">Kembali ke situs</Link>
            </div>
        </aside>
    );
}
