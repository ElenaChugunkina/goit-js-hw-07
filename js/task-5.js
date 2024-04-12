function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}



const linkBtn = document.querySelector(".change-color");
const linkSpan = document.querySelector(".color");



const handleClick = event => {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
  const colorChange = linkSpan.textContent = randomColor;
  
  
}

linkBtn.addEventListener("click", handleClick);