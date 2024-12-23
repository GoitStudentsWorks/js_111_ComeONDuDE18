const openModal = document.querySelector('.menu-btn');
const openMenu = document.querySelector('.menu-tab');
const closeModal = document.querySelector('.modal-close-btn');
const modal = document.querySelector('.modal-overlay');
const menuItems = document.querySelectorAll('.menu-item');

openModal.addEventListener('click', () => {
  modal.style.display = 'block';
  console.log('ok');
});

openMenu.addEventListener('click', () => {
  modal.style.display = 'block';
  console.log('ok');
});

closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', event => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});

menuItems.forEach(item => {
  item.addEventListener('click', () => {
    modal.style.display = 'none';
  });
});
