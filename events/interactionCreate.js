const Controller = require("../util/Controller");

/**
 *
 * @param {import("../lib/KleeChan")} client
 * @param {import("discord.js").Interaction}interaction
 */
module.exports = (client, interaction) => {
	if (interaction.isCommand()) {
		let command = client.slashCommands.find(
			(x) => x.name == interaction.commandName,
		);
		if (!command || !command.run) {
			return interaction.reply(
				"Maaf perintah yang kakak gunakan tidak memiliki fungsi run",
			);
		}
		client.commandsRan++;
		command.run(client, interaction, interaction.options);
		return;
	}
	
	if (interaction.isContextMenu()) {
		let command = client.contextCommands.find(
			(x) => x.command.name == interaction.commandName,
		);
		if (!command || !command.run) {
			return interaction.reply(
				"Maaf perintah yang kakak gunakan tidak memiliki fungsi run",
			);
		}
		client.commandsRan++;
		command.run(client, interaction, interaction.options);
		return;
	}
	
	if (interaction.isButton()) {
		if (interaction.customId.startsWith("controller")) {
			Controller(client, interaction);
		}
	}
};
