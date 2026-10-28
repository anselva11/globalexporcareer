/**
 * GlobalExporCareer - FAQ Accordion & Search (faq.js)
 * PT Global Expor Indonesia
 */

document.addEventListener("DOMContentLoaded", () => {
  initFaqAccordion();
  initFaqSearch();
});

function initFaqAccordion() {
  const faqButtons = document.querySelectorAll(".faq-trigger");
  if (!faqButtons.length) return;

  faqButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const isExpanded = btn.getAttribute("aria-expanded") === "true";
      const targetId = btn.getAttribute("aria-controls");
      const contentEl = document.getElementById(targetId);
      const icon = btn.querySelector(".faq-icon");

      // Toggle current accordion
      btn.setAttribute("aria-expanded", String(!isExpanded));
      if (contentEl) {
        if (!isExpanded) {
          contentEl.classList.remove("hidden");
          if (icon) icon.classList.add("rotate-180");
        } else {
          contentEl.classList.add("hidden");
          if (icon) icon.classList.remove("rotate-180");
        }
      }
    });

    // Keyboard support: Enter or Space
    btn.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        btn.click();
      }
    });
  });

  // Expand / Collapse all controls if exist
  const expandAllBtn = document.getElementById("faq-expand-all");
  const collapseAllBtn = document.getElementById("faq-collapse-all");

  if (expandAllBtn) {
    expandAllBtn.addEventListener("click", () => {
      faqButtons.forEach(btn => {
        const targetId = btn.getAttribute("aria-controls");
        const contentEl = document.getElementById(targetId);
        const icon = btn.querySelector(".faq-icon");
        btn.setAttribute("aria-expanded", "true");
        if (contentEl) contentEl.classList.remove("hidden");
        if (icon) icon.classList.add("rotate-180");
      });
    });
  }

  if (collapseAllBtn) {
    collapseAllBtn.addEventListener("click", () => {
      faqButtons.forEach(btn => {
        const targetId = btn.getAttribute("aria-controls");
        const contentEl = document.getElementById(targetId);
        const icon = btn.querySelector(".faq-icon");
        btn.setAttribute("aria-expanded", "false");
        if (contentEl) contentEl.classList.add("hidden");
        if (icon) icon.classList.remove("rotate-180");
      });
    });
  }
}

/**
 * Live search filter on FAQ items
 */
function initFaqSearch() {
  const searchInput = document.getElementById("faq-search-input");
  if (!searchInput) return;

  const faqItems = document.querySelectorAll(".faq-item");

  searchInput.addEventListener("input", (e) => {
    const term = e.target.value.toLowerCase().trim();
    let matchesCount = 0;

    faqItems.forEach(item => {
      const qText = item.querySelector(".faq-trigger")?.textContent.toLowerCase() || "";
      const aText = item.querySelector(".faq-content")?.textContent.toLowerCase() || "";

      if (term === "" || qText.includes(term) || aText.includes(term)) {
        item.classList.remove("hidden");
        matchesCount++;

        // Auto expand if actively searched
        if (term !== "") {
          const btn = item.querySelector(".faq-trigger");
          const targetId = btn?.getAttribute("aria-controls");
          const content = document.getElementById(targetId);
          const icon = btn?.querySelector(".faq-icon");
          if (btn && content) {
            btn.setAttribute("aria-expanded", "true");
            content.classList.remove("hidden");
            if (icon) icon.classList.add("rotate-180");
          }
        }
      } else {
        item.classList.add("hidden");
      }
    });

    const noResultMsg = document.getElementById("faq-no-results");
    if (noResultMsg) {
      if (matchesCount === 0 && term !== "") {
        noResultMsg.classList.remove("hidden");
      } else {
        noResultMsg.classList.add("hidden");
      }
    }
  });
}
