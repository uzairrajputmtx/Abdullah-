const fs = require("fs");
module.exports.config = {
        name: "BYE",
    version: "1.1.1",
        hasPermssion: 0,
        credits: "uzairrajput", 
        description: "THIS BOT IS MR UZAIR RAJPUT MTX",
        commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
        var { threadID, messageID } = event;
        let react = event.body.toLowerCase();
        if(react.includes("assalamualaikum") ||
     react.includes("asslam walikum") || react.includes("ASSLAM O ALIKUM") || react.includes("السلام علیکم ورحمتہ اللہ وبرکاتہ ") ||
react.includes("Assalam alaikum") ||
react.includes("assalamualaikum")) {
                var msg = {
                                body: `____________________________________💚✨\n\n walekum assalam rahmatullahi barakatuh😇\n____________________________________💚✨ \n𝐎𝐰𝐧𝐞𝐫 ➻  ────💚✨  𝑼𝒛𝒂𝒊𝒓 𝑹𝒂𝒋𝒑𝒖𝒕 `,
                        }
                        api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🥀", event.messageID, (err) => {}, true)
                }
        }
        module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
