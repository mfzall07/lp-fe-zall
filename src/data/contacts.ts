import type { ContactSubmission, PartnershipSubmission } from "@/types";

export const contactSubmissions: ContactSubmission[] = [
    {
        id: "ct-001",
        name: "Andi Pratama",
        email: "andi.p@example.com",
        phone: "+62 812-1111-0001",
        subject: "Reservasi acara komunitas",
        message: "Halo, saya tertarik untuk booking tempat di cabang Ciputat untuk acara komunitas 30 orang.",
        createdAt: "2026-06-08T09:24:00Z",
        status: "new"
    },
    {
        id: "ct-002",
        name: "Sari Hutapea",
        email: "sari.h@example.com",
        phone: "+62 813-2222-0002",
        subject: "Pertanyaan menu",
        message: "Apakah kopi sanger di Galaxy bisa pesan tanpa susu?",
        createdAt: "2026-06-07T14:10:00Z",
        status: "read"
    },
    {
        id: "ct-003",
        name: "Bobby Sinaga",
        email: "bobby.s@example.com",
        phone: "+62 811-3333-0003",
        subject: "Kerjasama media",
        message: "Saya dari kanal kuliner YouTube, ingin mengulas Warkop Medan di Rawa Belong.",
        createdAt: "2026-06-05T18:42:00Z",
        status: "replied"
    }
];

export const partnershipSubmissions: PartnershipSubmission[] = [
    {
        id: "pt-001",
        fullName: "Rendy Tampubolon",
        company: "PT Kopi Nusantara",
        email: "rendy@kopinusantara.id",
        phone: "+62 812-4444-0001",
        type: "Partnership",
        budget: "Rp 100 jt – 250 jt",
        message: "Tertarik kerjasama supply biji kopi single origin Sumatra ke seluruh outlet.",
        createdAt: "2026-06-09T10:00:00Z",
        status: "new"
    },
    {
        id: "pt-002",
        fullName: "Linda Wijaya",
        company: "Wijaya Capital",
        email: "linda.w@wijayacap.id",
        phone: "+62 811-5555-0002",
        type: "Investment",
        budget: "Rp 500 jt – 1 M",
        message: "Tertarik investasi untuk pembukaan outlet baru di area Jakarta Selatan.",
        createdAt: "2026-06-06T16:30:00Z",
        status: "reviewing"
    }
];
