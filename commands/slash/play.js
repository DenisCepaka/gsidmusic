const SlashCommand = require("../../lib/SlashCommand");
const { MessageEmbed } = require("discord.js");

const command = new SlashCommand()
	.setName("play")
	.setDescription(
		"Putar Music Dengan Command ini",
	)
	.addStringOption((option) =>
		option
			.setName("query")
			.setDescription("Masukan Judul lagu/link")
			.setRequired(true),
	)
	.setRun(async (client, interaction, options) => {
		let channel = await client.getChannel(client, interaction);
		if (!channel) {
			return;
		}
		
		let player;
		if (client.manager) {
			player = client.createPlayer(interaction.channel, channel);
		} else {
			return interaction.reply({
				embeds: [
					new MessageEmbed()
						.setColor("RED")
						.setDescription("Ummmm....Server Klee Sedang Bermasalah Silahkan Coba lagi Nanti!"),
				],
			});
		}
		
		if (player.state !== "CONNECTED") {
			player.connect();
		}
		
		if (channel.type == "GUILD_STAGE_VOICE") {
			setTimeout(() => {
				if (interaction.guild.me.voice.suppress == true) {
					try {
						interaction.guild.me.voice.setSuppressed(false);
					} catch (e) {
						interaction.guild.me.voice.setRequestToSpeak(true);
					}
				}
			}, 2000); //recognizing it's a stage channel?
		}
		
		await interaction.reply({
			embeds: [
				new MessageEmbed()
					.setColor(client.config.embedColor)
					.setDescription(":mag_right: **Sedang Mencari...**"),
			],
		});
		
		let query = options.getString("query", true);
		let res = await player.search(query, interaction.user).catch((err) => {
			client.error(err);
			return {
				loadType: "LOAD_FAILED",
			};
		});
		
		if (res.loadType === "LOAD_FAILED") {
			if (!player.queue.current) {
				player.destroy();
			}
			return interaction
				.editReply({
					embeds: [
						new MessageEmbed()
							.setColor("RED")
							.setDescription("Terjadi kesalahan saat mencari"),
					],
				})
				.catch(this.warn);
		}
		
		if (res.loadType === "NO_MATCHES") {
			if (!player.queue.current) {
				player.destroy();
			}
			return interaction
				.editReply({
					embeds: [
						new MessageEmbed()
							.setColor("RED")
							.setDescription("Tidak ada hasil yang ditemukan"),
					],
				})
				.catch(this.warn);
		}
		
		if (res.loadType === "TRACK_LOADED" || res.loadType === "SEARCH_RESULT") {
			player.queue.add(res.tracks[0]);
			
			if (!player.playing && !player.paused && !player.queue.size) {
				player.play();
			}
			
			let addQueueEmbed = new MessageEmbed()
				.setColor(client.config.embedColor)
				.setAuthor({ name: "Ditambahkan ke antrian", iconURL: client.config.iconURL })
				.setDescription(
					`[${ res.tracks[0].title }](${ res.tracks[0].uri })` || "Tidak ada Judul",
				)
				.setURL(res.tracks[0].uri)
				.addField("Ditambahkan oleh", `<@${ interaction.user.id }>`, true)
				.addField(
					"Durasi",
					res.tracks[0].isStream
						? `\`LIVE\``
						: `\`${ client.ms(res.tracks[0].duration, {
							colonNotation: true,
						}) }\``,
					true,
				);
			
			try {
				addQueueEmbed.setThumbnail(
					res.tracks[0].displayThumbnail("maxresdefault"),
				);
			} catch (err) {
				addQueueEmbed.setThumbnail(res.tracks[0].thumbnail);
			}
			
			if (player.queue.totalSize > 1) {
				addQueueEmbed.addField(
					"Posisi dalam antrian",
					`${ player.queue.size }`,
					true,
				);
			} else {
				player.queue.previous = player.queue.current;
			}
			
			return interaction
				.editReply({ embeds: [addQueueEmbed] })
				.catch(this.warn);
		}
		
		if (res.loadType === "PLAYLIST_LOADED") {
			player.queue.add(res.tracks);
			
			if (
				!player.playing &&
				!player.paused &&
				player.queue.totalSize === res.tracks.length
			) {
				player.play();
			}
			
			let playlistEmbed = new MessageEmbed()
				.setColor(client.config.embedColor)
				.setAuthor({
					name: "Daftar putar ditambahkan ke antrean",
					iconURL: client.config.iconURL,
				})
				.setThumbnail(res.tracks[0].thumbnail)
				.setDescription(`[${ res.playlist.name }](${ query })`)
				.addField("Antrean", `\`${ res.tracks.length }\` Lagu`, false)
				.addField(
					"Durasi Playlist",
					`\`${ client.ms(res.playlist.duration, { colonNotation: true }) }\``,
					false,
				);
			
			return interaction
				.editReply({ embeds: [playlistEmbed] })
				.catch(this.warn);
		}
	});

module.exports = command;
