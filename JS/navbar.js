
const navbar = document.getElementById('navbar');

let isNavbarVisible = false;

document.addEventListener('mousemove', (e) => {
  if (e.clientY < 50) {
    if (!isNavbarVisible) {
      navbar.classList.add('active');
      isNavbarVisible = true;
    }
  } else {
    if (isNavbarVisible) {
      navbar.classList.remove('active');
      isNavbarVisible = false;
    }
  }
});