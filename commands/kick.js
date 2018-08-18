const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
      let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
      message.delete().catch(O_o=>{});
      if(!kUser) return message.channel.send("Can't find user!").then(msg => {
      msg.delete(5000)
    })
      let kReason = args.join(" ").slice(22);
      if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("No can do pal!").then(msg => {
      msg.delete(5000)
    })
      if(kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("That person can't be kicked!").then(msg => {
      msg.delete(5000)
    })


      let kicon = message.mentions.users.first();
      let kickEmbed = new Discord.RichEmbed()
      .setDescription("~Kick~")
      .setColor("#e57e00")
      .addField("Kicked User", `${kUser}`, true)
      .addField("Kicked By", `<@${message.author.id}>`, true)
      .addField("Kicked In", message.channel, true)
      .addField("Reason", kReason, true)
      .addField("Time", message.createdAt)
      .setThumbnail(kicon.avatarURL);


      let kickChannel = message.guild.channels.find(`name`, "bitacora");
      if(!kickChannel) return message.channel.send("Can't find bitacora channel.").then(msg => {
      msg.delete(5000)
    })

      message.delete().catch(O_o=>{});
      message.guild.member(kUser).kick(kReason);
      kickChannel.send(kickEmbed);
      message.reply('Reporte enviado a la bitacora').then(msg => {
      msg.delete(5000)
    })

}
module.exports.help = {
  name: "kick"
}
