function renderCountdown() {
  const christmas = new Date("December 25, 2023 00:00:01");

  const today = new Date();

  const countDown = christmas - today;

  const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
  const hours = Math.floor((countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countDown % (1000 * 60)) / 1000);


  const countdownDisplay = document.getElementById("countdown-display");
  countdownDisplay.innerHTML = `${days}:${hours}:${minutes}:${seconds}`
}

renderCountdown()