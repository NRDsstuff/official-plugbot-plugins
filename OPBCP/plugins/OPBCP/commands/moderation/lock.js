//bot-wide variables or whatever

const Discord = require('discord.js');

//command-specific variables or whatever

const config = require('../../../../configs/OPBCP/mod/lock.json')

//your code

module.exports = {
    func: function sus(message){
        if (!message.member.hasPermission('MANAGE_SERVER', 'MANAGE_CHANNELS')) {
            return keineRechteEmbed(message);
            }
            message.channel.overwritePermissions([
            {
                id: message.guild.roles.everyone,
                deny: ['SEND_MESSAGES'],
            },
             ],);
            const lockedChannelEmbed = new Discord.MessageEmbed()
            .setTitle(config.embedTitle)
            .setDescription(config.embedDescription)
            .setColor(config.embedColor)
            message.channel.send(lockedChannelEmbed);
            message.delete();
    }
}