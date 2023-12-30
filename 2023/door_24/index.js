

const lightInterval = setInterval(redLightsToggle, 400);

function redLightsToggle() {

  const redLights = document.querySelectorAll(".red");
  redLights.forEach(red => {
    red.classList.toggle("lights-on");
  });

  setTimeout(blueLightsToggle, 400);
};


function blueLightsToggle() {
  const blueLights = document.querySelectorAll(".blue");
  blueLights.forEach(blue => {
    blue.classList.toggle("lights-on");
  });
};