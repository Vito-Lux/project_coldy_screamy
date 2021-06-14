(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-login-open]'),
    closeModalBtn: document.querySelector('[data-modal-login-close]'),
    modal: document.querySelector('[data-modal-login]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
