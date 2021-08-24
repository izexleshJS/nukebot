const { MessageEmbed } = require("discord.js");

module.exports.run = async (client, message, args) => {
  let prefix = require("../settings.json").prefix
  
  if (args[0]) {
          const embed = new MessageEmbed();
          const cmd = client.commands.get(args[0].toLowerCase()) || client.commands.get(client.aliases.get(args[0].toLowerCase()));
          if (!cmd) {
              return message.channel.send(embed.setColor("#202225").setDescription(`No Information found for command **${args[0].toLowerCase()}**`));
          }
          if (cmd.help.name) embed.addField("**Description**", `${cmd.help.name}`);
          if (cmd.help.name) embed.setTitle(`Informations for __**${prefix}${cmd.help.name}**__`);
          if (cmd.help.description) embed.addField("**Function**", `${cmd.help.description}`);
          if (cmd.conf.aliases) embed.addField("**Additional informations**", `${cmd.conf.aliases.map((a) => `${a}`).join("`, `")}`);
          //if (cmd.cooldown) embed.addField("**Cooldown**", `\`${cmd.cooldown} Seconds\``);
          //else embed.addField("**Cooldown**", `\`1 Second\``);
          if (cmd.help.usage) {
              embed.addField("**Usage**", `${prefix}${cmd.help.usage}`);
              //embed.setFooter("Syntax: <> = required, [] = optional");
          }
          if (cmd.help.useage) {
              embed.addField("**Useage**", `${prefix}${cmd.help.useage}`);
              //embed.setFooter("Syntax: <> = required, [] = optional");
          }
          return message.channel.send(embed.setColor("#202225"));
  } else {

   const embed = new MessageEmbed()
        .setTitle("Commands")
        .setColor("#202225")
        .setThumbnail(client.user.displayAvatarURL())
        .setFooter("Type -help <Command> to get more informations about a command.", message.author.displayAvatarURL);
    client.commands.forEach(cmd => {
        embed.addField(`${cmd.help.name}`, `${cmd.help.description || "None"}`, true);
    });
    return message.channel.send(embed);
  }
}



module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["h"],
  permLevel: 0
};

module.exports.help = {
  name: 'help',
  description: 'Prints the help menu',
  usage: 'help'
};