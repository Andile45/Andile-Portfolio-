// Interactivity for portfolio
document.addEventListener("DOMContentLoaded", function () {
  const navToggle = document.getElementById("nav-toggle");
  const nav = document.getElementById("nav");
  navToggle.addEventListener("click", () => nav.classList.toggle("show"));

  // Project buttons show simple modal-style alert (replace with real modals if desired)
  document.querySelectorAll("[data-info]").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const id = e.currentTarget.getAttribute("data-info");
      alert(
        "Project details:\n" +
          id +
          "\n\nYou can replace this with a modal or link to a repo/demo."
      );
    });
  });

  document.querySelectorAll("[data-demo]").forEach((btn) => {
    btn.addEventListener("click", () => {
      // Demo placeholder
      alert(
        "Demo not hosted — this is a placeholder. Add your demo URL in the HTML or change this handler."
      );
    });
  });

  // Contact form handling (front-end only)
  const form = document.getElementById("contactForm");
  const feedback = document.getElementById("formFeedback");
  form.addEventListener("submit", (ev) => {
    ev.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    if (!name || !email || !message) {
      feedback.textContent = "Please fill all fields.";
      return;
    }
    feedback.textContent = "Thanks, " + name + "! ";
    form.reset();
    setTimeout(() => (feedback.textContent = ""), 5000);
  });

  document.getElementById("clear").addEventListener("click", () => {
    form.reset();
    document.getElementById("formFeedback").textContent = "";
  });

  // Download ZIP button — attempts to download the packaged site (link provided by host)
  const downloadBtn = document.getElementById("download-cv");
  downloadBtn.addEventListener("click", () => {
    // the href will be set by the server or in the distributed zip; we attempt to fetch a known path
    window.location.href = "andile_portfolio.zip";
  });
});
