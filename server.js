const express = require('express')
const TelegramBot = require('node-telegram-bot-api')

const token = '5717084656:AAET0Vzk61yjkhEO18yltR1GhvkDYtheZdg'
const chatId = '-1001751416040'

const bot = new TelegramBot(token, { polling: true })

const app = express()
const port = 3030

bot.on("message", (data) => console.log(data))

bot.onText('hello', (data) =>  bot.sendMessage(chatId, data.text))


bot.sendMessage(chatId, 'hello')

app.get('/', (req, res) => {
  res.send('Hello World! port 3030')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})