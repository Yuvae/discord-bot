module.exports = {
    name: 'server',
    description: 'Server informations.',
    execute(message) {
        message.channel.send(`Nom du serveur : ${message.guild.name}\n nombre d'utilisateur : ${message.guild.memberCount}`);
    }
};