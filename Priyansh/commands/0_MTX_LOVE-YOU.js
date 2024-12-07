//@uzairrajput
////////////////////////////////////////////////////////
/////// WARNING => JO CREDIT NAME CHANGE KREGA USKA ID BAN KAR DIYA JAYEGA + THIS BOT IS MADE BT UZAIR RAJPUT MTX 
const fs = require("fs");
module.exports.config = {
	name: "lOVE-YOU",
    version: "1.1.1",
	hasPermssion: 0,
	credits: "uzairrajput", ////////////@uzairrajput
	description: "THIS BOT IS MR UZAIR RAJPUT MTX",
	commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase();
	if(react.includes("Love you") ||
     react.includes("LOVE YOU") || react.includes("love you") || react.includes("I love") ||
react.includes("I LOVE") ||
react.includes("i love")) {
		var msg = {
				body: `=𝐎𝐰𝐧𝐞𝐫 ➻  𝑼𝒛𝒂𝒊𝒓 𝑹𝒂𝒋𝒑𝒖𝒕  \n__________________________________\n\n🩷 🖤 𝐌𝐄𝐑𝐀 𝐁𝐀𝐁𝐘 𝐈 𝐋𝐎𝐕𝐄 𝐘𝐎𝐔 𝐓𝐎𝐎 𝐉𝐀𝐀𝐍𝐔 😘😘\n__________________________________`,attachment: fs.createReadStream(__dirname + `/mtxuzair/793696f8979ec67925056894898af32a.gif`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🙈", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
