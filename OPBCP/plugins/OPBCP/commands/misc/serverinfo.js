
const Discord = require('discord.js')
const config = require('../../../../configs/OPBCP/misc/serverinfo.json')

module.exports = {
    func: function main(msg){
        if(msg.author.bot) return;
        if(!msg.guild) return;

        let server = {
            logo: msg.guild.iconURL(),
            name: msg.guild.name,
            createdAt: msg.guild.createdAt,
            id: msg.guild.id,
            serverowner: msg.guild.owner.user.username,
            region: msg.guild.region,
            verified: msg.guild.verified,
            members: msg.guild.memberCount
        };

        let embed = new Discord.MessageEmbed()
        .setTitle(config.embedTitle)
        .setColor(config.embedColor)
        .setThumbnail(server.logo)
        .addField(config.name,server.name, false)
        .addField(config.ID,server.id, false)
        .addField(config.owner,server.serverowner, false)
        .addField(config.region,server.region, false)
        .addField(config.verified,server.verified, false)
        .addField(config.users,server.members, false)
        .addField(config.createdAt,server.createdAt, false)
        .setTimestamp();
        msg.channel.send(embed);
    }
}