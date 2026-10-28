/**
 * GlobalExporCareer - Halaman Detail Lowongan (job-detail.js)
 * PT Global Expor Indonesia
 */

document.addEventListener("DOMContentLoaded", () => {
  initJobDetailPage();
});

function initJobDetailPage() {
  const container = document.getElementById("job-detail-container");
  if (!container) return;

  const params = new URLSearchParams(window.location.search);
  const slugOrId = params.get("slug") || params.get("id");

  if (!slugOrId) {
    renderJobNotFound("Parameter lowongan tidak ditentukan. Silakan pilih lowongan dari daftar karier.");
    return;
  }

  const job = window.getJobBySlug ? window.getJobBySlug(slugOrId) : null;

  if (!job) {
    renderJobNotFound("Posisi lowongan yang Anda cari tidak ditemukan atau telah diarsipkan.");
    return;
  }

  renderJobDetail(job);
}

/**
 * Render Tampilan Detail Lowongan
 */
function renderJobDetail(job) {
  // Update Title Halaman
  document.title = `${job.title} — GlobalExporCareer | PT Global Expor Indonesia`;

  const container = document.getElementById("job-detail-container");
  const isExpired = window.isJobExpired ? window.isJobExpired(job.closingDate) : false;
  const isClosed = job.status === "closed" || isExpired;

  // Breadcrumb
  const breadcrumbEl = document.getElementById("job-breadcrumb-title");
  if (breadcrumbEl) breadcrumbEl.textContent = job.title;

  const demoNotice = job.isDemo ? `
    <div class="mb-6 p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-sm flex items-start gap-3">
      <svg class="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>
      <div>
        <strong class="font-bold">INFORMASI POSISI CONTOH (DEMO):</strong> Lowongan ini merupakan data contoh untuk keperluan pengujian dan tinjauan portal karier PT Global Expor Indonesia. Informasi ini tidak ditujukan sebagai rekrutmen aktif sebelum pengumuman resmi perusahaan.
      </div>
    </div>
  ` : '';

  const closedNotice = isClosed ? `
    <div class="mb-6 p-4 rounded-xl bg-slate-100 border border-slate-300 text-slate-800 text-sm flex items-start gap-3">
      <svg class="w-5 h-5 text-slate-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
      <div>
        <strong class="font-bold">LOWONGAN TELAH DITUTUP:</strong> Masa penerimaan berkas untuk posisi ini telah berakhir pada <strong>${window.formatDateIndonesian(job.closingDate)}</strong>. Kami tidak lagi menerima lamaran baru untuk kode referensi ini.
      </div>
    </div>
  ` : '';

  const applyBtnHTML = isClosed
    ? `<button disabled class="w-full py-3.5 px-6 rounded-xl font-semibold text-slate-400 bg-slate-200 cursor-not-allowed text-center text-sm">
        Lowongan Ditutup
       </button>`
    : `<a href="${job.applicationUrl || `mailto:${window.CONFIG.OFFICIAL_EMAIL}?subject=Lamaran%20${encodeURIComponent(job.title)}%20-${encodeURIComponent(job.referenceCode)}`}" 
          class="btn-primary w-full py-3.5 px-6 text-sm font-semibold shadow-md flex items-center justify-center gap-2"
          id="btn-apply-main">
        <span>Lamar Posisi Ini</span>
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
       </a>`;

  // Render HTML
  container.innerHTML = `
    ${demoNotice}
    ${closedNotice}

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <!-- Main Content (2 cols) -->
      <div class="lg:col-span-2 space-y-8">
        <!-- Job Header Card -->
        <div class="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-soft">
          <div class="flex items-center justify-between gap-3 flex-wrap mb-4">
            <span class="badge-department text-xs font-semibold px-3 py-1">
              ${job.department}
            </span>
            <span class="text-xs font-mono text-slate-500 bg-slate-100 px-3 py-1 rounded-md">
              Kode: ${job.referenceCode}
            </span>
          </div>

          <h1 class="text-2xl md:text-3xl font-extrabold text-brand-dark mb-4 leading-tight">
            ${job.title}
          </h1>

          <div class="flex items-center gap-4 flex-wrap text-xs md:text-sm text-brand-muted pb-6 border-b border-slate-100">
            <div class="flex items-center gap-1.5">
              <svg class="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
              <span>${job.location}</span>
            </div>
            <div class="flex items-center gap-1.5">
              <svg class="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
              <span>${job.employmentType}</span>
            </div>
            <div class="flex items-center gap-1.5">
              <svg class="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/></svg>
              <span>${job.experienceLevel}</span>
            </div>
          </div>

          <!-- Quick Summary -->
          <div class="pt-6">
            <h2 class="text-sm font-bold uppercase tracking-wider text-slate-400 mb-2">Ringkasan Posisi</h2>
            <p class="text-brand-dark text-sm md:text-base leading-relaxed">
              ${job.description}
            </p>
          </div>
        </div>

        <!-- Responsibilities -->
        <div class="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-soft">
          <h2 class="text-lg font-bold text-brand-dark mb-4 flex items-center gap-2">
            <svg class="w-5 h-5 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/></svg>
            Tanggung Jawab Pekerjaan
          </h2>
          <ul class="space-y-3 text-sm text-slate-700">
            ${job.responsibilities.map(item => `
              <li class="flex items-start gap-3">
                <span class="w-1.5 h-1.5 rounded-full bg-brand-blue mt-2 flex-shrink-0"></span>
                <span class="leading-relaxed">${item}</span>
              </li>
            `).join("")}
          </ul>
        </div>

        <!-- Qualifications -->
        <div class="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-soft">
          <h2 class="text-lg font-bold text-brand-dark mb-4 flex items-center gap-2">
            <svg class="w-5 h-5 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
            Kualifikasi Wajib
          </h2>
          <ul class="space-y-3 text-sm text-slate-700 mb-6">
            ${job.qualifications.map(item => `
              <li class="flex items-start gap-3">
                <span class="w-1.5 h-1.5 rounded-full bg-brand-green mt-2 flex-shrink-0"></span>
                <span class="leading-relaxed">${item}</span>
              </li>
            `).join("")}
          </ul>

          ${job.preferredQualifications && job.preferredQualifications.length > 0 ? `
            <h3 class="text-sm font-bold text-slate-800 uppercase tracking-wide mb-3 pt-4 border-t border-slate-100">
              Kualifikasi Tambahan (Nilai Plus)
            </h3>
            <ul class="space-y-2.5 text-sm text-slate-600">
              ${job.preferredQualifications.map(item => `
                <li class="flex items-start gap-2.5">
                  <svg class="w-4 h-4 text-brand-green flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                  <span class="leading-relaxed">${item}</span>
                </li>
              `).join("")}
            </ul>
          ` : ''}
        </div>

        <!-- Required Documents -->
        <div class="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-soft">
          <h2 class="text-lg font-bold text-brand-dark mb-4 flex items-center gap-2">
            <svg class="w-5 h-5 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg>
            Dokumen yang Perlu Disiapkan
          </h2>
          <ul class="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-slate-700">
            ${job.requiredDocuments.map(doc => `
              <li class="p-3 rounded-lg bg-slate-50 border border-slate-200/60 flex items-center gap-2.5">
                <svg class="w-4 h-4 text-brand-blue flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
                <span>${doc}</span>
              </li>
            `).join("")}
          </ul>
        </div>

        <!-- Cara Melamar & Verifikasi -->
        <div class="bg-brand-blue-soft/50 rounded-2xl border border-brand-blue/20 p-6 md:p-8">
          <h2 class="text-lg font-bold text-brand-navy mb-3 flex items-center gap-2">
            <svg class="w-5 h-5 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            Petunjuk & Verifikasi Lamaran
          </h2>
          <div class="space-y-3 text-sm text-slate-700 leading-relaxed mb-6">
            <p>
              1. Pastikan seluruh dokumen persyaratan telah digabungkan atau disiapkan dalam format <strong>PDF</strong> rapi.
            </p>
            <p>
              2. Gunakan subjek pengiriman email baku: <code class="bg-white px-2 py-0.5 rounded border border-slate-200 text-xs font-mono font-bold text-brand-navy">Lamaran Posisi - ${job.title} - ${job.referenceCode} - [Nama Anda]</code>
            </p>
            <p>
              3. Kirimkan berkas lamaran Anda langsung ke alamat email rekrutmen resmi: <strong class="text-brand-blue">${window.CONFIG.OFFICIAL_EMAIL}</strong>.
            </p>
            <p class="text-xs text-amber-800 bg-amber-50/80 p-3 rounded-lg border border-amber-200">
              <strong>Peringatan Keamanan:</strong> PT Global Expor Indonesia tidak memungut biaya apapun dalam seluruh tahapan seleksi calon karyawan. Waspadai segala bentuk penipuan yang mengatasnamakan tim rekrutmen kami.
            </p>
          </div>

          <div>
            ${applyBtnHTML}
          </div>
        </div>
      </div>

      <!-- Sidebar (1 col) -->
      <div class="space-y-6">
        <!-- Quick Specs Card -->
        <div class="bg-white rounded-2xl border border-slate-200 p-6 shadow-soft space-y-4">
          <h3 class="font-bold text-brand-dark text-base pb-3 border-b border-slate-100">
            Informasi Ringkas Posisi
          </h3>

          <div class="space-y-3.5 text-xs text-brand-muted">
            <div>
              <span class="block text-slate-400 font-medium mb-1">Status Lowongan</span>
              <span class="text-sm font-semibold ${isClosed ? 'text-slate-600' : 'text-emerald-600'}">
                ${isClosed ? 'Penerimaan Ditutup' : 'Aktif & Dibuka'}
              </span>
            </div>

            <div>
              <span class="block text-slate-400 font-medium mb-1">Batas Akhir Penerimaan</span>
              <span class="text-sm font-semibold text-brand-dark">
                ${window.formatDateIndonesian(job.closingDate)}
              </span>
            </div>

            <div>
              <span class="block text-slate-400 font-medium mb-1">Tanggal Dipublikasikan</span>
              <span class="text-sm font-semibold text-brand-dark">
                ${window.formatDateIndonesian(job.publishedAt)}
              </span>
            </div>

            <div>
              <span class="block text-slate-400 font-medium mb-1">Departemen</span>
              <span class="text-sm font-semibold text-brand-dark">${job.department}</span>
            </div>

            <div>
              <span class="block text-slate-400 font-medium mb-1">Lokasi Penempatan</span>
              <span class="text-sm font-semibold text-brand-dark">${job.location}</span>
            </div>

            <div>
              <span class="block text-slate-400 font-medium mb-1">Jenis Pekerjaan</span>
              <span class="text-sm font-semibold text-brand-dark">${job.employmentType}</span>
            </div>

            <div>
              <span class="block text-slate-400 font-medium mb-1">Tingkat Pengalaman</span>
              <span class="text-sm font-semibold text-brand-dark">${job.experienceLevel}</span>
            </div>
          </div>

          <div class="pt-4 border-t border-slate-100">
            ${applyBtnHTML}
          </div>
        </div>

        <!-- Share Job Card -->
        <div class="bg-white rounded-2xl border border-slate-200 p-6 shadow-soft">
          <h3 class="font-bold text-brand-dark text-sm mb-3">Bagikan Lowongan</h3>
          <div class="flex items-center gap-2">
            <button type="button" onclick="copyCurrentJobLink()" class="flex-1 py-2 px-3 rounded-lg border border-slate-200 hover:bg-slate-50 text-xs font-semibold text-slate-700 flex items-center justify-center gap-1.5 transition-colors" title="Salin tautan lowongan">
              <svg class="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/></svg>
              <span>Salin Tautan</span>
            </button>
            <a href="https://wa.me/?text=${encodeURIComponent(`${job.title} - PT Global Expor Indonesia: ${window.location.href}`)}" target="_blank" rel="noopener noreferrer" class="p-2 rounded-lg border border-slate-200 hover:bg-slate-50 text-emerald-600 transition-colors" title="Bagikan ke WhatsApp">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
            </a>
            <a href="https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}" target="_blank" rel="noopener noreferrer" class="p-2 rounded-lg border border-slate-200 hover:bg-slate-50 text-blue-700 transition-colors" title="Bagikan ke LinkedIn">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
          </div>
        </div>

        <!-- Helpdesk Box -->
        <div class="bg-slate-50 rounded-2xl border border-slate-200 p-6 text-xs text-brand-muted space-y-2">
          <div class="flex items-center gap-2 font-bold text-slate-700 text-sm">
            <svg class="w-4 h-4 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"/></svg>
            <span>Butuh Bantuan Rekrutmen?</span>
          </div>
          <p class="leading-relaxed">
            Jika Anda mengalami kendala pengiriman berkas atau pertanyaan kualifikasi, hubungi:
          </p>
          <div class="pt-1 font-mono text-brand-blue font-semibold">
            ${window.CONFIG.OFFICIAL_EMAIL}
          </div>
        </div>
      </div>
    </div>

    <!-- Related Jobs Section -->
    <div class="mt-16 pt-12 border-t border-slate-200">
      <div class="flex items-center justify-between mb-6">
        <div>
          <h2 class="text-xl font-bold text-brand-dark">Lowongan Terkait Lainnya</h2>
          <p class="text-xs text-brand-muted">Peluang karier serupa yang mungkin sesuai dengan minat Anda</p>
        </div>
        <a href="../karier.html" class="text-xs font-semibold text-brand-blue hover:underline">
          Lihat Semua &rarr;
        </a>
      </div>
      <div id="related-jobs-grid" class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <!-- Rendered via JS -->
      </div>
    </div>
  `;

  renderRelatedJobs(job);
}

