module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
		console.log('French Fries is online!');
		client.user.setActivity('Heating the oil | fhelp', { type: 'PLAYING' });
	},
};