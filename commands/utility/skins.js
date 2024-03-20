const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('skin')
		.setDescription('Searches for a Teeworlds Skin on the TWData Database!')
        .addStringOption(Option => 
            Option.setName('skin-name')
            .setDescription('Search for a Teeworlds Skin File')
            .setRequired(true)),
        
	async execute(interaction) {
        const skinName = interaction.options.getString('skin-name')
        skinName = skinName.toLowerCase()
        const skin = 'https://teedata.net/api/skin/resolve/' + skinName;
        const renderedSkin = 'https://teedata.net/api/skin/render/name/'+ skin

        const embed = new EmbedBuilder()
            .setTitle(skinName)
            .setURL(skin)
            .setAuthor({name:interaction.user.username, iconURL: interaction.user.useravatar})
            .setDescription('Not the Skin your looking for?, Make sure you spelt the skins name correctly!')
            .setThumbnail(renderedSkin)
            .setImage(skin)
            
            
    
		await interaction.reply({embeds: [embed]});
	},
};



