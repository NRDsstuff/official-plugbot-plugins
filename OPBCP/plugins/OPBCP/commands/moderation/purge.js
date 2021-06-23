
//command-specific variables or whatever

const config = require('../../../../configs/OPBCP/mod/lock.json')

//your code

module.exports = {
    func: async function main(message, args){
        if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(config.InvalidPermissions)
        if (isNaN(args[0]))
            return message.channel.send(config.invalidMessages);

        if (args[0] < 1)
            return message.channel.send(config.tooLowMessages);

        message.channel.bulkDelete(args[0])
            .then(messages => message.channel.send(`**Succesfully deleted \`${messages.size}/${args[0]}\` messages**`).then(msg => msg.delete({ timeout: 5000 }))).catch(() => null)
    }
}