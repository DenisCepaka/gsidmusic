module.exports = {
	cmdPerPage: 8, //- Number of commands per page of help command
	adminId: "631091920654958648", //- Replace UserId with the Discord ID of the admin of the bot
	token: "ODM1MTI3MTIxMjQzOTMwNjI0.GybmkP.sn4pwMzcOyPqzrRLnRck5Y9lUCq4X0_Cas-jC4", //- Bot's Token
	clientId: process.env.clientId || "835127121243930624", //- ID of the bot
	clientSecret: process.env.clientSecret || "_hzFr_kMdkJHW-9ChBYj5L20aicmND8N", //- Client Secret of the bot
	port: 3000, //- Port of the API and Dashboard
	scopes: ["identify", "guilds", "applications.commands"], //- Discord OAuth2 Scopes
	serverDeafen: false, //- If you want bot to stay deafened
	defaultVolume: 10, //- Sets the default volume of the bot, You can change this number anywhere from 1 to 100
	supportServer: "https://discord.gg/3xum328Pcu", //- Support Server Link
	Issues: "https://discord.gg/BMuwgPZpSr", //- Bug Report Link
	permissions: 277083450689, //- Bot Inviting Permissions
	disconnectTime: 10000, //- How long should the bot wait before disconnecting from the voice channel (in miliseconds). Set to 1 for instant disconnect.
	
 webhookinfo: process.env.webhookinfo || "https://discord.com/api/webhooks/1013546792064929993/4-wZ6_wPFwcReSEgKXQs2H0tg8ERFgY58pin4VoqFlPFeg2g1UkXcNvzDp14a2fc_ONF",
 webhookgloballogs: process.env.webhookgloballogs || "https://discord.com/api/webhooks/1013546792064929993/4-wZ6_wPFwcReSEgKXQs2H0tg8ERFgY58pin4VoqFlPFeg2g1UkXcNvzDp14a2fc_ONF",
	twentyFourSeven: false, //- When set to true, the bot will never disconnect from the voice channel
	autoQueue: false, //- When set to true, related songs will automatically be added to the queue
	autoPause: true, //- When set to true, music will automatically be paused if everyone leaves the voice channel
	debug: true, //- Debug mode
	cookieSecret: "Klee is epic", //- Cookie Secret
	website: "https://kleechan.deniscepaka.repl.co", //- without the / at the end
	// You need a lavalink server for this bot to work!!!!
	// Lavalink server; public lavalink -> https://lavalink-list.darrennathanael.com/; create one yourself -> https://darrennathanael.com/post/how-to-lavalink
	nodes: [
		{
			identifier: "Main", //- Used for indentifier in stats commands.
			host: "lavalink.oops.wtf", //- The host name or IP of the lavalink server.
			port: 443, // The port that lavalink is listening to. This must be a number!
			password: "www.freelavalink.ga", //- The password of the lavalink server.
			retryAmount: 200, //- The amount of times to retry connecting to the node if connection got dropped.
			retryDelay: 40, //- Delay between reconnect attempts if connection is lost.
			secure: true, //- Can be either true or false. Only use true if ssl is enabled!
		},
	],
	embedColor: "#FFED8A", //- Color of the embeds, hex supported
	presence: {
		// PresenceData object | https://discord.js.org/#/docs/main/stable/typedef/PresenceData
		status: "idle", //- You can have online, idle, dnd and invisible (Note: invisible makes people think the bot is offline)
	},
	iconURL: "https://cdn.discordapp.com/attachments/708153453351927828/1017992236778139708/kleeskuare_1.gif", //- This icon will be in every embed's author field
  Spotify: {
    ClientID: process.env.Spotify_ClientID || "d647da3b40374608a828c62e24bd793a", // Spotify Client ID
    ClientSecret: process.env.Spotify_ClientSecret || "f359726b9a514adcb3f95ba600701467", // Spotify Client Secret
  },
};
