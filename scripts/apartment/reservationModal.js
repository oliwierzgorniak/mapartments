let reservationButton = document.querySelector('#reservation-button');
let reservationModal = document.querySelector('#reservation-modal');
let reservationModalInner = document.querySelector('.reservation-modal-inner');

reservationButton.addEventListener('click', () => {
  reservationModal.style.display = 'grid';
  gsap.to(reservationModal, { opacity: 1, duration: 0.1, ease: 'easeIn' });
  gsap.to(reservationModalInner, { opacity: 1, delay: 0.05, duration: 0.1, ease: 'easeIn' });
});

let closeButton = document.querySelector('#close-button');
closeButton.addEventListener('click', () => {
  gsap.to(reservationModalInner, { opacity: 0, duration: 0.1, ease: 'easeOut' });
  gsap.to(reservationModal, { opacity: 0, delay: 0.05, duration: 0.1, ease: 'easeOut' });
  setTimeout(() => {
    reservationModal.style.display = 'none';
  }, 200);
});
