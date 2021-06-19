$(document).ready(function () {
  $('.exit-popup').hide();
  $('body').mouseleave(function () {
    $('.exit-popup').slideDown(20);
  });
  $('.close').click(function () {
    $('.exit-popup').toggleClass('is-hidden').slideToggle(300);
  });
});
