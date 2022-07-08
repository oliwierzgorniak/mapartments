// https://blog.logrocket.com/build-image-carousel-from-scratch-vanilla-javascript/

let slides = document.querySelectorAll('.slide');
let indicators = document.querySelectorAll('.indicator');

let activePhotoIndex = 0;

slides.forEach((slide, i) => {
  slide.style.transform = `translateX(${i * 100}%)`;
});

function changePhoto() {
  slides.forEach((slide, i) => {
    slide.style.transform = `translateX(${100 * (i - activePhotoIndex)}%)`;
  });

  let activeIndicator = document.querySelector('.indicator--active');
  activeIndicator.classList.remove('indicator--active');
  indicators[activePhotoIndex].classList.add('indicator--active');
}

let prev = document.querySelector('#prev-button');
prev.addEventListener('click', () => {
  if (activePhotoIndex > 0) {
    activePhotoIndex--;
    changePhoto();
  }
});

let next = document.querySelector('#next-button');
next.addEventListener('click', () => {
  if (activePhotoIndex < slides.length - 1) {
    activePhotoIndex++;
    changePhoto();
  }
});

indicators.forEach(indicator => {
  indicator.addEventListener('click', () => {
    activePhotoIndex = +indicator.dataset.index;
    changePhoto();
  });
});
