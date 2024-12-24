// Получаем все элементы FAQ
const faqItems = document.querySelectorAll('.faq-item');

// Добавляем обработчики событий на каждый элемент
faqItems.forEach(item => {
  const header = item.querySelector('.faq-header');
  header.addEventListener('click', () => {
    item.classList.toggle('active'); // Переключаем состояние текущего элемента
  });
});
