/**
 * GlobalExporCareer - Data Lowongan Kerja & Helper Functions
 * Portal Karier Resmi PT Global Expor Indonesia
 */

const CONFIG = {
  COMPANY_NAME: "PT Global Expor Indonesia",
  PORTAL_NAME: "GlobalExporCareer",
  TAGLINE: "Bangun Karier Anda. Hubungkan Indonesia dengan Dunia.",
  OFFICIAL_EMAIL: "rekrutmen@globalexpor.co.id",
  OFFICIAL_PHONE: "0818 0588 6644",
  OFFICIAL_WHATSAPP: "0818 0588 6644",
  OFFICE_ADDRESS: "Gedung Menara Maritim Lantai 12, Jl. Pelabuhan Raya No. 88, Tanjung Priok, Jakarta Utara 14310",
  CURRENCY: "IDR"
};

/**
 * 10 Departemen Karier PT Global Expor Indonesia
 */
const DEPARTMENTS = [
  {
    id: "export-import-ops",
    name: "Export & Import Operations",
    shortDesc: "Menangani administrasi PEB/PIB, perizinan bea cukai, kepatuhan kepelabuhanan, dan kelancaran arus kontainer.",
    icon: `<svg class="w-6 h-6 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"/></svg>`
  },
  {
    id: "intl-sales-bizdev",
    name: "International Sales & Business Development",
    shortDesc: "Membuka pasar ekspor baru, mengelola portofolio buyer internasional, dan negosiasi kontrak dagang global.",
    icon: `<svg class="w-6 h-6 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/></svg>`
  },
  {
    id: "shipping-logistics",
    name: "Shipping & Logistics",
    shortDesc: "Mengatur booking ocean freight, air cargo, trucking antar-depo, dan pemantauan pergerakan kargo real-time.",
    icon: `<svg class="w-6 h-6 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"/></svg>`
  },
  {
    id: "supply-chain-procurement",
    name: "Supply Chain & Procurement",
    shortDesc: "Mengoptimalkan rantai pasok komoditas ekspor, pengadaan sarana logistik, dan relasi vendor strategis.",
    icon: `<svg class="w-6 h-6 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/></svg>`
  },
  {
    id: "finance-accounting",
    name: "Finance & Accounting",
    shortDesc: "Mengelola transaksi devisa, Letter of Credit (L/C), perpajakan ekspor, dan pelaporan keuangan auditable.",
    icon: `<svg class="w-6 h-6 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>`
  },
  {
    id: "legal-compliance",
    name: "Legal & Compliance",
    shortDesc: "Memastikan kepatuhan regulasi kepabeanan internasional, Incoterms 2020, dan perlindungan hukum kontrak.",
    icon: `<svg class="w-6 h-6 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"/></svg>`
  },
  {
    id: "marketing-comms",
    name: "Marketing & Communications",
    shortDesc: "Membangun branding reputasi ekspor Indonesia di pameran dagang internasional dan kanal komunikasi B2B.",
    icon: `<svg class="w-6 h-6 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"/></svg>`
  },
  {
    id: "human-resources",
    name: "Human Resources",
    shortDesc: "Mengembangkan talenta profesional berwawasan global, manajemen rekrutmen objektif, dan kesejahteraan tim.",
    icon: `<svg class="w-6 h-6 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/></svg>`
  },
  {
    id: "information-technology",
    name: "Information Technology",
    shortDesc: "Mengembangkan sistem EDI, portal tracking kargo, infrastruktur cloud logistik, dan keamanan data ekspor.",
    icon: `<svg class="w-6 h-6 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>`
  },
  {
    id: "admin-corporate-support",
    name: "Administration & Corporate Support",
    shortDesc: "Mendukung kelancaran operasional kantor pelabuhan, kearsipan dokumen legal ekspor, dan kesekretariatan.",
    icon: `<svg class="w-6 h-6 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>`
  }
];

/**
 * DATA LOWONGAN KERJA RESMI PT GLOBAL EXPOR INDONESIA
 */
