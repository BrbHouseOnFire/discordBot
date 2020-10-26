const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config/config.json');
 
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
 
const p = config.prefix;
client.on('message', msg => {
  // check for associated prefix + ignore bot messages
  if (!msg.content.startsWith(p) || msg.author.bot) {
    return;
  }
  else interpreter(msg);
});

let interpreter = (msg) => {


  // console.log(msg);
  console.log("--------------------------------------")
  console.log("new content (command): " + msg.content);
  console.log("toLower: " + msg.content.toLowerCase());

  if (m(msg, "text").startsWith(p + "help")) {
    msg.channel.send("Help is arriving soon. In the meantime, enjoy watching the flames dance.");
  } else

  if (m(msg, "text").startsWith(p + "extinguish")) {
    msg.channel.send("Why would I ever want to do that?");
  } else
   
  if (m(msg, "text").startsWith(p + "firestatus") || m(msg, "text").startsWith(p + "fire status")) {
   
   let r = Math.floor(Math.random() * 3);
   if (r === 0) {
    msg.channel.send("The fire is BLAZING.");
   } else
   if (r === 1) {
    msg.channel.send("The fire is currently a light smoulder.");
   } else
   if (r === 2) {
    msg.channel.send("What fire? I didn't set any fires! It was blue player! And I saw him vent!");
   }
  } else

  if (m(msg, "text").startsWith(p + "who are you")) {
    msg.channel.send(`Heyo! I'm ${client.user.tag}. I'm BrbHouseOnFire's personal nightmare! When I'm not setting a new room of his on fire, I distract myself here on discord with gifs and memes. If you're bored, you can ask for my help by starting your question with: "?"`);
  } else



  if (m(msg, "text").startsWith(p + "who am i")) {
    msg.channel.send(`You are ${m(msg, 'user').username} obviously. Who did you expect you would be?`);
  } else
  if (m(msg, "text").startsWith(p + "who did")) {
    msg.channel.send(`${m(msg, 'user').username} did it!`);
  } else
  if (m(msg, "text").startsWith(p + "who done")) {
    msg.channel.send(`${m(msg, 'user').username} done it!`);
  } else



  // protected/owner commands
  // if(message.author.id !== config.ownerID) return

  return;

}

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








