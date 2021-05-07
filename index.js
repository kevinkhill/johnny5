const Discord = require("discord.js");
const client = new Discord.Client();
const { token, prefix } = require("./config.json");

const inviteLink =
  "https://discord.com/oauth2/authorize?client_id=839306097654366238&scope=bot";

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", message => {
  const reply = message.reply;
  const send = message.channel.send;
  const hear = what => message.content.startsWith(`${prefix}${what}`);

  if (hear("ping")) {
    send("Pong.");
  } else if (hear("beep")) {
    message.reply("Boop.");
  } else if (hear("server")) {
    reply(`This server's name is: ${server.name}`);
  } else if (hear("hi number 5")) {
    reply("Number 5 stupid name... want to be Kevin or Dave! ");
  }
});

//console.log(inviteLink);

client.login(token);
