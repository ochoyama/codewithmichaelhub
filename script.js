
// Hamburger toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', (e) => {
  e.stopPropagation(); // prevent immediate close
  navMenu.classList.toggle('show');
  hamburger.classList.toggle('active');
});

// Close menu function
function closeMenu() {
  navMenu.classList.remove('show');
  hamburger.classList.remove('active');
}







