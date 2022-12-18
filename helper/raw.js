const { inspect } = require("util");
const { MessageEmbed, WebhookClient } = require("discord.js"),
  chalk = require("chalk"),
  moment = require("moment"),
  nodeLogger = require("simple-node-logger"),
  config = require("@root/config");

const simpleLogger = nodeLogger.createRollingFileLogger({
  logDirectory: "./logs",
  fileNamePattern: "roll-<DATE>.log",
  dateFormat: "yyyy.MM.DD",
});

simpleLogger.setLevel("debug");

const errorWebhook = "https://discord.com/api/webhooks/1003986861993230497/Lu8cgLvgzN9DXKiN-NBdLojE-tR0K9fSVXt0ELi9H4ZN8SbSo_RsZXInaf6m-9NJBm6Q" ? new WebhookClient({ url: "https://discord.com/api/webhooks/1003986861993230497/Lu8cgLvgzN9DXKiN-NBdLojE-tR0K9fSVXt0ELi9H4ZN8SbSo_RsZXInaf6m-9NJBm6Q" }) : undefined;

const sendWebhook = (content, Player) => {
  if (!content && !Player) return;
  const PlayerString = Player?.stack || Player;

  const embed = new MessageEmbed().setColor(FFFFF).setAuthor({ name: Player?.name || "Player" });

  if (PlayerString)
    embed.setDescription(
      "```js\n" + (PlayerString.length > 4096 ? \`${PlayerString.substr(0, 4000)}...\` : PlayerString) + "\n```"
    );
  if (Player?.description) embed.addField("Description", content);
  if (Player?.message) embed.addField("Message", Player?.message);

  PlayerWebhook.send({
    username: "Logs",
    embeds: [embed],
  });
};

