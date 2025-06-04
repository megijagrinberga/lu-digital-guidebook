let currentIndex = 0;
const carouselWrapper = document.querySelector('.carousel-wrapper');
const prevBtn = document.querySelector('.carousel-button.prev');
const nextBtn = document.querySelector('.carousel-button.next');
let itemsPerPage = window.innerWidth < 500 ? 1 : window.innerWidth < 1000 ? 2 : 3;

window.addEventListener('resize', () => {
  const newItemsPerPage = window.innerWidth < 500 ? 1 : window.innerWidth < 1000 ? 2 : 3;
  if (newItemsPerPage !== itemsPerPage) {
    itemsPerPage = newItemsPerPage;
    moveSlide(0);
  }
});

function moveSlide(direction) {
  const totalPages = window.innerWidth < 500 ? 6 : window.innerWidth < 1000 ? 5 : 4;

  if (direction === 0) {
    currentIndex = 0;
  } else {
    if (direction > 0 && currentIndex >= totalPages - 1) return;
    if (direction < 0 && currentIndex <= 0) return;
    currentIndex += direction;
  }

  carouselWrapper.style.transform = `translateX(-${(currentIndex * 100) / itemsPerPage + 0.25}%)`;

  if (currentIndex === 0) {
    prevBtn.classList.add('disabled');
    prevBtn.disabled = true;
  } else {
    prevBtn.classList.remove('disabled');
    prevBtn.disabled = false;
  }

  if (currentIndex === totalPages - 1) {
    nextBtn.classList.add('disabled');
    nextBtn.disabled = true;
  } else {
    nextBtn.classList.remove('disabled');
    nextBtn.disabled = false;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  moveSlide(0);
});

const toggleTheme = () => {
  const body = document.querySelector('#lx');
  const teamsImg = document.querySelector('#remote-img');
  const themeBtn = document.querySelector('#theme');

  if (body.classList.contains('lx-theme-dark')) {
    body.classList.remove('lx-theme-dark');
    body.classList.add('lx-theme-light');
    localStorage.setItem('theme', 'light');
    if (teamsImg) teamsImg.src = 'imgs/teams-light.PNG';
    if (themeBtn) themeBtn.title = 'Pāriet uz tumšo režīmu';
  } else {
    body.classList.remove('lx-theme-light');
    body.classList.add('lx-theme-dark');
    localStorage.setItem('theme', 'dark');
    if (teamsImg) teamsImg.src = 'imgs/teams-dark.PNG';
    if (themeBtn) themeBtn.title = 'Pāriet uz gaišo režīmu';
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  const body = document.querySelector('#lx');
  const themeBtn = document.querySelector('#theme');

  if (savedTheme === 'dark') {
    body.classList.add('lx-theme-dark');
    body.classList.remove('lx-theme-light');
    if (themeBtn) themeBtn.title = 'Pāriet uz gaišo režīmu';
  } else {
    body.classList.add('lx-theme-light');
    body.classList.remove('lx-theme-dark');
    if (themeBtn) themeBtn.title = 'Pāriet uz tumšo režīmu';
  }
});