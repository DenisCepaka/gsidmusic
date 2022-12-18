const SlashCommand = require("../../lib/SlashCommand");
const { MessageEmbed } = require("discord.js");
const ms = require("ms");

const command = new SlashCommand()
	.setName("seek")
	.setDescription("Carilah waktu tertentu dalam lagu saat ini.")
	.addStringOption((option) =>
		option
			.setName("time")
			.setDescription("Carilah waktu yang Kakak inginkan. Contoh 2m | 10s | 53s")
			.setRequired(true),
	)
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
		
		const args = interaction.options.getString("time");
		const time = ms(args);
		const position = player.position;
		const duration = player.queue.current.duration;
		
		if (time <= duration) {
			player.seek(time);
			return interaction.editReply({
				embeds: [
					new MessageEmbed()
						.setColor(client.config.embedColor)
						.setDescription(
							`⏩ | **${ player.queue.current.title }** Telah ${
								time < position? "rewound" : "seeked"
							} ke **${ ms(time) }**`,
						),
				],
			});
		} else {
			return interaction.editReply({
				embeds: [
					new MessageEmbed()
						.setColor(client.config.embedColor)
						.setDescription(
							`Tidak dapat mencari trek yang sedang diputar. Ini mungkin terjadi karena durasi pencarian telah melebihi durasi trek`,
						),
				],
			});
		}
	});

module.exports = command;