const OFFICIAL_JOBS_DATA = [
  {
    id: "GEI-OPS-001",
    referenceCode: "REF/2026/OPS/001",
    title: "Export Documentation Specialist",
    slug: "export-documentation-specialist",
    department: "Export & Import Operations",
    location: "Jakarta Utara (Tanjung Priok)",
    employmentType: "Full-time",
    experienceLevel: "1-3 Tahun",
    shortDescription: "Bertanggung jawab atas penerbitan dan verifikasi dokumen ekspor resmi (PEB, Bill of Lading, COO, Fumigasi, Phyto) sesuai standar bea cukai dan buyer internasional.",
    description: "Sebagai Export Documentation Specialist di PT Global Expor Indonesia, Anda akan menjadi garda depan dalam memastikan akurasi dan kepatuhan setiap dokumen pengapalan barang ekspor. Posisi ini berinteraksi intensif dengan otoritas kepabeanan, forwarder, shipping lines, dan balai karantina untuk memastikan kargo berangkat tepat waktu tanpa kendala birokrasi.",
    responsibilities: [
      "Menyusun dan memvalidasi dokumen ekspor utama: Pemberitahuan Ekspor Barang (PEB), Bill of Lading (B/L), Commercial Invoice, Packing List, Certificate of Origin (COO/SKA Form), dan sertifikat karantina.",
      "Melakukan koordinasi dengan shipping lines untuk jadwal closing time, booking vessel, dan penerbitan instruksi pengapalan (Shipping Instruction).",
      "Memastikan seluruh proses submit ke sistem CEISA Bea Cukai berjalan lancar dan menyelesaikan respon kepabeanan (NPE/Nota Pelayanan Ekspor).",
      "Berkoordinasi dengan tim lapangan di pelabuhan Tanjung Priok untuk proses stuffing kontainer dan pengurusan segel bea cukai.",
      "Melakukan rekonsiliasi data pengapalan bulanan dan mengarsipkan berkas ekspor secara rapi untuk audit kepatuhan."
    ],
    qualifications: [
      "Pendidikan minimal D3/S1 jurusan Manajemen Logistik, Ketatalaksanaan Pelayaran Niaga, Administrasi Niaga, atau bidang terkait.",
      "Pengalaman kerja minimal 2 tahun dalam bidang dokumentasi ekspor di perusahaan eksportir, freight forwarder, atau shipping agency.",
      "Memahami alur sistem CEISA Bea Cukai dan regulasi kepabeanan ekspor Indonesia.",
      "Mampu berkomunikasi dalam Bahasa Inggris secara tertulis untuk korespondensi dokumen internasional.",
      "Teliti, berorientasi pada detail, dan mampu bekerja dengan tenggat waktu ketat pelabuhan."
    ],
    preferredQualifications: [
      "Memiliki sertifikat Ahli Kepabeanan (PPJK) menjadi nilai tambah utama.",
      "Berpengalaman menangani ekspor komoditas pertanian, perikanan, atau manufaktur.",
      "Memahami ketentuan Incoterms 2020 dan proses Letter of Credit (L/C)."
    ],
    requiredDocuments: [
      "Curriculum Vitae (CV) terbaru dalam format PDF.",
      "Surat Lamaran Pekerjaan (Cover Letter).",
      "Salinan Ijazah & Transkrip Nilai Terakhir.",
      "Salinan Sertifikat Keahlian / Pelatihan Kepabeanan (bila ada).",
      "Salinan KTP."
    ],
    publishedAt: "2026-09-15",
    closingDate: "2026-11-30",
    status: "active",
    featured: true,
    applicationUrl: "mailto:rekrutmen@globalexpor.co.id?subject=Lamaran%20Posisi%20-%20Export%20Documentation%20Specialist%20-%20REF/2026/OPS/001"
  },
  {
    id: "GEI-SALES-002",
    referenceCode: "REF/2026/SALES/002",
    title: "International Sales Executive",
    slug: "international-sales-executive",
    department: "International Sales & Business Development",
    location: "Jakarta (Head Office - Hybrid)",
    employmentType: "Full-time",
    experienceLevel: "3-5 Tahun",
    shortDescription: "Mengembangkan jaringan pembeli global di kawasan Asia, Timur Tengah, dan Eropa, serta menegosiasikan kontrak penjualan komoditas ekspor Indonesia.",
    description: "Kami mencari International Sales Executive yang memiliki antusiasme tinggi untuk membawa produk unggulan Indonesia menembus pasar global. Anda akan mengidentifikasi prospek buyer luar negeri, memimpin negosiasi komersial B2B internasional, dan menjaga hubungan jangka panjang dengan importir global.",
    responsibilities: [
      "Memetakan pasar ekspor potensial di wilayah target (Asia Timur, ASEAN, Timur Tengah, atau Eropa).",
      "Menjalin komunikasi aktif dengan buyer internasional, merespons inquiry dagang, dan mengirimkan quotation harga ekspor (FOB/CIF/CFR).",
      "Memimpin negosiasi harga, kuantitas, spesifikasi produk, dan syarat pembayaran internasional (T/T, L/C at sight, Usance L/C).",
      "Mempersiapkan materi presentasi dan mewakili perusahaan pada pameran dagang internasional virtual maupun tatap muka.",
      "Bekerja sama dengan tim operasional ekspor untuk memastikan kesiapan stok barang dan pemenuhan jadwal pengiriman sesuai sales contract."
    ],
    qualifications: [
      "Pendidikan minimal S1 Hubungan Internasional, Manajemen Bisnis, Pemasaran Internasional, atau disiplin ilmu sejenis.",
      "Pengalaman minimal 3 tahun dalam B2B international sales atau export trading.",
      "Fasih berbahasa Inggris (lisan & tulisan) untuk negosiasi kontrak bisnis internasional. Kemampuan bahasa asing tambahan (Mandarin, Arab, atau Spanyol) sangat diutamakan.",
      "Memahami kalkulasi biaya ekspor, freight rate maritim, dan struktur Incoterms 2020.",
      "Memiliki keterampilan interpersonal dan negosiasi lintas budaya yang kuat."
    ],
    preferredQualifications: [
      "Memiliki portofolio relasi buyer aktif di industri komoditas atau FMCG ekspor.",
      "Berpengalaman dalam mengelola platform B2B global (Alibaba, TradeKey, dll)."
    ],
    requiredDocuments: [
      "Curriculum Vitae (CV) dalam Bahasa Inggris.",
      "Surat Lamaran Pekerjaan (Cover Letter).",
      "Salinan Ijazah S1.",
      "Portofolio rekam jejak penjualan ekspor atau ringkasan capaian (opsional).",
      "Sertifikat kemahiran bahasa asing (TOEFL/IELTS bila ada)."
    ],
    publishedAt: "2026-09-20",
    closingDate: "2026-11-25",
    status: "active",
    featured: true,
    applicationUrl: "mailto:rekrutmen@globalexpor.co.id?subject=Lamaran%20Posisi%20-%20International%20Sales%20Executive%20-%20REF/2026/SALES/002"
  },
  {
    id: "GEI-LOG-003",
    referenceCode: "REF/2026/LOG/003",
    title: "Shipping & Ocean Freight Coordinator",
    slug: "shipping-ocean-freight-coordinator",
    department: "Shipping & Logistics",
    location: "Surabaya (Tanjung Perak)",
    employmentType: "Full-time",
    experienceLevel: "1-3 Tahun",
    shortDescription: "Mengorkestrasi booking ruang kapal (vessel slot), alokasi kontainer reefer/dry, dan memantau status pengapalan dari pelabuhan Surabaya.",
    description: "Berbasis di kantor operasional pelabuhan Tanjung Perak Surabaya, Anda akan bertanggung jawab memastikan kelancaran alur pengiriman kargo laut internasional, berkoordinasi langsung dengan shipping lines global, depo kontainer, dan operator terminal pelabuhan.",
    responsibilities: [
      "Mengajukan shipping space booking ke berbagai international shipping lines ternama untuk rute ekspor utama.",
      "Mengawasi ketersediaan kontainer (dry box, open top, reefer) di depo pelabuhan dan memastikan kondisi kontainer layak muat (seaworthy).",
      "Memantau pergerakan jadwal kapal (ETD, ETA, closing time feeder & mother vessel) dan mengantisipasi potensi keterlambatan (vessel delay/rollover).",
      "Berkoordinasi dengan tim transporter darat (trucking vendor) untuk ketepatan waktu penarikan kontainer kosong dan pengantaran kargo penuh ke terminal.",
      "Menyusun laporan utilisasi kontainer dan efisiensi biaya freight secara berkala."
    ],
    qualifications: [
      "Pendidikan minimal D3/S1 di bidang Manajemen Transportasi Laut, Logistik, atau Teknik Perkapalan/Industri.",
      "Pengalaman kerja minimal 2 tahun di bidang operasional shipping lines atau freight forwarding.",
      "Familiar dengan terminologi maritim internasional, detention & demurrage policy, serta port tariff.",
      "Mampu mengoperasikan sistem pelacak kargo online dan aplikasi spreadsheet tingkat lanjut.",
      "Komunikatif, gesit, dan tanggap dalam menghadapi dinamika operasional pelabuhan."
    ],
    preferredQualifications: [
      "Memiliki hubungan kerja baik dengan operator shipping line di Pelabuhan Tanjung Perak Surabaya.",
      "Memahami penanganan kontainer khusus (Reefer Container & Dangerous Goods Class)."
    ],
    requiredDocuments: [
      "Curriculum Vitae (CV) lengkap.",
      "Surat Lamaran Pekerjaan.",
      "Salinan Ijazah & Transkrip Nilai.",
      "Salinan Sertifikat pendukung bidang logistik maritim."
    ],
    publishedAt: "2026-10-01",
    closingDate: "2026-12-10",
    status: "active",
    featured: true,
    applicationUrl: "mailto:rekrutmen@globalexpor.co.id?subject=Lamaran%20Posisi%20-%20Shipping%20Coordinator%20-%20REF/2026/LOG/003"
  },
  {
    id: "GEI-SCM-004",
    referenceCode: "REF/2026/SCM/004",
    title: "Export Supply Chain Planner",
    slug: "export-supply-chain-planner",
    department: "Supply Chain & Procurement",
    location: "Jakarta (Head Office)",
    employmentType: "Full-time",
    experienceLevel: "3-5 Tahun",
    shortDescription: "Merencanakan sinkronisasi antara jadwal panen/produksi komoditas daerah dengan jadwal keberangkatan kapal ekspor internasional.",
    description: "Posisi strategis ini menjembatani produsen/petani mitra di berbagai daerah di Indonesia dengan jadwal ketat keberangkatan kapal ekspor di pelabuhan utama. Anda akan merancang model perencanaan pasokan yang meminimalkan risiko pembusukan kargo, kekurangan stok, dan biaya penumpukan di pelabuhan.",
    responsibilities: [
      "Menyusun rencana agregat pasokan (Supply & Demand Planning) berdasarkan proyeksi penjualan ekspor kuartalan.",
      "Mengatur alur konsolidasi kargo dari sentra produksi daerah (Sumatera, Jawa, Sulawesi) menuju hub pelabuhan konsolidasi.",
      "Memonitor level inventori kargo di gudang transit (CFS) dan memastikan standard operating procedure (SOP) mutu terjaga.",
      "Melakukan evaluasi performa vendor transportasi darat, penyedia gudang dingin, dan packaging supplier.",
      "Mengembangkan mitigasi risiko rantai pasok terhadap fluktuasi cuaca, hambatan rute darat, dan jadwal pelayaran."
    ],
    qualifications: [
      "S1 Teknik Industri, Manajemen Operasi Rantai Pasok, Logistik, atau Matematika/Statistik.",
      "Pengalaman kerja minimal 3 tahun dalam supply chain planning atau material management.",
      "Menguasai teknik forecasting permintaan, inventory replenishment models, dan analisis data kuantitatif.",
      "Mahir menggunakan Microsoft Excel tingkat lanjut (Pivot, PowerQuery, VLOOKUP/XLOOKUP) atau tools analitik bisnis.",
      "Kemampuan berpikir analitis yang tajam dan berorientasi pada penyelesaian masalah terukur."
    ],
    preferredQualifications: [
      "Sertifikasi profesional CSCP / CPIM / CLTD dari institusi diakui.",
      "Pengalaman menangani rantai pasok agribisnis atau cold-chain logistics."
    ],
    requiredDocuments: [
      "Curriculum Vitae (CV) terbaru.",
      "Surat Lamaran Pekerjaan.",
      "Salinan Ijazah S1 & Transkrip.",
      "Portofolio project supply chain optimization (jika ada)."
    ],
    publishedAt: "2026-10-05",
    closingDate: "2026-12-15",
    status: "active",
    featured: true,
    applicationUrl: "mailto:rekrutmen@globalexpor.co.id?subject=Lamaran%20Posisi%20-%20Export%20Supply%20Chain%20Planner%20-%20REF/2026/SCM/004"
  },
  {
    id: "GEI-FIN-005",
    referenceCode: "REF/2026/FIN/005",
    title: "Trade Finance & LC Officer",
    slug: "trade-finance-lc-officer",
    department: "Finance & Accounting",
    location: "Jakarta (Head Office)",
    employmentType: "Full-time",
    experienceLevel: "1-3 Tahun",
    shortDescription: "Menangani verifikasi dokumen Letter of Credit (L/C), transaksi valuta asing (forex), pembiayaan ekspor, dan rekonsiliasi pembayaran internasional.",
    description: "Sebagai Trade Finance & LC Officer, Anda akan bertanggung jawab memastikan seluruh instrumen pembiayaan perdagangan internasional perusahaan dieksekusi dengan aman, patuh pada aturan UCP 600, dan terbebas dari risiko diskrepansi perbankan.",
    responsibilities: [
      "Memeriksa syarat dan ketentuan Letter of Credit (L/C) yang dibuka oleh bank buyer luar negeri sebelum kargo diproses.",
      "Bekerja sama erat dengan tim dokumentasi untuk memastikan seluruh set dokumen ekspor (B/L, Invoice, Packing List, Polis Asuransi) 100% comply dengan klausul L/C.",
      "Melakukan negosiasi dokumen ke bank devisa penerima (negotiating/confirming bank) di Jakarta.",
      "Mengelola pemantauan arus kas penerimaan valuta asing (USD, EUR, CNY) dan pelaporan Devisa Hasil Ekspor (DHE) ke Bank Indonesia.",
      "Melakukan pencatatan jurnal akuntansi transaksi ekspor dan rekonsiliasi selisih kurs berkala."
    ],
    qualifications: [
      "S1 Akuntansi, Manajemen Keuangan, atau Perbankan.",
      "Pengalaman minimal 2 tahun dalam trade finance perbankan devisa atau departemen keuangan perusahaan eksportir.",
      "Menguasai ketentuan internasional UCP 600, ISBP, dan regulasi DHE Bank Indonesia.",
      "Memahami tata cara penanganan instrumen pembayaran ekspor (L/C, Documentary Collection, T/T Open Account).",
      "Integritas tinggi, cermat, dan berorientasi pada akurasi angka keuangan."
    ],
    preferredQualifications: [
      "Sertifikasi CDCS (Certified Documentary Credit Specialist) menjadi keunggulan tersendiri.",
      "Memiliki relasi yang baik dengan desk trade service bank-bank devisa nasional."
    ],
    requiredDocuments: [
      "CV & Surat Lamaran.",
      "Salinan Ijazah S1 & Transkrip Nilai Akuntansi.",
      "Sertifikat pelatihan Trade Finance (bila ada)."
    ],
    publishedAt: "2026-10-10",
    closingDate: "2026-12-20",
    status: "active",
    featured: true,
    applicationUrl: "mailto:rekrutmen@globalexpor.co.id?subject=Lamaran%20Posisi%20-%20Trade%20Finance%20Officer%20-%20REF/2026/FIN/005"
  },
  {
    id: "GEI-INT-006",
    referenceCode: "REF/2026/INT/006",
    title: "International Trade & Logistics Intern",
    slug: "international-trade-logistics-intern",
    department: "Export & Import Operations",
    location: "Jakarta Utara (Tanjung Priok)",
    employmentType: "Internship",
    experienceLevel: "Fresh Graduate",
    shortDescription: "Program magang intensif 6 bulan bagi mahasiswa tingkat akhir / fresh graduate untuk mempelajari operasional ekspor-impor nyata dari praktisi berpengalaman.",
    description: "Program magang terstruktur di PT Global Expor Indonesia dirancang untuk membekali calon profesional muda dengan pengalaman riil di industri perdagangan internasional. Peserta akan dibimbing oleh mentor senior dalam memahami siklus pengapalan ekspor dari awal hingga selesai.",
    responsibilities: [
      "Membantu administrasi berkas kargo dan pengarsipan digital dokumen ekspor.",
      "Mempelajari dan mendampingi proses monitoring status kapal serta tracking kontainer.",
      "Membantu verifikasi kelengkapan data packing list dan invoice dari suplier lokal.",
      "Berpartisipasi dalam sesi briefing harian operasional kepelabuhanan di Tanjung Priok.",
      "Menyusun laporan pembelajaran mingguan dan presentasi proyek akhir magang."
    ],
    qualifications: [
      "Mahasiswa tingkat akhir (semester 7-8) atau fresh graduate maksimal 1 tahun kelulusan.",
      "Jurusan Manajemen Logistik, Ilmu Transportasi, Hubungan Internasional, Administrasi Bisnis, atau Ekonomi.",
      "IPK minimal 3.20 dari skala 4.00.",
      "Memiliki rasa ingin tahu tinggi tentang dunia logistik dan perdagangan global.",
      "Mampu berkomitmen penuh waktu selama periode magang 6 bulan di Jakarta Utara."
    ],
    preferredQualifications: [
      "Aktif dalam organisasi kemahasiswaan atau kepanitiaan kampus.",
      "Memiliki nilai Bahasa Inggris yang baik."
    ],
    requiredDocuments: [
      "Curriculum Vitae (CV) kreatif/ATS-friendly.",
      "Transkrip Nilai Akademik Terakhir.",
      "Surat Rekomendasi Kampus / Surat Pengantar Magang (jika mahasiswa aktif).",
      "Surat Motivasi Singkat (1 halaman)."
    ],
    publishedAt: "2026-10-12",
    closingDate: "2026-12-05",
    status: "active",
    featured: true,
    applicationUrl: "mailto:rekrutmen@globalexpor.co.id?subject=Lamaran%20Magang%20-%20International%20Trade%20Intern%20-%20REF/2026/INT/006"
  },
  {
    id: "GEI-IT-007",
    referenceCode: "REF/2026/IT/007",
    title: "Logistics Systems Frontend Developer",
    slug: "logistics-systems-frontend-developer",
    department: "Information Technology",
    location: "Jakarta (Head Office - Hybrid)",
    employmentType: "Full-time",
    experienceLevel: "1-3 Tahun",
    shortDescription: "Membangun dan memelihara antarmuka web modern untuk platform pelacakan kontainer dan portal komunikasi operasional ekspor internal.",
    description: "Tim teknologi kami bertanggung jawab mendigitalkan seluruh interaksi operasional ekspor perusahaan. Dalam posisi ini, Anda akan mengembangkan antarmuka web yang responsif, cepat, dan intuitif untuk digunakan oleh tim operasional, agen pelabuhan, dan mitra dagang internasional.",
    responsibilities: [
      "Mengembangkan dashboard pelacakan kargo laut real-time menggunakan arsitektur web modern.",
      "Menerjemahkan rancangan antarmuka Figma menjadi kode web yang bersih, semantik, dan teraksesibilitas tinggi.",
      "Mengintegrasikan antarmuka dengan RESTful API data pelayaran dan sistem bea cukai.",
      "Memastikan performa pemuatan web yang cepat di berbagai resolusi layar dan kondisi jaringan.",
      "Melakukan pengujian lintas browser dan pemeliharaan kode berbasis best practices."
    ],
    qualifications: [
      "Pendidikan minimal D3/S1 Ilmu Komputer, Teknik Informatika, Sistem Informasi, atau pengalaman setara.",
      "Pengalaman minimal 2 tahun dalam pengembangan frontend web (HTML5, modern CSS, JavaScript ES6+).",
      "Penguasaan mendalam Tailwind CSS atau CSS modern yang terstruktur.",
      "Familiar dengan konsumsi API, asynchronous JavaScript, dan state management sederhana.",
      "Memiliki pemahaman mengenai web performance, SEO dasar, dan responsive design principles."
    ],
    preferredQualifications: [
      "Memiliki pengalaman membangun dashboard logistik, supply chain, atau transportasi.",
      "Familiar dengan visualisasi data grafik interaktif dan pemetaan (Leaflet / Mapbox)."
    ],
    requiredDocuments: [
      "Curriculum Vitae (CV).",
      "Tautan Portofolio Web / Akun GitHub.",
      "Salinan Ijazah Terakhir."
    ],
    publishedAt: "2026-10-15",
    closingDate: "2026-12-30",
    status: "active",
    featured: false,
    applicationUrl: "mailto:rekrutmen@globalexpor.co.id?subject=Lamaran%20Posisi%20-%20Logistics%20Frontend%20Developer%20-%20REF/2026/IT/007"
  },
  {
    id: "GEI-LEG-008",
    referenceCode: "REF/2026/LEG/008",
    title: "International Trade Legal Specialist",
    slug: "international-trade-legal-specialist",
    department: "Legal & Compliance",
    location: "Jakarta (Head Office)",
    employmentType: "Full-time",
    experienceLevel: ">5 Tahun",
    shortDescription: "Mengawasi kepatuhan hukum perdagangan luar negeri, perumusan kontrak penjualan internasional, dan penanganan sengketa maritim.",
    description: "Sebagai International Trade Legal Specialist, Anda memegang tanggung jawab strategis dalam melindungi kepentingan hukum PT Global Expor Indonesia pada setiap transaksi lintas batas negara. Anda akan menelaah kontrak dagang, klausul charter party kapal, dan kepatuhan terhadap sanksi perdagangan internasional.",
    responsibilities: [
      "Menyusun dan menelaah (drafting & reviewing) kontrak jual beli internasional (International Sales Contract) dan nota kesepahaman (MoU).",
      "Mengkaji klausul Bill of Lading, asuransi kargo kelautan (Marine Cargo Insurance), dan perjanjian sewa kapal (Charter Party Agreement).",
      "Memberikan advis hukum terkait peraturan ekspor-impor Indonesia, kepatuhan anti-dumping, dan regulasi negara tujuan ekspor.",
      "Menangani proses klaim kargo rusak atau hilang bersama pihak asuransi dan shipping lines.",
      "Memastikan kepatuhan korporasi terhadap UU Perlindungan Data Pribadi (UU PDP) dan hukum ketenagakerjaan."
    ],
    qualifications: [
      "Sarjana Hukum (S.H.) dari universitas terakreditasi baik. Lulusan Master Hukum Bisnis/Hukum Internasional merupakan nilai tambah.",
      "Pengalaman kerja minimal 5 tahun di bidang legal korporasi dengan spesialisasi perdagangan internasional, kepelabuhanan, atau perkapalan.",
      "Memiliki lisensi advokat (PERADI) aktif.",
      "Kefasihan Bahasa Inggris tingkat tinggi (Legal English drafting & negotiation).",
      "Pemahaman mendalam mengenai hukum perdata internasional, CISG, dan yurisdiksi arbitrase internasional (SIAC/BANI)."
    ],
    preferredQualifications: [
      "Pengalaman di firma hukum tier-1 atau perusahaan logistik multinasional.",
      "Keahlian dalam penyelesaian sengketa maritim."
    ],
    requiredDocuments: [
      "Curriculum Vitae (CV) profesional.",
      "Salinan Ijazah S1 (dan S2 jika ada) serta Transkrip.",
      "Salinan Kartu Advokat PERADI.",
      "Surat Lamaran Pekerjaan formal."
    ],
    publishedAt: "2026-10-18",
    closingDate: "2026-12-31",
    status: "active",
    featured: false,
    applicationUrl: "mailto:rekrutmen@globalexpor.co.id?subject=Lamaran%20Posisi%20-%20Legal%20Specialist%20-%20REF/2026/LEG/008"
  }
];

