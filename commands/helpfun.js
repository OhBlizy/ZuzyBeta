const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let bicon = bot.user.displayAvatarURL;
  let helpembed = new Discord.RichEmbed()
  .setTitle("Fun Commands")
  .addField("`!8ball`","Ask about something and 8ball will respond. \n **#Example:** !8ball Is @<user> a Tsundere?")
  .addField("`!say`","Makes the bot write a custom msj \n **#Example:** !say <msj that you want the bot to say>")
  .setColor("#800080")
  .setThumbnail(bicon)

  return message.channel.send(helpembed);

}
module.exports.help = {
  name: "helpfun"
}
