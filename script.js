// Tanish Trading Hub — minimal interaction layer.
// No analytics, no tracking, no fake live-data simulation.

(function () {
  "use strict";

  // ---- Mobile nav toggle ----
  var toggle = document.getElementById("navToggle");
  var mobileNav = document.getElementById("mobileNav");

  if (toggle && mobileNav) {
    toggle.addEventListener("click", function () {
      var isOpen = mobileNav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });

    mobileNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        mobileNav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // ---- Contact form ----
  // This form has no backend wired up in this static template.
  // It validates input and shows an honest status message rather
  // than pretending a message was sent somewhere.
  var form = document.getElementById("contactForm");
  var status = document.getElementById("formStatus");

  if (form && status) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = form.querySelector("#cf-name").value.trim();
      var email = form.querySelector("#cf-email").value.trim();
      var message = form.querySelector("#cf-message").value.trim();

      if (!name || !email || !message) {
        status.textContent = "Please fill in every field before sending.";
        status.style.color = "var(--clay)";
        return;
      }

      // Connect this to a real form backend (e.g. your own server,
      // Formspree, or a mailto fallback) before going live.
      status.textContent = "Thanks — connect this form to a real inbox to start receiving messages.";
      status.style.color = "var(--sage)";
      form.reset();
    });
  }
})();
