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
// FOOTER ZOOM + PARALLAX REVEAL
// ==============================
function handleFooterZoomParallax() {
  const footer = document.querySelector(".footer");
  if (!footer) return;

  const rect = footer.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  // How much of the footer is visible (0 = not visible, 1 = fully visible)
  const visible = Math.min(
    windowHeight,
    Math.max(0, windowHeight - rect.top)
  );
  const maxVisible = Math.min(windowHeight, rect.height || footer.offsetHeight);
  let progress = maxVisible > 0 ? visible / maxVisible : 0;

  // Clamp 0–1
  progress = Math.max(0, Math.min(progress, 1));

  // Zoom: from 120% -> 100%
  const startZoom = 85;
  const endZoom = 75;
  const currentZoom = startZoom - (startZoom - endZoom) * progress;

  // Vertical position: from 90% -> 70% (moves focus upward)
  const startPos = 90;
  const endPos = 70;
  const currentPos = startPos - (startPos - endPos) * progress;

  footer.style.backgroundSize = `${currentZoom}% auto`;
  footer.style.backgroundPosition = `center ${currentPos}%`;
}

// ==============================
// DOWNLOAD PDF BUTTON
// ==============================
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("downloadPDF");
  if (btn) {
    btn.addEventListener("click", () => {
      // Replace the URL below with your actual GitHub file path
      const pdfUrl = "https://raw.githubusercontent.com/lajhinfo-creator/Schwab-learning-journey/main/Lorne%20Hopkins%20-%201%20pager%20Presentation.pdf";
      
      const link = document.createElement("a");
      link.href = pdfUrl;
      link.download = "Lorne Hopkins - 1 Pager Presentation.pdf"; // download name
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  }
});


// ==============================
// EVENT HOOKUP
// ==============================
function onScroll() {
  handleReveal();
  handleFooterZoomParallax();
}

window.addEventListener("scroll", onScroll);

window.addEventListener("load", () => {
  setupPrintButton();
  handleReveal();
  handleFooterZoomParallax();
});

document.addEventListener("DOMContentLoaded", () => {
  setupPrintButton();
  handleReveal();
  handleFooterZoomParallax();
});
