const { MessageEmbed } = require("discord.js");
const { filter } = require("lodash");
const axios = require('axios')
module.exports = async (client, message) => {
  try {
	const mention = new RegExp(`^<@!?${ client.user.id }>( |)$`);
	
	if (message.content.match(mention)) {
		const mentionEmbed = new MessageEmbed()
			.setColor(client.config.embedColor)
			.setDescription(
				`Prefix Klee di Server ini adalah \`/\` (Slash Command).\Untuk memulai, kakak dapat mengetik \`/help\` untuk melihat semua perintah Klee.



Jika kakak berkenan memberi jajan Klee

💸 [Saweria](https://saweria.co/GamersStationID) ・\👈 click me`,
			);
		message.channel.send({
			embeds: [mentionEmbed],
		});
	}
  if (message.content.startsWith("Hai")) {
		const hai = new MessageEmbed()
			.setColor(client.config.embedColor)
			.setDescription(
				`Hai juga kak!`,
			);
		message.channel.send({
			embeds: [hai],
		});
	}
  const prokk = ['Sugoi'];
  const Prok = new RegExp(prokk.join('|'), 'gi');
    if (message.content.match(Prok)) { message.channel.send(`https://cdn.discordapp.com/attachments/955954026598506537/1001984612312035348/kokomi-clapping.gif`);
    }
  const Oh = ['Naruhodo'];
  const Ohh = new RegExp(Oh.join('|'), 'gi');
    if (message.content.match(Ohh)) { message.channel.send(`https://cdn.discordapp.com/attachments/955954026598506537/1001984612618227793/keqing-boss.gif`);
    }
  const Wk = ['Pfff'];
  const Wkw = new RegExp(Wk.join('|'), 'gi');
    if (message.content.match(Wkw)) { message.channel.send(`https://cdn.discordapp.com/attachments/955954026598506537/1001984611515125790/yanfei-laughing.gif`);
    }
  const Ano = ['Anoo'];
  const An = new RegExp(Ano.join('|'), 'gi');
    if (message.content.match(An)) { message.channel.send(`https://cdn.discordapp.com/attachments/955954026598506537/1001984609975808061/genshin-impact.gif`);
    }
  const Mau = ['Punyaku!', 'Waifuku!'];
  const Pun = new RegExp(Mau.join('|'), 'gi');
    if (message.content.match(Pun)) { message.channel.send(`https://cdn.discordapp.com/attachments/955954026598506537/1001984611942924338/paimon-wish.gif`);
    }
  if (message.content.match('Welkom')) { message.channel.send(`https://cdn.discordapp.com/attachments/955954026598506537/1002357005899550811/welcomegif.gif`);
    }
  if (message.content.match('Nangis')) { message.channel.send(`https://cdn.discordapp.com/attachments/955954026598506537/1002358449566404678/dionacry.gif`);
    }
  if (message.content.startsWith('Seneng')) { message.channel.send(`https://cdn.discordapp.com/attachments/955954026598506537/1002357453435981889/ezgif.com-gif-maker_12.gif`);
    }
  if (message.content.startsWith('Muah')) { message.channel.send(`https://cdn.discordapp.com/attachments/955954026598506537/1001991452261351434/kiss-genshin.gif`);
    }
  if (message.content.startsWith('Madang ')) { message.channel.send(`https://cdn.discordapp.com/attachments/955954026598506537/1001991450587840584/paimon-food.gif`);
    }
  if (message.content.startsWith('Kok aku?')) { message.channel.send(`https://cdn.discordapp.com/attachments/955954026598506537/1001984482313777272/sayu-sad.gif`);
    }
  if (message.content.startsWith('Yoii')) { message.channel.send(`https://cdn.discordapp.com/attachments/955954026598506537/1001984481944686682/ayaka-genshin.gif`);
    }
  if (message.content.startsWith('Makasih')) { message.channel.send(`https://cdn.discordapp.com/attachments/955954026598506537/1001984482984873994/klee-like.gif`);
    }
  if (message.content.startsWith('Ampun')) { message.channel.send(`https://cdn.discordapp.com/attachments/955954026598506537/1001991450956931162/hutao.gif`);
    }
  if (message.content.startsWith('SUS')) { message.channel.send(`https://cdn.discordapp.com/attachments/955954026598506537/1001991452877922324/yae-miko.gif`);
    }
  const wawawa = ['Ngakak'];
  const wadd = new RegExp(wawawa.join('|'), 'gi');
    if (message.content.match(wadd)) { message.channel.send(`https://cdn.discordapp.com/attachments/955954026598506537/1002432004517810186/hutaoketawa.gif`);
    }
  if (message.content.startsWith('Ngamuk')) {  message.channel.send(`https://cdn.discordapp.com/attachments/955954026598506537/1002364459370680391/kleetriger.gif`);
    }
  if (message.content.startsWith('Ngomong')) { message.channel.send(`https://cdn.discordapp.com/attachments/955954026598506537/1002364966051008522/sayu-talking.gif`);
    }
  if (message.content.startsWith('Wakaranai')) { message.channel.send(`https://cdn.discordapp.com/attachments/955954026598506537/1002367109424238692/wakaranai.jpg`);
    }
  if (message.content.startsWith('Aloo')) { message.channel.send(`https://cdn.discordapp.com/attachments/955954026598506537/1002367109608779796/alooo.gif`);
    }
  if (message.content.startsWith('Anya')) { message.channel.send(`https://cdn.discordapp.com/attachments/955954026598506537/1002367109893996656/anyaa.gif`);
    }
  if (message.content.startsWith('Hadehh')) { message.channel.send(`https://cdn.discordapp.com/attachments/955954026598506537/1002375908184838174/hutao-not.gif`);
    }
  if (message.content.startsWith('Tydak')) { message.channel.send(`https://cdn.discordapp.com/attachments/955954026598506537/1002375908600061992/ganyu-nope.gif`);
    }
  if (message.content.startsWith('Boleh')) { message.channel.send(`https://cdn.discordapp.com/attachments/955954026598506537/1002375908994334851/ganyu-concerned.gif`);
    }
  if (message.content.startsWith('Duid')) { message.channel.send(`https://cdn.discordapp.com/attachments/955954026598506537/1002375910617522256/hutao-money-rain.gif`);
    }
  if (message.content.startsWith('Enggak!')) { message.channel.send(`https://cdn.discordapp.com/attachments/955954026598506537/1002375911385079858/kokomi-rage.gif`);
    }
  if (message.content.startsWith('Injek')) { message.channel.send(`https://cdn.discordapp.com/attachments/955954026598506537/1002376003525554246/yoimiya-rage.gif`);
    }
  if (message.content.startsWith('Okok')) { message.channel.send(`https://cdn.discordapp.com/attachments/955954026598506537/1002376004519604254/yoimiya-like.gif`);
    }
  if (message.content.startsWith('Musikan')) { message.channel.send(`https://cdn.discordapp.com/attachments/955954026598506537/1002375634242240613/barbara-genshin-impact.gif`);
    }
  if (message.content.startsWith('Ngopi')) { message.channel.send(`https://cdn.discordapp.com/attachments/955954026598506537/1002375633034281021/genshin-impact_2.gif`);
    }
  if (message.content.startsWith('Yeayy')) { message.channel.send(`https://cdn.discordapp.com/attachments/955954026598506537/1002375635324371064/hutao-jump.gif`);
    }
  if (message.content.startsWith('Horee')) { message.channel.send(`https://cdn.discordapp.com/attachments/955954026598506537/1002375635886415963/hutao-like-a-boss.gif`);
    }
  if (message.content.startsWith('Turu')) { message.channel.send(`https://cdn.discordapp.com/attachments/955954026598506537/1002375636318433450/ganyu-sleeping-beauty.gif`);
    }
  if (message.content.startsWith('Jelas!')) { message.channel.send(`https://cdn.discordapp.com/attachments/955954026598506537/1002375909812211763/fischl-jojo.gif`);
    }
  if (message.content.startsWith("kl!quotes")) {
    const {data} = await axios(`https://api.lolhuman.xyz/api/random/quotes?apikey=denis`)
    quotes = data.result.quote
    author = data.result.by
    const KKKK = new MessageEmbed()
      .setTitle(`Quotes but Klee?`)
			.setColor(client.config.embedColor)
			.setDescription(
				`・ ✦ — ***"${quotes}"*** — ✦ ・`
		)
      .setFooter(`・ ✦ — By ${author}`)
    KKKK.addField(
			"Jika kakak berkenan memberi jajan Klee",
			`💸 [Saweria](https://saweria.co/GamersStationID) ・\👈 click me`,
		);
		message.reply({
			embeds: [KKKK]
		});
};
Apakah = message.content.slice(3)
const apa = ['Iya', 'Tidak', 'Bisa Jadi', 'Coba Ulangi']
const kah = apa[Math.floor(Math.random() * apa.length)]
if (message.content.startsWith(`kl!apakah`)) {
  const PAKAH = new MessageEmbed()
      .setTitle(`Klee but KEONG AJAIB?`)
			.setColor(client.config.embedColor)
			.setDescription(
				`・ ✦ — **Pertanyaan :** ${Apakah}\n・ ✦ —**Jawaban :**  ${kah}`
		)
      .setFooter(`・ ✦ — Command by ${message.author.username}`)
      .setTimestamp()
  message.reply({
			embeds: [PAKAH]
		});
     };

    if (message.content.startsWith("kl!bucin")) {
    const {data} = await axios(`https://api.lolhuman.xyz/api/random/bucin?apikey=denis`);
    bucin = data.result
    const KKKK = new MessageEmbed()
      
      .setTitle(`Random Kata BUCIN`)
			.setColor(client.config.embedColor)
			.setDescription(
				`・ ✦ — ***"${bucin}"*** — ✦ ・`
		)
      .setFooter(`・ ✦ — Command By ${message.author.username}`)
    KKKK.addField(
			"Jika kakak berkenan memberi jajan Klee",
			`💸 [Saweria](https://saweria.co/GamersStationID) ・\👈 click me`,
		);
		message.reply({
			embeds: [KKKK]
		});
};
    if (message.content.startsWith("kl!faktaunik")) {
    const {data} = await axios(`https://api.lolhuman.xyz/api/random/faktaunik?apikey=denis`);
    fakta = data.result
    const KKKKK = new MessageEmbed()
      .setTitle(`Fakta Unik Dunia`)
			.setColor(client.config.embedColor)
			.setDescription(
				`・ ✦ — ***"${fakta}"*** — ✦ ・`
		)
      .setFooter(`・ ✦ — Command By ${message.author.username}`);
		message.reply({
			embeds: [KKKKK]
		});
};
const kleee = ['Hadirr', 'Iya kak', 'UwU', 'Apa kak?']
const kleean = kleee[Math.floor(Math.random() * kleee.length)]
if (message.content.startsWith('Klee')) { message.channel.send(`${kleean}`);
    }
  if (message.content.startsWith("kl!stiker")) {
    const commmands = [{name: `Sugoi`, desc: 'Menampilkan Stiker'}, {name: `Naruhodo`, desc: 'Menampilkan Stiker Naruhodou'}, {name: `Pfff`, desc: 'Menampilkan Stiker Pfff'}, {name: `Anoo`, desc: 'Menampilkan Stiker Anoo'}, {name: `Punyaku!/Waifuku!`, desc: 'Menampilkan Stiker Punyaku!/Waifuku!'}, {name: `Nangis`, desc: 'Menampilkan Stiker Nangis'}, {name: `Seneng`, desc: 'Menampilkan Stiker Senang'}, {name: `Muah`, desc: 'Menampilkan Stiker Muah'}, {name: `Makan`, desc: 'Menampilkan Stiker Makan'}, {name: `Kok aku?`, desc: 'Menampilkan Stiker Kok aku?'}, {name: `Yoii`, desc: 'Menampilkan Stiker yoiii'}, {name: `Makasih`, desc: 'Menampilkan Stiker Makasih'}, {name: `Ampun`, desc: 'Menampilkan Stiker Ampunn'}, {name: `SUS`, desc: 'Menampilkan Stiker SUS'}, {name: `ngakak`, desc: 'Menampilkan Stiker Ngakak'}, {name: `Ngamuk`, desc: 'Menampilkan Stiker Ngamuk'}, {name: `Ngomong`, desc: 'Menampilkan Stiker Ngomong'} ,{name: `Wakaranai`, desc: 'Menampilkan Stiker Wakaranai'}, {name: `Aloo`, desc: "Menampilkan Stiker Aloo"}, {name: `Anya`, desc: 'Menampilkan Stiker Anya'}, {name: `Hadehh`, desc: 'Menampilkan Stiker Hadehh'}, {name: `Tydak`, desc: 'Menampilkan Stiker Tydak'}, {name: `Boleh`, desc: 'Menampilkan Stiker Boleh'}, {name: `Duid`, desc: 'Menampilkan Stiker Duid'}, {name: `Enggak!`, desc: 'Menampilkan Stiker Enggak!'} ,{name: `Injek`, desc: 'Menampilkan Stiker Injek'}, {name: `Okok`, desc: 'Menampilkan Stiker Okok'}, {name: `Musikan`, desc: 'Menampilkan Stiker'}, {name: `Ngopi`, desc: 'Menampilkan Stiker Ngopi'}, {name: `Yeayy`, desc: 'Menampilkan Stiker Yeayy'}, {name: `Horee`, desc: 'Menampilkan Stiker Horree'}, {name: `Turu`, desc: 'Menampilkan Stiker Turu bang'}, {name: `Jelas!`, desc: 'Menampilkan Stiker Jelass!!'}];
    // const coms = com[com.length];
		const KKKK = new MessageEmbed()
      .setAuthor({ name: 'Jika kakak berkenan memberi jajan Klee \👈 click me', iconURL: 'https://cdn.discordapp.com/attachments/955954026598506537/1001984610609139915/genshin-impact-klee_1.gif', url: 'https://saweria.co/GamersStationID' })
      .setTitle(`Stiker Bergerak Klee`)
			.setColor(client.config.embedColor)
			.setDescription(
				``
		);
    commmands.forEach((com) => {
		KKKK.addField(com.name, com.desc, true)
		});
    KKKK.setFooter({ text: 'Tulis Command {tanpa prefix} Stiker sesuai diatas', iconURL: 'https://cdn.discordapp.com/attachments/954474348582944778/992431105024217189/20220424_220704.jpg' });   
KKKK.setImage('https://media.discordapp.net/attachments/849345666827419728/862728131794305094/ggje9h4.gif');
  //   KKKK.addField(
		// 	"Jika kakak berkenan memberi jajan Klee",
		// 	`💸 [Saweria](https://saweria.co/GamersStationID) ・\👈 click me`,
		// );
		message.reply({
			embeds: [KKKK]
		});
};
    const channel = ("1005381571647373392");
if(message.channel.id == channel) {
    if (message.author.bot) return;
    let returnMsg = await axios(`https://simsimi.info/api/?text=${encodeURIComponent(message.content)}&lc=id`);
    returnMsg = returnMsg ? returnMsg.data : false;
    message.reply(returnMsg.message);
}
} catch (e) {
    console.log(e)
               }
};