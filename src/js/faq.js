document.querySelectorAll('.question').forEach(button => {
    button.addEventListener('click', () => {
      button.classList.toggle('active');
      const answer = button.nextElementSibling;
      answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
    });
  });
  