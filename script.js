const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const helpBtn = document.getElementById("helpBtn");
const toast = document.getElementById("toast");

function showToast(message) {
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(window.toastTimer);
  window.toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2500);
}

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", isOpen);
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

document.querySelectorAll(".feature-card").forEach(card => {
  card.addEventListener("click", () => {
    showToast(card.dataset.message);
  });
});

if (helpBtn) {
  helpBtn.addEventListener("click", () => {
    showToast("For assistance, please contact the campus administration.");
  });
}