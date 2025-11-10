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
// DOWNLOAD AS PDF BUTTON
// ==============================
function setupPrintButton() {
  const btn = document.getElementById("downloadPDF");
  if (!btn) return;

  btn.addEventListener("click", () => {
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
window.addEventListener("load", handleReveal);

document.addEventListener("DOMContentLoaded", () => {
  setupPrintButton();
});
