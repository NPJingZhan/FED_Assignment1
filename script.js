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
      const offset = 200; // Adjust based on your header height
      const targetPosition = target.offsetTop - offset;

      window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
      });
  });
});

  document.addEventListener("DOMContentLoaded", () => {
    const adjustTextSize = () => {
        // Set the base size and scaling factors
        const baseFontSize = 16; // Default font size in pixels
        const scalingFactor = window.innerWidth / 1000; // Adjust based on viewport width
        
        // Set the adjusted font size
        const newFontSize = baseFontSize * Math.min(scalingFactor, 1.5); // Cap scaling for very large screens
        
        // Apply to the body or specific elements
        document.body.style.fontSize = `${newFontSize}px`;

    };

    // Adjust size on page load and window resize
    adjustTextSize();
    window.addEventListener("resize", adjustTextSize);
});