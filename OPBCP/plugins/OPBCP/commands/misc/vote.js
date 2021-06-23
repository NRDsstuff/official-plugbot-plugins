//bot-wide variables or whatever

const Discord = require('discord.js');

//command-specific variables or whatever

const config = require('../../../../configs/OPBCP/misc/vote.json')

//your code

module.exports = {
    func: function main(msg, args){
        msg.delete();
          
        if(!args) return msg.channel.send(config.noText)
        
        let embed = new Discord.MessageEmbed()
        .setTitle(msg.author.username + ` starts a vote`)
        .addField(args.join(" "), `${config.yesEmoji}${config.yes}${config.noEmoji}${config.no}`, true)
        .setColor(config.embedColor)
        .setTimestamp();
        
        msg.channel.send(embed).then(msg=>{
          msg.react(config.yesEmoji);
          msg.react(config.noEmoji);
        });
    }
}