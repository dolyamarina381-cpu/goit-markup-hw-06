(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);
  refs.modal.addEventListener("click", onBackdropClick);

  window.addEventListener("keydown", onEscPress);

  function toggleModal() {
    refs.modal.classList.toggle("is-open");
  }

  function onBackdropClick(event) {
    if (event.target === refs.modal) {
      refs.modal.classList.remove("is-open");
    }
  }

  function onEscPress(event) {
    if (event.key === "Escape") {
      refs.modal.classList.remove("is-open");
    }
  }
})();
