document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("[data-modal]").forEach(el => {
      el.addEventListener("click", e => {
        e.preventDefault();
        const modalId = el.getAttribute("data-modal");
        const modal = document.getElementById(modalId);
        if (modal) modal.style.display = "block";
      });
    });
  
    document.querySelectorAll(".close").forEach(closeBtn => {
      closeBtn.addEventListener("click", () => {
        const modalId = closeBtn.getAttribute("data-close");
        const modal = document.getElementById(modalId);
        if (modal) modal.style.display = "none";
      });
    });
  
    window.addEventListener("click", (event) => {
      if (event.target.classList.contains("modal")) {
        event.target.style.display = "none";
      }
    });
  });
  