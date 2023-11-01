function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const colorChangeBtn = document.querySelector('.change-color');
const spanArea = document.querySelector('.color')

colorChangeBtn.addEventListener('click', colorChange);

function colorChange(event) {
  let colorValue = getRandomHexColor();
  spanArea.textContent = colorValue;
  document.body.style.backgroundColor = colorValue;
}

