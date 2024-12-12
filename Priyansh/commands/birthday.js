module.exports.config = {

 name: "birthday",

 version: "1.0.0",

 hasPermssion: 0,

 credits: "uzairrajput",

 description: "",

 commandCategory: "0",

 cooldowns: 5

}



module.exports.run = function ({ event, api }) {

    const t = Date.parse("March 15, 2023 00:00:00") - Date.parse(new Date());

    const seconds = Math.floor( (t/1000) % 60 );

    const minutes = Math.floor( (t/1000/60) % 60 );

    const hours = Math.floor( (t/(1000*60*60)) % 24 );

    const days = Math.floor( t/(1000*60*60*24) );



    return api.sendMessage(`𝑼𝒁𝑨𝑰𝑹 𝑲𝑰.𝑩𝑰𝑹𝑻𝑯𝑫𝑨𝒀 𝑴𝑬 𝑱𝑼𝑺𝑻\n» ${days} days ${hours} hours ${minutes} minutes ${seconds} seconds« 𝑹𝑬𝑯𝑻𝑬 𝑯𝑨𝑰𝑵..`, event.threadID, event.messageID);

}
