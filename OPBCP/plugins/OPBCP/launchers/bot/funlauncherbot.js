
// load configs

const mainConfig = require('../../../../mainconfig.json')

// load commands

const bet = require('../../commands/fun/bet')
const cat = require('../../commands/fun/cat')

// load other functions

const logger = require('../../../logger')

module.exports = {
    name: "mod",
    func: function a(client){

        logger.save(`funlauncher for client is ready`, './logs/OPBCP/cmdhandler.txt')
        
        client.on('message', msg =>{

            const args = msg.content.slice(mainConfig.prefix.length).split(/ +/);
            const command = args.shift().toLocaleLowerCase();

            if(!msg.content.includes(mainConfig.prefix)) return;

            switch(command){

                case "bet":
                    bet.func(msg)
                    logger.save(`called out bet`, './logs/OPBCP/cmdhandler.txt')
                break;

                case "cat":
                    cat.func(msg)
                    logger.save(`called out cat`, './logs/OPBCP/cmdhandler.txt')
                break;

                default:

                break;
            }
        })
    }
}