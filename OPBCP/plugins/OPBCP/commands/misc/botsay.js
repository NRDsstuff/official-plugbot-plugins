
// args handler

function normal(botsayContent, msg){

    // check for @everyone permissions

    if(!msg.member.hasPermission("MENTION_EVERYONE")){
        if(args.includes `@everyone`){
            msg.channel.send(config.mentionedEveryone)
        }
        else{
            if(args.includes `@here`){
                msg.channel.send(config.mentionedEveryone)
            }
            else{
        msg.channel.send(botsayContent)
            }
        }
    }
    else{

        // send the message

        msg.channel.send(botsayContent)
    }
}

//configs

const config = require('../../../../configs/OPBCP/misc/botsay.json')

// export the code

module.exports = {

    // function or the code of the command

    main: function botsay(msg, args, botsayContent, botsayContent2){

        // delete the message

        msg.delete()
        
        // execute the command

        normal(botsayContent, msg)
        
    }
}