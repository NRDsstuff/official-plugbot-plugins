//bot-wide variables or whatever

const Discord = require('discord.js');

//command-specific variables or whatever

const config = require('../../../../configs/OPBCP/misc/userinfo.json')

//your code

module.exports = {
    func: function main(msg){
      let user = msg.mentions.users.first() || msg.author
    
      let userinfo = {
        avatar: user.avatarURL(),
        name: user.username,
        discrim: `#${user.discriminator}`,
        id: user.id,
        status: user.presence.status,
        bot: user.bot,
        userCreatedAt: user.createdAt,
      }
    
      let embed = new Discord.MessageEmbed()
      .setTitle(config.embedTitle)
      .setColor(config.embedColor)
      .setThumbnail(userinfo.avatar)
      .addField(config.embedUsername,userinfo.name, true)
      .addField(config.embedTag,userinfo.discrim, true)
      .addField(config.embedID,userinfo.id, true)
      .addField(config.embedStatus,userinfo.status, true)
      .addField(config.embedBot,userinfo.bot, true)
      .addField(config.embedCreatedAt,userinfo.userCreatedAt, true)
      .setTimestamp()
    
      msg.channel.send(embed);
    }
}