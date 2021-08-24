const { MessageEmbed } = require("discord.js");
const db = require("quick.db")

module.exports.run = async (client, message, args) => {
 let argslar = args[0]
 if(!argslar) {
   message.reply("please use one of the following options: **set, reset, override**")
 }
  
  if(args[0] === "set") {
    let channel = message.member.voice.id;
    message.channel.send("Your current channel has successfully been set to create temporary voice channels when a user joins it. Rejoin for testing it :)")
    db.set(`tempchannel_${message.author.id}`, channel)
  }
  if(args[0] === "reset") {
    message.channel.send("The previously assigned voice channel has been reset to its normal functionality.")
    db.delete(`tempchannel_${message.author.id}`)
  }
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["tempchannel"],
  permLevel: 0
};

module.exports.help = {
  name: "tempchannel",
  description: "Sets a voice channel as creator for tempchannels",
  usage: "tempchannel"
};