/**
 * Helper: Ambil seluruh data lowongan
 */
function getAllJobs() {
  return [...OFFICIAL_JOBS_DATA];
}

/**
 * Helper: Cek apakah lowongan sudah kadaluarsa
 */
function isJobExpired(closingDateStr) {
  if (!closingDateStr) return false;
  const deadline = new Date(closingDateStr + "T23:59:59");
  const now = new Date();
  return now > deadline;
}

/**
 * Helper: Ambil lowongan aktif
 */
function getActiveJobs() {
  const all = getAllJobs();
  return all.filter(job => job.status === "active" && !isJobExpired(job.closingDate));
}

/**
 * Helper: Ambil lowongan featured untuk homepage (maksimal 6)
 */
function getFeaturedJobs() {
  const active = getActiveJobs();
  return active.filter(job => job.featured).slice(0, 6);
}

/**
 * Helper: Cari lowongan berdasarkan slug atau ID
 */
function getJobBySlug(slugOrId) {
  if (!slugOrId) return null;
  const all = getAllJobs();
  const cleanTerm = slugOrId.trim().toLowerCase();
  return all.find(job => 
    job.slug.toLowerCase() === cleanTerm || 
    job.id.toLowerCase() === cleanTerm ||
    job.referenceCode.toLowerCase() === cleanTerm
  ) || null;
}

