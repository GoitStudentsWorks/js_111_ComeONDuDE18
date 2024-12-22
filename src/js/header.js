const openModal = document.querySelector('.menu-btn');
const openMenu = document.querySelector('.menu-tab');
const closeModal = document.querySelector('.modal-close-btn');
const modal = document.querySelector('.modal-overlay');

// Открытие модального окна
openModal.addEventListener('click', () => {
  modal.style.display = 'block';
  console.log('ok');
});

openMenu.addEventListener('click', () => {
  modal.style.display = 'block';
  console.log('ok');
});

// Закрытие модального окна
closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Закрытие при клике вне модального окна
window.addEventListener('click', event => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});
