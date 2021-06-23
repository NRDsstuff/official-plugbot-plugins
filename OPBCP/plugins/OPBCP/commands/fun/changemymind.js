//bot-wide variables or whatever

const fetch = require("node-fetch");

// functions

const log = require('../../../logger')

//command-specific variables or whatever

const config = require('../../../../configs/OPBCP/fun/changemymind.json')

//your code

module.exports = {
  func: async function main(message, args){

    message.delete()

    log.save(`deleted message, content: ${message.content}`, './logs/OPBCP/changemymind.txt')
    
    const text = args.join(" ");

    if (!text) return message.channel.send(config.noText);

    const sendMsg = await message.channel.send(config.waitingText);

    const data = await fetch(
      `https://nekobot.xyz/api/imagegen?type=changemymind&text=${text}`
    ).then((res) => res.json());

    sendMsg.delete();

    message.channel.send(data.message)
    log.save(`successfully sent ${data.message}`, './logs/OPBCP/changemymind.txt')
  }
}