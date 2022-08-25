const  { Telegraf } = require('telegraf');
const express = require('express')

const token = '5717084656:AAET0Vzk61yjkhEO18yltR1GhvkDYtheZdg'
const chatId = '-684878853'

const bot = new Telegraf(token, {polling: true})

const app = express()
const port = 3030


bot.on('message', async (ctx) => {
  console.log(ctx.message.message_id)
  if(ctx.message.text) {
    const str = ctx.message.text.toLowerCase();
    if(str.includes('iptv') || str.includes('playlist')|| str.includes('77')){
      ctx.deleteMessage(ctx.message.message_id)

      //ctx.telegram.editMessageCaption(chatId, 350,350,350); 
    }
  }
  

   if(ctx.message.document){
      const isPlaylist = ctx.message.document.file_name.includes('.m3u')
      if (isPlaylist){
        ctx.reply(`Hello ${ctx.update.message.from.first_name} playlists banned in this group `)
        ctx.deleteMessage(ctx.message.message_id)
      }
   } 
  })

bot.launch()



app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})