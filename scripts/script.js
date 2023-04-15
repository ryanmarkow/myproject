$(document).ready(function () {
  let hiddenRow = $(".remove");
  let hiddenRo = $(".hidden");
  $(".side").click(function () {
    hiddenRow.toggleClass("hidden");
  });
});
$(document).ready(function () {
  $(".header__burger").click(function () {
    $(".header__burger,.header-menu").toggleClass(
      "active"
    ); /*тоггл - при клике добавляет/убирает класс active*/
  });
  $(".button3").click(function () {
    alert("Вы точно хотите заказать?");
  });
});
$(document).ready(function () {
  var modal = $(".modal"),
    modalTimer;

  // Функция для открытия модального окна
  function openModal() {
    modal.fadeIn(); // Показываем модальное окно
    modalTimer = setTimeout(closeModal, 3000); // Запускаем таймер на 5 секунд для автоматического закрытия модального окна
  }

  // Функция для закрытия модального окна
  function closeModal() {
    modal.fadeOut(); // Скрываем модальное окно
    clearTimeout(modalTimer); // Отменяем таймер закрытия модального окна (если пользователь успел закрыть его самостоятельно)
  }

  // Обработчик события клика по кнопке
  $(".button").click(function () {
    openModal(); // Вызываем функцию для открытия модального окна
  });
  $(".button2").click(function () {
    openModal(); // Вызываем функцию для открытия модального окна
  });
  // Обработчик события клика по модальному окну
  modal.click(function () {
    closeModal(); // Вызываем функцию для закрытия модального окна
  });
});
