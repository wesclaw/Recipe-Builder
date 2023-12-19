require('dotenv').config();

const OpenAI = require('openai').OpenAI;
const openai = new OpenAI()

async function main() {
  const res = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [
      {
        role: 'system',
        content: 'you are very kind',
      },
      {
        role: 'user',
        content: 'what is your name?'
      },
    ],
  })
  console.log(res)
}


main()