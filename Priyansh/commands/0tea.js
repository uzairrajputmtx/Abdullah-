const fs = require("fs");
module.exports.config = {
  name: "tea",
    version: "1.0.1",
  hasPermssion: 0,
  credits: "uzairrajput", 
  description: "hihihihi",
  commandCategory: "no prefix",
  usages: "tea",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  if (event.body.indexOf("tea")==0 || event.body.indexOf("Tea")==0 || event.body.indexOf("Chai")==0 || event.body.indexOf("CHAI")==0) {
    var msg = {
        body: "𝒀𝑬 𝑳𝑶.𝑩𝑨𝑩𝑻𝒀 𝑮𝑹𝑨𝑴 𝑮𝑹𝑨𝑴 𝑻𝑬𝑨 ☕",
        attachment: fs.createReadStream(__dirname + `/mtxuzair/tea.mp4`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🫖", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
