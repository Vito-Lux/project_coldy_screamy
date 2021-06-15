$(document).ready(function () {
  $('.footer-nav__subtitle').click(function (event) {
    // ! Нижняя инструкция скрывает все другие спойлеры и оставляет 1 открытый
    // if ($('.footer-column').hasClass('one-spoiler')) {
    //   $('.footer-nav__subtitle').not($(this)).removeClass('active');
    //   $('.footer-nav-list').not($(this).next()).slideUp(300);
    // }
    $(this).toggleClass('active').next().slideToggle(300);
  });
});
