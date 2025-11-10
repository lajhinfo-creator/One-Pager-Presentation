// ==============================
// SCROLL REVEAL FOR CONTENT CARDS
// ==============================
function handleReveal() {
  const sections = document.querySelectorAll(".section.reveal");
  const windowHeight = window.innerHeight;
  const offset = 120; // how early the reveal should start

  sections.forEach((section) => {
    const top = section.getBoundingClientRect().top;
    if (top < windowHeight - offset) {
      section.classList.add("visible");
    }
  });
}

// ==============================
// 60vh DRAMATIC PARALLAX REVEAL FOR FOOTER
// ==============================
function handleFooterParallax() {
  const footer = document.querySelector(".footer");
  const footerText = document.querySelector(".footer-text");
  if (!footer) return;

  const rect = footer.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  // progress: 0 = footer not visible, 1 = footer fully in view
  const rawProgress = 1 - Math.min(Math.max(rect.top / windowHeight, 0), 1);
  const progress = Math.max(0, Math.min(rawProgress, 1));

  // Dramatic parallax: move background more as we scroll
  const baseY = 60;           // starting Y position (%)
  const parallaxRange = 40;   // how much movement (bigger = more dramatic)
  const newPos = baseY - progress * parallaxRange;
  footer.style.backgroundPosition = `center ${newPos}%`;

  // Dramatic text reveal: fade + long lift from below
  if (footerText) {
    // Start reveal a bit after the footer first appears
    const visible = Math.min(Math.max((progress - 0.1) * 1.4, 0), 1);
    footerText.style.opacity = visible.toString();
    footerText.style.transform = `translateY(${80 * (1 - visible)}px)`;
  }
}

// ==============================
// DOWNLOAD AS PDF BUTTON
// ==============================
function setupPrintButton() {
  const btn = document.getElementById("downloadPDF");
  if (!btn) return;

  btn.addEventListener("click", () => {
    // Relies on your @media print CSS to keep it as a single page
    window.print();
  });
}

// ==============================
// EVENT HOOKUP
// ==============================
function onScroll() {
  handleReveal();
  handleFooterParallax();
}

// Run on scroll
window.addEventListener("scroll", onScroll);

// Run once when page is fully loaded (images & layout ready)
window.addEventListener("load", onScroll);

// Setup the print button once DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  setupPrintButton();
});
