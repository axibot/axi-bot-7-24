module.exports = member => {
    let username = member.user.username;
    member.sendMessage('Hoş geldin Bu Sunucuyada Katılırsan Çok Seviniriz :) https://discord.gg/VFKuNVZ!  **' + username + '**!');
    member.guild.defaultChannel.send('hg '+username+'');
};
