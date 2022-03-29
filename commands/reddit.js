const { SlashCommandBuilder } = require('@discordjs/builders');
const redditFetch = require('reddit-fetch');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('reddit')
		.setDescription('Fetches a random hot reddit post'),
	name: 'reddit',
	aliases: ['r'],
	description: 'Fetches a random hot reddit post',

	async execute(message) {
		const args = message.content.split(' ').slice(1);

		let sub = 'all';

		if (args[0]) sub = args[0];

		await redditFetch({
			subreddit: sub,
			sort: 'hot',
			allowNSFW: false,
			allowModPost: false,
			allowCrossPost: true,
		}).then(post => {
			message.reply(post.url);
		});
	},
};