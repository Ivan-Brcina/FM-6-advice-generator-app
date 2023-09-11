const button = document.querySelector(".random-btn");
const adviceText = document.querySelector(".advice");
const adviceId = document.querySelector(".advice-id");

button.addEventListener("click", (e) => {
  e.preventDefault;
  fetch("https://api.adviceslip.com/advice")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      adviceText.textContent = `"${data.slip.advice}"`;
      adviceId.textContent = `ADVICE #${data.slip.id}`;
    });
});
