const {MessageEmbed} = require('discord.js')
const api = require("imageapi.js")

module.exports.run = async (bot, message, args) => {

        let subreddits = [
            "memes",
            "Prequelmemes",
            "Dankmemes",
            ""
    ]
    let subbreddit = subreddits[Math.floor(Math.random()*(subreddits.length))];
    console.log(subbreddit)
    let img = await api(subbreddit)
    console.log(img)
    const Embed = new MessageEmbed()
    .setTitle(`Very fresh memes from r/${subbreddit}`)
    .setURL(`https://reddit.com/r/${subbreddit}`)
    .setColor('RANDOM')
    .setImage(img)
    message.channel.send(Embed)
};
module.exports.help = {
    name: "meme",
    aliases:["memes","m"]
    
    
}