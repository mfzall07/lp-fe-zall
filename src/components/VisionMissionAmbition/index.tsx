import SectionTitle from "@/components/SectionTitle";
import { about } from "@/data/about";

function CompassIcon() {
    return (
        <svg
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
        >
            <circle cx="16" cy="16" r="11.5" />
            <path d="M 19.5 12.5 L 17 17 L 12.5 19.5 L 15 15 Z" fill="currentColor" />
            <circle cx="16" cy="16" r="1" fill="currentColor" />
        </svg>
    );
}

function ChecklistIcon() {
    return (
        <svg
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
        >
            <rect x="6" y="5" width="20" height="22" rx="2.5" />
            <path d="M 9.5 11.5 L 11 13 L 13.5 10.5" />
            <path d="M 15.5 11.5 L 22.5 11.5" />
            <path d="M 9.5 17 L 11 18.5 L 13.5 16" />
            <path d="M 15.5 17 L 22.5 17" />
            <path d="M 9.5 22.5 L 11 24 L 13.5 21.5" />
            <path d="M 15.5 22.5 L 22.5 22.5" />
        </svg>
    );
}

function PeakIcon() {
    return (
        <svg
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
        >
            <path d="M 3 25 L 11 12 L 15 18 L 20 9 L 29 25 Z" />
            <path d="M 18.5 11.5 L 20 9 L 21.5 11.5" />
            <circle cx="23" cy="6" r="1.5" fill="currentColor" stroke="none" />
        </svg>
    );
}

export default function VisionMissionAmbition() {
    return (
        <section className="section section-alt">
            <div className="container">
                <SectionTitle
                    eyebrow="Visi, Misi, Ambisi"
                    title="Apa yang Kami Perjuangkan"
                    description="Tiga hal yang menuntun setiap keputusan, menu, dan layanan yang kami sajikan."
                />

                <div className="vma-grid">
                    <article className="vma-card">
                        <div className="vma-icon"><CompassIcon /></div>
                        <h3 className="heading-3">Visi</h3>
                        <p>{about.vision}</p>
                    </article>

                    <article className="vma-card">
                        <div className="vma-icon"><ChecklistIcon /></div>
                        <h3 className="heading-3">Misi</h3>
                        <ul className="vma-list">
                            {about.mission.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </article>

                    <article className="vma-card vma-card-accent">
                        <div className="vma-icon"><PeakIcon /></div>
                        <h3 className="heading-3">Ambisi</h3>
                        <p>{about.ambition}</p>
                    </article>
                </div>
            </div>
        </section>
    );
}
