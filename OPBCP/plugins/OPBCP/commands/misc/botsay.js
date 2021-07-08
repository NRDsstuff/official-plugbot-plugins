
//configs

const mainConfig = require('../../../../mainconfig.json')
const config = require('../../../../configs/OPBCP/misc/botsay.json')

// PBSDK.

const pbsdk = require('../../../plugbotsdk')

// export the code

module.exports = {

    // function or the code of the command

    main: function botsay(msg, args, botsayContent, botsayContent2){

        // delete the message

        pbsdk.delete(msg, 'OPBCP', 'botsay')
        
        // execute the command

        if(!msg.member.hasPermission("MENTION_EVERYONE")){
            if(!msg.content.includes('@everyone')){
                if(!msg.content.includes('@here')){
                    pbsdk.repeatAfterUser(msg, mainConfig.prefix, 'botsay', 'OPBCP', 'botsay')
                }
            }
        }else{
            pbsdk.repeatAfterUser(msg, mainConfig.prefix, 'botsay', 'OPBCP', 'botsay')
        }


    }
}