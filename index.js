const TelegramBot = require('node-telegram-bot-api')

const TOKEN = '875721491:AAFDUCjWsjL-NQSgkJdd4CtcrAcRdPwMhuA'

const bot = new TelegramBot(TOKEN, {polling: true})

require('http').createServer().listen(process.env.PORT || 5000).on('request', function(req, res){
    res.end('')
})

bot.on('message', msg => {
    bot.sendMessage(msg.chat.id, 'Привет, ' + msg.from.first_name )
})

bot.onText(/\/start (.+)/, msg=> {
    bot.sendMessage(msg.chat.id, 'Добро пожаловать!')
})