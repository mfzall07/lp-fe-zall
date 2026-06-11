export type MenuCategory = "Kopi" | "Minuman" | "Makanan Berat" | "Kudapan";

export interface MenuItem {
    id: string;
    name: string;
    category: MenuCategory;
    description: string;
    price: number;
    imageSrc: string;
    isSignature: boolean;
}

export interface Outlet {
    id: string;
    name: string;
    address: string;
    city: string;
    hours: string;
    phone: string;
    imageSrc: string;
    mapsUrl: string;
}

export interface EventItem {
    id: string;
    title: string;
    excerpt: string;
    body: string;
    date: string;
    location: string;
    imageSrc: string;
    tag: string;
}

export interface Article {
    id: string;
    title: string;
    excerpt: string;
    body: string;
    author: string;
    date: string;
    imageSrc: string;
    tag: string;
}

export interface CustomerPersona {
    id: string;
    name: string;
    caption: string;
    imageSrc: string;
}

export interface AboutContent {
    history: string;
    foundedYear: string;
    foundedLocation: string;
    vision: string;
    mission: string[];
    ambition: string;
}

export interface ContactSubmission {
    id: string;
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
    createdAt: string;
    status: "new" | "read" | "replied";
}

export interface PartnershipSubmission {
    id: string;
    fullName: string;
    company: string;
    email: string;
    phone: string;
    type: "Partnership" | "Investment";
    budget: string;
    message: string;
    createdAt: string;
    status: "new" | "reviewing" | "accepted" | "declined";
}
