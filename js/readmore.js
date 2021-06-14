(() => {
  const menuBtnRef = document.querySelector('.read-more-button');
  const mobileMenuRef = document.querySelector('.read-more-text');
  menuBtnRef.addEventListener('click', () => {
    const expanded = menuBtnRef.getAttribute('aria-expanded') === 'true' || false;
    menuBtnRef.classList.toggle('is-open');
    menuBtnRef.setAttribute('aria-expanded', !expanded);

    mobileMenuRef.classList.toggle('is-open');
  });
})();

(() => {
  const menuBtnRef = document.querySelector('.read-more-button-sec');
  const mobileMenuRef = document.querySelector('.read-more-text-sec');
  menuBtnRef.addEventListener('click', () => {
    const expanded = menuBtnRef.getAttribute('aria-expanded') === 'true' || false;
    menuBtnRef.classList.toggle('is-open');
    menuBtnRef.setAttribute('aria-expanded', !expanded);

    mobileMenuRef.classList.toggle('is-open');
  });
})();

(() => {
  const menuBtnRef = document.querySelector('.read-more-button-three');
  const mobileMenuRef = document.querySelector('.read-more-text-three');
  menuBtnRef.addEventListener('click', () => {
    const expanded = menuBtnRef.getAttribute('aria-expanded') === 'true' || false;
    menuBtnRef.classList.toggle('is-open');
    menuBtnRef.setAttribute('aria-expanded', !expanded);

    mobileMenuRef.classList.toggle('is-open');
  });
})();

(() => {
  const menuBtnRef = document.querySelector('.read-more-button-fourth');
  const mobileMenuRef = document.querySelector('.read-more-text-fourth');
  menuBtnRef.addEventListener('click', () => {
    const expanded = menuBtnRef.getAttribute('aria-expanded') === 'true' || false;
    menuBtnRef.classList.toggle('is-open');
    menuBtnRef.setAttribute('aria-expanded', !expanded);

    mobileMenuRef.classList.toggle('is-open');
  });
})();
