/*Задание 4
Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать и уменьшать его значение на единицу.

<div id="counter">
  <button type="button" data-action="decrement">-1</button>
  <span id="value">0</span>
  <button type="button" data-action="increment">+1</button>
</div>

Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
Обновляй интерфейс новым значением переменной counterValue.*/


let counterValue = 0;
const decrementLitenerBtn = document.querySelector('[data-action="decrement"]');
const incrementLitenerBtn = document.querySelector('[data-action="increment"]');
const spanEl = document.querySelector('#value');

decrementLitenerBtn.addEventListener('click', onBtnClickDecrement);

incrementLitenerBtn.addEventListener('click', onBtnClickIncrement);

function onBtnClickDecrement() {
  counterValue -=1;
  spanEl.textContent = counterValue;

};

function onBtnClickIncrement() {
  counterValue +=1;
  spanEl.textContent = counterValue;
};

