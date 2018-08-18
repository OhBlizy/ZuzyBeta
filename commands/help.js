const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let bicon = bot.user.displayAvatarURL;
  let botembed = new Discord.RichEmbed()
  .setTitle("Hi, Zuzy Desu")
  .setDescription("Below you can see all the commands I know. \n If you have troubles with any command, type \n!help <command category>, Example `!helpbasic`")
  .setColor("#800080")
  .setThumbnail(bicon)
  .addField("Basic Commands", ("`!serverinfo`, `!botinfo`, `!clear`, `!TEST`, `!TEST` ,`!TEST`"))
  .addField("Music Commands", ("`!TEST`, `!TEST`, `!TEST`, `!TEST`, `!TEST` ,`!TEST`"))
  .addField("Fun Commands", ("`!8ball`, `!say`, `!TEST`, `!TEST`, `!TEST` ,`!TEST`"))
  .addField("Images Commands", ("`!TEST`, `!TEST`, `!TEST`, `!TEST`, `!TEST` ,`!TEST`"))
  .addField("Guild Commands", ("`!addrole`, `!removerole`, `!report`, `!kick`, `!ban` ,`!tempmute s/h/d` \n \n**In order to use the commands add/remove role, the bot rol need to be higher than the role you're gonna add/remove**"));



  return message.channel.send(botembed);


}
module.exports.help = {
  name: "help"
}
