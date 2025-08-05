const fs = require('fs');
const chalk = require('chalk');



//~~~~~~~~~~~~< SETTINGS >~~~~~~~~~~~~\\


global.botname = 'Avi'
global.listprefix = ['+','!','.']
global.listv = ['✦','✧','△','❀','○','□','♤','♡','◇','♧','々','〆']
global.tempatDB = 'database.json' 
global.tempatStore = 'baileys_store.json' 
global.pairing_code = true
global.number_bot = '' //

global.fake = {
	anonim: 'https://files.catbox.moe/hhvdoi.jpg',
	thumbnailUrl: 'https://files.catbox.moe/hhvdoi.jpg',
	thumbnail: fs.readFileSync('./src/media/Avi.jpg'),
	docs: fs.readFileSync('./src/media/fake.pdf'),
	listfakedocs: ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet','application/vnd.openxmlformats-officedocument.presentationml.presentation','application/vnd.openxmlformats-officedocument.wordprocessingml.document','application/pdf'],
}

global.my = {
	yt: 'https://youtube.com/Avi_Nethunter',
	gh: 'https://github.com/avishka33',
	gc: 'https://whatsapp.com/channel/0029VaGisHDFHWq5jpuEmC2t',
	ch: 'https://whatsapp.com/channel/0029VaGisHDFHWq5jpuEmC2t',
}

global.limit = {
	free: 20,
	premium: 999,
	vip: 9999
}

global.money = {
	free: 10000,
	premium: 1000000,
	vip: 10000000
}

global.mess = {
	key: 'Apikey mu telah habis silahkan kunjungi\nhttps://my.hitori.pw',
	owner: 'This feature can be used by owner only!',
	admin: 'This feature can be used by admin only!',
	botAdmin: 'This feature can only be used when the bot is a group admin!',
	group: 'This feature is only for groups',
	private: 'This feature is only for private chats',
	limit: 'Limit!',
	prem: 'This feature can be used by premium user only',
	wait: 'In process...',
	error: 'Error!',
	done: 'Done'
}

global.APIs = {
	hitori: 'https://api.hitori.pw',
}
global.APIKeys = {
	'https://api.hitori.pw': 'htrkey-77eb83c0eeb39d40',
	geminiApikey: ['AIzaSyD0lkGz6ZhKi_MHSSmJcCX3wXoDZhELPaQ','AIzaSyDnBPd_EhBfr73NssnThVQZYiKZVhGZewU','AIzaSyA94OZD-0V4quRbzPb2j75AuzSblPHE75M','AIzaSyB5aTYbUg2VQ0oXr5hdJPN8AyLJcmM84-A','AIzaSyB1xYZ2YImnBdi2Bh-If_8lj6rvSkabqlA']
}


global.badWords = ['පකයා','හුත්තො','පොන්නයා','වේසි']
global.chatLength = 1000



let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
});

