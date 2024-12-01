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

document.querySelectorAll('.menu').forEach(function(menu) {
  menu.addEventListener('click', function() {
      // Toggle the 'active' class on the menu
      menu.classList.toggle('active');
  });
});

document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      const offset = 200;
      const targetPosition = target.offsetTop - offset;

      window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
      });
  });
});

  document.addEventListener("DOMContentLoaded", () => {
    const adjustTextSize = () => {
        const baseFontSize = 16;
        const scalingFactor = window.innerWidth / 1000; 
        
        const newFontSize = baseFontSize * Math.min(scalingFactor, 1.5); 
        
        document.body.style.fontSize = `${newFontSize}px`;

    };

    adjustTextSize();
    window.addEventListener("resize", adjustTextSize);
});