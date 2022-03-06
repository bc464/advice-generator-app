const mainContainer = document.querySelector(".main-container")
const adviceNum = document.querySelector(".advice");
const diceBtn = document.querySelector(".dice");
const quote = document.querySelector(".quote");


diceBtn.addEventListener("click", function () {
	
	const randomURL = "https://api.adviceslip.com/advice"

	fetch(randomURL).then((res) => res.json()).then((data) => {
		adviceNum.textContent = `Advice # ${data.slip.id}`
		quote.innerHTML = data.slip.advice;
    })
})