document.addEventListener('DOMContentLoaded', function() {
  var mainMenu = document.querySelector('.main-menu');

  mainMenu.addEventListener('mouseover', function(e) {
    
    if(e.target.classList.contains('parent')) {
      e.target.nextElementSibling.classList.add('submenu--show');
    }
  });

  mainMenu.addEventListener('mouseout', function(e) {
    console.log(e.relatedTarget);
    setTimeout(function() {
      if(e.relatedTarget.classList.contains('submenu--show')) {
        console.log("dfdf");
      } else {
        e.target.classList.remove('submenu--show');
      }
    }, 800);
  });
});














/*document.addEventListener('DOMContentLoaded', function() {
  var parent = document.querySelectorAll('.parent');
  parent.forEach(function(item) {
    item.addEventListener('mouseenter', showMenu);
    item.addEventListener('mouseleave', function(e) {
      hideMenu(e);
    });
  });


  var submenu = document.querySelectorAll('.submenu');
  submenu.forEach(function(item) {
    item.addEventListener('mouseenter', showMenu);
    item.addEventListener('mouseleave', function(e) {
      hideMenu(e);
    });
  });
});

function showMenu() {
  if(!this.classList.contains('main-menu__link--active')) {
    this.classList.add('main-menu__link--active');
    this.nextElementSibling.classList.add('submenu--show');
  }


  if(this.nextElementSibling.classList.contains('submenu--show')) {
    console.log(this);
    this.nextElementSibling.addEventListener('mouseenter', function() {
      console.log("target");
      this.removeEventListener('mouseleave', hideMenu);
    });
  	//this.nextElementSibling.classList.remove('submenu--show')
  }
}

function hideMenu(e) {
  setTimeout(function() {
    console.log(e.target);
    //this.classList.remove('main-menu__link--active');
    //this.nextElementSibling.classList.remove('submenu--show');
  }, 1000);
}*/