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

bot.onText(/\/start/, msg=> {
    bot.sendMessage(msg.chat.id, 'Добро пожаловать!')
})

 */

var instr

function OutMsg(instr) {
    if (instr[0] != '/') {
        bot.sendMessage(msg.chat.id, 'Привет')
    } else {
        switch (instr) {
            case '/start':
                bot.sendMessage(msg.chat.id, 'Добро пожаловать')
                break
            case '/help':
                bot.sendMessage(msg.chat.id, 'Я умею:')
                break
            default:
                bot.sendMessage(msg.chat.id, 'Неизвестная команда')
        }
    }
}

bot.onText(instr, OutMsg(instr))