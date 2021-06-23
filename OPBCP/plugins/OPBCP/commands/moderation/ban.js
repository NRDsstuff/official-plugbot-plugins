
//your code

const config = require('../../../../configs/OPBCP/mod/ban.json')

module.exports = {
    func: function main(message, args){
        if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(config.invalidPermissions)

        let User = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])

        if (!User) return message.channel.send(config.invalidUser)

        let banReason = args.join(" ").slice(22);

        if (!banReason) {
            banReason = config.noBanReason
        }

        if(config.mentionBannedUser === `true`){
            message.channel.send(`${User}${config.banMessage}`)
        }
        else{
            message.channel.send(`${config.banMessage}`)
        }
        

        User.ban({reason: banReason})
    }
}