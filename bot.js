const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config/config.json');
const magic8 = require('./commands/magic8');


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
 
const p = config.prefix;
client.on('message', msg => {
  // check for associated prefix + ignore bot messages
  if (!msg.content.startsWith(p) || msg.author.bot) {
    // ---------------------------- WAT interjection ---------------------------- 
    // ---------------------------- HELP interjection ---------------------------- 
    if (m(msg, "text").startsWith("help") && !msg.author.bot) {
      console.log(m(msg, 'user'));
      msg.channel.send(`Heyo ${m(msg, 'user').username}! I'm ${client.user.tag}.`);
      msg.channel.send(`Help is arriving soon. In the meantime, enjoy watching the flames dance.`);
      return;
    } else

    return;
  }
  else interpreter(msg);
});

let interpreter = (msg) => {


  // console.log(msg);
  console.log("--------------------------------------")
  console.log("new content (command): " + msg.content);

  // ---------------------------- HELP ----------------------------
  if (m(msg, "text").startsWith(p + "help")) {
    msg.channel.send("> Help is arriving soon. In the meantime, enjoy watching the flames dance.");
  } else

  // ---------------------------- FIRE ---------------------------- 
  if (m(msg, "text").startsWith(p + "extinguish")) {
    msg.channel.send("> Why would I ever want to do that?");
  } else
  if (m(msg, "text").startsWith(p + "firestatus") || m(msg, "text").startsWith(p + "fire status")) {
   let r = Math.floor(Math.random() * 3);
   if (r === 0) {
    msg.channel.send("> The fire is BLAZING.");
   } else
   if (r === 1) {
    msg.channel.send("> The fire is currently a light smoulder.");
   } else
   if (r === 2) {
    msg.channel.send("> What fire? I didn't set any fires! It was blue player! And I saw him vent!");
   }
  } else

  //  ---------------------------- WHO ---------------------------- 
  if (m(msg, "text").startsWith(p + "who are you")) {
    msg.channel.send(`\`\`\`Heyo! I'm ${client.user.tag}. I'm BrbHouseOnFire's personal nightmare! When I'm not setting a new room of his on fire, I distract myself here on discord with gifs and memes. If you're bored, you can ask for my help by starting your question with: "?"`);
  } else
  if (m(msg, "text").startsWith(p + "who am i")) {
    msg.channel.send(`\`\`\`You are ${m(msg, 'user').username} obviously. Who did you expect you would be?`);
  } else
  if (m(msg, "text").startsWith(p + "who did")) {
    msg.channel.send(`> ${m(msg, 'user').username} did it!`);
  } else
  if (m(msg, "text").startsWith(p + "who done")) {
    msg.channel.send(`> ${m(msg, 'user').username} done it!`);
  } else

  
  // ---------------------------- Magic 8 Ball ---------------------------- 
  if (m(msg, "text").startsWith(p + "magic 8") || 
  m(msg, "text").startsWith(p + "magic eight") || 
  m(msg, "text").startsWith(p + "m8") || 
  m(msg, "text").startsWith(p + "m 8")) {
    msg.channel.send(magic8.magic8());
  } else

  
  // ---------------------------- Youtube ---------------------------- 
  // ---------------------------- imgur ---------------------------- 
  // ---------------------------- Quotes ---------------------------- 
  // ---------------------------- Among Us ---------------------------- 
  // ---------------------------- GIF Options ---------------------------- 
  if (m(msg, "text").startsWith(p + "gif")) {
    msg.channel.send('https://tenor.com/view/genshin-impact-genshin-impact-diluc-diluc-gif-19486007');
  } else
  
  // ---------------------------- Marvin the Shark ---------------------------- 
  if (m(msg, "text").startsWith(p + "marvin") || 
  m(msg, "text").startsWith(p + "what's marvin") || 
  m(msg, "text").startsWith(p + "whats marvin") || 
  m(msg, "text").startsWith(p + "who's marvin") ||
  m(msg, "text").startsWith(p + "who is marvin")
  ){
    msg.channel.send(`\`\`\`Marvin the Shark is currently dating:
    
    CRAZY`);
  } else

  


  // protected/owner commands
  // if(message.author.id !== config.ownerID) return

  return;

}

// function for breaking down the message object returned from discord.
const m = (fullMessage, identifier) => {
  // pull message content
  if (identifier === 'text') {
    let c = fullMessage.content;
    c = c.toLowerCase();
    let isAdjusted = false;
    // if character 2 is a space, strip it off

    while (!isAdjusted) {
      if (c.substr(0,2) !== "? ") {
        isAdjusted = true;
      } 
      else {
        if (c.substr(0,2) === "? ") {
          c = "?" + c.substr(2);
        }
      }
    }
    isAdjusted = false;
    return c;
  } 
  else
  // pull user info
  if (identifier === 'user') {
    return fullMessage.author;
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








