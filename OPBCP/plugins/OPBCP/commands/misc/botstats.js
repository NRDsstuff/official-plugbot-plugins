
const Discord = require('discord.js')
const config = require('../../../../configs/OPBCP/misc/botstats.json')

module.exports = {
    func: function a(msg, bot){
        if(msg.author.bot) return;

        let embed = new Discord.MessageEmbed()
        .setTitle(config.embedTitle)
        .setColor(config.embedColor)
        .addField(config.ping, `<@${bot.user.id}>`, true)
        .addField(config.servers, `${bot.guilds.cache.size}`, true)
        .addField(config.users, `${bot.users.cache.size}`, true)
        .setTimestamp()

        msg.channel.send(embed);
    }
}