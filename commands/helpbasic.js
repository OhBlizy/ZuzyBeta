const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let bicon = bot.user.displayAvatarURL;
  let helpembed = new Discord.RichEmbed()
  .setTitle("Basic Commands")
  .addField("`!serverinfo`", "Shows the information of the server \n \n ")
  .addField("`!botinfo`", ("Shows the information of the bot \n \n") )
  .addField("`!clear`", ("Delete certain number of messages \n \n **#Example:** !clear <N. messages you want to delete>?") )
  .setColor("#800080")
  .setThumbnail(bicon)

    return message.channel.send(helpembed);

}
module.exports.help = {
  name: "helpbasic"
}
