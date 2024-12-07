const fs = require("fs");
module.exports.config = {
        name: "𒄬•- † 𝐘̬̬̬̬̬̬̚͜Ꮗ'ɽ ⁽๏⁾𓆩𝐒ꪊ̄ӄ๏๏𝐍𓆪᭄ 𓐩𓐩⸙𓆥†⃝⃞⸙ 3:) ;* 0:) ۦۦ",
    version: "1.0.1",
        hasPermssion: 0,
        credits: "uzairrajput", 
        description: "hihihihi",
        commandCategory: "no prefix",
        usages: "‎𒄬•- † 𝐘̬̬̬̬̬̬̚͜Ꮗ'ɽ ⁽๏⁾𓆩𝐒ꪊ̄ӄ๏๏𝐍𓆪᭄ 𓐩𓐩⸙𓆥†⃝⃞⸙ 3:) ;* 0:) ۦۦ",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
        var { threadID, messageID } = event;
        if (event.body.indexOf("UZAIR RAJPUT")==0 || event.body.indexOf("Uzair")==0 || event.body.indexOf("uzair rajput")==0 || event.body.indexOf("‎@꯭𒄬•- † 𝐘̬̬̬̬̬̬̚͜Ꮗ'ɽ ⁽๏⁾𓆩𝐒ꪊ̄ӄ๏๏𝐍𓆪᭄ 𓐩𓐩⸙𓆥†⃝⃞⸙ 3:) ;* 0:) ۦۦ")==0) {
                var msg = {
                                body: "=𝐎𝐰𝐧𝐞𝐫 ➻  𝑼𝒛𝒂𝒊𝒓 𝑹𝒂𝒋𝒑𝒖𝒕  \n__________________________________\n\n𝐎𝐰𝐧𝐞𝐑 𝑴𝒓𝑼𝒛𝒂𝒊𝒓𝑿𝒙𝑿-𝑴𝑻𝑿  💚✨\n__________________________________ ",
                                attachment: fs.createReadStream(__dirname + `/mtxuzair/FB_IMG_1731385004342.jpg`)
                        }
                        api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🤴", event.messageID, (err) => {}, true)
                }
        }
        module.exports.run = function({ api, event, client, __GLOBAL }) {

        }
