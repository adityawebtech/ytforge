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
});
