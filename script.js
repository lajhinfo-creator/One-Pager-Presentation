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
// PARALLAX REVEAL FOR FOOTER IMAGE
// ==============================
function handleFooterParallax() {
  const footer = document.querySelector(".footer");
  const footerText = document.querySelector(".footer-text");
  if (!footer) return;

  const rect = footer.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  // How much of the footer is in view
  const visibleAmount = Math.min(windowHeight, Math.max(0, windowHeight - rect.top));
  const progress = visibleAmount / Math.min(windowHeight, rect.height || windowHeight);
  const clamped = Math.max(0, Math.min(progress, 1));

  // Parallax background position (subtle)
  const parallaxOffset = clamped * 30 - 15; // range roughly -15px to +15px
  footer.style.backgroundPosition = `center ${parallaxOffset}px`;

  // Fade + slide the outcome text in as the footer comes into view
  if (footerText) {
    if (clamped > 0.15) {
      footerText.style.opacity = "1";
      footerText.style.transform = "translateY(0)";
    } else {
      footerText.style.opacity = "0";
      footerText.style.transform = "translateY(20px)";
    }
  }
}

// ==============================
// DOWNLOAD AS PDF BUTTON
// ==============================
function setupPrintButton() {
  const btn = document.getElementById("downloadPDF");
  if (!btn) return;

  btn.addEventListener("click", () => {
    // Uses your @media print rules to keep it one beautiful page
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

window.addEventListener("scroll", onScroll);
window.addEventListener("load", () => {
  handleReveal();
  handleFooterParallax();
});

document.addEventListener("DOMContentLoaded", () => {
  setupPrintButton();
  handleReveal();
  handleFooterParallax();
});
