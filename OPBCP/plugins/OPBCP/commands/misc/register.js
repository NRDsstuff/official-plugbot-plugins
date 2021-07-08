//discord.js stuff

const Discord = require('discord.js');

// PLUGBOTSDK YEY

const plugbotsdk = require('../../../plugbotsdk')

//command specific

const config = require('../../../../configs/OPBCP/misc/verify.json');

//command itself

module.exports = {
  func: function work(message){

    // 

    plugbotsdk.giveRoleByName(message.guild, message.member, config.roleName)

    //create da channel

    const channelData = { 
      type: 'text',
      permissionOverwrites: [

        {
          id: message.author.id,
          allow: ['CREATE_INSTANT_INVITE', 'VIEW_CHANNEL', 'SEND_MESSAGES', 'SEND_TTS_MESSAGES', 'MANAGE_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'READ_MESSAGE_HISTORY', 'USE_EXTERNAL_EMOJIS'],
        },
        {
          id: message.guild.roles.everyone,
          deny:  ['VIEW_CHANNEL'],
        }
      ],
    }

    plugbotsdk.createChannel(message.guild, channelData, `${config.privateChannelName} - ${RegisteredUserID}`, 'OPBCP', 'register')

    // send da embed

    plugbotsdk.replyQuickEmbed(message, config.registeredMessage, ' ', config.embedColor, 'OPBCP', 'register')
  }
}