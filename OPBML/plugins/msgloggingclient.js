
// get logging

const log = require('./logger')

module.exports = {
    name: "Official PluginBot Message Logging",
    func: function a(client){
        
        client.on('message', msg =>{

            if(msg.channel.type === `dm`){
                const logged = `
${msg.author.username} with an id of ${msg.author.id}
said ${msg.content} in dms.`
                log.save(logged, './logs/OPBML/messages.txt')
            }else{
                const logged = `
${msg.author.username} with an id of ${msg.author.id}
said ${msg.content} in channel ${msg.channel.name} with an id of ${msg.channel.id}
(in server ${msg.guild.name})`
                log.save(logged, './logs/OPBML/messages.txt')
            }            
        })    
    }
}
