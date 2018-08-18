const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let bicon = bot.user.displayAvatarURL;
  let helpembed = new Discord.RichEmbed()
  .setTitle("Images Commands")
  .setColor("#800080")
  .setThumbnail(bicon)

    return message.channel.send(helpembed);

}
module.exports.help = {
  name: "helpimages"
}
