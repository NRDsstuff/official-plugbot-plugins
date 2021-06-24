
//your code

const config = require('../../../../configs/OPBCP/mod/kick.json')
const logger = require('../../../logger')

module.exports = {
    func: async function main(message, args){
        if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(config.invalidPermissions)

        let User = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])

        if (!User) return message.channel.send(config.invalidUser)

        let kickReason = args.join(" ").slice(22);

        if (!kickReason) {
            kickReason = config.noKickReason
        }

        if(config.mentionKickedUser === `true`){
            message.channel.send(`${User}${config.kickMessage}`)
        }
        else{
            message.channel.send(`${config.kickMessage}`)
        }
        

        await User.kick({reason: kickReason})
        await logger.save(`kicked ${User}. reason: ${kickReason}`, './logs/OPBCP/kick.txt')
    }
}