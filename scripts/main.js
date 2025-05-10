document.addEventListener('DOMContentLoaded', function () {
  // Load header dynamically
  fetch('header.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('header').innerHTML = data;

      // Add hamburger menu toggle functionality after header is loaded
      const navbar = document.querySelector('.navbar');
      const hamburger = document.querySelector('.hamburger');
      hamburger.addEventListener('click', function () {
        navbar.classList.toggle('active');
      });

      // Add dark mode toggle functionality
      const themeToggle = document.getElementById('theme-toggle');
      themeToggle.addEventListener('click', function () {
        const currentTheme = document.body.getAttribute('data-theme');
        if (currentTheme === 'dark') {
          document.body.setAttribute('data-theme', 'light');
        } else {
          document.body.setAttribute('data-theme', 'dark');
        }
      });
    })
    .catch(err => console.log('Error loading header:', err));

  // Load footer dynamically
  fetch('footer.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('footer').innerHTML = data;
    })
    .catch(err => console.log('Error loading footer:', err));

  // Remove preloader after window load
  window.onload = function() {
    const preloader = document.getElementById('preloader');
    preloader.style.opacity = '0';
    setTimeout(() => preloader.style.display = 'none', 300);
  }
});
