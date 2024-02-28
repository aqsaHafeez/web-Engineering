const randomNumber = Math.floor(Math.random() * 100) + 1;
const btn = document.getElementById("btn")
function chkGuess() {
  const guessInput = document.getElementById("guessInput");
  const message = document.getElementById("message");

  const userGuess = parseInt(guessInput.value);

  if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
    message.textContent = "Please enter num between 1 and 100!";
    message.style.color = "red";
    return;
  }
  if (userGuess === randomNumber) {
    message.textContent = `Congratulations! You guessed right.. ${randomNumber} is the correct Answer! 🎉`;
    message.style.color = "green";
  } else if (userGuess < randomNumber) {
    message.textContent = "Too low! Guess a higher num.";
    message.style.color = "blue";
  } else {
    message.textContent = "Too high! Guess a lower num.";
    message.style.color = "orange";
  }
  guessInput.value = "";

}
btn.onclick = chkGuess