/**
 * Helper: Ambil lowongan terkait
 */
function getRelatedJobs(currentJob, limit = 3) {
  if (!currentJob) return [];
  const active = getActiveJobs();
  return active
    .filter(job => job.id !== currentJob.id && (job.department === currentJob.department || job.employmentType === currentJob.employmentType))
    .slice(0, limit);
}

/**
 * Helper: Format Tanggal Indonesia
 */
function formatDateIndonesian(dateStr) {
  if (!dateStr) return "-";
  const date = new Date(dateStr);
  if (isNaN(date.getTime())) return dateStr;
  
  const months = [
    "Januari", "Februari", "Maret", "April", "Mei", "Juni",
    "Juli", "Agustus", "September", "Oktober", "November", "Desember"
  ];
  
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  
  return `${day} ${month} ${year}`;
}

/**
 * Helper: Multi-Filter Lowongan
 */
function filterJobs({
  keyword = "",
  department = "",
  location = "",
  employmentType = "",
  experienceLevel = "",
  sortBy = "newest",
  includeClosed = false
} = {}) {
  let list = includeClosed ? getAllJobs() : getActiveJobs();

  // Filter Keyword
  if (keyword && keyword.trim() !== "") {
    const q = keyword.trim().toLowerCase();
    list = list.filter(job => 
      job.title.toLowerCase().includes(q) ||
      job.shortDescription.toLowerCase().includes(q) ||
      job.department.toLowerCase().includes(q) ||
      job.location.toLowerCase().includes(q) ||
      job.referenceCode.toLowerCase().includes(q)
    );
  }

  // Filter Departemen
  if (department && department.trim() !== "") {
    list = list.filter(job => job.department.toLowerCase() === department.trim().toLowerCase());
  }

  // Filter Lokasi
  if (location && location.trim() !== "") {
    list = list.filter(job => job.location.toLowerCase().includes(location.trim().toLowerCase()));
  }

  // Filter Tipe Pekerjaan
  if (employmentType && employmentType.trim() !== "") {
    list = list.filter(job => job.employmentType.toLowerCase() === employmentType.trim().toLowerCase());
  }

  // Filter Pengalaman
  if (experienceLevel && experienceLevel.trim() !== "") {
    list = list.filter(job => job.experienceLevel.toLowerCase() === experienceLevel.trim().toLowerCase());
  }

  // Pengurutan
  if (sortBy === "newest") {
    list.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
  } else if (sortBy === "deadline") {
    list.sort((a, b) => new Date(a.closingDate) - new Date(b.closingDate));
  } else if (sortBy === "title-asc") {
    list.sort((a, b) => a.title.localeCompare(b.title));
  }

  return list;
}

