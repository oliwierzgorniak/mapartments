const apartments = [
  {
    name: 'MaPa Podgórze',
    distance: '2.9km od Rynku Głównego',
    kitchen: 'wyposażona kuchnia',
    wifi: 'dostęp do wifi i Netflix',
    capacity: 'do 4 osób',
    link: '/mapa-podgorze',
  },
  {
    name: 'MaPa Kazimierz',
    distance: '1.1km od Rynku Głównego',
    kitchen: 'wyposażona kuchnia',
    wifi: 'dostęp do wifi',
    capacity: 'do 4 dorosłych + 2 dzieci',
    link: '/mapa-kazmierz',
  },
];

let activeIndex = 0;
function chnageApartment(index) {
  let apartmentsCards = document.querySelectorAll('.apartments-card');
  apartmentsCards[0].style.display = index === 0 ? 'flex' : 'none';
  apartmentsCards[1].style.display = index === 1 ? 'flex' : 'none';

  //   image
  let nextImage = document.querySelector('#next-image');
  let activeImage = document.querySelector('#active-image');
  activeImage.id = 'next-image';
  nextImage.id = 'active-image';

  // dots
  let dots = document.querySelectorAll('.dot');
  dots.forEach(d => {
    d.classList.remove('dot-active');
  });

  dots[activeIndex].classList.add('dot-active');
}

let arrowPrev = document.querySelector('#apartments-previous');
arrowPrev.addEventListener('click', () => {
  activeIndex = activeIndex === 0 ? apartments.length - 1 : activeIndex - 1;
  chnageApartment(activeIndex, apartments);
});

let arrowNext = document.querySelector('#apartments-next');
arrowNext.addEventListener('click', () => {
  activeIndex = activeIndex < apartments.length - 1 ? activeIndex + 1 : 0;
  chnageApartment(activeIndex, apartments);
});

let dots = document.querySelectorAll('.dot');
dots.forEach(d => {
  d.addEventListener('click', () => {
    activeIndex = +d.dataset.index;
    chnageApartment(activeIndex, apartments);
  });
});
