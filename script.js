/* ========================================
   HAMBURGER MENU TOGGLE
   ======================================== */
const hamburgerBtn = document.getElementById('hamburger-btn');
const mainNav = document.getElementById('main-nav');

hamburgerBtn.addEventListener('click', () => {
  mainNav.classList.toggle('active');
  // Toggle between ☰ and ✕
  hamburgerBtn.innerHTML = mainNav.classList.contains('active') ? '&times;' : '&#9776;';
});

// Close menu when clicking a link
mainNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('active');
    hamburgerBtn.innerHTML = '&#9776;';
  });
});

/* ========================================
   CAROUSELS
   ======================================== */
function initCarousel(sectionIndex, prevId, nextId) {
  const carouselSection = document.querySelectorAll('.carousel-section')[sectionIndex];
  if (!carouselSection) return;

  const imagesContainer = carouselSection.querySelector('.carousel-images');
  const prevButton = document.getElementById(prevId);
  const nextButton = document.getElementById(nextId);
  const totalImages = imagesContainer.querySelectorAll('img').length;
  let currentIndex = 0;

  function update() {
    imagesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalImages - 1;
    update();
  });

  nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex < totalImages - 1) ? currentIndex + 1 : 0;
    update();
  });

  // Auto-play every 5 seconds
  setInterval(() => {
    currentIndex = (currentIndex < totalImages - 1) ? currentIndex + 1 : 0;
    update();
  }, 5000);
}

initCarousel(0, 'prev', 'next');
initCarousel(1, 'prev1', 'next1');
initCarousel(2, 'prev2', 'next2');

/* ========================================
   SCROLL ANIMATIONS — IntersectionObserver
   ======================================== */
const sections = document.querySelectorAll('section');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');

      // Set sequential animation delays for all skills across containers
      if (entry.target.id === 'skillss') {
        const allSkills = entry.target.querySelectorAll('.skill');
        allSkills.forEach((skill, index) => {
          skill.style.animationDelay = `${index * 0.08}s`;
        });
      }

      // Animate children with .animate-item class
      const animItems = entry.target.querySelectorAll('.animate-item');
      animItems.forEach((item, index) => {
        setTimeout(() => {
          item.classList.add('show');
        }, index * 120);
      });
    }
  });
}, {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
});

sections.forEach(section => {
  sectionObserver.observe(section);
});