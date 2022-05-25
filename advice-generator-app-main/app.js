const adviceId = document.getElementById('advice-id'),
adviceText = document.querySelector('.advice-text p'),
iconDice = document.querySelector('.icon-dice');


function randomAdvice() {
    fetch('https://api.adviceslip.com/advice')
.then(response => response.json())
.then(data => {
    adviceId.textContent = `#${data.slip.id}`;
    adviceText.textContent =data.slip.advice;
    console.log(data);
})
}

randomAdvice();
iconDice.addEventListener('click', () => {
    randomAdvice();
})