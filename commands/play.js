const Discord = require("discord.js");
const ytdl = require('ytdl-core');

module.exports.run = async (bot, message, args) => {

    // Revisa si el autor esta en un canal de voz
    if (!message.member.voiceChannel) return message.channel.send('Please connect to a voice channel');
    //Si no lo esta, return y manda msj al canal de txt

    //Revisa si el bot esta en algun chat de voz
    if(message.guild.me.voiceChannel) return message.channel.send('Sorry, the bot is already connected to the guild.');

    //Revisar si el autor puso una url
    if(!args[0]) return message.channel.send('Sorry, please input a urls following the command.');

    //valida la informacion
    let validate = await ytdl.validateURL(args[0]);

    //Check validation
    if (!validate) return message.channel.send('Sorry, please input a **valid** url fallowing the command.');

    //Extraer la informacion del video
    let info = await ytdl.getInfo(args[0]);

    //Store authors guild channel
    let connection = await message.member.voiceChannel.join();

    //play song
    let dispatcher = await connection.play(ytdl(args[0], {filter: 'audioonly'}));
    //the dispatcher variable will be used in a later episode

    //output now playing
    message.channel.send('Now playing: ${info.title}');

}
module.exports.help = {
  name: "play"
}
