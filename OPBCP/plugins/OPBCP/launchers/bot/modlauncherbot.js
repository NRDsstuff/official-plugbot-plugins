
// load configs

const mainConfig = require('../../../../mainconfig.json')

// load commands

const lock = require('../../commands/moderation/lock')
const unlock = require('../../commands/moderation/unlock')

// load other functions

const logger = require('../../../logger')

module.exports = {
    name: "mod",
    func: function a(client){

        logger.save(`modlauncher for client is ready`, './logs/OPBCP/cmdhandler.txt')
        
        client.on('message', msg =>{

            const args = msg.content.slice(mainConfig.prefix.length).split(/ +/);
            const command = args.shift().toLocaleLowerCase();

            if(!msg.content.includes(mainConfig.prefix)) return;

            switch(command){

                case "lock":
                    lock.func(msg)
                    logger.save(`called out lock`, './logs/OPBCP/cmdhandler.txt')
                break;

                case "unlock": 
                    unlock.func(msg)
                    logger.save(`called out unlock`, './logs/OPBCP/cmdhandler.txt')
                break;

                default:

                break;
            }
        })
    }
}