const Discord = require("discord.js");
const { Intents } = require("discord.js");

const dotenv = require("dotenv");
const {method, methodTwo, m_3, admins} = require('./src/myStyle/chatbot.js');

const { hour } = require('./src/myStyle/time.js')
const {help} = require('./src/help/help.js')
const {tutor, site, initReact} = require('./src/myStyle/sites.js')

const {imgAnime} = require('./src/myStyle/fetch.js');
//

const {cli } = require('./src/native/native.js')

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
 
  ////////////////////////////

///AUTOMATIZE (by: TeoNogueira)
  
  function rc(b) {

    const mrc = msg.reply({
      content: `${b}`
    })

    return mrc
  }

  let mc = msg.content
  
///////
 ////////////////////////////

      if (mc === `${pre}help`) {
  rc(`${help}`)
  }
      if (mc === `${pre}myData`) {
  rc( `Sua tag é: ${msg.author.tag}`)
  }
  //     if (mc === `${pre}membros`) {
  // rc( `Total de membros: ${msg.guild.memberCount}`)
  // }
  
  if (mc === `${pre}Hello`) {
  rc('Okay!')
  }

  if (mc === `${pre}Bom dia`) {
   rc('Bom dia,' + msg.author.username,)
    
  }

  if (mc === `${pre}secretList`) {
  rc(`${m_3}`)
  }//

  if (mc === `${pre}adminList`) {
  rc(`${method}`)
  }
  if (mc === `${pre}SECRETPASSWORD`) {
  rc(`${methodTwo}`)
  }
  if (mc === `${pre}admins`) {
  rc(`${admins}`)
  }
  
  if (mc === `${pre}time`) {
   rc(`${hour}`)
  }
  if (mc === `${pre}tutorialDiscord`) {
  rc(`${tutor}`)
  }
  if (mc === `${pre}website`) {
  rc(`${site}`)
  }
  
  if (mc === `${pre}tutorialReact`) {
   rc(`${initReact}`)
  }
  if (mc === `${pre}selena`) {
   rc(`${imgAnime}\n ${hour}`)
  }

  cli
});
