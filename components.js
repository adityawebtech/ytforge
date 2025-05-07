<script>
  async function loadComponent(id, file) {
    const res = await fetch(file);
    const text = await res.text();
    document.getElementById(id).innerHTML = text;

    // Only add event listener after header is loaded
    if (id === "header") {
      const mobileMenu = document.getElementById("mobile-menu");
      const navLinks = document.querySelector(".nav-links");

      if (mobileMenu && navLinks) {
        mobileMenu.addEventListener("click", () => {
          navLinks.classList.toggle("active");
        });
      }
    }
  }

  loadComponent("header", "header.html");
  loadComponent("footer", "footer.html");
</script>
