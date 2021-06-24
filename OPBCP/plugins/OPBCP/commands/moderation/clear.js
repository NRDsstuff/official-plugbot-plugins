
const logger = require('../../../../../../pluginbot-main/pluginbot/plugins/logger');
const config = require('../../../../configs/OPBCP/mod/clear.json')


module.exports = {
    func: async function sugoma(message){
        if(!message.member.hasPermission("MANAGE_CHANNELS")){
            logger.save(`${message.author} tried to clear ${message.channel.name} with incorrect perms.`, './logs/OPBCP/clear.txt')
            return message.channel.send(config.incorrectPerms)
        } 

        if(!message.channel.deletable){
            logger.save(`channel is undeletable.`, './logs/OPBCP/clear.txt')
            return message.channel.send(config.unDeletable)
        }

        await message.channel.clone()
        await message.channel.delete()
        await (logger.save(`channel cleared.`, './logs/OPBCP/clear.txt'))
    }
}

