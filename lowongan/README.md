# Panduan Halaman Detail Lowongan (Lowongan Directory)

Folder ini berisi template halaman detail lowongan kerja untuk **GlobalExporCareer** (PT Global Expor Indonesia).

## Mekanisme Kerja

Halaman `detail.html` menggunakan JavaScript Vanilla (`assets/js/job-detail.js`) yang membaca parameter URL:
- `detail.html?slug=export-documentation-specialist`
- `detail.html?id=GEI-OPS-001`
- `detail.html?slug=international-sales-executive`

Ketika dibuka, script akan:
1. Membaca slug atau ID dari `window.location.search`.
2. Mencari data posisi terkait dari objek `jobs.js`.
3. Memeriksa status batas waktu lamaran (`closingDate`). Jika batas waktu telah lewat atau status bernilai `closed`, sistem otomatis menandai status **Lowongan Ditutup** dan menonaktifkan tombol lamaran.
4. Menampilkan tombol **Lamar Sekarang** yang terhubung langsung ke kanal resmi (email rekrutmen terverifikasi atau URL resmi yang dikonfigurasi).
5. Menyediakan fitur salin link lowongan ke clipboard dan tombol bagikan ke WhatsApp & LinkedIn.
6. Menampilkan rekomendasi lowongan terkait dari departemen yang sama.
7. Menampilkan state **404 / Lowongan Tidak Ditemukan** secara elegan jika slug tidak valid.

## Cara Menambah Lowongan Baru
Buka file `assets/js/jobs.js` dan tambahkan objek baru ke dalam array data lowongan sesuai format yang tersedia.
