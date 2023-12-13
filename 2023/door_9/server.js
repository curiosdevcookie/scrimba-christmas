

import express from 'express';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import dotenv from 'dotenv';
import { generateImage } from './api/generateImage.js';


dotenv.config();

const app = express();
const port = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});

app.use(express.static(`${__dirname}/public`));

app.use(express.json());

app.post('/generate-image', async (req, res) => {
  try {
    const { prompt } = req.body;
    const result = await generateImage(prompt);
    res.setHeader('Content-Type', 'image/jpeg');
    console.log('Blob Backend:', result);
    res.send(result);

  } catch (error) {
    console.error('Error in /generate-image endpoint:', error);
    res.status(500).send({ error: error.message });
  }
});



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});