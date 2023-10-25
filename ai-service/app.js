require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3100;
const { OpenAI } = require("openai");

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

app.listen(port, () => console.log("AI SERVICE listening on port: ", port));

async function main() {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: "You are a helpful assistant." }],
    model: "gpt-3.5-turbo",
  });

  console.log(completion.choices[0]);
}

main();