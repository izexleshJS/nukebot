const Discord = require("discord.js");
const db = require("quick.db");
const settings = require("../settings.json");

exports.run = async (client, message, args) => {
  let p = args[0];
  if (!p)
    return message.reply(`Syntax: **-prefix <new prefix|reset>**\n**(If you've set a custom prefix, replace the - with your custom prefix.)**`);
  if (args[0] === "reset") {
    if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.channel.send("to set a custom prefix you need to have the **ADMINISTRATOR** permission.");

    db.delete(`prefix_${message.guild.id}`);

    message.channel.send("Prefix has been reset to **-**");
  } else {
    if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.channel.send("to set a custom prefix you need to have the **ADMINISTRATOR permission.");
    if (!p) return message.reply("Syntax: **-prefix <new prefix|reset>**\n**(If you've set a custom prefix, replace the - with your custom prefix.)**");

    db.set(`prefix_${message.guild.id}`, p);
    message.channel.send(`Prefix has been set to **${args[0]}**\nIf you forget your custom prefix, just ping the bot like this: <@873343099877867521>`);
  }
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

module.exports.help = {
  name: "prefix",
  description: "Lets you change the prefix for the bot.",
  usage: "prefix"
};
