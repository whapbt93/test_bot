const TelegramBot = require('node-telegram-bot-api')

const TOKEN = '875721491:AAFDUCjWsjL-NQSgkJdd4CtcrAcRdPwMhuA'

const bot = new TelegramBot(TOKEN, {polling: true})

bot.on('message', msg => {
    bot.sendMessage(msg.chat.id, 'Hello, ${msg.from.first_name}, ti Pidor " ${msg.from.first_name} "' )
})