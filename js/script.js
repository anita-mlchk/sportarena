document.addEventListener('DOMContentLoaded', () => {
  const img = document.querySelector('.welcome-img');
  const message = document.getElementById('message');

  // Показываем картинку с анимацией после загрузки
  img.addEventListener('load', () => {
    img.classList.add('loaded');
    message.textContent = 'Спорт - движение - жизнь.';
  });

  // Если картинка уже в кэше и загрузилась мгновенно
  if (img.complete) {
    img.classList.add('loaded');
    message.textContent = 'Спорт - движение - жизнь.';
  }

  // Через 4 секунды меняем сообщение (на всякий случай)
  setTimeout(() => {
    if (message.textContent.includes('Загружаю')) {
      message.textContent = 'Спорт - движение - жизнь.';
    }
  }, 4000);
});