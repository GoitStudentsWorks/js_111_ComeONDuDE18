const coversSection = document.querySelector('.animate-section');

// Перевіряємо, чи елемент присутній на сторінці
if (coversSection) {
  // Налаштування Intersection Observer
  const observerOptions = {
    root: null, // viewport за замовчуванням
    threshold: 0.5 // 50% елемента має бути видно
  };

  const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Якщо секція у viewport, додаємо клас для активації анімації
        entry.target.classList.add('@keyframes marqueeLine');
      } else {
        // Якщо потрібно, видаляємо клас, коли елемент виходить із viewport
        entry.target.classList.remove('@keyframes marqueeLine');
      }
    });
  };

  // Створюємо новий Intersection Observer
  const observer = new IntersectionObserver(observerCallback, observerOptions);

  // Спостерігаємо за секцією Covers
  observer.observe(coversSection);
}


