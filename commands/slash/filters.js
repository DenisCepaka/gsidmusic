const { MessageEmbed } = require("discord.js");
const SlashCommand = require("../../lib/SlashCommand");

const command = new SlashCommand()
	.setName("filters")
	.setDescription("tambahkan atau hapus filter Lagu")
	.addStringOption((option) =>
		option
			.setName("preset")
			.setDescription("preset untuk ditambahkan")
			.setRequired(true)
			.addChoices(
				{ name: "Nightcore", value: "nightcore" },
				{ name: "BassBoost", value: "bassboost" },
				{ name: "Vaporwave", value: "vaporwave" },
				{ name: "Pop", value: "pop" },
				{ name: "Soft", value: "soft" },
				{ name: "Treblebass", value: "treblebass" },
				{ name: "Eight Dimension", value: "eightD" },
				{ name: "Karaoke", value: "karaoke" },
				{ name: "Vibrato", value: "vibrato" },
				{ name: "Tremolo", value: "tremolo" },
				{ name: "Reset", value: "off" },
			),
	)
	
	.setRun(async (client, interaction, options) => {
		const args = interaction.options.getString("preset");
		
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
		
		// create a new embed
		let filtersEmbed = new MessageEmbed().setColor(client.config.embedColor);
		
		if (args == "nightcore") {
			filtersEmbed.setDescription("✅ | Filter Nightcore sekarang aktif!");
			player.nightcore = true;
		} else if (args == "bassboost") {
			filtersEmbed.setDescription("✅ | Filter BassBoost sekarang aktif!");
			player.bassboost = true;
		} else if (args == "vaporwave") {
			filtersEmbed.setDescription("✅ | Filter Vaporwave sekarang aktif!");
			player.vaporwave = true;
		} else if (args == "pop") {
			filtersEmbed.setDescription("✅ | Filter pop sekarang aktif!");
			player.pop = true;
		} else if (args == "soft") {
			filtersEmbed.setDescription("✅ | Filter Soft sekarang aktif!");
			player.soft = true;
		} else if (args == "treblebass") {
			filtersEmbed.setDescription("✅ | Filter Treblebass sekarang aktif!");
			player.treblebass = true;
		} else if (args == "eightD") {
			filtersEmbed.setDescription("✅ | Filter Delapan Dimensi sekarang aktif!");
			player.eightD = true;
		} else if (args == "karaoke") {
			filtersEmbed.setDescription("✅ | Filter karaoke sekarang aktif!");
			player.karaoke = true;
		} else if (args == "vibrato") {
			filtersEmbed.setDescription("✅ | Filter vibrato sekarang aktif!");
			player.vibrato = true;
		} else if (args == "tremolo") {
			filtersEmbed.setDescription("✅ | Filter Tremolo sekarang aktif!");
			player.tremolo = true;
		} else if (args == "off") {
			filtersEmbed.setDescription("✅ | EQ telah dihapus!");
			player.reset();
		} else {
			filtersEmbed.setDescription("❌ | Filter tidak valid!");
		}
		
		return interaction.reply({ embeds: [filtersEmbed] });
	});

module.exports = command;
