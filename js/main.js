const title = document.getElementById('title');
const text = document.getElementById('text');
const btnRandom = document.querySelector('.dice');
const diceImage = document.querySelector('.dice img')

async function generateAdvice() {
  diceImage.classList.toggle('rotate');
 
  const response = await fetch('https://api.adviceslip.com/advice');
  const advice = await response.json();


  title.innerText = `advice #${advice.slip.id}`;
  text.innerHTML = `" ${advice.slip.advice} "`;

  setTimeout(() => {
    diceImage.classList.toggle('rotate');
  }, 1000)
}

window.addEventListener('load', generateAdvice)


btnRandom.addEventListener('click', generateAdvice)
