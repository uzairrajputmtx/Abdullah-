module.exports.config = {
  name: "autobanuser",
  version: "1.0.0",
  hasPermssion: 0, 
  credits: "uzairrajput",
  description: "automatically ban users if spambots (random image)",
  commandCategory: "system",
  usages: "x",
  cooldowns: 5
};

module.exports. run = ({api, event}) => {
  return api.sendMessage("spam cc", event.threadID, event.messageID);
};

module.exports.handleEvent = async ({ Users, api, event}) => {
  const fs = require("fs-extra");
  const moment = require("moment-timezone");
  
  let { senderID, messageID, threadID } = event;
  const so_lan_spam = 12; // spam, oversubscription»‹ ban
  const thoi_gian_spam = 10000; // 10000 millisecond (1 phÃºt)
  const unbanAfter = 100000; // 100000 millisecond (10 phÃºt) 
  const folderRandomImage = __dirname + "/cache/randomImgAutobanUser";
  const allImage = fs.readdirSync(folderRandomImage);
  if (!global.client.autoban) global.client.autoban = {};
  if (!global.client.autoban[senderID]) {
    global.client.autoban[senderID] = {
      timeStart: Date.now(),
      number: 0
    }
  };
  
  const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
  const prefix = threadSetting.PREFIX || global.config.PREFIX;
  if (!event.body || event.body.indexOf(prefix) != 0) return;
  
  let dataUser = await Users.getData(senderID) || {};
  let data = dataUser.data || {};
  
  if ((global.client.autoban[senderID].timeStart + thoi_gian_spam) <= Date.now()) {
    global.client.autoban[senderID] = {
      timeStart: Date.now(),
      number: 0
    }
  }
  else {
    global.client.autoban[senderID].number++;
    if (global.client.autoban[senderID].number >= so_lan_spam) {
      const time = moment.tz("Asia/Karachi").format("DD/MM/YYYY HH:mm:ss");
      if (data && data.banned == true) return;
      data.banned = true;
      data.reason = `spam bot ${so_lan_spam} time/${thoi_gian_spam/10000}minute`;
      data.autoban = {
        timeStart: Date.now(),
        unbanAfter
      };
      data.dateAdded = time;
      await Users.setData(senderID, { data });
      global.data.userBanned.set(senderID, { reason: data.reason, dateAdded: data.dateAdded });
      global.client.autoban[senderID] = {
        timeStart: Date.now(),
        number: 0
      };
      api.sendMessage({
        body: senderID + " | " + dataUser.name + `\n You have been banned from using bots=)) ${unbanAfter/10000}minutes with the reason: spam bot \n Auto unban later  ${Math.floor(unbanAfter/10000)}minute\nBaby Unban hone ke liye meRe boss mruzairmtx se contact karo\n.https://www.facebook.com/Mtxuzair`,
        attachment: fs.createReadStream(`${folderRandomImage}/${allImage[Math.floor(Math.random()*allImage.length)]}`)}, threadID, () => {
          setTimeout(async function() {
            delete data.autoban;
            data.banned = false;
            data.reason = null;
            data.dateAdded = null;
            await Users.setData(senderID, { data });
            global.data.userBanned.delete(senderID);
            console.log("Please unban")
          }, unbanAfter);
        });
        for (let idAdmin of global.config.ADMINBOT) {
        api.sendMessage("ðŸ‘»<bot> just ban " + senderID + " | " + dataUser.name + ` because it spam bots ${so_lan_spam} times/minute \n ðŸ‘» bot will unban it later ${Math.floor(unbanAfter/10000)}minutes\Time: ` + time, idAdmin);
      };
    }
  }
};

//uzairrajput 
// FIX ERROR
