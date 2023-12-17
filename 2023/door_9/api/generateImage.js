import { HfInference } from '@huggingface/inference';
import dotenv from 'dotenv';
import fetch from 'node-fetch'; // Assuming node-fetch is installed

dotenv.config();

export async function generateImage(prompt) {
  const HF_TOKEN = process.env.HF_TOKEN;
  const inference = new HfInference(HF_TOKEN);

  try {
    const response = await inference.textToImage({
      model: "stabilityai/stable-diffusion-2",
      inputs: prompt,
      parameters: {
        negative_prompt: "blurry",
      },
    });


    const buffer = await response.arrayBuffer();
    return Buffer.from(buffer);
  }
  catch (error) {
    console.error('Error in generateImage:', error);
    throw error;
  }
}
