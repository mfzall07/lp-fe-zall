import Image from "next/image";
import RenderWhen from "@/components/RenderWhen";
import { formatPrice } from "@/data/menu";
import type { MenuItem } from "@/types";
import styles from "./MenuCard.module.css";
import cardStyles from "@/styles/Card.module.css";

interface MenuCardProps {
    item: MenuItem;
}

export default function MenuCard({ item }: MenuCardProps) {
    return (
        <article className={styles.menuCard}>
            <div className={styles.menuCardMedia}>
                <Image src={item.imageSrc} alt={item.name} width={600} height={600} />
                <RenderWhen when={item.isSignature}>
                    <span className={styles.menuCardBadge}>Signature</span>
                </RenderWhen>
            </div>
            <div className={styles.menuCardBody}>
                <span className={cardStyles.cardEyebrow}>{item.category}</span>
                <h3 className={styles.menuCardName}>{item.name}</h3>
                <p className={styles.menuCardDesc}>{item.description}</p>
                <div className={styles.menuCardPrice}>{formatPrice(item.price)}</div>
            </div>
        </article>
    );
}
