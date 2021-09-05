const fs = require("fs");
module.exports.config = {
name: "Gọi admin",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung",
	description: "Gọi admin",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.event = function({ api, event }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("@[!] Vũ Chiến")==0 || (event.body.indexOf("@Vũ Chiến")==0) || (event.body.indexOf("Vũ Chiến")==0) ||
(event.body.indexOf("Vũ Chiến")==0) ||
(event.body.indexOf("vchien")==0) ||
(event.body.indexOf("DVC")==0)) {
  var msg = {
    body: "Gọi admin làm lồn gì có việc thì nhắn tin qua fb https://www.facebook.com/Mochi.0110dvc \nGọi nữa ăn đấm đấy 🙂", 
  }
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

	}
