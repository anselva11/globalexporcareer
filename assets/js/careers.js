/**
 * GlobalExporCareer - Halaman Semua Lowongan (careers.js)
 * PT Global Expor Indonesia
 */

document.addEventListener("DOMContentLoaded", () => {
  initCareersPage();
});

const PAGE_SIZE = 6;
let currentPage = 1;
let currentFilteredJobs = [];

function initCareersPage() {
  const container = document.getElementById("jobs-grid");
  if (!container) return; // Bukan halaman karier

  populateFilterOptions();
  parseUrlParams();
  bindFilterEvents();
  renderCareersList();
}

/**
 * Mengisi dropdown filter secara dinamis dari data
 */
function populateFilterOptions() {
  const deptSelect = document.getElementById("filter-department");
  const locSelect = document.getElementById("filter-location");

  if (deptSelect && window.DEPARTMENTS) {
    window.DEPARTMENTS.forEach(dept => {
      const opt = document.createElement("option");
      opt.value = dept.name;
      opt.textContent = dept.name;
      deptSelect.appendChild(opt);
    });
  }

  if (locSelect && window.getAllJobs) {
    const allJobs = window.getAllJobs();
    const locations = [...new Set(allJobs.map(j => j.location))];
    locations.forEach(loc => {
      const opt = document.createElement("option");
      opt.value = loc;
      opt.textContent = loc;
      locSelect.appendChild(opt);
    });
  }
}

/**
 * Membaca URL Query params untuk pre-filtering (contoh: karier.html?dept=Export+%26+Import+Operations)
 */
function parseUrlParams() {
  const params = new URLSearchParams(window.location.search);
  const q = params.get("q");
  const dept = params.get("dept");
  const loc = params.get("loc");
  const type = params.get("type");

  if (q) {
    const inputQ = document.getElementById("filter-keyword");
    if (inputQ) inputQ.value = q;
  }
  if (dept) {
    const selectDept = document.getElementById("filter-department");
    if (selectDept) selectDept.value = dept;
  }
  if (loc) {
    const selectLoc = document.getElementById("filter-location");
    if (selectLoc) selectLoc.value = loc;
  }
  if (type) {
    const selectType = document.getElementById("filter-type");
    if (selectType) selectType.value = type;
  }
}

/**
 * Pasang event listener ke elemen filter
 */
function bindFilterEvents() {
  const keywordInput = document.getElementById("filter-keyword");
  const deptSelect = document.getElementById("filter-department");
  const locSelect = document.getElementById("filter-location");
  const typeSelect = document.getElementById("filter-type");
  const expSelect = document.getElementById("filter-experience");
  const sortSelect = document.getElementById("filter-sort");
  const resetBtn = document.getElementById("btn-reset-filters");
  const loadMoreBtn = document.getElementById("btn-load-more");

  let debounceTimer;
  if (keywordInput) {
    keywordInput.addEventListener("input", () => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        currentPage = 1;
        renderCareersList();
      }, 250);
    });
  }

  [deptSelect, locSelect, typeSelect, expSelect, sortSelect].forEach(el => {
    if (el) {
      el.addEventListener("change", () => {
        currentPage = 1;
        renderCareersList();
      });
    }
  });

  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      resetJobFilters();
    });
  }

  if (loadMoreBtn) {
    loadMoreBtn.addEventListener("click", () => {
      currentPage++;
      renderCareersList(true);
    });
  }
}

/**
 * Reset seluruh filter
 */
function resetJobFilters() {
  const fields = [
    "filter-keyword",
    "filter-department",
    "filter-location",
    "filter-type",
    "filter-experience"
  ];
  fields.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = "";
  });

  const sortSelect = document.getElementById("filter-sort");
  if (sortSelect) sortSelect.value = "newest";

  // Reset URL tanpa reload
  if (window.history.replaceState) {
    const cleanUrl = window.location.pathname;
    window.history.replaceState({}, document.title, cleanUrl);
  }

  currentPage = 1;
  renderCareersList();
  if (window.showToast) window.showToast("Filter telah direset.");
}
window.resetJobFilters = resetJobFilters;

/**
 * Render daftar lowongan pada grid
 */
