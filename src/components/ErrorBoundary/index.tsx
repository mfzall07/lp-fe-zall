"use client";

import { Component, type ReactNode } from "react";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) return this.props.fallback;
      return (
        <div className="section">
          <div className="container" style={{ textAlign: "center" }}>
            <h2 className="heading-2">Terjadi kesalahan</h2>
            <p className="lead">Mohon muat ulang halaman atau coba lagi nanti.</p>
            <button className="btn btn-primary" onClick={() => this.setState({ hasError: false, error: null })}>
              Coba Lagi
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
