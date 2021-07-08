
// stuff

const fun = require('./OPBCP/launchers/client/funlauncherclient')
const misc = require('./OPBCP/launchers/client/misclauncherclient')
const mod = require('./OPBCP/launchers/client/modlauncherclient')

// load other functions

const pbsdk = require('./plugbotsdk')

// code

module.exports = {
    name: "Official PluginBot Commands Pack",
    func: function a(client){

        pbsdk.log(`OPBCP for client was called out.`, 'OPBCP', 'main')

        // start it

        fun.func(client)
        misc.func(client)
        mod.func(client)
    }
}
