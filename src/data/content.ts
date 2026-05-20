// src/data/content.ts

/* =========================================
   1. ABOUT SECTION
   ========================================= */
export const aboutTexts = {
  firstParagraph:
    "Release Party 2026 adalah puncak perayaan inovasi tahunan oleh DOSCOM (Dinus Open Source Community). Kami menghadirkan seminar nasional yang merayakan kolaborasi dalam ekosistem Open Source.",
  secondParagraph:
    "Lebih dari sekadar seminar, ini adalah wadah bagi para antusias teknologi untuk meracik ide, berbagi wawasan, dan membangun masa depan teknologi yang lebih inklusif dan terbuka bagi semua.",
  creditParagraph: "Powered by the vision of TeaLinux OS.",
};

/* =========================================
   2. AGENDA SECTION
   ========================================= */
export const agendaData = [
  {
    time: "08:00 AM",
    title: "OPENING CEREMONY & EXPO PROJECT",
    description:
      "Registrasi peserta dilanjutkan dengan pembukaan resmi Release Party 2026 serta eksibisi interaktif untuk mencoba langsung rangkaian proyek internal DOSCOM.",
  },
  {
    time: "09:45 AM",
    title: "PRODUCT REVEAL & SHOWCASE",
    description:
      "Peluncuran resmi versi terbaru TeaLinuxOS oleh Product Manager DOSCOM beserta bedah arsitektur teknis dan fitur cerdas hasil racikan satu periode.",
  },
  {
    time: "10:00 AM",
    title: "KEYNOTE SESSION & TALK SHOW",
    description:
      "Seminar mendalam mengenai optimasi NLP dan LLM bersama praktisi ahli, dilanjutkan dengan sesi Q&A serta talk show interaktif bersama panelis.",
  },
  {
    time: "12:00 PM",
    title: "CLOSING & PHOTO SESSION",
    description:
      "Penutupan seluruh rangkaian acara, penyerahan plakat penghargaan, pembagian merchandise eksklusif, dan sesi foto bersama komunitas.",
  },
];

/* =========================================
   3. SPEAKERS SECTION
   ========================================= */
export const speakersData = [
  {
    name: "Hanif Yuli Abdillah P.",
    role: "AI Software Engineer - Inspektorat Daerah Kab.Blora",
    description:
      "Spesialis dalam rekayasa sistem cerdas berbasis Open Source AI. Berfokus penuh pada optimasi model NLP dan infrastruktur LLM untuk efisiensi performa tingkat tinggi.",
    image: "/assets/images/hanif.webp",
    imagePosition: "left" as const,
  },
  {
    name: "Harry LBI",
    role: "Project Manajer Doscom",
    description:
      "Project Manager & DevOps Engineer DOSCOM. Berperan vital dalam mengelola siklus pengembangan, otomatisasi infrastruktur, dan peluncuran ekosistem terbaru TeaLinuxOS.",
    image: "/assets/images/hary.webp",
    imagePosition: "right" as const,
  },
];

/* =========================================
   4. LEGACY SECTION (Galeri Doscom)
   ========================================= */
export const legacyImagesData = [
  { src: "/assets/images/legacy-1.webp", alt: "Doscom Legacy 1" },
  { src: "/assets/images/legacy-2.webp", alt: "Doscom Legacy 2" },
  { src: "/assets/images/legacy-3.webp", alt: "Doscom Legacy 3" },
  { src: "/assets/images/legacy-4.webp", alt: "Doscom Legacy 4" },
  { src: "/assets/images/legacy-5.webp", alt: "Doscom Legacy 5" },
  { src: "/assets/images/legacy-6.webp", alt: "Doscom Legacy 6" },
  { src: "/assets/images/legacy-7.webp", alt: "Doscom Legacy 7" },
  { src: "/assets/images/legacy-8.webp", alt: "Doscom Legacy 8" },
  { src: "/assets/images/legacy-9.webp", alt: "Doscom Legacy 9" },
  { src: "/assets/images/legacy-10.webp", alt: "Doscom Legacy 10" },
  { src: "/assets/images/legacy-11.webp", alt: "Doscom Legacy 11" },
];

/* =========================================
   5. MITRA KAMI (Sponsor & Medpart)
   ========================================= */
