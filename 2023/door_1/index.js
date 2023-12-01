const countdownDisplay = document.getElementById("countdown-display")

function renderCountdown() {
  const christmas = 25;

  const today = new Date();
  const todayDay = today.getDate();

  const countDown = christmas - todayDay;

  const countdownDisplay = document.getElementById("countdown-display");
  countdownDisplay.innerHTML = countDown;
}

renderCountdown()



// - Add a countdown for another festival, your birthday, or Christmas 2022.