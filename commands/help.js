const { MessageEmbed } = require('discord.js');
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('help')
		.setDescription('Provides list of commands and its use.'),
	name: 'help',
	description: 'Provides list of commands and its use.',

	async execute(message, client) {
		const embed = new MessageEmbed()
			.setColor('#772B8A')
			.setTitle('Commands')
			.setURL('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
			.setDescription('A list of all available commands');

		client.commands.each(command => {
			embed.addField(`f${command.name}`, `${command.description}`, false);
		});
		message.channel.send(embed);

		await message.reply({ embeds: [embed] });
	},
};