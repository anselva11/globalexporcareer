/**
 * GlobalExporCareer - Core Scripts (main.js)
 * PT Global Expor Indonesia
 */

document.addEventListener("DOMContentLoaded", () => {
  initNavbar();
  initMobileMenu();
  initAnnouncementBar();
  initScrollReveal();
  highlightActiveNav();
});

/**
 * Navbar Scroll Behavior
 */
function initNavbar() {
  const navbar = document.getElementById("main-navbar");
  if (!navbar) return;

  const handleScroll = () => {
    if (window.scrollY > 20) {
      navbar.classList.add("shadow-md", "bg-white/95", "backdrop-blur-md");
      navbar.classList.remove("bg-white");
    } else {
      navbar.classList.remove("shadow-md", "bg-white/95", "backdrop-blur-md");
      navbar.classList.add("bg-white");
    }
  };

  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();
}

/**
 * Mobile Hamburger Menu
 */
function initMobileMenu() {
  const toggleBtn = document.getElementById("mobile-menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  const menuIcon = document.getElementById("menu-icon");
  const closeIcon = document.getElementById("close-icon");

  if (!toggleBtn || !mobileMenu) return;

  const toggle = (force) => {
    const isExpanded = toggleBtn.getAttribute("aria-expanded") === "true";
    const nextState = typeof force === "boolean" ? force : !isExpanded;

    toggleBtn.setAttribute("aria-expanded", String(nextState));
    if (nextState) {
      mobileMenu.classList.remove("hidden");
      if (menuIcon) menuIcon.classList.add("hidden");
      if (closeIcon) closeIcon.classList.remove("hidden");
      document.body.style.overflow = "hidden";
    } else {
      mobileMenu.classList.add("hidden");
      if (menuIcon) menuIcon.classList.remove("hidden");
      if (closeIcon) closeIcon.classList.add("hidden");
      document.body.style.overflow = "";
    }
  };

  toggleBtn.addEventListener("click", () => toggle());

  // Close on Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && toggleBtn.getAttribute("aria-expanded") === "true") {
      toggle(false);
    }
  });

  // Close menu when clicking backdrop or mobile links
  mobileMenu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => toggle(false));
  });
}

/**
 * Announcement Bar
 */
function initAnnouncementBar() {
  const bar = document.getElementById("announcement-bar");
  const dismissBtn = document.getElementById("dismiss-announcement");
  if (!bar) return;

  const isDismissed = sessionStorage.getItem("announcement_dismissed") === "true";
  if (isDismissed) {
    bar.style.display = "none";
  }

  if (dismissBtn) {
    dismissBtn.addEventListener("click", () => {
      bar.style.display = "none";
      sessionStorage.setItem("announcement_dismissed", "true");
    });
  }
}

/**
 * Intersection Observer Scroll Reveal
 */
function initScrollReveal() {
  const revealElements = document.querySelectorAll(".reveal-on-scroll");
  if (!revealElements.length) return;

  if (!("IntersectionObserver" in window)) {
    revealElements.forEach(el => el.classList.add("is-revealed"));
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-revealed");
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: "0px 0px -40px 0px"
  });

  revealElements.forEach(el => observer.observe(el));
}

/**
 * Active Navigation Link Highlighter
 */
function highlightActiveNav() {
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach(link => {
    const href = link.getAttribute("href");
    if (!href) return;

    // Normalisasi perbandingan URL
    const isCurrent = 
      (href === "index.html" && (currentPath.endsWith("/") || currentPath.endsWith("/index.html") || currentPath === "")) ||
      (href !== "index.html" && currentPath.endsWith(href));

    if (isCurrent) {
      link.classList.add("text-brand-blue", "font-bold");
      link.classList.remove("text-brand-muted", "text-slate-600");
      link.setAttribute("aria-current", "page");
    }
  });
}

/**
 * Utility: Toast Notification
 */
function showToast(message, type = "success") {
  let toastContainer = document.getElementById("toast-container");
  if (!toastContainer) {
    toastContainer = document.createElement("div");
    toastContainer.id = "toast-container";
    toastContainer.className = "fixed bottom-5 right-5 z-50 flex flex-col gap-2 max-w-sm w-full pointer-events-none";
    document.body.appendChild(toastContainer);
  }

  const toast = document.createElement("div");
  const bgClass = type === "success" ? "bg-brand-navy text-white" : "bg-red-700 text-white";
  
  toast.className = `${bgClass} px-4 py-3 rounded-xl shadow-card text-sm flex items-center justify-between gap-3 pointer-events-auto transform transition-all duration-300 translate-y-4 opacity-0`;
  toast.innerHTML = `
    <div class="flex items-center gap-2">
      <svg class="w-4 h-4 text-brand-green flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
      <span>${message}</span>
    </div>
  `;

  toastContainer.appendChild(toast);

  // Trigger animation
  requestAnimationFrame(() => {
    toast.classList.remove("translate-y-4", "opacity-0");
    toast.classList.add("translate-y-0", "opacity-100");
  });

  // Auto remove after 3s
  setTimeout(() => {
    toast.classList.add("opacity-0", "translate-y-2");
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

window.showToast = showToast;
