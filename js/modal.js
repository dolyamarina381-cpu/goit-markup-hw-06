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

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);
  refs.modal.addEventListener("click", onBackdropClick);
  refs.menuBtn.addEventListener("click", toggleMenu);
  refs.menuClose.addEventListener("click", toggleMenu);
  refs.menuLinks.forEach(link => link.addEventListener("click", closeMenu));

  window.addEventListener("keydown", onEscPress);

  function toggleModal() {
    refs.modal.classList.toggle("is-open");
  }

  function onBackdropClick(event) {
    if (event.target === refs.modal) {
      refs.modal.classList.remove("is-open");
    }
  }

  function toggleMenu() {
    refs.menu.classList.toggle("is-open");
    refs.menuBtn.setAttribute("aria-expanded", 
      refs.menuBtn.getAttribute("aria-expanded") === "false" ? "true" : "false");
  }

  function closeMenu() {
    refs.menu.classList.remove("is-open");
    refs.menuBtn.setAttribute("aria-expanded", "false");
  }

  function onEscPress(event) {
    if (event.key === "Escape") {
      refs.modal.classList.remove("is-open");
      closeMenu();
    }
  }
})();
