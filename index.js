const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const token = process.env.token;
const fs = require("fs");
const bot = new Discord.Client({disbaleEveryone: true});
bot.commands = new Discord.Collection();

//LECTURA DE CARPETA COMMANDS
fs.readdir("./commands/", (err, files) =>{

  if(err) console.log(err);

//ERROR AL CARGAR LA CARPETA COMMANDS
  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.log("Counldn't find commands.");
    return;
  }

//LECTURA DE DE COMMANDOS EN LA CARPETA COMANDS
  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded!`);
    bot.commands.set(props.help.name, props);
  });
});

//INICIO DEL BOT Y PERSONALIZACION DEL ESTADO
bot.on("ready", async () => {
  console.log(`${bot.user.username} is online!`);
  bot.user.setStatus('available')
  bot.user.setPresence({
        game: {
            name: 'with depression',
            type: "STREAMING", //PLAYING-LISTENING-STREAMING
            url: "https://www.twitch.tv/blizywashere"
          }
        });
        });



bot.on("message", async message =>{
  if (message.author.bot) return;                  //SI ES UN BOT NO CONTESTAR
  if(message.channel.type === "dm") return;        //SI ES UN WISP NO CONTESTAR


  let prefix = botconfig.prefix;
  //console.log(prefix);
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(!message.content.startsWith(botconfig.prefix)) return;
  if(commandfile) commandfile.run(bot,message,args);

});
bot.login(token);
