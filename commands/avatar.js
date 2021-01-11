module.exports = {
    name: 'avatar',
    description: 'Display avatar URL.',
    execute(message) {
        if (!message.mentions.users.size) {
            return message.channel.send(`${message.author.displayAvatarURL({format: 'png' })}`)
        }

        const avatarlist = message.mentions.users.map(user => {
            return `${user.displayAvatarURL({format: 'png' })}`;
        });

        message.channel.send(avatarlist);
    }
};