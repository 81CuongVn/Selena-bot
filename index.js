const Discord = require("discord.js");
const { Intents } = require("discord.js");
const dotenv = require("dotenv");

const {method, methodTwo, m_3, admins} = require('./chatbot.js');

const {tutor, hour } = require('./time.js')

//

//BOT ON

const express = require('express');

const app = express();

app.get('/', (request, response) => {

const ping = new Date();

ping.setHours(ping.getHours() -3);

console.log(`Ping recebido às ${ping.getUTCHours()}):${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`);

response.sendStatus(200)

})

app.listen(process.env.PORT)

///////////////////////////////////////////

dotenv.config();

const client = new Discord.Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});



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

  if (msg.content === `${pre}secretList`) {
    msg.reply({
      content: `${m_3}`,
    });
  }//

  if (msg.content === `${pre}adminList`) {
    msg.reply({
      content: `${method}`,
    });
  }
  if (msg.content === `${pre}SECRETPASSWORD`) {
    msg.reply({
      content: `${methodTwo}`,
    });
  }
  if (msg.content === `${pre}admins`) {
    msg.reply({
      content: `${admins}`,
    });
  }
  
  if (msg.content === `${pre}time`) {
    msg.reply({
      content: `${hour}`,
    });
  }
  if (msg.content === `${pre}tutorialDiscord`) {
    msg.reply({
      content: `${tutor}`,
    });
  }


});
