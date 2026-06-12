import Link from "next/link";
import { ROUTES } from "@/constants/routes";

export default function NotFound() {
  return (
    <div className="section">
      <div className="container" style={{ textAlign: "center" }}>
        <span className="eyebrow">404</span>
        <h1 className="heading-1" style={{ marginTop: "16px", marginBottom: "16px" }}>Halaman tidak ditemukan</h1>
        <p className="lead">Halaman yang Anda cari tidak ada atau telah dipindahkan.</p>
        <div style={{ marginTop: "32px" }}>
          <Link href={ROUTES.HOME} className="btn btn-primary">Kembali ke Beranda</Link>
        </div>
      </div>
    </div>
  );
}