function renderCareersList(isAppend = false) {
  const container = document.getElementById("jobs-grid");
  const counterEl = document.getElementById("jobs-count-text");
  const loadMoreContainer = document.getElementById("load-more-container");
  const activeTagsContainer = document.getElementById("active-filter-tags");

  if (!container) return;

  const keyword = document.getElementById("filter-keyword")?.value || "";
  const department = document.getElementById("filter-department")?.value || "";
  const location = document.getElementById("filter-location")?.value || "";
  const employmentType = document.getElementById("filter-type")?.value || "";
  const experienceLevel = document.getElementById("filter-experience")?.value || "";
  const sortBy = document.getElementById("filter-sort")?.value || "newest";

  // Filter lowongan
  currentFilteredJobs = window.filterJobs({
    keyword,
    department,
    location,
    employmentType,
    experienceLevel,
    sortBy,
    includeClosed: false // Sesuai aturan: posisi ditutup/lewat deadline tidak ditampilkan sebagai lowongan aktif
  });

  // Render tag filter aktif
  renderActiveFilterTags(activeTagsContainer, { keyword, department, location, employmentType, experienceLevel });

  // Update text jumlah hasil
  const totalCount = currentFilteredJobs.length;
  if (counterEl) {
    if (totalCount === 0) {
      counterEl.textContent = "Tidak ada lowongan ditemukan";
    } else {
      counterEl.innerHTML = `Menampilkan <strong class="text-brand-dark">${Math.min(currentPage * PAGE_SIZE, totalCount)}</strong> dari <strong class="text-brand-dark">${totalCount}</strong> posisi aktif`;
    }
  }

  // Handle empty state
  if (totalCount === 0) {
    container.innerHTML = window.createEmptyStateHTML({
      title: "Tidak Ada Lowongan yang Cocok",
      message: "Tidak ditemukan lowongan dengan kriteria filter yang Anda pilih. Coba sesuaikan kata kunci atau reset filter untuk melihat semua posisi."
    });
    if (loadMoreContainer) loadMoreContainer.classList.add("hidden");
    return;
  }

  // Pagination slice
  const paginatedJobs = currentFilteredJobs.slice(0, currentPage * PAGE_SIZE);

  if (!isAppend) {
    container.innerHTML = paginatedJobs.map(job => window.createJobCardHTML(job)).join("");
  } else {
    // Append hanya batch baru
    const startIdx = (currentPage - 1) * PAGE_SIZE;
    const newItems = currentFilteredJobs.slice(startIdx, currentPage * PAGE_SIZE);
    container.insertAdjacentHTML("beforeend", newItems.map(job => window.createJobCardHTML(job)).join(""));
  }

  // Tombol Muat Lebih Banyak
  if (loadMoreContainer) {
    if (currentPage * PAGE_SIZE < totalCount) {
      loadMoreContainer.classList.remove("hidden");
    } else {
      loadMoreContainer.classList.add("hidden");
    }
  }
}

/**
 * Render Pill Tags Filter Aktif
 */
function renderActiveFilterTags(container, filters) {
  if (!container) return;

  const tags = [];
  if (filters.keyword) {
    tags.push({ key: "filter-keyword", label: `Cari: "${filters.keyword}"` });
  }
  if (filters.department) {
    tags.push({ key: "filter-department", label: `Departemen: ${filters.department}` });
  }
  if (filters.location) {
    tags.push({ key: "filter-location", label: `Lokasi: ${filters.location}` });
  }
  if (filters.employmentType) {
    tags.push({ key: "filter-type", label: `Tipe: ${filters.employmentType}` });
  }
  if (filters.experienceLevel) {
    tags.push({ key: "filter-experience", label: `Pengalaman: ${filters.experienceLevel}` });
  }

  if (tags.length === 0) {
    container.innerHTML = "";
    container.classList.add("hidden");
    return;
  }

  container.classList.remove("hidden");
  container.innerHTML = `
    <div class="flex items-center gap-2 flex-wrap text-xs text-brand-muted py-2">
      <span class="font-medium text-slate-500">Filter Aktif:</span>
      ${tags.map(tag => `
        <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-brand-dark border border-slate-200">
          <span>${tag.label}</span>
          <button type="button" onclick="removeSingleFilter('${tag.key}')" class="text-slate-400 hover:text-red-500 focus:outline-none" aria-label="Hapus filter ${tag.label}">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
          </button>
        </span>
      `).join("")}
      <button type="button" onclick="resetJobFilters()" class="text-brand-blue hover:underline font-semibold ml-2 text-xs">
        Hapus Semua
      </button>
    </div>
  `;
}

function removeSingleFilter(elementId) {
  const el = document.getElementById(elementId);
  if (el) {
    el.value = "";
    currentPage = 1;
    renderCareersList();
  }
}
window.removeSingleFilter = removeSingleFilter;
