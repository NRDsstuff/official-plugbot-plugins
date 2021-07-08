
// load configs

const mainConfig = require('../../../../mainconfig.json')

// load commands


const botsay = require('../../commands/misc/botsay')


// load other functions

const logger = require('../../../logger')

module.exports = {
    name: "misc",
    func: function a(client){

        logger.save(`misclauncher for client is ready`, './logs/OPBCP/cmdhandler.txt')
        
        client.on('message', msg =>{

            const args = msg.content.slice(mainConfig.prefix.length).split(/ +/);
            const command = args.shift().toLocaleLowerCase();
            const bsc = `${mainConfig.prefix}botsay`
            const botsayContent = msg.content.substring(bsc.length)

            if(!msg.content.includes(mainConfig.prefix)) return;

            switch(command){

                case "botsay":
                    botsay.main(msg, args, botsayContent, `AAa`)
                    logger.save('botsay was called out.', './logs/OPBCP/cmdhandler.txt')
                break;

                default:

                break;
            }
        })
    }
}