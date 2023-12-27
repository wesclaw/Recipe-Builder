const WebSocket = require('ws')

const wss = new WebSocket.Server({port:3000})

wss.on('connection', ws => {
  console.log('new client connected')

  ws.on('message', data => {

    console.log(`${data}`)
    
    const turnString = data.toString()
    // ws.send(data)   
    main(turnString)
  })

  ws.on('close',()=>{
    console.log('client has disconnected')
  })

})

// 

require('dotenv').config();

const OpenAI = require('openai').OpenAI;
const openai = new OpenAI();

async function main(data) {
  setTimeout(async ()=>{
    console.log('loading....just wait')
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: "system",
          content: "Attention! Please follow these instructions carefully while generating the recipe. Use ONLY the ingredients listed by the user to create the recipe. DO NOT incorporate any other ingredients that haven't been provided. Stick strictly to the given ingredients and do not introduce additional ones. Your adherence to these guidelines is crucial for the accuracy of the recipe. Thank you!",
        },
        {
          role: 'user',
          content: data,
        }, 
      ]
    })
    console.log(response.choices[0].message.content)
  })
}



