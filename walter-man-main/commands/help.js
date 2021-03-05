const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {

const embed = new Discord.MessageEmbed()
.setTitle("Walter bot command list!")
.setDescription("Prefix is `w!`")
.addField("Weather`w!wr<city-name>`", "Shows the weather of that city")
.addField("Meme`w!m`","Shows the fresh memes from the reddit")
.addField("Covid`w!cv<country-name>`","Shows covid stats around the globe")
.addField("Anime`w!a <anime-name>`","Shows the rating, episode count, and much more of an anime")
.addField("Help`w!h`","Shows every command that is implemented to the bot")
.addField("RPS `w!rps`",("Play rock paper scissors with the bot"))
.addField("Avatar`w!av<discord-name>`",("Lets you view the user profile picture"))
.addField("Info`w!info`",('Know more about Walter bot!'))
.addField("Userinfo`w!ui<discordname>`",("Lets you view users info!"))
.addField("Serverinfo`w!si`",("Lets you view servers information"))
.addField("Fact`w!f`",("Lets you know about intresting facts"))
.addField("Advice`w!ad`",("Gives you random advices"))
.setColor('RANDOM')

message.channel.send(embed)

}
module.exports.help = {
    name: "help",
    aliases: ['h','help']
}
