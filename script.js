/*CARRUSEL 1 */
const images1 = document.querySelectorAll('.carousel-section')[0].querySelector('.carousel-images');
const prevButton1 = document.getElementById('prev');
const nextButton1 = document.getElementById('next');
const totalImages1 = images1.querySelectorAll('img').length;
let currentIndex1 = 0;

function updateCarousel1() {
  images1.style.transform = `translateX(-${currentIndex1 * 100}%)`;
}

prevButton1.addEventListener('click', () => {
  currentIndex1 = (currentIndex1 > 0) ? currentIndex1 - 1 : totalImages1 - 1;
  updateCarousel1();
});

nextButton1.addEventListener('click', () => {
  currentIndex1 = (currentIndex1 < totalImages1 - 1) ? currentIndex1 + 1 : 0;
  updateCarousel1();
});

/*CARRUSEL 2 */
const images2 = document.querySelectorAll('.carousel-section')[1].querySelector('.carousel-images');
const prevButton2 = document.getElementById('prev1');
const nextButton2 = document.getElementById('next1');
const totalImages2 = images2.querySelectorAll('img').length;
let currentIndex2 = 0;

function updateCarousel2() {
  images2.style.transform = `translateX(-${currentIndex2 * 100}%)`;
}

prevButton2.addEventListener('click', () => {
  currentIndex2 = (currentIndex2 > 0) ? currentIndex2 - 1 : totalImages2 - 1;
  updateCarousel2();
});

nextButton2.addEventListener('click', () => {
  currentIndex2 = (currentIndex2 < totalImages2 - 1) ? currentIndex2 + 1 : 0;
  updateCarousel2();
});

/* CARRUSEL 3 */
const images3 = document.querySelectorAll('.carousel-section')[2].querySelector('.carousel-images');
const prevButton3 = document.getElementById('prev2');
const nextButton3 = document.getElementById('next2');
const totalImages3 = images3.querySelectorAll('img').length;
let currentIndex3 = 0;

function updateCarousel3() {
  images3.style.transform = `translateX(-${currentIndex3 * 100}%)`;
}

prevButton3.addEventListener('click', () => {
  currentIndex3 = (currentIndex3 > 0) ? currentIndex3 - 1 : totalImages3 - 1;
  updateCarousel3();
});

nextButton3.addEventListener('click', () => {
  currentIndex3 = (currentIndex3 < totalImages3 - 1) ? currentIndex3 + 1 : 0;
  updateCarousel3();
});