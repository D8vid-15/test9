const mobileMenu = document.querySelector('.mobile-menu');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu a');

    // Toggle menu on hamburger click
    mobileMenu.addEventListener('click', function () {
        navMenu.classList.toggle('active');
        mobileMenu.classList.toggle('open');
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : 'auto';
    });

    // Close menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            mobileMenu.classList.remove('open');
            document.body.style.overflow = 'auto';
        });
    });


  document.addEventListener("DOMContentLoaded", function () {
    const breadcrumbNav = document.querySelector(".breadcrumb-nav");
    if (breadcrumbNav) {
      const pageTitle = document.title.replace("Zafike Royal Hotel- ", "").trim();
      // Fix: Remove "Zafike Royal Hotel - " from pageTitle if present
      const cleanTitle = pageTitle.replace(/^Zafike Royal Hotel\s*-\s*/, "");
      breadcrumbNav.innerHTML = `
        <a href="index.html">Home</a>
        <i class="fas fa-chevron-right"></i>
        <span>${cleanTitle}</span>
      `;
    }
  });



        // Navbar scroll effect
        window.addEventListener('scroll', function() {
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        // Preloader Hide Script
        window.addEventListener('load', function() {
            const preloader = document.getElementById('preloader');
            setTimeout(function() {
                preloader.classList.add('hidden');
            }, 1500); // Small delay to ensure smooth transition
        });
