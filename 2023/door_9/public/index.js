


document.addEventListener('DOMContentLoaded', () => {
  const dialogModal = document.getElementById('dialog-modal');
  const imageContainer = document.getElementById('image-container');
  const form = document.getElementById('user-input-form');
  const userInput = document.getElementById('user-input');

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    dialogModal.close();

    const prompt = userInput.value;

    try {
      const response = await fetch('/generate-image', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt }),
      });

      // convert response to base64 string:
      console.log('Response:', response);
      const blob = await response.blob();
      console.log('Blob Frontend:', blob);
      const reader = new FileReader();
      console.log('Reader:', reader);
      reader.readAsDataURL(blob);
      reader.onloadend = () => {
        const base64String = reader.result;
        console.log('Base64 String:', base64String);
        imageContainer.innerHTML = `<img src=${base64String} alt=${prompt}/>`;
      };
    } catch (error) {
      console.error('Error in /generate-image endpoint:', error);
    }
  }
  );


  dialogModal.show();
});

