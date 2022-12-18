
require('dotenv').config()

    
const DiscordMusicBot = require("./lib/KleeChan");
const { exec } = require("child_process");


const client = new DiscordMusicBot();

module.exports = client;
