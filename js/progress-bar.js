(() => {
  let fullHeight, innerHeight;
  const progressBar = document.querySelector('.progress-bar__line');

  window.addEventListener('scroll', progressLine);
  window.addEventListener('resize', progressLine);

  function progressLine() {
    fullHeight = document.body.scrollHeight;
    innerHeight = window.innerHeight;
    progressBar.style.width = (pageYOffset * 100) / (fullHeight - innerHeight) + '%';
  }
})();
