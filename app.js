// const WebSocket = require('ws')

// const wss = new WebSocket.Server({port:3000})


// wss.on('connection', ws => {
//   console.log('new client connected')

//   ws.on('message', data => {

//     console.log(`${data}`)
    
//     const turnString = data.toString()
//     // ws.send(data)   
//     main(turnString)
//   })

//   ws.on('close',()=>{
//     console.log('client has disconnected')
//   })

// })

// // 

// require('dotenv').config();

// const OpenAI = require('openai').OpenAI;
// const openai = new OpenAI();

// async function main(data) {
//   setTimeout(async ()=>{
//     console.log('loading....just wait')
//     const response = await openai.chat.completions.create({
//       model: 'gpt-3.5-turbo',
//       messages: [
//         {
//           role: "system",
//           content: "You must use the ingredients to make a recipe. Use only the ingredients provided. DO NOT use another ingredient that is not included by the user."
//         },
//         {
//           role: 'user',
//           content: data,
//         }, 
//       ]
//     })
//     console.log(response.choices[0].message.content)
//   })
// }





require('dotenv').config();
const WebSocket = require('ws');
const OpenAI = require('openai').OpenAI;

const openai = new OpenAI();
const wss = new WebSocket.Server({ port: 3000 }); // Change the port as needed

wss.on('connection', (ws) => {
  ws.on('message', (data) => {
    // When a message is received from the client (main.js), process it
    const getString = data.toString()
    main(getString, ws);
  });
});

async function main(data, ws) {
  try {
    console.log('loading....just wait');

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

    // Send the response to the client (main.js) using WebSocket
    ws.send(responseData);

    console.log(responseData);
  } catch (error) {
    console.error('Error:', error.message);
    ws.send('Error processing request');
  }
}
