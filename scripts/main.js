document.addEventListener('DOMContentLoaded', function () {
  // Load header
  fetch('header.html')
    .then(response => response.text())
    .then(data => document.getElementById('header').innerHTML = data);

  // Load footer
  fetch('footer.html')
    .then(response => response.text())
    .then(data => document.getElementById('footer').innerHTML = data);

  // Hamburger Menu functionality
  const navbar = document.querySelector('.navbar');
  const hamburger = document.querySelector('.hamburger');
  
  hamburger.addEventListener('click', function () {
    navbar.classList.toggle('active');
  });
});
