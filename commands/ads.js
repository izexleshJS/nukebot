const { MessageEmbed } = require("discord.js");

module.exports.run = async (client, message, args) => {
 const embed = new MessageEmbed()
 .setTitle("About ads")
 .setThumbnail(client.user.displayAvatarURL())
 .setDescription(`__**Why are there ads?**__\nIt's because I provide the bot for free and all the features will stay free in the future, but since I'm saving up for my drivers license, it'll help me to get it.\n\n__**How to get your own ads here?**__\nYou can DM me (izexlesh#1000 & Yusuf Talha#1000) and then we can talk about it.\n\n__**Is there a way to get rid of it?**__\nFor a little donation I can set a server of your choice as a "premium server" so there won't be any more ads.\n**Important:** You CAN transfer the premium status to another server, but only if you're the one that ordered it. The old server will lose the premium status.`)
 return message.channel.send(embed)
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["ads"],
  permLevel: 0
};

module.exports.help = {
  name: "ads",
  description: "All about ads",
  usage: "ads"
};
