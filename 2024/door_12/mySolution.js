// task 1
export function createHackedButton() {
  const form = document.getElementsByTagName('form')[0];
  console.log(form.innerText);
  const hackedButton = document.createElement('button');
  hackedButton.innerText = 'Click me';
  form.appendChild(hackedButton);
  hackedButton.addEventListener('click', () => {
    console.log('You have been hacked 🏴‍☠️');
  });
}

// task 2
export const prodTitle = document.getElementsByClassName('prod-title')[0];
prodTitle.innerText = 'Do not buy this';
console.log(prodTitle.innerText);

createHackedButton();

