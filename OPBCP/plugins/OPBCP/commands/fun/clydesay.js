//bot-wide variables or whatever

const Discord = require('discord.js');
const fetch = require("node-fetch");

// functions

const log = require('../../../logger')

//command-specific variables or whatever

const config = require('../../../../configs/OPBCP/fun/clydesay.json')

//your code

module.exports = {
    func: async function main(msg, args){

        msg.delete()

        log.save(`deleted original message, ${msg.content}`, './logs/OPBCP/clydesay.txt')

        let text = args.join(" ");
        if (!text) return message.reply(config.noText);

            const data = await fetch(
            `https://nekobot.xyz/api/imagegen?type=clyde&text=${text}`

        ).then((res) => res.json());

        msg.channel.send(data.message)

        log.save(`sent image, content: ${text} link: ${data.message}`, './logs/OPBCP/clydesay.txt')
    }
       
        

    
}