require('dotenv').config();
const WebSocket = require('ws');
const OpenAI = require('openai').OpenAI;

const openai = new OpenAI();
const wss = new WebSocket.Server({ port: 3000 }); // Change the port as needed

wss.on('connection', (ws) => {
  ws.on('message', (data) => {
    const getString = data.toString()
    main(getString, ws);
  });
});

async function main(data, ws) {
  try {
    const loadingText = 'Loading...(This may take 5 seconds of your life)'

    ws.send(loadingText)

    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content: 'You must use the ingredients to make a recipe. Use only the ingredients provided. DO NOT use another ingredient that is not included by the user.',
        },
        {
          role: 'user',
          content: data,
        },
      ],
    });

    const responseData = response.choices[0].message.content;

    ws.send(responseData);

    // console.log(responseData);
  } catch (error) {
    console.error('Error:', error.message);
    ws.send('Error processing request');
  }
}





