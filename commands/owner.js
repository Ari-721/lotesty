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
    .setDescription(`Want me in your server? Invite me today! \n\n [Invite Link](https://discord.com/oauth2/authorize?client_id=${client.user.id}&permissions=${permissions}&scope=bot)`)
    .setURL(`https://discord.com/oauth2/authorize?client_id=${client.user.id}&permissions=${permissions}&scope=bot`)
    .setColor("BLUE")
    return message.channel.send(owner);
  },
};
