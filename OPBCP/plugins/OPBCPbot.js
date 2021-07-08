
// stuff

const fun = require('./OPBCP/launchers/bot/funlauncherbot')
const misc = require('./OPBCP/launchers/bot/misclauncherbot')
const mod = require('./OPBCP/launchers/bot/modlauncherbot')

// load other functions

const pbsdk = require('./plugbotsdk')

// code

module.exports = {
    name: "Official PluginBot Commands Pack",
    func: function a(bot){

        pbsdk.log(`OPBCP for bot was called out.`, 'OPBCP', 'main')

        // start it

        fun.func(bot)
        misc.func(bot)
        mod.func(bot)
    }
}
