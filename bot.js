const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config/config.json');
 
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
 
const p = config.prefix;
client.on('message', msg => {

  if (!msg.content.startsWith(p) || msg.author.bot) return;

  // console.log(msg);
  console.log("--------------------------------------")
  console.log("new content (command): " + msg.content);
  console.log("toLower: " + msg.content.toLowerCase());

  if (m(msg, "text").startsWith(p + "help")) {
    msg.channel.send("Help is arriving soon. In the meantime, enjoy watching the flames dance.");
  } else

  if (m(msg, "text").startsWith(p + "Extinguish")) {
    msg.channel.send("Why would I ever want to do that?");
  } else





  if (m(msg, "text").startsWith(p + "who am i")) {
    msg.channel.send(`You are ${m(msg, 'user').username} obviously. Who did you expect you would be?`);
  } else
  if (m(msg, "text").startsWith(p + "who did this")) {
    msg.channel.send(`${m(msg, 'user').username} did it!`);
  } else
  if (m(msg, "text").startsWith(p + "who done this")) {
    msg.channel.send(`${m(msg, 'user').username} done it!`);
  } else



  // protected/owner commands
  // if(message.author.id !== config.ownerID) return

  return;

});

// function for breaking down the message object returned from discord.
let m = (fullMessage, indentifier) => {
  // pull message content
  if (indentifier === 'text') {
    console.log(fullMessage.content);
    return fullMessage.content.toLowerCase();
  } 
  else
  // pull user info
  if (identifier === 'user') {
    return fullMessage.author.User;
    /*
      Object
      id, username, bot, discriminator, avatar, lastMessageID, lastMessageChannelID, flags
    */
  }
  else
  if (identifier === 'mentions') {
    return fullMessage.mentions.MessageMentions;
  }
  else
  if (identifier === 'channelInfo') {
    return fullMessage.channel;
  }
  else
  return 
}
 
client.login(config.token);








