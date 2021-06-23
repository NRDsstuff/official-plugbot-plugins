
// load other functions

const logger = require('../../../logger')

// load configs

const mainConfig = require('../../../../mainconfig.json')

// load commands

const changeMyMind = require('../../commands/fun/changemymind')
const clydesay = require('../../commands/fun/clydesay')
const joke = require('../../commands/fun/joke')

module.exports = {
    name: "fun",
    func: function a(client){

        logger.save(`funlauncher for client is ready`, './logs/OPBCP/cmdhandler.txt')
        
        client.on('message', msg =>{

            const args = msg.content.slice(mainConfig.prefix.length).split(/ +/);
            const command = args.shift().toLocaleLowerCase();

            switch(command){
                case "changemymind":
                    changeMyMind.func(msg, args)
                    logger.save(`called out changemymind`, './logs/OPBCP/cmdhandler.txt')
                break;

                case "clydesay":
                    clydesay.func(msg, args)
                    logger.save(`called out clydesay`, './logs/OPBCP/cmdhandler.txt')
                break;

                case "joke":
                    joke.func(msg)
                    logger.save(`called out joke`, './logs/OPBCP/cmdhandler.txt')
                break;

                default:

                break;
            }
        })
    }
}