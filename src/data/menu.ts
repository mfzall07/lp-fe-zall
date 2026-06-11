import type { MenuItem } from "@/types";

export const menuItems: MenuItem[] = [
    {
        id: "kopi-sanger",
        name: "Kopi Sanger",
        category: "Kopi",
        description:
            "Robusta Sidikalang diseduh kuat, dipadu susu kental manis dan sedikit gula. Aroma karamel, body penuh, finish manis.",
        price: 22000,
        imageSrc: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&q=80",
        isSignature: true
    },
    {
        id: "kopi-tubruk-medan",
        name: "Kopi Tubruk Medan",
        category: "Kopi",
        description:
            "Bubuk kopi Sidikalang halus diseduh langsung dengan air panas, disajikan tanpa filter. Pahit lembut, sedap diseruput perlahan.",
        price: 18000,
        imageSrc: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&q=80",
        isSignature: false
    },
    {
        id: "kopi-susu-gula-aren",
        name: "Kopi Susu Gula Aren",
        category: "Kopi",
        description:
            "Espresso double shot, susu segar dingin, dan sirup gula aren yang dimasak sendiri. Pas untuk siang Jakarta yang terik.",
        price: 25000,
        imageSrc: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=600&q=80",
        isSignature: false
    },
    {
        id: "teh-tarik-medan",
        name: "Teh Tarik Medan",
        category: "Minuman",
        description:
            "Teh hitam pekat ditarik berbusa dengan susu kental manis. Hangat, manis, dan creamy seperti di kedai aslinya.",
        price: 18000,
        imageSrc: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=600&q=80",
        isSignature: false
    },
    {
        id: "es-jeruk-medan",
        name: "Es Jeruk Medan",
        category: "Minuman",
        description:
            "Jeruk kasturi Medan diperas segar, dipadukan air kelapa muda. Asam-manis seimbang, paling cocok untuk menemani makan berat.",
        price: 20000,
        imageSrc: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=600&q=80",
        isSignature: false
    },
    {
        id: "mie-balap",
        name: "Mie Balap",
        category: "Makanan Berat",
        description:
            "Mie kuning digoreng cepat dengan api besar, dipadu tauge segar, telur orak-arik, dan bumbu khas Medan. Wangi smoky wok.",
        price: 32000,
        imageSrc: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600&q=80",
        isSignature: true
    },
    {
        id: "soto-medan",
        name: "Soto Medan",
        category: "Makanan Berat",
        description:
            "Kuah santan kuning yang gurih dan rempah pekat, dengan daging sapi empuk, kentang, telur, dan kerupuk merah ikonik.",
        price: 38000,
        imageSrc: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=600&q=80",
        isSignature: true
    },
    {
        id: "nasi-gurih-medan",
        name: "Nasi Gurih Medan",
        category: "Makanan Berat",
        description:
            "Nasi yang dimasak dengan santan dan daun pandan, disajikan dengan rendang, telur balado, dan sambal teri Medan.",
        price: 35000,
        imageSrc: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600&q=80",
        isSignature: false
    },
    {
        id: "bika-ambon",
        name: "Bika Ambon",
        category: "Kudapan",
        description:
            "Kue legendaris dari Jl. Ambon Medan. Tekstur berserat, wangi daun jeruk dan pandan, manis lembut tidak menyengat.",
        price: 15000,
        imageSrc: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&q=80",
        isSignature: true
    },
    {
        id: "lemang-tapai",
        name: "Lemang Tapai",
        category: "Kudapan",
        description:
            "Ketan bakar dalam bambu disajikan dengan tapai hitam Medan yang asam-manis. Tradisional dan dirindukan perantau.",
        price: 18000,
        imageSrc: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=600&q=80",
        isSignature: false
    },
    {
        id: "roti-jala-kari",
        name: "Roti Jala Kari Ayam",
        category: "Kudapan",
        description:
            "Roti jala tipis seperti renda disiram kuah kari ayam yang kaya santan dan rempah. Camilan berat sore hari.",
        price: 24000,
        imageSrc: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600&q=80",
        isSignature: false
    },
    {
        id: "pisang-goreng-srikaya",
        name: "Pisang Goreng Srikaya",
        category: "Kudapan",
        description:
            "Pisang kepok lokal digoreng renyah, disajikan dengan selai srikaya buatan sendiri. Pasangan paling pas untuk Kopi Sanger.",
        price: 16000,
        imageSrc: "https://images.unsplash.com/photo-1587132117816-5e49e5c97921?w=600&q=80",
        isSignature: false
    }
];

export const menuCategories: MenuItem["category"][] = [
    "Kopi",
    "Minuman",
    "Makanan Berat",
    "Kudapan"
];

export function formatPrice(value: number) {
    return `Rp${value.toLocaleString("id-ID")}`;
}
