export const VALIDATION_MESSAGES = {
  EMAIL_REQUIRED: "Email wajib diisi.",
  EMAIL_INVALID: "Email tidak valid.",
  PASSWORD_REQUIRED: "Password wajib diisi.",
  NAME_REQUIRED: "Nama wajib diisi.",
  FULL_NAME_REQUIRED: "Nama lengkap wajib diisi.",
  MESSAGE_REQUIRED: "Pesan tidak boleh kosong.",
  PLAN_REQUIRED: "Mohon ceritakan rencana Anda secara singkat.",
  MENU_NAME_REQUIRED: "Nama menu wajib diisi.",
  MENU_DESC_REQUIRED: "Deskripsi menu wajib diisi.",
  MENU_PRICE_INVALID: "Harga harus lebih dari nol.",
  ARTICLE_TITLE_REQUIRED: "Judul wajib diisi.",
  ARTICLE_BODY_REQUIRED: "Isi artikel tidak boleh kosong.",
  EVENT_TITLE_REQUIRED: "Judul wajib diisi.",
  EVENT_DATE_REQUIRED: "Tanggal wajib diisi.",
  OUTLET_NAME_REQUIRED: "Nama outlet wajib diisi.",
  OUTLET_ADDRESS_REQUIRED: "Alamat outlet wajib diisi.",
} as const;

export const SUCCESS_MESSAGES = {
  CONTACT_SENT: "Terima kasih! Pesan Anda sudah kami terima. Tim kami akan segera menghubungi.",
  PARTNERSHIP_SENT: "Pengajuan terkirim. Tim kami akan meninjau dan menghubungi Anda dalam 3–5 hari kerja.",
  MOCK_SAVED: "Perubahan tersimpan (mock — backend belum aktif).",
} as const;
