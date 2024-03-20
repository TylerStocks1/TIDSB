const {SlashCommandBuilder} = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('date')
        .setDescription('responds with the current date / time.'),
    async execute(interaction) {
        const dateTime = new Date()
        await interaction.reply('The date is: ' + dateTime)
    },
};