//situation for adjust menu
document.addEventListener('DOMContentLoaded', function() {
  adjustMenu();
});
window.addEventListener('resize', adjustMenu);
window.addEventListener("orientationchange", adjustMenu);


//adjust menu on screen size
function adjustMenu() {
  var ww = document.body.clientWidth;
  var mainMenu = document.querySelector('.main-menu');
  var subm = mainMenu.querySelectorAll('.submenu');
  subm.forEach(function(item) {
    item.style.display = "";
    item.style.opacity = "";
  });
  
  if(ww > 992) {
    
    /*var subm = mainMenu.querySelectorAll('.submenu');
    subm.forEach(function(item) {
      item.style.display = "block";
      item.style.opacity = "";
    });*/
    //document.querySelector('.nav__mobile').removeEventListener('click', toggleMainMenu);

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
          //var subm = mainMenu.querySelectorAll('.submenu');
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
  document.querySelector('.nav__mobile').addEventListener('click', toggleMainMenu);
}

//toggle main menu
function toggleMainMenu(e) {
  if(e.target.classList.contains('nav__toggle') || (e.target.classList.contains('nav__mobile'))) {
    console.log("df");
    document.querySelector('.nav__toggle').classList.toggle('nav--open');
    document.querySelector('.main-menu').classList.toggle('main-menu--show');
  }
}

//toggle submenu
function toggleMobileMenu() {
  var mainMenu = document.querySelector('.main-menu');
  mainMenu.addEventListener('click', function(e) {
    if(e.target.classList.contains('menu__toggle')) {
      e.target.classList.toggle('menu__toggle--open');
      if(e.target.classList.contains('menu__toggle--open')) {
        e.target.parentNode.nextElementSibling.style.display = 'block';
        e.target.parentNode.nextElementSibling.style.opacity = 1;
      } else {
        e.target.parentNode.nextElementSibling.style.display = 'none';
        e.target.parentNode.nextElementSibling.style.opacity = 0;
      }
    }
  });
}

function hideMenuOnScroll() {
  window.addEventListener('scroll', function(e) {
    document.querySelector('.main-menu').classList.remove('main-menu--show');
    document.querySelector('.nav__toggle').classList.remove('nav--open');
  });
}