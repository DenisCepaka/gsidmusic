/**
 *
 * @param {import("../lib/KleeChan")} client
 * @param {*} data
 */
module.exports = (client, data) => {
	client.manager.updateVoiceState(data);
};
