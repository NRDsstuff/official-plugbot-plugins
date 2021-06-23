//bot-wide variables or whatever

const Discord = require('discord.js');

// functions

const log = require('../../../logger')

//command-specific variables or whatever

const config = ('../../../../configs/OPBCP/misc/botinfo.json')

//command itself

module.exports = {
    func: function main(msg){
        const whoIs = new Discord.MessageEmbed()
        .setColor(config.embedColor)
        .setTitle(`who am i?`)
        .setDescription(`a bot made to make making bots easier \n (by NRD#1234)`)
        msg.channel.send(whoIs)
        log.save(`message sent`, './logs/OPBCP/whois')
    }
}