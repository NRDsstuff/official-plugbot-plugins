//discord.js stuff

const Discord = require('discord.js');

// functions n stuff

const log = require('../../../logger')

//command specific

const config = require('../../../../configs/OPBCP/misc/verify.json')

//command itself

module.exports = {
  func: function work(message){

    //find da role

    let role = message.guild.roles.cache.find(r => r.name === config.registeredRoleName);

    log.save(`found the role`, './logs/OPBCP/register.txt')

    //give da role
  
    message.member.roles.add(role)
    
    log.save(`added the role`, './logs/OPBCP/register.txt')

    //set da author id

    const RegisteredUserID = message.author.id

    log.save(`author id set up. author id: ${message.author.id}`, './logs/OPBCP/register.txt')

    //create da channel

    message.guild.channels.create(`${config.privateChannelName} - ${RegisteredUserID}` , { 
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
      })

    log.save(`channel created. channel name: ${privateChannelName} - ${RegisteredUserID}`, './logs/OPBCP/register.txt')

    //construct da embed
      const RegisteredEmbed = new Discord.MessageEmbed()
      .setColor(embedColor)
      .setDescription(registeredMessage)
      .setTimestamp()
      //send da embed
      message.channel.send(RegisteredEmbed)
    
      log.save(`sent message.`, './logs/OPBCP/register.txt')
  }
}