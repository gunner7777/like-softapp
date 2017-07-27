document.addEventListener('DOMContentLoaded', function() {
  var parent = document.querySelectorAll('.parent');
  parent.forEach(function(item) {
    item.addEventListener('mouseenter', toggleMenu);
    item.addEventListener('mouseleave', toggleMenu);
  });
});

function toggleMenu() {
  console.log(this.nextSibling.nextSibling);
  this.nextSibling.nextSibling.classList.add('submenu--open');
}