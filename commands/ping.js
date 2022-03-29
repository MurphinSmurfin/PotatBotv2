const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('pong!'),
	name: 'ping',
	description: 'Pong!',

	async execute(message) {
		await message.reply('pong!');
	},
};