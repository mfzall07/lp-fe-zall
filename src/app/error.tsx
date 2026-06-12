"use client";

import { useEffect } from "react";

interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="section">
      <div className="container" style={{ textAlign: "center" }}>
        <span className="eyebrow">Kesalahan</span>
        <h1 className="heading-1" style={{ marginTop: "16px", marginBottom: "16px" }}>Ada yang tidak beres</h1>
        <p className="lead">Mohon muat ulang halaman atau coba lagi nanti.</p>
        <div style={{ marginTop: "32px" }}>
          <button className="btn btn-primary" onClick={reset}>Coba Lagi</button>
        </div>
      </div>
    </div>
  );
}
