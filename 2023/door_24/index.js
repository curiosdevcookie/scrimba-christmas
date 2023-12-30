/**
 * 🎄 Challenge: 
 * 1. The Christmas tree's lights should switch 
 *    on and off every 800 miliseconds.
 * 
 * Stretch Goal:
 *    Make the blue and red lights flash alternately.
 **/

const lightInterval = setInterval(redLightsToggle, 800);

function redLightsToggle() {

  const redLights = document.querySelectorAll(".red");
  console.log(redLights);
  redLights.forEach(red => {
    red.classList.toggle("lights-on");
  });

  setTimeout(blueLightsToggle, 400);
};


function blueLightsToggle() {
  const blueLights = document.querySelectorAll(".blue");
  console.log(blueLights);
  blueLights.forEach(blue => {
    blue.classList.toggle("lights-on");
  });
};