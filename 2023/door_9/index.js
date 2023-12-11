
import { HfInference } from '@huggingface/inference'

const dialogModal = document.getElementById('dialog-modal')
const imageContainer = document.getElementById('image-container')

dialogModal.show();

const dialogModalButton = document.getElementById("user-input-button");
dialogModalButton.addEventListener("click", () => {
  dialogModal.close();
});

/**
 * 🎄 Challenge:
 * 1. When a user hits submit, dialogModal 
 *    should be hidden.
 * 2. Use the inputted text to generate an image 
 *    for the e-card using an AI model. 
 *    ⚠️ Make sure the image is square.
 * 3. Render the image to imageContainer.
 * 
 * 🎁 hint.md for help!
 **/

