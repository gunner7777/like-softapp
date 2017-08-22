document.addEventListener('DOMContentLoaded', function() {
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
});