const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {

  //!tempmute @user 1s/m/h/d

  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  message.delete().catch(O_o=>{});
  if(!tomute) return message.reply("Couldn't find user.").then(msg => {
  msg.delete(5000)
})
  if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("Can't mute them!");
  let muterole = message.guild.roles.find(`name`, "muted");
  //start of create role
  if(!muterole){
    try{
      muterole = await message.guild.createRole({
        name: "muted",
        color: "#000000",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }
  //end of create role
    let mutetime = args[1];
    if(!mutetime) return message.reply("You didn't specify a time!").then(msg => {
    msg.delete(5000)
  })

    await(tomute.addRole(muterole.id));
    message.reply(`<@${tomute.id}> has been muted for ${ms(ms(mutetime))}`).then(msg => {
  msg.delete(5000)
})


setTimeout(function(){
    tomute.removeRole(muterole.id);
    message.channel.send(`<@${tomute.id}> has been unmuted!`).then(msg => {
  msg.delete(5000)
})
}, ms(mutetime));

  //end of the mute time

  let tmicon = message.mentions.users.first();
  let tempmuteEmbed = new Discord.RichEmbed()
  .setDescription("~Tempmute~")
  .setColor("RANDOM")
  .addField("Tempmute User", `${tomute}`, true)
  .addField("Tempmute By", `<@${message.author.id}>`, true)
  .addField("Muted for ", `${ms(ms(mutetime))}`, true)
  .addField("Time", message.createdAt)
  .setThumbnail(tmicon.avatarURL);



  let tempmuteChannel = message.guild.channels.find(`name`, "bitacora");
  if(!tempmuteChannel) return message.channel.send("Can't find bitacora channel.");

  //message.delete().catch(O_o=>{});
  tempmuteChannel.send(tempmuteEmbed);
  message.reply('Reporte enviado a la bitacora').then(msg => {
  msg.delete(5000)
})

//end of module
}

module.exports.help = {
  name: "tempmute"
}