export const sponsorsData = [
  { name: "Cheers", src: "/assets/images/sponsor-cheers.webp" },
  { name: "Dicoding", src: "/assets/images/sponsor-dicoding.webp" },
  { name: "Freelanxx", src: "/assets/images/sponsor-freelanxx.webp" },
  { name: "ID Cloudhost", src: "/assets/images/sponsor-id-cloudhost.webp" },
  { name: "Mail Target", src: "/assets/images/sponsor-mail-target.webp" },
  { name: "Mekanik Ace", src: "/assets/images/sponsor-mekanik-ace.webp" },
  { name: "OTI", src: "/assets/images/sponsor-oti.webp" },
  {
    name: "Seminar Kit Semarang",
    src: "/assets/images/sponsor-seminar-kit-semarang.webp",
  },
  { name: "Yescom", src: "/assets/images/sponsor-yescom.webp" },
];

export const mediaPartnersData = [
  { name: "Himaskom Undip", src: "/assets/images/medpart-himaskom-undip.webp" },
  {
    name: "Himaforma UPGRIS",
    src: "/assets/images/medpart-himforma-upgris.webp",
  },
  { name: "HM TIF Unisula", src: "/assets/images/medpart-hm-tif-unisula.webp" },
  { name: "Himafor Unimus", src: "/assets/images/medpart-himafor-unimus.webp" },
  {
    name: "Hima Ilkom Unnes",
    src: "/assets/images/medpart-hima-ilkom-unnes.webp",
  },
  {
    name: "HM Sisfo UDINUS",
    src: "/assets/images/medpart-hm-sisfo-udinus.webp",
  },
  { name: "HM TI UDINUS", src: "/assets/images/medpart-hmti-udinus.webp" },
  { name: "BEM FIK UDINUS", src: "/assets/images/medpart-bem-fik-udinus.webp" },
  { name: "GDGOC UDINUS", src: "/assets/images/medpart-gdgoc-udinus.webp" },
  {
    name: "Semarang Cyber Security",
    src: "/assets/images/medpart-semarang-cyber-security.webp",
  },
  {
    name: "Jogja Cyber Security",
    src: "/assets/images/medpart-jogja-cyber-security.webp",
  },
];

/* =========================================
   6. FAQ SECTION
   ========================================= */
export const faqData = [
  {
    question: "APA ITU TEA LINUX OS RELEASE PARTY?",
    answer:
      "Release Party adalah agenda tahunan terbesar DOSCOM untuk merayakan peluncuran versi terbaru TeaLinuxOS. Tahun ini, acara dikemas bersama Seminar Nasional bertema 'Optimizing Open Source AI for Intelligent Systems' dan Expo Project hasil kembangan satu periode internal.",
  },
  {
    question: "KAPAN DAN DI MANA ACARA INI DILAKSANAKAN?",
    answer:
      "Acara akan diselenggarakan pada hari Sabtu, 20 Juni 2026 mulai pukul 08:00 WIB. Lokasi utama bertempat di Aula Gedung E.3, Universitas Dian Nuswantoro (UDINUS), Semarang.",
  },
  {
    question: "BAGAIMANA CARA MEMBELI TIKETNYA?",
    answer:
      "Kamu bisa langsung memilih paket tiket di section 'Tickets' di atas. Tersedia Tiket Khusus Mahasiswa UDINUS (Rp35.000), Tiket Umum (Rp40.000), dan Paket Bundling 3 Orang (Rp100.000) yang bisa kamu amankan slotnya melalui platform D-Form resmi kami.",
  },
  {
    question: "APAKAH SAYA HARUS PAHAM LINUX ATAU AI UNTUK IKUT?",
    answer:
      "Tidak perlu! Acara ini terbuka untuk siapa saja—mulai dari pemula yang baru ingin belajar Linux, mahasiswa umum, hingga developer profesional yang tertarik mendalami sisi engineering dari implementasi NLP dan LLM.",
  },
  {
    question: "APA SAJA FASILITAS YANG DIDAPATKAN PESERTA?",
    answer:
      "Setiap peserta akan mendapatkan akses penuh ke sesi Seminar & Expo Project, Sertifikat Digital Resmi, Standard Seminar Kit, stiker eksklusif TeaLinuxOS, serta snack & coffee break selama acara berlangsung.",
  },
];
