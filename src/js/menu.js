$(document).ready(function() {
  $('.parent').hover(function() {
    $(this).siblings('.submenu').addClass('submenu--show');
  }, function() {
    $(this).siblings('.submenu').removeClass('submenu--show');
  });
});



/*document.addEventListener('DOMContentLoaded', function() {
  var mainMenu = document.querySelector('.main-menu');

  mainMenu.addEventListener('mouseover', function(e) {
    if(e.target.classList.contains('parent')) {
      e.target.nextElementSibling.classList.add('submenu--show');
    }
  });

<<<<<<< HEAD
  /*mainMenu.addEventListener('mouseout', function(e) {
    setTimeout(function() {
    if(!e.relatedTarget.parentNode.classList.contains('submenu') && !e.relatedTarget.parentNode.classList.contains('submenu__item')) {
      console.log(e.relatedTarget.tagName);
=======
  setTimeout(function() {
    mainMenu.addEventListener('mouseleave', function(e) {
      console.log(e.relatedTarget);
>>>>>>> b6d25106b64f65e7170e8bcc3599ea4d89fde45c
      
        //console.log(e.relatedTarget);
      if(!e.relatedTarget.parentNode.classList.contains('submenu') && !e.relatedTarget.parentNode.classList.contains('submenu__item')) {
        //console.log(e.relatedTarget);
        
          if(e.target.classList.contains('parent')) {
            e.target.nextElementSibling.classList.remove('submenu--show');
          }
        
      }
      

    });
    }, 600);

   



  /*var subMenu = document.querySelector('.submenu');

  subMenu.addEventListener('mouseover', function(e) {
    
  });

  subMenu.addEventListener('mouseout', function(e) {
    
  });

  window.addEventListener('resize', function() {
    console.log('resize');
  });
});*/



/*document.addEventListener('DOMContentLoaded', function() {
  var mainMenu = document.querySelector('.main-menu');

  mainMenu.addEventListener('mouseover', function(e) {
    if(e.target.classList.contains('parent')) {
      e.target.nextElementSibling.classList.add('submenu--show');
    }
  });

  mainMenu.addEventListener('mouseout', function(e) {
    setTimeout(function() {
      if(!e.relatedTarget.classList.contains('parent')) {
        if(!e.relatedTarget.classList.contains('submenu--show')) {
          e.target.nextElementSibling.classList.remove('submenu--show');
        }
      }
      /*if(!e.relatedTarget.classList.contains('submenu--show')) {

        //удалить того чего нет невозможно
        e.relatedTarget.classList.remove('submenu--show');
      }*/
    /*}, 800);
  });
});*/














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