
// main stuff

const Discord = require('discord.js');
const logger = require('./logger');
const config = require('../configs/botReady/conifg.json')

// configs

module.exports = {
    name: `ready`,
    func: async function main(client){
        logger.save(config.consoleReady, './logs/ready/login.txt')
        client.on("ready", () =>{
            client.user.setPresence({
                status: config.presence.status,  // You can show online, idle... Do not disturb is dnd
                game: {
                    name: config.presence.name,  // The message shown
                    type: config.presence.type // PLAYING, WATCHING, LISTENING, STREAMING,
                }
            });
        });
    }
}