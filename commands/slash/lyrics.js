const SlashCommand = require("../../lib/SlashCommand");
const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");

const command = new SlashCommand()
	.setName("lyrics")
	.setDescription("Menampilkan Lirik Lagu")
	// get user input
	.addStringOption((option) =>
		option
			.setName("song")
			.setDescription("Masukan Judul lagu")
			.setRequired(false),
	)
	.setRun(async (client, interaction, options) => {
		await interaction.reply({
			embeds: [
				new MessageEmbed()
					.setColor(client.config.embedColor)
					.setDescription("🔎 **Mencari...**"),
			],
		});
		
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
		
		const args = interaction.options.getString("song");
		if (!args && !player) {
			return interaction.editReply({
				embeds: [
					new MessageEmbed()
						.setColor("RED")
						.setDescription("Tidak ada musik yang diputar."),
				],
			});
		}
		
		let search = args? args : player.queue.current.title;
		let url = `https://api.darrennathanael.com/lyrics?song=${ search }`;
		
		let lyrics = await fetch(url)
			.then((res) => {
				return res.json();
			})
			.catch((err) => {
				return err.name;
			});
		if (!lyrics || lyrics.response !== 200 || lyrics === "FetchError") {
			return interaction.editReply({
				embeds: [
					new MessageEmbed()
						.setColor("RED")
						.setDescription(
							`❌ | Lirik tidak ditemukan untuk Lagu ${ search }!\nPastikan Kakak mengetik pencarian Kakak dengan benar.`,
						),
				],
			});
		}
		
		let text = lyrics.lyrics;
		let lyricsEmbed = new MessageEmbed()
			.setColor(client.config.embedColor)
			.setTitle(`${ lyrics.full_title }`)
			.setURL(lyrics.url)
			.setThumbnail(lyrics.thumbnail)
			.setDescription(text);
		
		if (text.length > 4096) {
			text = text.substring(0, 4090) + "[...]";
			lyricsEmbed
				.setDescription(text)
				.setFooter({ text: "Terpotong!, liriknya terlalu panjang." });
		}
		
		return interaction.editReply({ embeds: [lyricsEmbed] });
	});

module.exports = command;
