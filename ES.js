let circle = document.getElementById('circle');
console.log(circle);
const punt = document.getElementById('score');
let score = 1;
let countdown;
let timeRemaining = 30;

document.getElementById("start").addEventListener('click', function () {
  this.disabled = true;
  countdown = setInterval(function () {
    document.getElementById('timer').innerText = timeRemaining + " Seconds";
    if (timeRemaining <= 0) {
      clearInterval(countdown);  // Fermiamo il conto alla rovescia
      alert("Finish!  Result: " + (score - 1) + " click" + "\n" + "Refresh for New Game!");
    } else {
      timeRemaining--;
    }
  }, 1000);  // Aggiorna ogni secondo
  function randomPosition() {

    const randomX = Math.floor(Math.random() * 80) + 10;
    const randomY = Math.floor(Math.random() * 300) + 10;
    const randomWidth = Math.floor(Math.random() * 30) + 10;
    const randomHeight = Math.floor(Math.random() * 30) + 10;


    circle.style.left = randomX + "%";
    circle.style.top = randomY + "px";
    circle.style.width = randomWidth + "px";
    circle.style.height = randomHeight + "px";
  }

  circle.addEventListener("click", function () {
    let color = circle.style.backgroundColor = "green";
    setTimeout(() => {
      circle.style.backgroundColor = "rgba(255,0,0,0.7)";
    }, 100);
    setTimeout(randomPosition, 100);
    punt.textContent = ('YOUR SCORE: ') + score++;
  })
});
