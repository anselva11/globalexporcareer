# GlobalExporCareer — Portal Karier Resmi PT Global Expor Indonesia

**GlobalExporCareer** adalah website portal informasi lowongan kerja resmi milik **PT Global Expor Indonesia**, perusahaan yang bergerak di bidang perdagangan internasional, ekspor-impor komoditas, dan logistik maritim.

Website ini terinspirasi dari arsitektur portal karier korporasi multinasional, dibangun dengan standar performa tinggi, desain minimalis modern, responsif, dan siap di-deploy langsung ke hosting statis (Vercel, Netlify, GitHub Pages, Cloudflare Pages, atau server Nginx/Apache).

---

## 1. Identitas Visual & Brand

- **Nama Website:** GlobalExporCareer
- **Perusahaan:** PT Global Expor Indonesia
- **Tagline:** *Bangun Karier Anda. Hubungkan Indonesia dengan Dunia.*
- **Bahasa:** Bahasa Indonesia
- **Palet Warna Resmi:**
  - **Deep Navy:** `#10243A` (Warna utama korporat)
  - **Corporate Blue:** `#174A72` (Warna aksen maritim)
  - **White:** `#FFFFFF` (Latar bersih)
  - **Light Gray:** `#F4F6F8` (Latar section sekunder)
  - **Accent Green:** `#249B65` (Status lowongan aktif & tombol CTA)
  - **Text Dark:** `#1F2937` (Tipografi keterbacaan tinggi)
  - **Muted Text:** `#64748B` (Teks sekunder & metadata)
- **Tipografi:** Plus Jakarta Sans & Inter (Google Fonts)

---

## 2. Struktur Proyek

```
globalexporcareer/
├── index.html                  # Halaman Utama (Hero, Search, Featured, 10 Dept, Timeline)
├── tentang-kami.html           # Profil Perusahaan & Nilai-Nilai Korporasi
├── karier.html                 # Direktori Lengkap Lowongan Kerja (Filter, Sort, Search)
├── departemen.html             # Rincian 10 Departemen Fungsional & Spesialisasi
├── proses-rekrutmen.html       # Panduan 5 Tahap Seleksi & Peringatan Anti-Penipuan
├── faq.html                    # Tanya Jawab Umum dengan Accordion Aksesibel & Search
├── kontak.html                 # Saluran Kontak Resmi & Formulir Klarifikasi
├── kebijakan-privasi.html      # Kebijakan Privasi Pelamar sesuai UU No. 27/2022 (UU PDP)
├── lowongan/
│   ├── detail.html             # Template Dinamis Rincian Posisi, Status & CTA Lamaran
│   └── README.md               # Dokumentasi Penanganan Detail Lowongan
├── assets/
│   ├── css/
│   │   └── styles.css          # CSS Produksi Terkompilasi (Tailwind CSS Minified)
│   ├── js/
│   │   ├── main.js             # Navigasi sticky, mobile drawer, scroll reveal, toast
│   │   ├── jobs.js             # Sumber data terpusat, filter logic, status checker
│   │   ├── careers.js          # Logika pencarian, multi-filter, pagination karier
│   │   ├── job-detail.js       # Logika renderer detail posisi, slug resolver, expired check
│   │   └── faq.js              # Accordion aksesibel (ARIA & Keyboard) dan filter search
│   ├── images/
│   │   └── hero-port.jpg       # Foto hero pelabuhan maritim berkualitas tinggi
│   └── icons/                  # Aset ikon SVG
├── data/
│   └── jobs.json               # Format data JSON untuk integrasi API / feed statis
├── src/
│   └── input.css               # Input CSS dasar Tailwind dengan custom components
├── tailwind.config.js          # Konfigurasi Tailwind CSS kustom
├── favicon.svg                 # Favicon vektor maritim
├── robots.txt                  # Pengaturan bot crawling mesin pencari
├── sitemap.xml                 # Peta situs SEO
├── package.json                # Pengaturan dependensi build & script
├── .gitignore                  # Berkas yang diabaikan pada Git
└── README.md                   # Dokumentasi lengkap proyek
```

---

## 3. Fitur Utama

