


const input = document.querySelector('input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxesContainer = document.getElementById('boxes');

 function createBoxes() {
  const amount = Number(input.value);
  if (amount < 1 || amount > 100) {
    alert('Enter a number between 1 and 100');
    return;
  }

  clearBoxes();

  for (let i = 0; i < amount; i++) {
    const size = 30 + i * 10;
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesContainer.appendChild(box);
  }

  input.value = '';
}

function destroyBoxes() {
  clearBoxes();
}

function clearBoxes() {
  boxesContainer.innerHTML = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
     .padStart(6, 0)}`;
 }

 createBtn.addEventListener('click', createBoxes);
 destroyBtn.addEventListener('click', destroyBoxes);