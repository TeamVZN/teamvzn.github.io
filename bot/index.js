const { Client, Intents } = require('discord.js');
const { BOT_TOKEN } = require('./config.json');

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.once('ready', () => {
    console.log('Ready!');
});

client.login(BOT_TOKEN);
