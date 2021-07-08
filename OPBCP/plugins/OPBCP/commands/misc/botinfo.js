//bot-wide variables or whatever

const Discord = require('discord.js');

// functions

const pbsdk = require('../../../plugbotsdk')

//command-specific variables or whatever

const config = ('../../../../configs/OPBCP/misc/botinfo.json')

//command itself

module.exports = {
    func: function main(msg){
        pbsdk.replyQuickEmbed(msg, 'who am i?', 'a bot made to make making bots easier \n (by NRD#1234)', config.embedColor, 'OPBCP', 'botinfo')
    }
}