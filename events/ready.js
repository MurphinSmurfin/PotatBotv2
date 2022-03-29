module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
		console.log('French Fries is online!');
		client.user.setActivity('the oil heat up | fhelp', { type: 'WATCHING' });
	},
};