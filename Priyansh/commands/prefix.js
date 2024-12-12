const fs = require("fs");
module.exports.config = {
    name: "prefix",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "uzairrajput",
    description: "hihihihi",
    commandCategory: "no prefix",
    usages: "prefix",
    cooldowns: 1,
};

module.exports.handleEvent = function ({ api, event, client, __GLOBAL }) {
    var { threadID, messageID, senderID } = event;
    var senderName = "";
    api.getUserInfo(senderID, (err, result) => {
        if (err) {
            console.error(err);
            senderName = "";
        } else {
            senderName = result[senderID].name;
        }
        if (
            event.body.indexOf("prefix") == 0 ||
            event.body.indexOf("Prefix") == 0 ||
            event.body.indexOf("PREFIX") == 0 ||
            event.body.indexOf("prefi") == 0
        ) {
            // Send text message with prefix information
            api.sendMessage(
                {
                    body: `Yo, my prefix is » ${global.config.PREFIX} «\n
𝗦𝗢𝗠𝗘 𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦 𝗧𝗛𝗔𝗧 𝗠𝗔𝗬 𝗛𝗘𝗟𝗣 𝗬𝗢𝗨:
➥ ${global.config.PREFIX}help [number of page] -> see commands
➥ ${global.config.PREFIX}sim [message] -> talk to bot
➥ ${global.config.PREFIX}callad [message] -> report any problem encountered
➥ ${global.config.PREFIX}help [command] -> information and usage of command\n\nHave fun using it enjoy!❤️\n\nBot Developer:https://www.facebook.com/Mtxuzair\n\n credit 𝑴𝒓𝑼𝒛𝒂𝒊𝒓 -𝑴𝑻𝑿 💚✨} `,
                    attachment: fs.createReadStream(
                        __dirname + `/mtxuzair/uprefix.jpg`
                    ),
                },
                threadID,
                messageID
            );

            // Send voice message with additional information
            const voiceFile = fs.readFileSync(
                __dirname + "/mtxuzair/uprefix.jpg"
            );
            api.sendMessage(
                {
                    attachment: voiceFile,
                    type: "audio",
                    body: "Hey, listen to my prefix information!\ncredit:-𝑴𝑻𝑿 💚✨",
                },
                threadID,
                () => {}
            );

            api.setMessageReaction("🤖", event.messageID, (err) => {}, true);
        }
    });
};
module.exports.run = function ({ api, event, client, __GLOBAL }) {};
