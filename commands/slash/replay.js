const SlashCommand = require("../../lib/SlashCommand");
const { MessageEmbed } = require("discord.js");

const command = new SlashCommand()
	.setName("replay")
	.setDescription("Putar ulang Lagu yang sedang diputar")
	.setRun(async (client, interaction, options) => {
		let channel = await client.getChannel(client, interaction);
		if (!channel) {
			return;
		}
		
		let player;
		if (client.manager) {
			player = client.manager.players.get(interaction.guild.id);
		} else {
			return interaction.reply({
				embeds: [
					new MessageEmbed()
						.setColor("RED")
						.setDescription("Ummmm....Server Klee Sedang Bermasalah Silahkan Coba lagi Nanti!"),
				],
			});
		}
		
		if (!player) {
			return interaction.reply({
				embeds: [
					new MessageEmbed()
						.setColor("RED")
						.setDescription("Tidak ada musik yang diputar."),
				],
				ephemeral: true,
			});
		}
		
		await interaction.deferReply();
		
		player.seek(0);
		
		let song = player.queue.current;
		return interaction.editReply({
			embeds: [
				new MessageEmbed()
					.setColor(client.config.embedColor)
					.setDescription(`Replay [${ song.title }](${ song.uri })`),
			],
		});
	});

module.exports = command;
