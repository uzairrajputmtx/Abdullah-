module.exports.config = {
  name: "antiswearbot",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "uzairrajput",
  description: "otherbot",
  commandCategory: "...",
  cooldowns: 0
};
module.exports.handleEvent = async ({
	event: o,
	api: t,
	Users: n
}) => {
	var {
		threadID: e,
		messageID: a,
		body: b,
		senderID: s,
		reason: d
	} = o;
	
     const i = require("moment-timezone").tz("Asia/Karachi").format ("h:mm:ss A");
  const moment = require("moment-timezone");
  const Date = moment.tz("Asia/Karachi").format("DD/MM/YYYY");
	if (s == t.getCurrentUserID()) return;
	let c = await n.getNameUser(o.senderID);
	var h = {
		body: `${c}, Bot par lanaat bhejne ke jurm me ap par khud bakhud system c pabandi lagai jati hai,  sirf ap kutty ho isliye ap barh me Jao,`
	};
    //Add curse words without capital letters
	["Stupid For Swearing Bot"].forEach((a => { 
		
        const s = o.senderID;
    let haha = o.body;
	if (haha.includes("tharki bot") || haha.includes("lakh di lanat") || haha.includes("tangang bot") || haha.includes("inutil na bot") || haha.includes("tanga tangang bot") || haha.includes("bobot") || haha.includes("stupid bot") || haha.includes("dumb bot") || haha.includes("tanga yung bot") || haha.includes("gagong bot") || haha.includes("Bobong bot") || haha.includes("Bobo bot") || haha.includes("botbot") || haha.includes("bobo nung bot") || haha.includes("walang alam na bot") || haha.includes("tanga mong bot") ||  haha.includes("kick yung bot") || haha.includes("botlog bot")) {
			modules = "[ BOT BAN ]", console.log(c, modules, a);
			const o = n.getData(s).data || {};
			n.setData(s, {
				data: o			
			}), o.banned = 1, o.reason = a || null, o.dateAdded = i, global.data.userBanned.set(s, {
				reason: o.reason,
				dateAdded: o.dateAdded
			}), t.sendMessage(h, e, (() => {
				const o = global.config.ADMINBOT;
				var n = o;
				for (var n of o) t.sendMessage(`•——[SWEARING BOT]——•\n❯ Date now : ${Date}\n❯ Time : ${i} (h:m:s) \n❯ Name : ${c}\n❯ Uid : ${s}\n❯ Fb link : https://www.facebook.com/${s}\n————————\nSuccessfully banned to this bot.`, n)
			}))
		} 
	})) 
}, module.exports.run = async ({
	event: o,
	api: t
}) => t.sendMessage("Ye command bot c qasam khate waqt pata lagane ke liye use hoti hai.", o.threadID);
