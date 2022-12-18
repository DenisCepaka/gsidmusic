const SlashCommand = require("../../lib/SlashCommand");

const command = new SlashCommand()
	.setName("summon")
	.setDescription("Memanggil Klee ke VC.")
	.setRun(async (client, interaction, options) => {
		let channel = await client.getChannel(client, interaction);
		let node = await client.getLavalink(client);
		if (!interaction.member.voice.channel) {
			const joinEmbed = new MessageEmbed()
				.setColor(client.config.embedColor)
				.setDescription(
					"❌ | **Kakak harus berada di Voice Channel untuk menggunakan perintah ini.**",
				);
			return interaction.reply({ embeds: [joinEmbed], ephemeral: true });
		}
		
		let player = client.manager.players.get(interaction.guild.id);
		if (!player) {
			player = client.createPlayer(interaction.channel, channel);
			player.connect(true);
		}
		
		if (channel.id !== player.voiceChannel) {
			player.setVoiceChannel(channel.id);
			player.connect();
		}
		
		interaction.reply({
			embeds: [
				client.Embed(`:thumbsup: | **Klee Telah Join Ke <#${ channel.id }>!**`),
			],
		});
	});

module.exports = command;