/**
 * Generate Komponen Kartu Lowongan
 */
function createJobCardHTML(job, options = { showDepartment: true }) {
  const isExpired = isJobExpired(job.closingDate);
  const isOpen = job.status === "active" && !isExpired;

  const isInSubfolder = typeof window !== "undefined" && window.location.pathname.includes("/lowongan/");
  const detailLink = isInSubfolder ? `detail.html?slug=${job.slug}` : `lowongan/detail.html?slug=${job.slug}`;

  const statusBadge = isOpen
    ? `<span class="badge-open">
        <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
        Dibuka
      </span>`
    : `<span class="badge-closed">
        <span class="w-1.5 h-1.5 rounded-full bg-gray-400"></span>
        Ditutup
      </span>`;

  return `
    <article class="job-card group">
      <div>
        <div class="flex items-center justify-between gap-2 mb-3">
          <div class="flex items-center gap-1.5 flex-wrap">
            <span class="badge-department">${job.department}</span>
          </div>
          ${statusBadge}
        </div>

        <h3 class="text-lg font-bold text-brand-dark group-hover:text-brand-blue transition-colors line-clamp-1 mb-2">
          <a href="${detailLink}" class="focus:outline-none focus:underline" id="job-link-${job.id}">
            ${job.title}
          </a>
        </h3>

        <p class="text-xs text-brand-muted line-clamp-2 mb-4 leading-relaxed">
          ${job.shortDescription}
        </p>

        <div class="grid grid-cols-2 gap-y-2 gap-x-3 text-xs text-brand-muted border-t border-slate-100 pt-3 mb-4">
          <div class="flex items-center gap-1.5">
            <svg class="w-3.5 h-3.5 text-slate-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
            <span class="truncate">${job.location}</span>
          </div>
          <div class="flex items-center gap-1.5">
            <svg class="w-3.5 h-3.5 text-slate-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
            <span>${job.employmentType}</span>
          </div>
          <div class="flex items-center gap-1.5">
            <svg class="w-3.5 h-3.5 text-slate-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/></svg>
            <span>${job.experienceLevel}</span>
          </div>
          <div class="flex items-center gap-1.5">
            <svg class="w-3.5 h-3.5 text-slate-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
            <span>Batas: ${formatDateIndonesian(job.closingDate)}</span>
          </div>
        </div>
      </div>

      <div class="pt-3 border-t border-slate-100 flex items-center justify-between">
        <span class="text-[11px] font-mono text-slate-400 tracking-tight">${job.referenceCode}</span>
        <a href="${detailLink}" class="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-blue hover:text-brand-navy group-hover:translate-x-0.5 transition-all">
          Lihat Detail
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
        </a>
      </div>
    </article>
  `;
}

