document.addEventListener('DOMContentLoaded', function () {
  // Theme Toggle
  const themeToggle = document.querySelector('.theme-toggle');
  const themeIcon = document.getElementById('theme-icon');
  const themeIconMobile = document.getElementById('theme-icon-mobile');

  function setTheme(theme) {
    if (theme === 'dark') {
      document.body.classList.add('dark-mode');
      themeIcon.innerHTML = `<path d="M12 3a9 9 0 0 0 9 9 9 9 0 1 1-9 9V3z"></path>`;
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-mode');
      themeIcon.innerHTML = `<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>`;
      localStorage.setItem('theme', 'light');
    }
  }

  // Initial theme setup
  const savedTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  setTheme(savedTheme);

  themeToggle.addEventListener('click', () => {
    const currentTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  });

  // Navbar Scroll Effect
  const navbar = document.querySelector('.navbar');

  function handleScroll() {
    if (window.scrollY > 10) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', handleScroll);

  // Mobile Menu Toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');

  menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
  });

  //Mobile theme toggle
  const mobileThemeToggle = document.querySelector('.mobile-theme-toggle');

  mobileThemeToggle.addEventListener('click', () => {
    const currentTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    mobileMenu.classList.remove('active');
  });

  const mobileReportBug = document.querySelector('.mobile-report-bug');

  mobileReportBug.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
  });

  // Lab Tabs Functionality
  const tabs = document.querySelectorAll('.lab-tab');
  const tabIndicator = document.querySelector('.lab-tab-indicator');
  let activeTab = document.querySelector('.lab-tab.active');
  const tabContents = document.querySelectorAll('.tab-content');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Remove active class from previous tab
      document.querySelector('.lab-tab.active').classList.remove('active');

      // Add active class to clicked tab
      tab.classList.add('active');
      activeTab = tab;

      // Move indicator
      moveIndicator(activeTab);

      // Show the selected tab content
      const tabId = tab.getAttribute('data-tab');
      showTabContent(tabId);
    });
  });

  function moveIndicator(activeTab) {
    tabIndicator.style.left = activeTab.offsetLeft + 'px';
    tabIndicator.style.width = activeTab.offsetWidth + 'px';
  }

  function showTabContent(tabId) {
    tabContents.forEach(content => {
      content.classList.remove('active');
    });

    const selectedContent = document.getElementById(`${tabId}-content`);
    if (selectedContent) {
      selectedContent.classList.add('active');
    }
  }

  // Initialize indicator position and show initial tab content on page load
  moveIndicator(activeTab);
  showTabContent(activeTab.getAttribute('data-tab'));

  // Carousel functionality
  const carouselTrack = document.querySelector('.carousel-track');
  const slides = document.querySelectorAll('.resource-card');
  const prevButton = document.querySelector('.carousel-button.prev');
  const nextButton = document.querySelector('.carousel-button.next');
  const dotsContainer = document.querySelector('.carousel-dots');
  let slideIndex = 0;
  const numSlides = slides.length;
  let slideWidth = slides[0].offsetWidth + 16; // Card width + margin
  let autoSlideInterval;

  // Initialize dots
  function initializeDots() {
    dotsContainer.innerHTML = ''; // Clear existing dots
    for (let i = 0; i < numSlides; i++) {
      const dot = document.createElement('button');
      dot.classList.add('dot');
      dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
      dot.addEventListener('click', () => {
        goToSlide(i);
        stopAutoSlide();
      });
      dotsContainer.appendChild(dot);
    }
    updateDots();
  }

  function updateDots() {
    const dots = document.querySelectorAll('.carousel-dots .dot');
    dots.forEach((dot, index) => {
      if (index === slideIndex) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });
  }

  function goToSlide(index) {
    slideIndex = index;
    carouselTrack.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
    updateDots();
  }

  function nextSlide() {
    slideIndex = (slideIndex + 1) % numSlides;
    goToSlide(slideIndex);
  }

  function prevSlide() {
    slideIndex = (slideIndex - 1 + numSlides) % numSlides;
    goToSlide(slideIndex);
  }

  function startAutoSlide() {
    autoSlideInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
  }

  function stopAutoSlide() {
    clearInterval(autoSlideInterval);
  }

  prevButton.addEventListener('click', () => {
    prevSlide();
    stopAutoSlide();
  });
  nextButton.addEventListener('click', () => {
    nextSlide();
    stopAutoSlide();
  });

  initializeDots();
  goToSlide(0);
  startAutoSlide(); // Start auto-sliding

  window.addEventListener('resize', () => {
    slideWidth = slides[0].offsetWidth + 16;
    carouselTrack.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
  });

  // Star Rating
  const stars = document.querySelectorAll('.star');
  let rating = 0; // Keep track of the current rating

  stars.forEach(star => {
    star.addEventListener('click', function () {
      const starValue = parseInt(this.dataset.rating);

      // Update the rating
      rating = starValue;

      // Update the stars
      stars.forEach(s => {
        if (parseInt(s.dataset.rating) <= rating) {
          s.textContent = '★'; // Filled star
          s.classList.add('active');
        } else {
          s.textContent = '☆'; // Empty star
          s.classList.remove('active');
        }
      });

      // Optional: Log the rating to the console
      console.log('Rating:', rating);
    });
  });

  // Bug Report
  const reportBugButton = document.querySelector('.report-bug-button');
  const bugReportFormOverlay = document.querySelector('.bug-report-form-overlay');

  reportBugButton.addEventListener('click', function (event) {
    event.preventDefault(); // Prevent default anchor behavior
    bugReportFormOverlay.classList.add('active'); // Show the form
  });

  // Close the form when clicking outside of it
  bugReportFormOverlay.addEventListener('click', function (event) {
    if (event.target === this) {
      bugReportFormOverlay.classList.remove('active');
    }
  });

  // Discussion section functionality

  // Add event listeners to reply buttons
  document.querySelectorAll('.reply-button').forEach(button => {
    button.addEventListener('click', function () {
      // Find the parent comment
      const comment = this.closest('.comment');

      // Toggle the visibility of the replies
      const replies = comment.querySelector('.replies');
      if (replies) {
        replies.style.display = replies.style.display === 'none' ? 'block' : 'none';
      } else {
        // If there are no replies, you might want to add a reply input
        console.log("Add reply input here");
      }
    });
  });
});