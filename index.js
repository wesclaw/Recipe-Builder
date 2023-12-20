require('dotenv').config();

const OpenAI = require('openai').OpenAI;

// const chatPromptList = require('./js/main');

import chatPromptList from './js/main.js'

console.log(chatPromptList)

const openai = new OpenAI();

async function main() {
  const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [
      {
        role: "system",
        content: 'You must use the ingredients to make a recipe. Use only the ingredients provided. DO NOT use another ingredient that is not included by the user.',
      },
      {
        role: 'user',
        content: 'apples, sugar, salt, peanuts, apple, peanut',
      },
    ]
  })
  // console.log(response.choices[0].message.content)
  console.log(chatPromptList)
}

main()