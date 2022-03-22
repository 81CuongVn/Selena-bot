const Discord = require("discord.js");
const { Intents } = require("discord.js");
const dotenv = require("dotenv");

const date = new Date()

const hours = date.getHours();
const msgNight = 'Boa noite! '
const msgMorning = 'Bom dia! '
const msgAft = 'Boa tarde! '

dotenv.config();

const client = new Discord.Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

const prefix = "#";

client.login(process.env.TOKEN);

client.on("ready", () => {
  console.log("Bot is ready!!!");
});

client.on("messageCreate", (msg) => {
  if (!msg.guild) return;
  if (!msg.content.startsWith(prefix)) return;

  if (msg.content === prefix + "Hello") {
    msg.reply({
      content: "Is Okay!!",
    });
  }

  const speakHours = () => {
  if(hours == 18 || hours < 24) {

    msgNight
  } else if( hours == 24 || hours < 12) {

    msgMorning
  } else if(hours == 12 || hours < 18) {

    msgAft
  }
  }

  
  if (msg.content === prefix + `${speakHours()}`) {
    msg.reply({
      content: `${speakHours()}` + msg.author.username,
    });
  }
});