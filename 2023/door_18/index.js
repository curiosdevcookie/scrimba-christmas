/** OpenAI setup **/
// import OpenAI from "openai"
// const openai = new OpenAI({
//     dangerouslyAllowBrowser: true
// })

/** HuggingFace setup **/
import { HfInference } from '@huggingface/inference'
const hf = new HfInference()
import { blobToBase64 } from '/utils'

const dialogModal = document.getElementById('dialog-modal')
dialogModal.show()

document.addEventListener('submit', function (e) {
  e.preventDefault()
  const imageDescription = document.getElementById('user-input').value
  dialogModal.close()
  generateImage(imageDescription)
})

async function generateImage(imageToGenerate) {
  const HF_TOKEN = import.meta.env.VITE_HF_TOKEN;
  const hf = new HfInference(HF_TOKEN);
  const response = await hf.textToImage({
    inputs: imageToGenerate,
    model: "stabilityai/stable-diffusion-2",
  })
  const imageUrl = await blobToBase64(response)
  generateAltText(imageUrl)
}

async function generateAltText(imageUrl) {
  const HF_TOKEN = import.meta.env.VITE_HF_TOKEN;
  const inference = new HfInference(HF_TOKEN);
  const altTextObject = await inference.imageToText({
    data: await (await fetch(imageUrl)).blob(),
    model: "Salesforce/blip-image-captioning-base",
  });

  const altText = Object.values(altTextObject)[0];

  renderImage(imageUrl, altText)

}

function renderImage(imageUrl, altText) {
  const imageContainer = document.getElementById('image-container')
  imageContainer.innerHTML = ''
  const image = document.createElement('img')
  image.src = imageUrl
  image.alt = altText
  imageContainer.appendChild(image)
}