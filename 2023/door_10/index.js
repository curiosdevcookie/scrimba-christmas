
function playSong(id) {
  const playerContainer = document.getElementById("player-container");
  playerContainer.innerHTML = `<iframe id="player" title='x-mas jukebox' width="320" height="180" src="https://www.youtube.com/embed/${id}?autoplay=1" allowfullscreen allow></iframe>`;
}