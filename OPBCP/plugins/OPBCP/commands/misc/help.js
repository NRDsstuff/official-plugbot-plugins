
const Discord = require('discord.js');
const rm = require('discord.js-reaction-menu')

rm.reactions.first = ''
rm.reactions.stop = ''
rm.reactions.last = ''

const mainConfig = require('../../../../mainconfig.json')
const miscConfig = require('../../../../configs/OPBCP/misc/help/misc.json')
const helpConfig = require('../../../../configs/OPBCP/misc/help/commands.json')

module.exports = {

    func: function help(msg){
        new rm.menu({
            channel: msg.channel,
            userID: msg.author.id,
            pages: [
                new Discord.MessageEmbed()
                .setColor(miscConfig.embedColor)
                .setDescription(`**this is the help menu for the bot.**
                press ◀ to go back
                press ▶ to go foward`)
                .setThumbnail(miscConfig.embedThumbnail),
                new Discord.MessageEmbed()
                .setColor(miscConfig.embedColor)
                .setDescription(`
                > **${mainConfig.prefix}${helpConfig.commands.v1} ► ${helpConfig.values.v1}**
                > *${helpConfig.comments.v1}*
                > **${mainConfig.prefix}${helpConfig.commands.v2} ► ${helpConfig.values.v2}**
                > *${helpConfig.comments.v2}*
                > **${mainConfig.prefix}${helpConfig.commands.v3} ► ${helpConfig.values.v3}**
                > *${helpConfig.comments.v3}*
                > **${mainConfig.prefix}${helpConfig.commands.v4} ► ${helpConfig.values.v4}**
                > *${helpConfig.comments.v4}*
                > **${mainConfig.prefix}${helpConfig.commands.v5} ► ${helpConfig.values.v5}**
                > *${helpConfig.comments.v5}*`)
                .setThumbnail(miscConfig.embedThumbnail),
                new Discord.MessageEmbed()
                .setColor(miscConfig.embedColor)
                .setDescription(`
                > **${mainConfig.prefix}${helpConfig.commands.v6} ► ${helpConfig.values.v6}**
                > *${helpConfig.comments.v6}*
                > **${mainConfig.prefix}${helpConfig.commands.v7} ► ${helpConfig.values.v7}**
                > *${helpConfig.comments.v7}*
                > **${mainConfig.prefix}${helpConfig.commands.v8} ► ${helpConfig.values.v8}**
                > *${helpConfig.comments.v8}*
                > **${mainConfig.prefix}${helpConfig.commands.v9} ► ${helpConfig.values.v9}**
                > *${helpConfig.comments.v9}*
                > **${mainConfig.prefix}${helpConfig.commands.v10} ► ${helpConfig.values.v10}**
                > *${helpConfig.comments.v10}*`)
                .setThumbnail(miscConfig.embedThumbnail),
                new Discord.MessageEmbed()
                .setColor(miscConfig.embedColor)
                .setDescription(`
                > **${mainConfig.prefix}${helpConfig.commands.v11} ► ${helpConfig.values.v11}**
                > *${helpConfig.comments.v11}*
                > **${mainConfig.prefix}${helpConfig.commands.v12} ► ${helpConfig.values.v12}**
                > *${helpConfig.comments.v12}*
                > **${mainConfig.prefix}${helpConfig.commands.v13} ► ${helpConfig.values.v13}**
                > *${helpConfig.comments.v13}*
                > **${mainConfig.prefix}${helpConfig.commands.v14} ► ${helpConfig.values.v14}**
                > *${helpConfig.comments.v14}*
                > **${mainConfig.prefix}${helpConfig.commands.v15} ► ${helpConfig.values.v15}**
                > *${helpConfig.comments.v15}*
                > **${mainConfig.prefix}${helpConfig.commands.v16} ► ${helpConfig.values.v16}**
                > *${helpConfig.comments.v16}*`)
                .setThumbnail(miscConfig.embedThumbnail),
                new Discord.MessageEmbed()
                .setColor(miscConfig.embedColor)
                .setDescription(`
                > **${mainConfig.prefix}${helpConfig.command17} ► ${helpConfig.values.v17}**
                > *${helpConfig.comments.v17}*
                > **${mainConfig.prefix}${helpConfig.command18} ► ${helpConfig.values.v18}**
                > *${helpConfig.comments.v18}*
                > **${mainConfig.prefix}${helpConfig.command19} ► ${helpConfig.values.v19}**
                > *${helpConfig.comments.v19}*
                > **${mainConfig.prefix}${helpConfig.command20} ► ${helpConfig.values.v20}**
                > *${helpConfig.comments.v20}*
                ... aaaand that's all for now.`),
            ]
        })
    }
}