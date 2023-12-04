

import express from 'express';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import dotenv from 'dotenv';
import OpenAI from "openai";

dotenv.config();

export const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  dangerouslyAllowBrowser: true
});


const app = express();
const port = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});

//OpenAI routes
//OpenAI routes
app.get('/api/get-joke', async (req, res) => {
  try {
    const completion = await openai.chat.completions.create({
      messages: [{ role: "user", content: "Tell me a one-liner festive joke." }],
      model: "gpt-3.5-turbo",
    });
    if (completion.choices[0] && completion.choices[0].message) {
      res.json({ joke: completion.choices[0].message.content });
    } else {
      res.status(500).json({ error: "Failed to get a response from OpenAI" });
    }
  } catch (error) {
    console.error('Error fetching joke:', error);
    res.status(500).json({ error: 'Error fetching joke' });
  }
});



app.use(express.static(`${__dirname}/public`));


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});