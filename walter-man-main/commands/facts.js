const client = require('nekos.life');
const {Discord,richEmbed} = require('discord.js')
const neko = new client();


module.exports = {
    
  run: async (client, message, args) => {
  //command

    async function work() {

        let owo = (await neko.sfw.fact());

        message.channel.send(owo.fact).catch(error => {
            console.error(error);
        });
message.delete();
      }

      work();
  }
  };

  module.exports.help = {
    name: 'Facts',
    aliases: ['Facts', 'f']
   }