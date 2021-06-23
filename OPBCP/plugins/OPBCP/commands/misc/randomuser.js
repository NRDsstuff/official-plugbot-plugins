
const Discord = require('discord.js')
const config = require('../../../../configs/OPBCP/misc/randomuser.json')

module.exports = {
    func: function sus(msg){
        let member = msg.guild.members.cache.random();

        let embed = new Discord.MessageEmbed()
        .setColor(config.embedColor)
        .setTitle(config.embedTitle)
        .setDescription(member)
        .setTimestamp();
        msg.channel.send(embed);
    }
}