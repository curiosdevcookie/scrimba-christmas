
import { HfInference } from '@huggingface/inference'
import dotenv from 'dotenv';

dotenv.config();

export async function generateImage(prompt) {
  const HF_TOKEN = process.env.HF_TOKEN;
  const inference = new HfInference(HF_TOKEN);

  return await inference.textToImage({
    model: "stabilityai/stable-diffusion-2",
    inputs: prompt,
    parameters: {
      negative_prompt: "blurry",
    },
  });
}
