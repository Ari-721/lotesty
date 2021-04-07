const { MessageEmbed } = require("discord.js");

module.exports = {
  info: {
    name: "owner",
    description: "The Bot Owner",
    usage: "[owner]",
    aliases: ["owner"],
  },

  run: async function (client, message, args) {
    
    //set the permissions id here (https://discordapi.com/permissions.html)
    var permissions = 37080128;
    
    let owner = new MessageEmbed()
    .setTitle(`owner ${client.user.username}`)
    .setDescription(`BOT OWNER : <@363268408915132418> `)
    .setURL(`https://discord.gg/v7KNdSv `)
    .setColor("BLUE")
    return message.channel.send(owner);
  },
};
