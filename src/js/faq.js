<<<<<<< HEAD
import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

new Accordion('.ac-faq-container', {
    duration: 600,

    elementClass: 'faq-item',
    triggerClass: 'ac-title-faq',
    panelClass: 'faq-content',
    activeClass: 'is-active-faq',

    showMultiple: true,
})
=======
// Получаем все элементы FAQ
const faqItems = document.querySelectorAll('.faq-item');

// Добавляем обработчики событий на каждый элемент
faqItems.forEach(item => {
  const header = item.querySelector('.faq-header');
  header.addEventListener('click', () => {
    item.classList.toggle('active'); // Переключаем состояние текущего элемента
  });
});
>>>>>>> main
