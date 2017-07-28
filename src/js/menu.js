document.addEventListener('DOMContentLoaded', function() {
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
}