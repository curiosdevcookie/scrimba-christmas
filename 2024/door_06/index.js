const snowGlobe = document.querySelector('.snow-globe')

function createSnowflake() {
  const snowGlobe = document.getElementsByClassName('snow-globe')[0]
  let snowflake = document.createElement('div')
  snowflake.innerHTML = '❄️'
  snowflake.classList.add('snowflake')
  snowGlobe.appendChild(snowflake)
  stylizeSnowflake(snowflake)
  setTimeout(() => {
    snowGlobe.removeChild(snowflake)
  }, 2000)
}

function stylizeSnowflake(snowflake) {
  const randomX = Math.floor(Math.random() * window.innerWidth)
  const randomDuration = Math.random() * 3 + 2
  const randomSize = Math.random() * 1.5 + 0.5
  snowflake.style.left = randomX + 'px'
  snowflake.style.top = '-1.5rem'
  snowflake.style.animationDuration = randomDuration + 's'
  snowflake.style.fontSize = randomSize + 'rem'
  snowflake.style.animationDelay = Math.random() + 's'
  snowflake.style.animationTimingFunction = 'linear'
  snowflake.style.animationName = 'falling'
  snowflake.style.animationFillMode = 'forwards'
  snowflake.style.position = 'absolute'
}

setInterval(createSnowflake, 100) // Let's create a snowflake every 100 milliseconds!

/* Stretch goals: 
- Give some variety to your snowflakes, so they are not all the same. Perhaps every 25th one could be a snowman ☃️?
- Remove each snowflake after a set time - this will stop the scene from being lost in a blizzard!
- Add a button that makes the snow start falling, it could trigger a CSS-animated shake of the snow globe. Then make the snow become less frequent until it slowly stops - until the button is pressed again.  
- Change the direction of the snowflakes so they don’t all fall vertically.
- Make the style your own! 
*/