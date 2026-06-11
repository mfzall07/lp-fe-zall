import Image from "next/image";
import type { Outlet } from "@/types";

interface OutletCardProps {
    outlet: Outlet;
}

export default function OutletCard({ outlet }: OutletCardProps) {
    return (
        <article className="outlet-card">
            <div className="outlet-card-media">
                <Image src={outlet.imageSrc} alt={outlet.name} width={800} height={600} />
            </div>
            <div className="outlet-card-body">
                <span className="card-eyebrow">Outlet</span>
                <h3 className="outlet-card-name">{outlet.name}</h3>
                <p className="outlet-card-address">{outlet.address}</p>

                <div className="outlet-card-info">
                    <span>{outlet.hours}</span>
                    <span>•</span>
                    <span>{outlet.phone}</span>
                </div>

                <a className="btn btn-ghost outlet-card-cta" href={outlet.mapsUrl} target="_blank" rel="noreferrer">
                    Lihat di Maps
                </a>
            </div>
        </article>
    );
}
