
// load configs

const mainConfig = require('../../../../mainconfig.json')

// load commands

const allemojis = require('../../commands/misc/allemojis')
const botinfo = require('../../commands/misc/botinfo')
const botstats = require('../../commands/misc/botstats')
const help = require('../../commands/misc/help')
const randomuser = require('../../commands/misc/randomuser')
const register = require('../../commands/misc/register')
const serverinfo = require('../../commands/misc/serverinfo')
const stopwatch = require('../../commands/misc/stopwatch')
const uptime = require('../../commands/misc/uptime')
const userinfo = require('../../commands/misc/userinfo')
const vote = require('../../commands/misc/vote')

// load other functions

const logger = require('../../../logger')

module.exports = {
    name: "misc",
    func: function a(client){

        logger.save(`misclauncher for bot is ready`, './logs/OPBCP/cmdhandler.txt')
        
        client.on('message', msg =>{

            const args = msg.content.slice(mainConfig.prefix.length).split(/ +/);
            const command = args.shift().toLocaleLowerCase();

            switch(command){
                
                case "allemojis":
                    allemojis.func(msg)
                    logger.save('allemojis was called out.', './logs/OPBCP/cmdhandler.txt')
                break;

                case "botinfo":
                    botinfo.func(msg)
                    logger.save('botinfo was called out.', './logs/OPBCP/cmdhandler.txt')
                break;

                case "botstats":
                    botstats.func(msg, client)
                    logger.save('botstats was called out.', './logs/OPBCP/cmdhandler.txt')
                break;

                case "help":
                    help.func(msg)
                    logger.save('help was called out.', './logs/OPBCP/cmdhandler.txt')
                break;

                case "randomuser":
                    randomuser.func(msg)
                    logger.save('randomuser was called out.', './logs/OPBCP/cmdhandler.txt')
                break;

                case "register":
                    register.func(msg)
                    logger.save('register was called out.', './logs/OPBCP/cmdhandler.txt')
                break;

                case "serverinfo":
                    serverinfo.func(msg)
                    logger.save('serverinfo was called out.', './logs/OPBCP/cmdhandler.txt')
                break;

                case "stopwatch":
                    stopwatch.func(msg, args)
                    logger.save('stopwatch was called out.', './logs/OPBCP/cmdhandler.txt')
                break; 

                case "uptime":
                    uptime.main(client, msg)
                    logger.save('uptime was called out.', './logs/OPBCP/cmdhandler.txt')
                break;

                case "userinfo":
                    userinfo.func(msg)
                    logger.save('userinfo was called out.', './logs/OPBCP/cmdhandler.txt')
                break;

                case "vote": 
                    vote.func(msg, args)
                    logger.save('vote was called out.', './logs/OPBCP/cmdhandler.txt')
                break;

                default:

                break;
            }
        })
    }
}