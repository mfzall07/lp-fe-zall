"use client";

import { useEffect } from "react";

interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function AdminErrorPage({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div style={{ padding: "48px", display: "flex", alignItems: "center", justifyContent: "center", minHeight: "400px" }}>
      <div style={{ textAlign: "center" }}>
        <h2 className="heading-2">Terjadi kesalahan</h2>
        <p className="body-muted" style={{ marginTop: "8px", marginBottom: "24px" }}>Mohon muat ulang halaman atau coba lagi nanti.</p>
        <button className="btn btn-primary" onClick={reset}>Coba Lagi</button>
      </div>
    </div>
  );
}
