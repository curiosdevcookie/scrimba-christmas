const btnDuplicateElf = document.getElementById("duplicate-elf");

btnDuplicateElf.addEventListener("click", duplicateElf)

function duplicateElf() {
  const p = document.createElement("p");
  p.className = "elf";
  p.textContent = "🧝🏼";
  rotateRandomly(p);
  const elfZone = document.getElementById("elf-hangout-zone");
  elfZone.appendChild(p);
}

function rotateRandomly(element) {
  const randomRotation = Math.floor(Math.random() * 360);
  element.style.transform = `rotate(${randomRotation}deg)`;
}
