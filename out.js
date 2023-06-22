module.exports = {
	config: {
		 name: "box",
		 version: "beta",
		 author: "CCD",
		 countDown: 5,
		 role: 1,
		 shortDescription: {
			  vi: "như mirai thôi",
			  en: "OKay"
		 },
		 longDescription: {
			  vi: "con cac",
			  en: "oki"
		 },
		 category: ".",
		 guide: {
			  vi: "{pn} ",
			  en: "{pn} "
		 }
	},

	langs: {
		 vi: {
			  error: "❌ Đã có lỗi xảy ra:"
		 },
		 en: {
			  error: "❌ An error occurred:"
		 }
	},

    onStart: async function ({
        api, event, args,
    }) {
        caochungdat_1({
                api, event, args,
        });
    }
};
    
    

// của onChat
async function caochungdat_1({
	api, event, args
}) {
    const tid = args.join("")
    if (!tid) return api.removeUserFromGroup(api.getCurrenUserID(), event.threadID);
    else return api.removeUserFromGroup(api.getCurrenUserID(), tid, () => api.sendMessage("bot đã out box", event.threadID, event.messageID));
};
