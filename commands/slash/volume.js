const SlashCommand = require("../../lib/SlashCommand");
const { MessageEmbed } = require("discord.js");

const command = new SlashCommand()
	.setName("volume")
	.setDescription("Ubah volume lagu saat ini.")
	.addNumberOption((option) =>
		option
			.setName("nomor")
			.setDescription("Jumlah volume yang ingin kakak ubah. contoh: 10")
			.setRequired(false),
	)
	.setRun(async (client, interaction) => {
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
		
		let vol = interaction.options.getNumber("nomor");
		if (!vol || vol < 1 || vol > 125) {
			return interaction.reply({
				embeds: [
					new MessageEmbed()
						.setColor(client.config.embedColor)
						.setDescription(
							`:loud_sound: | Volume saat ini **${ player.volume }**`,
						),
				],
			});
		}
		
		player.setVolume(vol);
		return interaction.reply({
			embeds: [
				new MessageEmbed()
					.setColor(client.config.embedColor)
					.setDescription(
						`:loud_sound: | Berhasil mengatur volume ke **${ player.volume }**`,
					),
			],
		});
	});

module.exports = command;
