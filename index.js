const Discord = require("discord.js");
const { Intents } = require("discord.js");
const dotenv = require("dotenv");
const chatBot = require('./chatbot.js');

// https://discord.js.org/#/docs/discord.js/stable/general/welcome
//

dotenv.config();

const client = new Discord.Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

const listCommands = `Membros superiores:\n
Teófilo Nogueira,\n
Bot Selena.\n
Para mais detalhes entre em contato com : cyberstileid397@gmail.com`

//PREFIX
const pre = "!";
//////

client.login(process.env.TOKEN);

client.on("ready", () => {
  console.log("Bot is ready!!!");
});

client.on("messageCreate", (msg) => {
  if (!msg.guild) return;
  if (!msg.content.startsWith(pre)) return;

  if (msg.content === `${pre}Hello`) {
    msg.reply({
      content: "Is Okay!!",
    });
  }

  if (msg.content === `${pre}Bom dia`) {
    msg.reply({
      content: "Bom dia, " + msg.author.username,
    });
  }

  if(msg.content === `${pre}secretList` ) {
    msg.reply({
      content: `${listCommands}`,
    });   
  }//

    if(msg.content === `${pre}adminList`) {
    msg.reply({
      content: `${chatBot}`,
    });   
  }

});