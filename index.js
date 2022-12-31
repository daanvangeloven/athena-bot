const Discord = require('discord.js');
const fs = require('fs');
const config = JSON.parse(fs.readFileSync('./config.json'));

const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
  if (message.content === 'ping') {
    message.channel.send('pong');
  }
});

client.login(config.token);