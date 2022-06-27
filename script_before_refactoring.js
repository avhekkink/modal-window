'use strict';

// Select elements we will need and store them as variables
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
// note: must use querySelectorAll since there are multiple elements for this class
const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log(btnsOpenModal);

/* Teaching demonstrations, but not relevant to this project's functionality

// To demonstrate how we can use/access the elements from the querySelectorAll method (which outputs a NodeList), we'll use a for loop to print the button text for each button
for (let i = 0; i < btnsOpenModal.length; i++) {
  console.log(btnsOpenModal[i].textContent);
}

// Add function to print 'Button clicked' when any of the buttons are clicked by adding an Event Listener to each one
for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', function () {
    console.log('Button clicked');
  });
}
 */

// Add an Event Listener to each button, so that when it is clicked, it displays the modal and overlay
for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', function () {
    console.log('Button clicked');
    // remove hidden class from modal and overlay
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
}

// Add Event Listener to the close button so that user can close the modal again
btnCloseModal.addEventListener('click', function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
});

// Add Event Listener to the overlay so that user can close the modal when they click anywhere else on the screen
overlay.addEventListener('click', function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
});
