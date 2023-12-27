// // 
// const WebSocket = require('ws')

// const wss = new WebSocket.Server({port:3000})

// wss.on('connection', ws => {
//   console.log('new client connected')

//   ws.on('message', data => {

//     console.log(`${data}`)

//     ws.send(data)   
//     // send the data to user content?
//   })

//   ws.on('close',()=>{
//     console.log('client has disconnected')
//   })

// })

// // 

// require('dotenv').config();

// const OpenAI = require('openai').OpenAI;
// const openai = new OpenAI();

// async function main() {
//   const response = await openai.chat.completions.create({
//     model: 'gpt-3.5-turbo',
//     messages: [
//       {
//         role: "system",
//         content: 'You must use the ingredients to make a recipe. Use only the ingredients provided. DO NOT use another ingredient that is not included by the user.',
//       },
//       {
//         role: 'user',
//         content: 'apples, sugar, salt, peanuts, apple, peanut',
        
//       },
//     ]
//   })
//   // console.log(response.choices[0].message.content)
// }


// main()


