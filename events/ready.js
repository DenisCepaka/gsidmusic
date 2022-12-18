/**
 *
 * @param {import("../lib/KleeChan")} client
 */
module.exports = (client) => {
  const act = [
            `WATCHING`, `LISTENING`, `PLAYING`,`LISTENING`, `WATCHING`, `PLAYING`, `PLAYING`
        ]
        const desc = [
            `Denis Cepaka`,
            `Klee's singing`,
            `Prefix = /help`,
            `Unyahhh..`,
            `Bombom Bakudan!!`,
            `Gamers Station ID`,
            `Nangnananggg....`,
            `Req`
        ]
        

        let statusCount = 0;
        try {
        setInterval(() => {
            if(statusCount === act.length) statusCount = 0;

            const actNow = act[statusCount];
            const descNow = desc[statusCount];
            

            client.user.setActivity(`${descNow}`, {
                type: `${actNow}`
            });
            
            

            statusCount += 1;
        }, 10000)
} catch (err) {console.log(err)}
	client.manager.init(client.user.id);
	client.user.setPresence(client.config.presence);
	client.log("Successfully Logged in as " + client.user.tag);
};
