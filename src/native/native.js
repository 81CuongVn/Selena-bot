const Discord = require("discord.js");
const { Intents } = require("discord.js");
const dotenv = require("dotenv");

const {cm} = require('../help/na_help.js');

//

///////////////////////////////////////////

dotenv.config();

const cli = new Discord.Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
  
});

//PREFIX
const pre = "&";
//////


cli.login(process.env.TOKEN);

// cli.on("ready", () => {
//   console.log("Bot is ready!!!");
// });

cli.on("messageCreate", (msg) => {
  if (!msg.guild) return;
  if (!msg.content.startsWith(pre)) return;
 
  ////////////////////////////

///AUTOMATIZE (by: TeoNogueira)
  
  function rc(b) {

    const mrc = msg.reply({
      content: `${b}`
    })

    return mrc
  }

  let mc = msg.content

 ////////////////////////////

      if (mc === `${pre}&&nativeHelp`) {
  rc( `Comandos especiais: ${cm}`)
  }
      if (mc === `${pre}myData`) {
  rc( `Sua tag é: ${msg.author.tag}`)
  }
      if (mc === `${pre}membros`) {
  rc( `Total de membros: ${msg.guild.memberCount}`)
  }
      if (mc === `${pre}&&botOff`) {
  rc( `Proposital: ${error}`)
  }

  

});

module.exports = cli