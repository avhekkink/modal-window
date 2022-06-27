'use strict';

// Select elements we need and store as variables
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log(btnsOpenModal);

// Define function to close modal (add 'hidden' class to modal and overlay elements)
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// Define function to open modal (remove 'hidden' class to modal and overlay elements))
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

// Add an Event Listener to each button to open modal when clicked
for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal);
}

// Add Event Listener to the close button to close modal when clicked
btnCloseModal.addEventListener('click', closeModal);

// Add Event Listener to the overlay so that user can close the modal when they click anywhere else on the screen
overlay.addEventListener('click', closeModal);
