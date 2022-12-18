const SlashCommand = require("../../lib/SlashCommand");
const { MessageEmbed } = require("discord.js");
const prettyMilliseconds = require("pretty-ms");

const command = new SlashCommand()
	.setName("save")
	.setDescription("Menyimpan lagu saat ini ke DM Kakak")
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
		
		const sendtoDmEmbed = new MessageEmbed()
			.setColor(client.config.embedColor)
			.setAuthor({
				name: "Lagu tersimpan",
				iconURL: `${ interaction.user.displayAvatarURL({ dynamic: true }) }`,
			})
			.setDescription(
				`**Berhasil Tersimpan [${ player.queue.current.title }](${ player.queue.current.uri }) di DM kakak**`,
			)
			.addFields(
				{
					name: "Durasi Lagu",
					value: `\`${ prettyMilliseconds(player.queue.current.duration, {
						colonNotation: true,
					}) }\``,
					inline: true,
				},
				{
					name: "Author Lagu",
					value: `\`${ player.queue.current.author }\``,
					inline: true,
				},
				{
					name: "Dari Server",
					value: `\`${ interaction.guild }\``,
					inline: true,
				},
			);
		
		interaction.user.send({ embeds: [sendtoDmEmbed] });
		
		return interaction.reply({
			embeds: [
				new MessageEmbed()
					.setColor(client.config.embedColor)
					.setDescription(
						"Silakan periksa **DM** kakak. Jika kakak tidak menerima pesan apa pun dari Klee, pastikan **DM** kakak terbuka",
					),
			],
			ephemeral: true,
		});
	});

module.exports = command;
