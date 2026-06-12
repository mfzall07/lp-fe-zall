import Image from "next/image";
import SectionTitle from "@/components/SectionTitle";
import type { CustomerPersona } from "@/types";
import styles from "./PersonaGallery.module.css";

interface CustomerPersonaGalleryProps {
    personas: CustomerPersona[];
}

function EmptyPersonas() {
    return (
        <div className="empty-state">
            <h3>Belum ada foto customer</h3>
            <p>Kami akan menampilkan momen-momen bersama pelanggan di sini.</p>
        </div>
    );
}

export default function CustomerPersonaGallery({ personas }: CustomerPersonaGalleryProps) {
    if (personas.length === 0) return <EmptyPersonas />;

    return (
        <div className="container">
            <SectionTitle
                eyebrow="Customer Persona"
                title="Mereka yang Selalu Mampir"
                description="Dari perantau Medan, pekerja Jakarta, hingga keluarga dan komunitas — Warkop Medan jadi rumah kedua bagi banyak orang."
            />

            <div className={styles.personaGrid}>
                {personas.map((persona) => (
                    <figure key={persona.id} className={styles.personaCard}>
                        <Image src={persona.imageSrc} alt={persona.name} width={400} height={400} />
                        <figcaption className={styles.personaCardCaption}>{persona.name}</figcaption>
                    </figure>
                ))}
            </div>
        </div>
    );
}
