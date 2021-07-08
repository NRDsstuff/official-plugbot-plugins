
const Discord = require('discord.js')
const config = require('../../../../configs/OPBCP/misc/randomuser.json');
const plugbotsdk = require('../../../plugbotsdk');

module.exports = {
    func: function sus(msg){
        
        let member = msg.guild.members.cache.random();

        plugbotsdk.replyQuickEmbed(msg, config.embedTitle, member, config.embedColor, 'OPBCP', 'randomuser')
    }
}