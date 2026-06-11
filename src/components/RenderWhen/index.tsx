import type { ReactNode } from "react";

interface RenderWhenProps {
    when: boolean;
    children: ReactNode;
}

export default function RenderWhen({ when, children }: RenderWhenProps) {
    if (!when) return null;
    return <>{children}</>;
}
