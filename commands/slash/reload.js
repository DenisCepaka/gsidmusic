const { MessageEmbed, message } = require("discord.js");
const SlashCommand = require("../../lib/SlashCommand");
const fs = require("fs");
const path = require("path");

const command = new SlashCommand()
	.setName("reload")
	.setDescription("Muat ulang semua Commands")
	.setRun(async (client, interaction, options) => {
		if (interaction.user.id === client.config.adminId) {
			try {
				let ContextCommandsDirectory = path.join(__dirname, "..", "context");
				fs.readdir(ContextCommandsDirectory, (err, files) => {
					files.forEach((file) => {
						delete require.cache[
							require.resolve(ContextCommandsDirectory + "/" + file)
							];
						let cmd = require(ContextCommandsDirectory + "/" + file);
						if (!cmd.command || !cmd.run) {
							return this.warn(
								"❌ Tidak dapat memuat Commands: " +
								file.split(".")[0] +
								", File doesn't have either command/run",
							);
						}
						client.contextCommands.set(file.split(".")[0].toLowerCase(), cmd);
					});
				});
				
				let SlashCommandsDirectory = path.join(__dirname, "..", "slash");
				fs.readdir(SlashCommandsDirectory, (err, files) => {
					files.forEach((file) => {
						delete require.cache[
							require.resolve(SlashCommandsDirectory + "/" + file)
							];
						let cmd = require(SlashCommandsDirectory + "/" + file);
						
						if (!cmd || !cmd.run) {
							return this.warn(
								"❌ Unable to load Command: " +
								file.split(".")[0] +
								", File doesn't have an valid command with run function",
							);
						}
						client.slashCommands.set(file.split(".")[0].toLowerCase(), cmd);
					});
				});
				
				const totalCmds =
					client.slashCommands.size + client.contextCommands.size;
				client.log(`Reloaded ${ totalCmds } commands!`);
				return interaction.reply({
					embeds: [
						new MessageEmbed()
							.setColor(client.config.embedColor)
							.setDescription(`Berhasil Dimuat Ulang \`${ totalCmds }\` Commands!`)
							.setFooter({
								text: `${ client.user.username } telah dimuat ulang oleh ${ interaction.user.username }`,
							})
							.setTimestamp(),
					],
					ephemeral: true,
				});
			} catch (err) {
				console.log(err);
				return interaction.reply({
					embeds: [
						new MessageEmbed()
							.setColor(client.config.embedColor)
							.setDescription(
								"Terjadi kesalahan. Untuk lebih jelasnya silahkan cek konsol.",
							),
					],
					ephemeral: true,
				});
			}
		} else {
			return interaction.reply({
				embeds: [
					new MessageEmbed()
						.setColor(client.config.embedColor)
						.setDescription("Kakak tidak diizinkan untuk menggunakan perintah ini!"),
				],
				ephemeral: true,
			});
		}
	});

module.exports = command;
