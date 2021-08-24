const { MessageEmbed } = require("discord.js");

module.exports.run = async (client, message, args) => {
 const embed = new MessageEmbed()
 .setColor("#202225")
 .setThumbnail(client.user.displayAvatarURL())
 .setTitle("Useful links")
 .setDescription(":handshake: Support server: https://nuke.tk/support\n:link: Invite NukeBot: https://nuke.tk/invite\n:earth_africa: Website: https://nuke.tk\n:arrow_double_up: Vote for NukeBot: https://nuke.tk/vote\n:envelope_with_arrow: Twitter Support: https://nuke.tk")
 return message.channel.send(embed)
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["link","links"],
  permLevel: 0
};

module.exports.help = {
  name: "links",
  description: "Returns the bot's useful links",
  usage: "links"
};
