let lastScrollY = window.scrollY;
  const navbar = document.querySelector('header');

  window.addEventListener('scroll', () => {
    if (window.scrollY > lastScrollY) {
      // Scrolling down
      navbar.style.transform = 'translateY(-100%)'; // Hide navbar
    } else {
      // Scrolling up
      navbar.style.transform = 'translateY(0)'; // Show navbar
    }
    lastScrollY = window.scrollY;
  });
