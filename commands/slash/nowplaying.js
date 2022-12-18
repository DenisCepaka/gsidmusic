const { MessageEmbed } = require("discord.js");
const SlashCommand = require("../../lib/SlashCommand");
const prettyMilliseconds = require("pretty-ms");

const command = new SlashCommand()
	.setName("nowplaying")
	.setDescription("Menampilkan lagu yang sedang diputar di Voice Channel.")
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
						.setDescription("Klee tidak ada di Channelmu kak."),
				],
				ephemeral: true,
			});
		}
		
		if (!player.playing) {
			return interaction.reply({
				embeds: [
					new MessageEmbed()
						.setColor("RED")
						.setDescription("Tidak ada musik yang diputar.."),
				],
				ephemeral: true,
			});
		}
		
		const song = player.queue.current;
		const embed = new MessageEmbed()
			.setColor(client.config.embedColor)
			.setAuthor({ name: "Sedang Memainkan", iconURL: client.config.iconURL })
			// show who requested the song via setField, also show the duration of the song
			.setFields([
				{
					name: "Diminta oleh",
					value: `<@${ song.requester.id }>`,
					inline: true,
				},
				// show duration, if live show live
				{
					name: "Durasi",
					value: song.isStream
						? `\`LIVE\``
						: `\`${ prettyMilliseconds(player.position, {
							secondsDecimalDigits: 0,
						}) } / ${ prettyMilliseconds(song.duration, {
							secondsDecimalDigits: 0,
						}) }\``,
					inline: true,
				},
			])
			// show the thumbnail of the song using displayThumbnail("maxresdefault")
			.setThumbnail(song.displayThumbnail("maxresdefault"))
			// show the title of the song and link to it
			.setDescription(`[${ song.title }](${ song.uri })`);
		return interaction.reply({ embeds: [embed] });
	});
module.exports = command;
