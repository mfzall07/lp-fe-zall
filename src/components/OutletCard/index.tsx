import Image from "next/image";
import type { Outlet } from "@/types";
import styles from "./OutletCard.module.css";
import cardStyles from "@/styles/Card.module.css";

interface OutletCardProps {
    outlet: Outlet;
}

export default function OutletCard({ outlet }: OutletCardProps) {
    return (
        <article className={styles.outletCard}>
            <div className={styles.outletCardMedia}>
                <Image src={outlet.imageSrc} alt={outlet.name} width={800} height={600} />
            </div>
            <div className={styles.outletCardBody}>
                <span className={cardStyles.cardEyebrow}>Outlet</span>
                <h3 className={styles.outletCardName}>{outlet.name}</h3>
                <p className={styles.outletCardAddress}>{outlet.address}</p>

                <div className={styles.outletCardInfo}>
                    <span>{outlet.hours}</span>
                    <span>•</span>
                    <span>{outlet.phone}</span>
                </div>

                <a className={`btn btn-ghost ${styles.outletCardCta}`} href={outlet.mapsUrl} target="_blank" rel="noreferrer">
                    Lihat di Maps
                </a>
            </div>
        </article>
    );
}
