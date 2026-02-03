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
    if (!refs.modal) return;

    refs.modal.classList.toggle("is-open");
    document.body.classList.toggle(
      "no-scroll",
      refs.modal.classList.contains("is-open")
    );
  }

  function onBackdropClick(e) {
    if (e.target === refs.modal) {
      closeModal();
    }
  }

  function closeModal() {
    if (!refs.modal) return;

    refs.modal.classList.remove("is-open");
    document.body.classList.remove("no-scroll");
  }

  // ===== MOBILE MENU =====
  refs.menuBtn?.addEventListener("click", toggleMenu);
  refs.menuClose?.addEventListener("click", closeMenu);
  refs.menuLinks.forEach(link => link.addEventListener("click", closeMenu));

  function toggleMenu() {
    if (!refs.menu || !refs.menuBtn) return;

    const isOpen = refs.menu.classList.toggle("is-open");
    refs.menuBtn.setAttribute("aria-expanded", String(isOpen));
    document.body.classList.toggle("no-scroll", isOpen);
  }

  function closeMenu() {
    if (!refs.menu || !refs.menuBtn) return;

    refs.menu.classList.remove("is-open");
    refs.menuBtn.setAttribute("aria-expanded", "false");
    document.body.classList.remove("no-scroll");
  }

  // ===== ESC =====
  window.addEventListener("keydown", e => {
    if (e.key !== "Escape") return;

    if (refs.modal?.classList.contains("is-open")) {
      closeModal();
    }

    if (refs.menu?.classList.contains("is-open")) {
      closeMenu();
    }
  });
})();
