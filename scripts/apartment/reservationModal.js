let reservationButton = document.querySelector('#reservation-button');
let reservationModal = document.querySelector('#reservation-modal');

reservationButton.addEventListener('click', () => {
  reservationModal.style.display = 'grid';
});

let closeButton = document.querySelector('#close-button');
closeButton.addEventListener('click', () => {
  reservationModal.style.display = 'none';
});
