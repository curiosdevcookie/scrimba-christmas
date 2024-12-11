export let guessArr = []

export function renderGuess() {
  const guessContainer = document.getElementById('guess-container')
  const guessHtml = guessArr.map((char) => {
    return `<div class="guess-char">${char}</div>`
  })
  guessContainer.innerHTML = guessHtml.join('')

}

export function start(word) {

  for (let i = 0; i < word.length; i++) {
    console.log(word[i])
    guessArr.push('-')
  }
  renderGuess()
}

