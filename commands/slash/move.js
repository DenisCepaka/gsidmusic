const SlashCommand = require("../../lib/SlashCommand");
const { MessageEmbed } = require("discord.js");

const command = new SlashCommand()
	.setName("move")
	.setDescription("Memindahkan trek ke posisi yang berbeda")
	.addIntegerOption((option) =>
		option
			.setName("track")
			.setDescription("Nomor trek untuk dipindahkan")
			.setRequired(true),
	)
	.addIntegerOption((option) =>
		option
			.setName("position")
			.setDescription("Tambahkan Posisi untuk memindahkan trek ke")
			.setRequired(true),
	)
	
	.setRun(async (client, interaction) => {
		const track = interaction.options.getInteger("track");
		const position = interaction.options.getInteger("position");
		
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
						.setDescription("Tidak ada musik yang diputar.."),
				],
				ephemeral: true,
			});
		}
		
		let trackNum = Number(track) - 1;
		if (trackNum < 0 || trackNum > player.queue.length - 1) {
			return interaction.reply(":x: | **Nomor trek tidak valid**");
		}
		
		let dest = Number(position) - 1;
		if (dest < 0 || dest > player.queue.length - 1) {
			return interaction.reply(":x: | **Nomor posisi Trek tidak valid**");
		}
		
		const thing = player.queue[trackNum];
		player.queue.splice(trackNum, 1);
		player.queue.splice(dest, 0, thing);
		return interaction.reply({
			embeds: [
				new MessageEmbed()
					.setColor(client.config.embedColor)
					.setDescription(":white_check_mark: | **Trek Telah dipindahkan**"),
			],
		});
	});

module.exports = command;
