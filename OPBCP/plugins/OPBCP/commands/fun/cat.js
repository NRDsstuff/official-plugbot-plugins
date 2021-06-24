
const fetch = require("superagent");
const Discord = require('discord.js');
const logger = require("../../../logger");

module.exports = {
    func: function usuck(msg){
        fetch.get("https://some-random-api.ml/img/cat").then(x => {
            const catEmbed = new Discord.MessageEmbed()
            .setColor("BLUE")
            .setImage(x.body.link);
            msg.channel.send(catEmbed);
        }).then(logger.save(`sent image`, './logs/OPBCP/cat.txt'))
    }
}