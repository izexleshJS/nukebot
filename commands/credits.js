const { MessageEmbed } = require("discord.js");

module.exports.run = async (client, message, args) => {
 const embed = new MessageEmbed()
 .setAuthor('NukeBot', 'https://i.imgur.com/zHdvztq.png')
 .setTitle("Special thanks to:")
 .setDescription("__**Profile picture**__\n**Yusuf Talha#1000**\nContact him if you want a nice custom profile picture\n\n__**Help**__\n**izexlesh#1000**\nHelped me understanding sharding.\nHis bot: https://top.gg/bot/739061528925569075")
 return message.channel.send(embed)
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["credit"],
  permLevel: 0
};

module.exports.help = {
  name: "credits",
  description: "Prints the credits",
  usage: "credits"
};
