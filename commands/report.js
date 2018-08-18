const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(arg[0]));
    message.delete().catch(O_o=>{});
    if(!rUser) return message.channel.send("Couldn't find user").then(msg => {
    msg.delete(5000)
  })
    let reason = args.join(" ").slice(22);

    let ricon = message.mentions.users.first();
    let reportEmbed = new Discord.RichEmbed()
    .setDescription("Reports")
    .setColor("#ff4c4c")
    .addField("Reported User", `${rUser}`,true)
    .addField("Reported By", `${message.author}`, true)
    .addField("Channel", message.channel, true)
    .addField("Reason", reason, true)
    .addField("Time", message.createdAt)
    .setThumbnail(ricon.avatarURL);                     //.setImage


    let reportschannel = message.guild.channels.find(`name`, "bitacora");
    if(!reportschannel) return message.channel.send("Couldn't find bitacora channel.").then(msg => {
    msg.delete(5000)
  })

      reportschannel.send(reportEmbed);
      message.reply('Reporte enviado a la bitacora').then(msg => {
      msg.delete(5000)
      })

}

module.exports.help = {
  name: "report"
}
