const TelegramBot = require('node-telegram-bot-api')

const TOKEN = '875721491:AAFDUCjWsjL-NQSgkJdd4CtcrAcRdPwMhuA'

const bot = new TelegramBot(TOKEN, {polling: true})

require('http').createServer().listen(process.env.PORT || 5000).on('request', function(req, res){
    res.end('')
})

/*
bot.on('message', msg => {
    bot.sendMessage(msg.chat.id, 'Привет, ' + msg.from.first_name )
})

bot.onText(/^\/start$/, msg=> {
    bot.sendMessage(msg.chat.id, 'Добро пожаловать!')
})

bot.onText(/^\/help$/, msg=> {
    bot.sendMessage(msg.chat.id, 'Помощь')
})
*/

bot.on('text', msg => {
    var InMsg = msg.text
    var OutMsg
    if (InMsg[0] != '/') {
        OutMsg = 'Ваше сообщение: ' + InMsg
    } else {
        switch (InMsg) {
            case '/start':
                OutMsg = 'Добро пожаловать'
                break
            case '/help':
                OutMsg = 'Вот что я умею:'
                break
            default:
                OutMsg = 'Неизвестная команда'
        }
    }
    bot.sendMessage(msg.chat.id, OutMsg)
})
