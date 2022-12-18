const SlashCommand = require("../../lib/SlashCommand");
const { MessageEmbed } = require("discord.js");

const command = new SlashCommand()
	.setName("stop")
	.setDescription("Klee menghentikan lagu dan meninggalkan VoiceChannel\n(Command ini akan menghapus antrean)")
	
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
						.setDescription("Ummmmm...Klee sedang tidak dalam Voice Channel Kakak."),
				],
				ephemeral: true,
			});
		}
		
		if (player.twentyFourSeven) {
			player.queue.clear();
			player.stop();
			player.set("autoQueue", false);
		} else {
			player.destroy();
		}
		
		interaction.reply({
			embeds: [
				new MessageEmbed()
.setColor(client.config.embedColor)
.setImage('https://cdn.discordapp.com/attachments/955954026598506537/1017575914659397752/20220909_062218.jpg')
                    .setDescription(`:wave: | **Dadahhhh kak!**
Terima Kasih Sudah Bermain Music Sama Klee, 
Bantu Vote Klee juga ya kak Plisss..
Vote https://top.gg/bot/835127121243930624/vote`),
			],
		});
	});

module.exports = command;
