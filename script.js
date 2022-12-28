// Selectors
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

// Event Listeners
for (let i = 0; i < btnsOpenModal.length; ++i) {
  btnsOpenModal[i].addEventListener('click', openModal);
}
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// Functions
function closeModal() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

function openModal() {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}
