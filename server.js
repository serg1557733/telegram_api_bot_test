const  { Telegraf } = require('telegraf');
const express = require('express')

const token = '5717084656:AAET0Vzk61yjkhEO18yltR1GhvkDYtheZdg'

const chatId = '-684878853'

const bot = new Telegraf(token, {polling: true})

const app = express()
const port = 3030

const  RegExpLink = /(([a-z]+:\/\/)?(([a-z0-9\-]+\.)+([a-z]{2}|aero|arpa|biz|com|coop|edu|gov|info|int|jobs|mil|museum|name|nato|net|org|pro|travel|local|internal))(:[0-9]{1,5})?(\/[a-z0-9_\-\.~]+)*(\/([a-z0-9_\-\.]*)(\?[a-z0-9+_\-\.%=&amp;]*)?)?(#[a-zA-Z0-9!$&'()*+.=-_~:@/?]*)?)(\s+|$)/gi;


bot.on('message', async (ctx) => {

  if(ctx.message.text) {
    const str = ctx.message.text.toLowerCase();
    if(str.includes('iptv')){
        ctx.reply(`Message from ${ctx.update.message.from.first_name} edited by BOT
         ${ctx.message.text.replaceAll('iptv', '****')}`)
        ctx.deleteMessage(ctx.message.message_id)
        return

    }

    if(str.includes('iptv')){
        ctx.reply(`Message from ${ctx.update.message.from.first_name} edited by BOT
         ${ctx.message.text.replaceAll('шаринг', '****')}`)
        ctx.deleteMessage(ctx.message.message_id)
        return

    }

    if(str.includes('playlist')){
        ctx.reply(`Message from ${ctx.update.message.from.first_name} edited by BOT
         ${ctx.message.text.replaceAll('playlist', '****')}`)
        ctx.deleteMessage(ctx.message.message_id)

    }


    if(RegExpLink.test(str)){
        console.log(RegExpLink.test(str))
        ctx.reply(`Message from ${ctx.update.message.from.first_name} edited by BOT
        ${ctx.message.text.replace(RegExpLink, 'http****.***')}`)
        ctx.deleteMessage(ctx.message.message_id)
        return

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