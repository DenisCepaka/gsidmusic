/**
 *
 * @param {import("../lib/KleeChan")} client
 * @param {import("discord.js").GuildCommandInteraction} interaction
 * @returns
 */
module.exports = async (client, interaction) => {
	return new Promise(async (resolve) => {
		if (!interaction.member.voice.channel) {
			await interaction.reply({
				embeds: [
					client.ErrorEmbed(
						"kakak harus berada di Voice Channel untuk menggunakan Commands ini!",
					),
				],
			});
			return resolve(false);
		}
		if (
			interaction.guild.me.voice.channel &&
			interaction.member.voice.channel.id !==
			interaction.guild.me.voice.channel.id
		) {
			await interaction.reply({
				embeds: [
					client.ErrorEmbed(
						"kakak harus berada di Voice Channel yang sama dengan Klee untuk menggunakan perintah ini!",
					),
				],
			});
			return resolve(false);
		}
		if (!interaction.member.voice.channel.joinable) {
			await interaction.reply({
				embeds: [
					client.ErrorEmbed(
						"Klee tidak memiliki Permission untuk bergabung ke Voice Channel kakak!",
					),
				],
			});
			return resolve(false);
		}
		
		resolve(interaction.member.voice.channel);
	});
};
