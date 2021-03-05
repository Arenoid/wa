const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {

const embed = new Discord.MessageEmbed()
.setTitle("Info")
.setDescription("Hi, my name is Walter bot! I am a fun little bot with commands like `rock paper scissors,anime,memes` and many other command that are implemented to me!")
.addField("Support Server",("https://discord.gg/dwPJTuGVa8"))
.addField("Invite me",("https://bit.ly/3nl6qcI"))
.addField("Website" ,("https://walterbot.8b.io"))
.addField("Vote us on Top.gg" ,("https://top.gg/bot/770903868447522848"))
.setColor('RANDOM')

message.channel.send(embed)

}
module.exports.help = {
    name: "info",
    aliases: ['in']
}