/**
 * Render lowongan terkait
 */
function renderRelatedJobs(currentJob) {
  const container = document.getElementById("related-jobs-grid");
  if (!container || !window.getRelatedJobs) return;

  const related = window.getRelatedJobs(currentJob, 3);
  if (!related || related.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-8 text-center text-xs text-brand-muted bg-white border border-slate-200 rounded-xl">
        Belum ada lowongan terkait lainnya yang aktif saat ini.
      </div>
    `;
    return;
  }

  container.innerHTML = related.map(job => window.createJobCardHTML(job)).join("");
}

/**
 * Render Tampilan 404 / Job Not Found
 */
function renderJobNotFound(message) {
  const container = document.getElementById("job-detail-container");
  if (!container) return;

  document.title = "Lowongan Tidak Ditemukan — GlobalExporCareer";

  container.innerHTML = `
    <div class="py-16 px-6 text-center bg-white border border-slate-200 rounded-2xl max-w-xl mx-auto shadow-soft">
      <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-red-50 flex items-center justify-center text-red-600">
        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>
      </div>
      <h2 class="text-2xl font-bold text-brand-dark mb-2">Lowongan Tidak Ditemukan</h2>
      <p class="text-sm text-brand-muted mb-6 leading-relaxed">
        ${message}
      </p>
      <div class="flex items-center justify-center gap-3">
        <a href="../karier.html" class="btn-primary text-xs px-5 py-2.5">
          Jelajahi Lowongan Aktif
        </a>
        <a href="../index.html" class="btn-secondary text-xs px-5 py-2.5">
          Kembali ke Beranda
        </a>
      </div>
    </div>
  `;
}

/**
 * Salin Tautan Lowongan ke Clipboard
 */
function copyCurrentJobLink() {
  if (navigator.clipboard && window.location.href) {
    navigator.clipboard.writeText(window.location.href)
      .then(() => {
        if (window.showToast) window.showToast("Tautan lowongan berhasil disalin ke clipboard!");
      })
      .catch(() => {
        alert("Tautan: " + window.location.href);
      });
  } else {
    alert("Tautan: " + window.location.href);
  }
}
window.copyCurrentJobLink = copyCurrentJobLink;