1. **Pencarian & Multi-Filter Bersamaan (`karier.html`):**
   - Pencarian real-time berdasarkan kata kunci/posisi.
   - Filter departemen, lokasi kerja, jenis hubungan kerja (Full-time, Contract, Internship, Part-time), dan tingkat pengalaman.
   - Sinkronisasi URL query string (misal: `karier.html?dept=Export+%26+Import+Operations`).
   - Tag filter aktif yang dapat dihapus per item atau reset sekaligus.
   - Pengurutan berdasarkan tanggal terbaru, batas waktu terdekat, atau abjad judul (A-Z).
2. **Template Dinamis Detail Lowongan (`lowongan/detail.html`):**
   - Membaca parameter URL `?slug=...` atau `?id=...`.
   - Menghitung batas waktu lamaran (`closingDate`). Jika batas waktu terlewati atau status closed, tombol otomatis dinonaktifkan dengan status **"Lowongan Ditutup"**.
   - Tombol **Lamar Posisi Ini** mengarah langsung ke email rekrutmen resmi atau tautan formulir terkonfigurasi.
   - Tombol salin tautan lowongan ke clipboard dengan notifikasi toast.
   - Bagikan ke WhatsApp dan LinkedIn.
   - Rekomendasi lowongan terkait dari departemen yang sama.
   - Halaman 404 (Not Found) yang elegan jika parameter lowongan tidak valid.
3. **10 Departemen Spesialisasi:**
   - Export & Import Operations
   - International Sales & Business Development
   - Shipping & Logistics
   - Supply Chain & Procurement
   - Finance & Accounting
   - Legal & Compliance
   - Marketing & Communications
   - Human Resources
   - Information Technology
   - Administration & Corporate Support
4. **Keamanan & Kepatuhan:**
   - Banner Peringatan Anti-Penipuan Rekrutmen.
   - Checklist verifikasi surat panggilan kerja resmi.
   - Kebijakan privasi pelamar mengacu pada UU Perlindungan Data Pribadi (UU PDP).
   - Aksesibilitas keyboard dan standar atribut ARIA untuk seluruh menu dan accordion FAQ.
   - Mendukung preferensi `prefers-reduced-motion`.

---

## 4. Cara Menjalankan Secara Lokal

Website ini merupakan aplikasi web statis murni tanpa server backend. Anda dapat menjalankannya dengan salah satu cara berikut:

### Opsi A: Menggunakan npm (Direkomendasikan)

Pastikan Node.js telah terpasang:
```bash
# 1. Masuk ke direktori proyek
cd "c:/Users/Ansel/Documents/globalexpor career"

# 2. Jalankan server lokal statis
npm run serve
```
Buka browser pada alamat yang ditampilkan (contoh: `http://localhost:3000`).

### Opsi B: Menggunakan Python
```bash
python -m http.server 8000
```
Buka browser pada `http://localhost:8000`.

### Opsi C: Menggunakan Ekstensi VS Code / IDE
Klik kanan pada `index.html` dan pilih **"Open with Live Server"**.

---

## 5. Manajemen Data Lowongan

Seluruh data lowongan tersimpan rapi secara terpusat di `assets/js/jobs.js`.

### Struktur Objek Lowongan:
```javascript
{
  id: "GEI-OPS-001",
  referenceCode: "REF/2026/OPS/001",
  title: "Export Documentation Specialist",
  slug: "export-documentation-specialist",
  department: "Export & Import Operations",
  location: "Jakarta Utara (Tanjung Priok)",
  employmentType: "Full-time", // Full-time | Contract | Internship | Part-time
  experienceLevel: "1-3 Tahun", // Fresh Graduate | 1-3 Tahun | 3-5 Tahun | >5 Tahun
  shortDescription: "Ringkasan tugas posisi...",
  description: "Uraian menyeluruh posisi...",
  responsibilities: [
    "Tanggung jawab 1",
    "Tanggung jawab 2"
  ],
  qualifications: [
    "Kualifikasi wajib 1",
    "Kualifikasi wajib 2"
  ],
  preferredQualifications: [
    "Nilai plus 1"
  ],
  requiredDocuments: [
    "Curriculum Vitae (CV) PDF",
    "Salinan Ijazah"
  ],
  publishedAt: "2026-09-15",
  closingDate: "2026-11-30", // Format YYYY-MM-DD
  status: "active", // "active" | "closed" | "draft"
  featured: true, // true untuk tampil di Beranda
  applicationUrl: "mailto:rekrutmen@globalexpor.co.id?subject=..."
}
```

