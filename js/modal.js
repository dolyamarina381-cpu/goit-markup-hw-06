(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),

    menuBtn: document.querySelector("[data-menu-btn]"),
    menuClose: document.querySelector("[data-menu-close]"),
    menu: document.querySelector("[data-menu]"),
    menuLinks: document.querySelectorAll("[data-menu] .mobile-nav-link"),
  };

  // ===== MODAL =====
  refs.openModalBtn?.addEventListener("click", toggleModal);
  refs.closeModalBtn?.addEventListener("click", toggleModal);
  refs.modal?.addEventListener("click", onBackdropClick);

  function toggleModal() {
    refs.modal.classList.toggle("is-open");
  }

  function onBackdropClick(e) {
    if (e.target === refs.modal) {
      refs.modal.classList.remove("is-open");
    }
  }

  // ===== MOBILE MENU =====
  refs.menuBtn?.addEventListener("click", toggleMenu);
  refs.menuClose?.addEventListener("click", closeMenu);
  refs.menuLinks.forEach(link => link.addEventListener("click", closeMenu));

  function toggleMenu() {
    refs.menu.classList.toggle("is-open");
    refs.menuBtn.setAttribute(
      "aria-expanded",
      refs.menu.classList.contains("is-open")
    );
  }

  function closeMenu() {
    refs.menu.classList.remove("is-open");
    refs.menuBtn.setAttribute("aria-expanded", "false");
  }

  // ===== ESC =====
  window.addEventListener("keydown", e => {
    if (e.key === "Escape") {
      refs.modal.classList.remove("is-open");
      closeMenu();
    }
  });
})();
