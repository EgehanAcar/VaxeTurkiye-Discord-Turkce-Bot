const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = 'h!'
let yardım = new Discord.RichEmbed()  
.setAuthor(`${client.user.username}`, client.user.avatarURL)
.setColor('RANDOM')
.addField('HuntTR Yardım Paneli',`
**h!moderasyon** : Moderasyon Komutlarını Açar.
**h!kullanıcı** : Kullanıcı Komutları Açar.
**h!yeni-komutlar** : Yeni Komutları Açar.`)
.setFooter(`${message.author.tag} Tarafından İstendi.`, message.author.avatarURL)
.setThumbnail(client.user.avatarURL)
 message.channel.send(yardım) 
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ["help"], 
  permLevel: 0
};
exports.help = {
  name: 'yardım'
};
//HuntTR Yardım Paneli 
