require('dotenv').config();
const { OpenAI } = require('openai');

const openai = new OpenAI({ key: process.env.OPENAI_API_KEY });

async function main() {
  const res = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [
      {
        role: 'user',
        content: 'you are very kind',
      },
      {
        role: 'user',
        content:'what is your name?'
      },
    ],
  });
  
  console.log(res.data.choices[0].message.content.trim());
}

main();
