// src/data/content.ts

/* =========================================
   1. ABOUT SECTION
   ========================================= */
export const aboutTexts = {
  firstParagraph:
    "Release Party 26 adalah puncak perayaan inovasi tahunan oleh DOSCOM (Dian Nuswantoro Computer Community). Kami menghadirkan seminar nasional yang merayakan kolaborasi dalam ekosistem Open Source.",
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
    title: "OPENING CEREMONY",
    description:
      "A pixelated start to a day of open-source mastery. Keynote by TeaLinux leads.",
  },
  {
    time: "10:30 AM",
    title: "CORE DISCUSSIONS",
    description:
      "Deep dive into kernel optimizations and next-gen desktop environments.",
  },
  {
    time: "02:00 PM",
    title: "THE UNVEILING",
    description:
      "Exclusive reveal of the newest TeaLinux OS features and ecosystem roadmap.",
  },
  {
    time: "04:00 PM",
    title: "CLOSING & NETWORKING",
    description:
      "Wrap up the day with community networking and exclusive swag distribution.",
  },
];

/* =========================================
   3. SPEAKERS SECTION
   ========================================= */
export const speakersData = [
  {
    name: "MBG = My Bini Grace",
    role: "ANALIS TEKNIS FBI (FEDERASI BINI INDONESIA)",
    description:
      "Analis FBI yang jago tracking chat suami. Saking sangarnya, malware pun sungkem dan mending uninstall sendiri pas dia lewat.",
    image: "/assets/images/speaker-1.webp",
    imagePosition: "left" as const,
  },
  {
    name: "Leon S. Kennedy",
    role: "ZOMBIE HUNTER (APOCALYPSE FOR ZOMBIES)",
    description:
      "Bukan kiamat zombi, tapi kiamat buat para zombi. Spesialis tendangan maut yang lebih mentingin poni lempar daripada sisa amunisi.",
    image: "/assets/images/speaker-2.webp",
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
      "Release Party adalah acara perayaan rilis versi terbaru TeaLinux OS. Di sini kita bahas fitur baru, workshop, dan networking sesama pegiat open source.",
  },
  {
    question: "KAPAN DAN DI MANA ACARA INI DILAKSANAKAN?",
    answer:
      "Cek bagian 'Agenda' di atas untuk detail waktu dan lokasi presisi.",
  },
  {
    question: "APAKAH ACARA INI GRATIS?",
    answer:
      "Tergantung jenis tiket yang kamu pilih. Cek section 'Tickets' untuk info harga Early Bird, Normal, dan Bundling.",
  },
  {
    question: "SIAPA SAJA YANG BISA IKUT?",
    answer:
      "Siapa saja! Mulai dari pemula Linux, mahasiswa, developer profesional, hingga komunitas umum.",
  },
];
