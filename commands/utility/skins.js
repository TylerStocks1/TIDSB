const { SlashCommandBuilder, ButtonStyle, ButtonBuilder, EmbedBuilder } = require('discord.js');


module.exports = {
    //cooldown for how many times  the command can be used. 
    cooldown: 5,
	data: new SlashCommandBuilder()
    //main build of the slash command, displays it when the user types / into the text box.
		.setName('skin')
		.setDescription('Searches for a Teeworlds Skin on the TWData Database!')
        .addStringOption(Option => 
            Option.setName('skin-name')
            .setDescription('Search for a Teeworlds Skin File')
            .setRequired(true)),
        //we Execute the following code when the user uses our command, in this instance we are using our /skin command. 
	async execute(interaction) {
        let skinName = interaction.options.getString('skin-name')
        skinName = skinName.toLowerCase()
        let skin = 'https://teedata.net/api/skin/resolve/' + skinName;
        const renderedSkin = 'https://teedata.net/api/skin/render/name/' + skinName

        const avatar = interaction.user.avatarURL()

        //then build the embed that we will display to the user with all of the following information: 
        const embed = new EmbedBuilder()
            .setTitle(skinName)
            .setURL(skin)
            .setAuthor({name:interaction.user.username, iconURL:avatar})
            .setDescription('Not the Skin your looking for? Make sure you spelt the skins name correctly!')
            .setThumbnail(renderedSkin)
            .setImage(skin)
            .addFields({name: 'Download',value: 'Download this skin!'})
            .setURL(skin)


            
    
		await interaction.reply({embeds: [embed]});
	},
};



