document.addEventListener('DOMContentLoaded', function () {
  var drop = document.querySelector('.navdrop');
  if (drop) {
    var trigger = drop.querySelector('.hasmenu');
    trigger.addEventListener('click', function (e) {
      if (window.matchMedia('(hover: hover)').matches) return;
      e.preventDefault();
      drop.classList.toggle('open');
    });
    document.addEventListener('click', function (e) {
      if (!drop.contains(e.target)) drop.classList.remove('open');
    });
  }

  var burger = document.querySelector('.hamburger');
  var mainNav = document.querySelector('header nav');
  if (burger && mainNav) {
    burger.addEventListener('click', function () {
      mainNav.classList.toggle('navopen');
    });
  }
});
