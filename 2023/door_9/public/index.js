document.addEventListener('DOMContentLoaded', () => {
  const dialogModal = document.getElementById('dialog-modal');
  const imageContainer = document.getElementById('image-container');
  const form = document.getElementById('user-input-form');
  const userInput = document.getElementById('user-input');

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    dialogModal.close();

    const prompt = `Please return an image with aspect-ratio of 1:1 of ${userInput.value}`;

    try {
      const response = await fetch('/generate-image', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt }),

      });

      const blob = await response.blob();
      if (blob.size <= 2) {
        throw new Error('Blob size is too small, likely not an image.');
      }

      const image = await blobToImage(blob);
      console.log(image);

      imageContainer.innerHTML = `<img src="${image.src}"  alt="${userInput.value}"/>`;

    } catch (error) {
      console.error('Error in /generate-image endpoint:', error);
    }
  });

  dialogModal.show();

});

function blobToImage(blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const image = new Image();
      image.src = reader.result;
      image.onload = () => resolve(image);
      image.onerror = reject;
    };
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
}