const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

      //if(!message.member.hasPermission("ADMINISTRATOR")) return;  //HACE QUE SOLO ADM PUEDAN SPAMEAR CON EL BOT
      const sayMessage = args.join(" ");
      message.delete().catch();
      message.channel.send(sayMessage);

}

module.exports.help = {
  name: "say"
}