/**
 * Empty State HTML Generator
 */
function createEmptyStateHTML(options = { title: "Belum Ada Lowongan Tersedia", message: "Saat ini belum ada posisi yang sesuai dengan kriteria pencarian Anda. Silakan coba sesuaikan filter pencarian." }) {
  return `
    <div class="col-span-full py-16 px-6 text-center bg-white border border-dashed border-slate-300 rounded-2xl max-w-2xl mx-auto shadow-sm">
      <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-brand-blue-soft flex items-center justify-center text-brand-blue">
        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
        </svg>
      </div>
      <h3 class="text-xl font-bold text-brand-dark mb-2">${options.title}</h3>
      <p class="text-sm text-brand-muted max-w-md mx-auto mb-6 leading-relaxed">
        ${options.message}
      </p>
      <div class="flex items-center justify-center gap-3 flex-wrap">
        <button type="button" onclick="window.resetJobFilters && window.resetJobFilters()" class="btn-secondary text-xs px-4 py-2">
          Reset Filter Pencarian
        </button>
        <a href="faq.html" class="inline-flex items-center text-xs font-semibold text-brand-blue hover:underline py-2 px-3">
          Pelajari Proses Rekrutmen &rarr;
        </a>
      </div>
    </div>
  `;
}

// Make accessible to window
if (typeof window !== "undefined") {
  window.CONFIG = CONFIG;
  window.DEPARTMENTS = DEPARTMENTS;
  window.OFFICIAL_JOBS_DATA = OFFICIAL_JOBS_DATA;
  window.getAllJobs = getAllJobs;
  window.getActiveJobs = getActiveJobs;
  window.getFeaturedJobs = getFeaturedJobs;
  window.getJobBySlug = getJobBySlug;
  window.getRelatedJobs = getRelatedJobs;
  window.formatDateIndonesian = formatDateIndonesian;
  window.isJobExpired = isJobExpired;
  window.filterJobs = filterJobs;
  window.createJobCardHTML = createJobCardHTML;
  window.createEmptyStateHTML = createEmptyStateHTML;
}
