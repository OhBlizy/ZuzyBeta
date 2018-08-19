const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    //Revisa si el author esta conectado a un canal de voz
    if (!message.member.voiceChannel) return message.channel.send('Please connect to a voice channel');
    
    //REVOSA SO E; NPT ESTA CONECTADO A UN CANAL DE VOZ
    if(!message.guild.me.voiceChannelID) return message.channel.send("sorry, the bot isn\'t connected to the guild");

    //REVISA SI EL AUTOR DEL COMANDO ESTA EN EL MISMO CANAL QUE EL BOT
    if (message.guild.me.voiceChannelID !== message.member.voiceChannelID) return message.channel.send("Sorry, you aren\'t connected to the same channel.")

    //SACA AL BOT DEL CANAL
    message.guild.me.voiceChannel.leave();

    //MANDA MSJ DE QUE ESTA SALIENDO DEL CANAL
    message.channel.send("leaving channel...");



}
module.exports.help = {
  name: "leave"
}