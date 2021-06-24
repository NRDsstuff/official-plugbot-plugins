
// stuff

const fun = require('./OPBCP/launchers/bot/funlauncherbot')
const misc = require('./OPBCP/launchers/bot/misclauncherbot')
const mod = require('./OPBCP/launchers/bot/modlauncherbot')

// load other functions

const log = require('./logger')

// code

module.exports = {
    name: "Official PluginBot Commands Pack",
    func: function a(bot){

        log.save(`OPBCP for bot was called out.`, './logs/OPBCP/main.txt')

        // start it

        fun.func(bot)
        misc.func(bot)
        mod.func(bot)
    }
}
