document.addEventListener('DOMContentLoaded', function() {
  adjustMenu();
});

window.addEventListener('resize', adjustMenu);
window.addEventListener("orientationchange", adjustMenu);

function adjustMenu() {
  var ww = document.body.clientWidth;

  if(ww > 992) {
    var mainMenu = document.querySelector('.main-menu');
    mainMenu.addEventListener('mouseover', function(e) {
      if(e.target.classList.contains('parent')) {
        e.target.classList.add('active');
        e.target.querySelector('.submenu').classList.add('submenu--show');
      }
    });

    mainMenu.addEventListener('mouseout', function(e) {
        if(e.target.classList.contains('active') && (!e.target.contains(e.relatedTarget))) {
          e.target.querySelector('.submenu').classList.remove('submenu--show');
          e.target.classList.remove('active');
        }
        
        if(!mainMenu.contains(e.relatedTarget) || (e.relatedTarget.classList.contains('main-menu__item'))) {
          var subm = mainMenu.querySelectorAll('.submenu');
          subm.forEach(function(item) {
            item.classList.remove('submenu--show');
          });

          var active = mainMenu.querySelectorAll('.active');
          active.forEach(function(item) {
            item.classList.remove('active');
          });
        }
    });
  } else {
    hideMenuOnScroll();
    showMenu();
    toggleMobileMenu();
  }
}

function showMenu() {
  document.querySelector('.nav__mobile').addEventListener('click', function(e) {
    if(e.target.classList.contains('nav__toggle') || (e.target.classList.contains('nav__mobile'))) {
      document.querySelector('.nav__toggle').classList.toggle('nav--open');
      document.querySelector('.main-menu').classList.toggle('main-menu--show');
    }
  });
}

function toggleMobileMenu() {
  var mainMenu = document.querySelector('.main-menu');
  mainMenu.addEventListener('click', function(e) {
    if(e.target.classList.contains('menu__toggle')) {
      e.target.classList.toggle('menu__toggle--open');
      if(e.target.classList.contains('menu__toggle--open')) {
        e.target.parentNode.nextElementSibling.style.display = 'block';
      } else {
        e.target.parentNode.nextElementSibling.style.display = 'none';
      }
    }
  });
}

function hideMenuOnScroll() {
  window.addEventListener('scroll', function() {
    document.querySelector('.main-menu').classList.remove('main-menu--show');
    document.querySelector('.nav__toggle').classList.remove('nav--open');
  });
}