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
    })
    .catch(err => console.log('Error loading header:', err));

  // Load footer dynamically
  fetch('footer.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('footer').innerHTML = data;
    })
    .catch(err => console.log('Error loading footer:', err));

  // Dark Mode Toggle
  const themeToggle = document.getElementById('theme-toggle');
  themeToggle.addEventListener('click', function () {
    const currentTheme = document.body.getAttribute('data-theme');
    if (currentTheme === 'dark') {
      document.body.setAttribute('data-theme', 'light');
    } else {
      document.body.setAttribute('data-theme', 'dark');
    }
  });

  // Hide Preloader after page load
  window.addEventListener('load', function () {
  const preloader = document.getElementById('preloader');
  preloader.classList.add('hide');

  // Optional fallback: force hide after 5 seconds
  setTimeout(() => preloader.classList.add('hide'), 5000);
});
