import type { Metadata } from "next";
import { Lora, Inter } from "next/font/google";
import ScrollToTop from "@/components/ScrollToTop";
import "@/styles/styles.css";

const lora = Lora({
    subsets: ["latin"],
    weight: ["400", "500", "600"],
    variable: "--font-heading",
    display: "swap"
});

const inter = Inter({
    subsets: ["latin"],
    weight: ["400", "500", "600"],
    variable: "--font-body",
    display: "swap"
});

export const metadata: Metadata = {
    title: "Warkop Medan di Jakarta — PT Warkop Medan Indonesia",
    description:
        "Warkop Medan di Jakarta menghadirkan cita rasa, suasana, dan nostalgia khas Medan di tiga outlet: Ciputat, Galaxy, dan Rawa Belong.",
    keywords: [
        "warkop medan",
        "kopi medan jakarta",
        "warkopmdj",
        "PT Warkop Medan Indonesia",
        "kuliner medan jakarta"
    ]
};

interface RootLayoutProps {
    children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="id" className={`${lora.variable} ${inter.variable}`}>
            <body>
                {children}
                <ScrollToTop />
            </body>
        </html>
    );
}
