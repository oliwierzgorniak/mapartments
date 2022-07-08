// Copyright (c) 2022 by Adam (https://codepen.io/helloroman/pen/zYrQEwg)
// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

const apartments = [
  {
    name: 'MaPa Podgórze',
    distance: '2.9km od Rynku Głównego',
    kitchen: 'wyposażona kuchnia',
    wifi: 'dostęp do wifi i Netflix',
    capacity: 'do 4 osób',
    link: '/mapa-podgorze',
    img: 'mapa-podgorze.jpg',
  },
  {
    name: 'MaPa Kazimierz',
    distance: '1.1km od Rynku Głównego',
    kitchen: 'wyposażona kuchnia',
    wifi: 'dostęp do wifi',
    capacity: 'do 4 dorosłych + 2 dzieci',
    link: '/mapa-kazmierz',
    img: 'mapa-kazimierz.jpg',
  },
];

let activeIndex = 0;
function chnageApartment(index) {
  const ANIMATION_DURATION = 0.6;

  let card = document.querySelector('.apartments-card');
  gsap.to(card, { opacity: 0, x: -400, duration: ANIMATION_DURATION, ease: 'easeIn' });
  gsap.to(card, { opacity: 1, x: '2.8vw', duration: ANIMATION_DURATION, delay: ANIMATION_DURATION, ease: 'easeOut' });

  let img = document.querySelector('.apartments-image');
  gsap.to(img, { opacity: 0, y: -400, duration: ANIMATION_DURATION, ease: 'easeIn' });
  gsap.to(img, { opacity: 1, y: 0, duration: ANIMATION_DURATION, delay: ANIMATION_DURATION, ease: 'easeOut' });

  setTimeout(changeApartmentData, ANIMATION_DURATION * 1000);

  // dots
  let dots = document.querySelectorAll('.dot');
  dots.forEach(d => {
    d.classList.remove('dot-active');
  });

  dots[activeIndex].classList.add('dot-active');
}

function changeApartmentData() {
  let card = document.querySelector('.apartments-card');

  let name = card.querySelector('#apartment-name');
  name.innerText = apartments[activeIndex].name;

  let distance = card.querySelector('#apartment-distance');
  distance.innerText = apartments[activeIndex].distance;

  let kitchen = card.querySelector('#apartment-kitchen');
  kitchen.innerText = apartments[activeIndex].kitchen;

  let wifi = card.querySelector('#apartment-wifi');
  wifi.innerText = apartments[activeIndex].wifi;

  let capacity = card.querySelector('#apartment-capacity');
  capacity.innerText = apartments[activeIndex].capacity;

  let link = card.querySelector('#apartment-link');
  link.href = apartments[activeIndex].link;

  // image
  let img = document.querySelector('.apartments-image');
  img.src = '/assets/photos/' + apartments[activeIndex].img;
}

// listeners

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
