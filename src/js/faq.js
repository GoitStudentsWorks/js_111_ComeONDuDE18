// Логика для FAQ (показ/скрытие контента)
document.querySelectorAll('.faq-header').forEach(header => {
  header.addEventListener('click', () => {
    const item = header.parentElement;

    // Закрываем другие открытые элементы
    document.querySelectorAll('.faq-item').forEach(el => {
      if (el !== item) {
        el.classList.remove('active'); // Скрываем остальные элементы
      }
    });

    // Открываем или закрываем текущий элемент
    item.classList.toggle('active');
  });
});
  