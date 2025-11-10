// ==============================
// SCROLL REVEAL FOR SECTIONS
// ==============================
function handleReveal() {
  const sections = document.querySelectorAll(".section.reveal");
  const windowHeight = window.innerHeight;
  const offset = 120;

  sections.forEach((section) => {
    const top = section.getBoundingClientRect().top;
    if (top < windowHeight - offset) {
      section.classList.add("visible");
    }
  });
}

// ==============================
// PDF DOWNLOAD / PRINT
// ==============================
function setupPrintButton() {
  const btn = document.getElementById("downloadPDF");
  if (!btn) return;

  btn.addEventListener("click", () => {
    // Let the browser's print dialog handle scaling;
    // our @media print CSS keeps it to one page.
    window.print();
  });
}

// ==============================
// EVENT HOOKUP
// ==============================
function onScroll() {
  handleReveal();
}

window.addEventListener("scroll", onScroll);

window.addEventListener("load", () => {
  setupPrintButton();
  handleReveal();
});

document.addEventListener("DOMContentLoaded", () => {
  setupPrintButton();
  handleReveal();
});
