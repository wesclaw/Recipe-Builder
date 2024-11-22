const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const OpenAI = require('openai').OpenAI;
require('dotenv').config(); 

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

const openaiApiKey = process.env.OPENAI_API_KEY;

if (!openaiApiKey) {
  throw new Error("The OPENAI_API_KEY environment variable is missing or empty.");
}

const openai = new OpenAI({ apiKey: openaiApiKey });

app.use(express.static('public'));

app.get('/', (req, res) => {
  const indexPath = path.join(__dirname, 'public', 'index.html');
  res.sendFile(indexPath);
});

wss.on('connection', (ws) => {
  ws.on('message', (data) => {
    const getString = data.toString();
    main(getString, ws);
    
  });
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  
});

async function main(data, ws) {
  try {
    const loadingText = `<div class='wrap'><img src="otherImages/pot.png" class="pot"></img>Finding a recipe...</div>`;

    ws.send(loadingText)

    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content: 'You must use the ingredients to make a recipe. Use only the ingredients provided. DO NOT use another ingredient that is not included by the user. Make sure to include only the name of the recipe, ingredients used, and the instructions.',
        },
        {
          role: 'user',
          content: data,
        },
      ],
    });

    const responseData = response.choices[0].message.content;

    ws.send(responseData);

  } catch (error) {
    
    ws.send('Error processing request');
  }
}





