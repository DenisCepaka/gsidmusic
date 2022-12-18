const SlashCommand = require("../../lib/SlashCommand");

const command = new SlashCommand()
	.setName("clean")
	.setDescription("Menghapus 100 pesan Klee terakhir dari Channel.")
	.addIntegerOption((option) =>
		option
			.setName("angka")
			.setDescription("Jumlah pesan yang akan dihapus.")
			.setMinValue(2).setMaxValue(100)
			.setRequired(false),
	)
	.setRun(async (client, interaction, options) => {
		
		await interaction.deferReply();
		let number = interaction.options.getInteger("angka");
		number = number && number < 100? ++number : 100;
		
		
		interaction.channel.messages.fetch({
			limit: number,
		}).then((messages) => {
			const botMessages = [];
			messages.filter(m => m.author.id === client.user.id).forEach(msg => botMessages.push(msg))
			
			botMessages.shift();
			interaction.channel.bulkDelete(botMessages, true)
				.then(async deletedMessages => {
					//Filtering out messages that did not get deleted.
					messages = messages.filter(msg => {
						!deletedMessages.some(deletedMsg => deletedMsg == msg);
					});
					if (messages.size > 0) {
						client.log(`Menghapus [${ messages.size }] pesan yang lebih lama dari 14 hari.`)
						for (const msg of messages) {
							await msg.delete();
						}
					}
					
					await interaction.editReply({ embeds: [client.Embed(`:white_check_mark: | Dihapus ${ botMessages.length } dari pesan Klee`)] });
					setTimeout(() => {
						interaction.deleteReply();
					}, 5000);
				})
			
		});
	})

module.exports = command;
