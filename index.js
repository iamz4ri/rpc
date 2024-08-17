const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.send('Self Bot Rich Presence working');
});
app.listen(process.env.PORT, () => {
    console.log('Self Bot Rich Presence working on port ' + 3000);
});

const { Client, Discord, RichPresence, CustomStatus, SpotifyRPC } = require('discord.js-selfbot-v13');
const client = new Client({
	checkUpdate: false,
});

client.on('ready', async () => {
    const getExtendURL = await RichPresence.getExternal(
	client,
	'367827983903490050',
	'https://i.imgur.com/S4yxWYF.png',
    );

    const status = new RichPresence(client) // có thể thay status = custom/spotify (if spotify -> new SpotifyRPC(client))
        .setApplicationId('534203414247112723')
        .setType('PLAYING') // playing-streaming-listening
        .setURL(`https://twitch.tv/iamz4ri`) // random url
        .setDetails(`16/08/2024`) // int char
        .setName(`?`) // int char
        .setState(`Bee Swarm Simulator 🐝`) // int char
        .setAssetsLargeImage(getExtendURL[0].external_asset_path)
        .setAssetsLargeText(`dead`) // int char
	.setStartTimestamp(Date.now())
    client.user.setPresence({ activities: [status] }); // status, custom, spotify

    console.log(`${client.user.tag} is ready!`);
});

//Account Token
client.login("token");