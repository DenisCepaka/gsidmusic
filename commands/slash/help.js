const SlashCommand = require("../../lib/SlashCommand");
const {
	Client,
	Interaction,
	MessageActionRow,
	MessageButton,
	MessageEmbed,
} = require("discord.js");
const LoadCommands = require("../../util/loadCommands");
const { filter } = require("lodash");

const command = new SlashCommand()
	.setName("help")
	.setDescription("Menampilkan List Commands")
	.setRun(async (client, interaction) => {
		await interaction.deferReply().catch((_) => {
		});
		// map the commands name and description to the embed
		const commands = await LoadCommands().then((cmds) => {
			return [].concat(cmds.slash) /*.concat(cmds.context)*/;
		});
		// from commands remove the ones that have "null" in the description
		const filteredCommands = commands.filter(
			(cmd) => cmd.description != "null",
		);
		//console.log(filteredCommands);
		const totalCmds = filteredCommands.length;
		let maxPages = Math.ceil(totalCmds / client.config.cmdPerPage);
		
		// if git exists, then get commit hash
		let gitHash = "";
		try {
			gitHash = require("child_process")
				.execSync("git rev-parse --short HEAD")
				.toString()
				.trim();
		} catch (e) {
			// do nothing
			gitHash = "unknown";
		}
		
		// default Page No.
		let pageNo = 0;
		
		const helpEmbed = new MessageEmbed()
			.setColor(client.config.embedColor)
      .setDescription('**kl!stiker** = Untuk melihat stiker\n**kl!apakah = Kerang Ajaib**')
			.setAuthor({
				name: `Commands dari ${ client.user.username }`,
				iconURL: client.config.iconURL,
			})
			.setTimestamp()
			.setFooter({ text: `Halaman ${ pageNo + 1 } / ${ maxPages }` });
		
		// initial temporary array
		var tempArray = filteredCommands.slice(
			pageNo * client.config.cmdPerPage,
			pageNo * client.config.cmdPerPage + client.config.cmdPerPage,
		);
		
		tempArray.forEach((cmd) => {
			helpEmbed.addField(cmd.name, cmd.description);
		});
		helpEmbed.addField(
			"Jika kakak berkenan memberi jajan Klee",
			`💸 [Saweria](https://saweria.co/GamersStationID) ・\👈 click me`,
		);
		
		// Construction of the buttons for the embed
		const getButtons = (pageNo) => {
			return new MessageActionRow().addComponents(
				new MessageButton()
					.setCustomId("help_cmd_but_2_app")
					.setEmoji("◀️")
					.setStyle("PRIMARY")
					.setDisabled(pageNo == 0),
				new MessageButton()
					.setCustomId("help_cmd_but_1_app")
					.setEmoji("▶️")
					.setStyle("PRIMARY")
					.setDisabled(pageNo == maxPages - 1),
			);
		};
		
		const tempMsg = await interaction.editReply({
			embeds: [helpEmbed],
			components: [getButtons(pageNo)],
			fetchReply: true,
		});
		const collector = tempMsg.createMessageComponentCollector({
			time: 600000,
			componentType: "BUTTON",
		});
		
		collector.on("collect", async (iter) => {
			if (iter.customId === "help_cmd_but_1_app") {
				pageNo++;
			} else if (iter.customId === "help_cmd_but_2_app") {
				pageNo--;
			}
			
			helpEmbed.fields = [];
			
			var tempArray = filteredCommands.slice(
				pageNo * client.config.cmdPerPage,
				pageNo * client.config.cmdPerPage + client.config.cmdPerPage,
			);
			
			tempArray.forEach((cmd) => {
				//console.log(cmd);
				helpEmbed
					.addField(cmd.name, cmd.description)
					.setFooter({ text: `Halaman ${ pageNo + 1 } / ${ maxPages }` });
			});
			helpEmbed.addField(
				"Jika kakak berkenan memberi jajan Klee",
				`💸 [Saweria](https://saweria.co/GamersStationID) ・\👈 click me`,
			);
			await iter.update({
				embeds: [helpEmbed],
				components: [getButtons(pageNo)],
				fetchReply: true,
			});
		});
	});

module.exports = command;
