
// stuff

const fun = require('./OPBCP/launchers/client/funlauncherclient')
const misc = require('./OPBCP/launchers/client/misclauncherclient')
const mod = require('./OPBCP/launchers/client/modlauncherclient')

// load other functions

const log = require('./logger');

// code

module.exports = {
    name: "Official PluginBot Commands Pack",
    func: function a(client){

        log.save(`OPBCP for client was called out.`, './logs/OPBCP/main.txt')

        // start it

        fun.func(client)
        misc.func(client)
        mod.func(client)
    }
}
