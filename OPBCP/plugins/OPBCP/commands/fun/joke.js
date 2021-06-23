//bot-wide variables or whatever

const joke = require("one-liner-joke").getRandomJoke;

// functions

const log = require('../../../logger')

//your code

module.exports = {
    func: function main(msg){
        const logged = `
        ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
        i said unfunny (${msg.content})
        ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------                                            
        |                                                                                                                                                                                     |
        V                                                                                                                                                                                     V`

        msg.channel.send(
            joke({ exclude_tags: ["dirty", "racist", "marriage", "sex", "death"] })
                .body
        );

        log.save(logged, './logs/joke')
    }
}