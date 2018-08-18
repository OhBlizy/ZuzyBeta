const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
      let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
      message.delete().catch(O_o=>{});
      if(!bUser) return message.channel.send("Can't find user!").then(msg => {
      msg.delete(5000)
    })
      let bReason = args.join(" ").slice(22);
      if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send("No can do pal!").then(msg => {
      msg.delete(5000)
    })
      if(bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("That person can't be kicked!").then(msg => {
      msg.delete(5000)
    })



      let bicon = message.mentions.users.first();
      let banEmbed = new Discord.RichEmbed()
      .setDescription("~Ban~")
      .setColor("#FF0000")
      .addField("Banned User", `${bUser}`, true)
      .addField("Banned By", `<@${message.author.id}>`, true)
      .addField("Banned In", message.channel, true)
      .addField("Reason", bReason, true)
      .addField("Time", message.createdAt)
      .setThumbnail(bicon.avatarURL);




      let incidentchannel = message.guild.channels.find(`name`, "bitacora");
      if(!incidentchannel) return message.channel.send("Can't find bitacora channel.").then(msg => {
      msg.delete(5000)
    })

      message.guild.member(bUser).ban(bReason);
      incidentchannel.send(banEmbed);
      message.reply('Reporte enviado a la bitacora').then(msg => {
      msg.delete(5000)
    })

}
module.exports.help = {
  name: "ban"
}
