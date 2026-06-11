import Image from "next/image";
import RenderWhen from "@/components/RenderWhen";
import { formatPrice } from "@/data/menu";
import type { MenuItem } from "@/types";

interface MenuCardProps {
    item: MenuItem;
}

export default function MenuCard({ item }: MenuCardProps) {
    return (
        <article className="menu-card">
            <div className="menu-card-media">
                <Image src={item.imageSrc} alt={item.name} width={600} height={600} />
                <RenderWhen when={item.isSignature}>
                    <span className="menu-card-badge">Signature</span>
                </RenderWhen>
            </div>
            <div className="menu-card-body">
                <span className="card-eyebrow">{item.category}</span>
                <h3 className="menu-card-name">{item.name}</h3>
                <p className="menu-card-desc">{item.description}</p>
                <div className="menu-card-price">{formatPrice(item.price)}</div>
            </div>
        </article>
    );
}
