const slides = document.querySelector('.slides');
const totalSlides = slides.children.length;
let index = 1;

// Клонируем первый и последний слайды для бесконечного перехода
const firstClone = slides.children[0].cloneNode(true);
const lastClone = slides.children[totalSlides - 1].cloneNode(true);

slides.appendChild(firstClone);
slides.insertBefore(lastClone, slides.firstChild);

// Обновляем кнопки навигации
document.getElementById('next').onclick = function() {
  index++;
  updateSlidePosition();
};

document.getElementById('prev').onclick = function() {
  index--;
  updateSlidePosition();
};

// Обновляем позицию слайдов
function updateSlidePosition() {
  slides.style.transition = 'transform 0.6s ease';
  slides.style.transform = `translateX(-${index * 100}%)`;

  // Ожидаем завершения перехода для бесконечной прокрутки
  slides.addEventListener('transitionend', () => {
    if (index === totalSlides + 1) {
      slides.style.transition = 'none';
      index = 1;
      slides.style.transform = `translateX(-${index * 100}%)`;
    } else if (index === 0) {
      slides.style.transition = 'none';
      index = totalSlides;
      slides.style.transform = `translateX(-${index * 100}%)`;
    }
  });
}
