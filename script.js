let lastScrollY = window.scrollY;
  const navbar = document.querySelector('header');

  window.addEventListener('scroll', () => {
    if (window.scrollY > lastScrollY) {
      navbar.style.transform = 'translateY(-100%)'; // Hide navbar
    } else {
      navbar.style.transform = 'translateY(0)'; // Show navbar
    }
    lastScrollY = window.scrollY;
  });

  document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        const offset = 200; // Adjust based on your header height
        const targetPosition = target.offsetTop - offset;

        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    });
});
