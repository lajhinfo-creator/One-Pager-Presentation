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
// Dramatic 60vh Parallax Reveal for Footer
function handleFooterParallax() {
  const footer = document.querySelector(".footer");
  const footerText = document.querySelector(".footer-text");
  if (!footer) return;

  const rect = footer.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  // progress = how much of the footer is visible (0 = offscreen, 1 = fully visible)
  const progress = 1 - Math.min(Math.max(rect.top / windowHeight, 0), 1);

  // Dramatic parallax movement (larger range)
  const baseY = 60;        // starting Y position (%)
  const parallaxRange = 40; // movement range (increase for more dramatic effect)
  const newPos = baseY - progress * parallaxRange;
  footer.style.backgroundPosition = `center ${newPos}%`;

  // Dramatic text reveal (fade + long lift)
  if (footerText) {
    const visible = Math.min(Math.max((progress - 0.1) * 1.4, 0), 1); // smooth easing
    footerText.style.opacity = visible;
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
