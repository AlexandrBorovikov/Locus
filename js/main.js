// Бургер меню=============================================

const iconMenu = document.querySelector('.menu');
const navMenu = document.querySelector('.nav');

if (iconMenu) {
  iconMenu.addEventListener("click", function (e) {
    document.body.classList.toggle('lock');
    iconMenu.classList.toggle('burger');
    navMenu.classList.toggle('active');
  });
}

// Прокрутка при клике=========================================
const menuLinks = document.querySelectorAll('.nav__link[data-goto]');
if (menuLinks.length > 0) {
  menuLinks.forEach(menuLink => {
    menuLink.addEventListener('click', onMenuLinkClick);
  });

  function onMenuLinkClick(e) {
    const menuLink = e.target;
    if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
      const gotoBlock = document.querySelector(menuLink.dataset.goto);
      const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('.header__logo-wrap').offsetHeight;

      if (iconMenu.classList.contains('burger')) {
        document.body.classList.remove('lock');
        iconMenu.classList.remove('burger');
        navMenu.classList.remove('active');
      }

      window.scrollTo({
        top: gotoBlockValue,
        behavior: "smooth"
      });
      e.preventDefault();
    }
  }
}