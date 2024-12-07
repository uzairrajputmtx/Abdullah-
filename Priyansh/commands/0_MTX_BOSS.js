const request = require('request');
const fs = require('fs');
const path = require('path');

module.exports.config = {
    name: "boss",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "uzairrajput",
    description: "no prefix",
    usePrefix: false,
    commandCategory: "No command marks needed",
    usages: "Yo Yo",
    cooldowns: 5,
};

const gif = "https://i.imgur.com/u6JWp28.jpeg";
const message = "● ======= 𝐇𝐄𝐋𝐋𝐎 𝐁𝐀𝐁𝐘 ======= ●                                                          ☟  ========== ☟ ==========  ☟.                                                         ●============================●                              𝐎𝐰𝐧𝐞𝐫 ➻  ────  𝑼𝒛𝒂𝒊𝒓 𝑹𝒂𝒋𝒑𝒖𝒕 😎🔥";

module.exports.handleEvent = async function({ api, event, client, Users, __GLOBAL }) {
    var { threadID, messageID } = event;
    const lowerCaseMessage = event.body.toLowerCase();

    if (lowerCaseMessage.startsWith("Owner") || 
        lowerCaseMessage.startsWith("BOSS") || 
        lowerCaseMessage.startsWith("Boss")) { 

        const downloadPath = path.join(__dirname, 'Boss-Jpg-Images.jpg');

        // Download image from Imgur
        request(gif).pipe(fs.createWriteStream(downloadPath)).on('close', () => {
            var msg = {
                body: message,
                attachment: fs.createReadStream(downloadPath)
            };
            api.sendMessage(msg, threadID, messageID);
            api.setMessageReaction("😘", event.messageID, (err) => {}, true);
        });
    }
}

module.exports.run = function({ api, event, client, __GLOBAL }) {

}
