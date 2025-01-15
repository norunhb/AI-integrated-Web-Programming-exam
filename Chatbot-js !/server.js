const express = require('express');
const axios = require('axios');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.use(express.json());

const apiKey = process.env.OPENAI_API_KEY;

let conversationHistory = [
  {
    role: 'system',
    content: "Du er en kundeservice-assistent for en matleveringstjeneste som tilbyr ferske produkter fra små gårder. Du hjelper kundene med spørsmål om produkter, bestillinger, levering, og informasjon om de forskjellige gårdene som leverer til tjenesten."
  }
];

app.post('/chat', async (req, res) => {
  const userMessage = req.body.message;  

  conversationHistory.push({
    role: 'user',
    content: userMessage
  });

  try {
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-3.5-turbo',  
        messages: conversationHistory,
        max_tokens: 150,
        temperature: 0.7,
      },
      {
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
      }
    );

    const botMessage = response.data.choices[0].message.content;

    conversationHistory.push({
      role: 'assistant',
      content: botMessage
    });

    res.json({ message: botMessage });
  } catch (error) {
    console.error('Feil:', error.message);
    res.status(500).json({ error: 'Noe gikk galt. Prøv igjen senere.' });
  }
});

const port = 3000;
app.listen(port, () => {
  console.log(`Serveren kjører på http://localhost:${port}`);
});
