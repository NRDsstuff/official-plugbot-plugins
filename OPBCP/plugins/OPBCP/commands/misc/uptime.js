//bot-wide variables or whatever

const Discord = require('discord.js');

//command-specific variables or whatever

const config = require('../../../../configs/OPBCP/misc/uptime.json')

//your code

module.exports = {
    main: async function(bot, message){
        if(message.author.bot) return;
        let days = Math.floor(bot.uptime / 86400000);
        let hours = Math.floor(bot.uptime / 3600000) % 24;
        let minutes = Math.floor(bot.uptime / 60000) % 60;
        let seconds = Math.floor(bot.uptime / 1000) % 60;
      
        let uptime = new Discord.MessageEmbed()
          .setColor(config.embedColor)
          .setDescription(config.embedTitle)
          .addFields(
            { name: config.daysEmbed, value: days },
            { name: config.hoursEmbed, value: hours },
            { name: config.minutesEmbed, value: minutes },
            { name: config.secondsEmbed, value: seconds }
          )
        message.channel.send(uptime);
    }
}