---

## 6. Mengubah Gambar, Logo, dan Kontak

1. **Logo & Nama Portal:**
   Dapat diubah pada elemen `<header>` di setiap file HTML atau melalui konstanta `CONFIG.PORTAL_NAME` di `assets/js/jobs.js`.
2. **Kontak Rekrutmen Resmi:**
   Ubah pada objek `CONFIG` di `assets/js/jobs.js`:
   ```javascript
   const CONFIG = {
     OFFICIAL_EMAIL: "rekrutmen@globalexpor.co.id",
     OFFICIAL_PHONE: "0818 0588 6644",
     OFFICE_ADDRESS: "Gedung Menara Maritim Lantai 12, Tanjung Priok, Jakarta Utara"
   };
   ```
3. **Mengganti Gambar Banner Hero:**
   Letakkan file gambar baru di `assets/images/` dan sesuaikan atribut `src` pada tag `<img>` hero di `index.html`.

---

## 7. Build CSS untuk Production

Jika Anda mengubah class Tailwind atau menambah styling kustom pada file HTML/JS:
```bash
# Kompilasi dan optimasi CSS (minified)
npm run build:css

# Atau mode pengawasan berkas (watch mode) saat pengembangan
npm run watch:css
```
File output yang dihasilkan secara otomatis diperbarui di `assets/css/styles.css`.

---

## 8. Panduan Deployment

Karena situs ini 100% statis, proses deployment sangat mudah dan cepat:

### A. Vercel
1. Hubungkan repositori Git Anda ke dashboard [Vercel](https://vercel.com).
2. Framework Preset: **Other**.
3. Build Command: `npm run build:css` (atau biarkan kosong jika file `assets/css/styles.css` sudah disertakan pada repositori).
4. Output Directory: `./`.
5. Klik **Deploy**.

### B. Netlify
1. Buka dashboard [Netlify](https://netlify.com) dan pilih **Add new site > Import an existing project**.
2. Build command: `npm run build:css`.
3. Publish directory: `./`.
4. Klik **Deploy Site**.

### C. GitHub Pages
1. Push seluruh berkas ke repositori GitHub.
2. Buka menu **Settings > Pages**.
3. Pada opsi **Source**, pilih branch `main` dan folder `/ (root)`.
4. Simpan, situs Anda akan aktif dalam beberapa menit.

---

## 9. Checklist Pengujian Fungsional

- [x] 1. Semua tautan navigasi berfungsi di seluruh halaman.
- [x] 2. Menu mobile hamburger berfungsi membuka/menutup drawer secara mulus.
- [x] 3. Pencarian lowongan berfungsi dengan kombinasi kata kunci dan debounce.
- [x] 4. Multi-filter departemen, lokasi, tipe, dan pengalaman dapat digunakan bersamaan.
- [x] 5. Tombol reset filter berfungsi mengembalikan daftar ke kondisi awal.
- [x] 6. Kartu lowongan membuka halaman detail dengan data yang tepat.
- [x] 7. Posisi yang melewati batas tanggal otomatis ditandai "Lowongan Ditutup".
- [x] 8. CTA lamaran mengarah ke kanal email rekrutmen resmi terverifikasi.
- [x] 9. Accordion FAQ dapat dibuka-tutup dengan mouse maupun keyboard (Enter/Space).
- [x] 10. Fitur pencarian pada FAQ memfilter pertanyaan secara real-time.
- [x] 11. Layout responsif di desktop (1440px), laptop (1280px), tablet (768px), dan mobile (390px/320px).
- [x] 12. Tidak ada tombol palsu (fake buttons) atau dead links.
- [x] 13. Tampilan Empty State elegan muncul saat pencarian menghasilkan 0 lowongan.
- [x] 14. Data contoh memiliki penanda `DEMO` yang jelas.
- [x] 15. Peringatan anti-penipuan rekrutmen terpasang jelas.
- [x] 16. Tidak ada error JavaScript pada browser console.
- [x] 17. Build CSS produksi berhasil (41KB minified).
- [x] 18. Website siap di-host langsung sebagai static site.

---

&copy; 2026 PT Global Expor Indonesia. Hak Cipta Dilindungi Undang-Undang.
