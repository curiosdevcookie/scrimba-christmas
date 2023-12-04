document.getElementById('window-container').addEventListener('click', function () {

  const jokeElement = document.getElementById('joke-display');

  fetch('/api/get-joke', {
    method: 'GET',
  })
    .then(response => response.json())
    .then(data => {
      const joke = data.joke;
      jokeElement.textContent = joke;
    })
    .catch(error => {
      console.error('Error fetching joke:', error);
    });

  document.querySelector('.left-door').style = "animation: left-open 0.3s forwards"
  document.querySelector('.right-door').style = "animation: right-open 0.3s forwards"
  document.querySelector('.joke-display').style = "animation: display-joke 0.3s forwards"

  document.querySelector('.joke-display').addEventListener('animationend', function () {
    setTimeout(function () {
      document.getElementById('joke-display-aside').style.display = 'block';
    }, 1000);
  });
});
