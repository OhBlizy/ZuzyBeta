const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let bicon = bot.user.displayAvatarURL;
  let helpembed = new Discord.RichEmbed()
  .setTitle("Guild Commands")
  .addField("`!addrole`","Give someone a role. \n **#Example:** !addrol @<user> <rol you want to give>")
  .addField("`!removerol`","Remove someone's role. \n `**#Example:**` !removerol @<user> <rol you want to remove>")
  .addField("`!report`","Make a report from a user, and sends it to the bitracora channel \n **#Example:** !report @<user><reason of the report>")
  .addField("`!kick`","Remove a user from the server, and sends a report to the bitacora channel. \n **#Example:** !kick@<user><reason of the report>")
  .addField("`!ban`","Restricts the user from entering the server, and sends a report to the bitacora channel. \n **#Example:** !ban@<user><reason of the report>")
  .addField("`!tempmute`","Silences the user in all the channels of the server for a determined time \n **#Example:** !tempmute @<user> <time> s for second, h hours, d for days")
  .setColor("#800080")
  .setThumbnail(bicon)

  return message.channel.send(helpembed);

}
module.exports.help = {
  name: "helpguild"
}
