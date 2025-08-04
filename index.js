require('./settings');
const fs = require('fs');
const pino = require('pino');
const path = require('path');
const axios = require('axios');
const chalk = require('chalk');
const readline = require('readline');
const { Boom } = require('@hapi/boom');
const qrcode = require('qrcode-terminal');
const NodeCache = require('node-cache');
const { toBuffer, toDataURL } = require('qrcode');
const { exec, spawn, execSync } = require('child_process');
const { parsePhoneNumber } = require('awesome-phonenumber');
const { default: WAConnection, useMultiFileAuthState, Browsers, DisconnectReason, makeInMemoryStore, makeCacheableSignalKeyStore, fetchLatestBaileysVersion, proto, getAggregateVotesInPollMessage } = require('baileys');

const { dataBase } = require('./src/database');
const { app, server, PORT } = require('./src/server');

const pairingCode = process.argv.includes('--qr') ? false : process.argv.includes('--pairing-code') || global.pairing_code;
const rl = readline.createInterface({ input: process.stdin, output: process.stdout })
const question = (text) => new Promise((resolve) => rl.question(text, resolve))
let pairingStarted = false;
let phoneNumber;

global.fetchApi = async (path = '/', query = {}, options) => {
	const urlnya = (options?.name || options ? ((options?.name || options) in global.APIs ? global.APIs[(options?.name || options)] : (options?.name || options)) : global.APIs['hitori'] ? global.APIs['hitori'] : (options?.name || options)) + path + (query ? '?' + decodeURIComponent(new URLSearchParams(Object.entries({ ...query }))) : '')
	const { data } = await axios.get(urlnya, { ...((options?.name || options) ? {} : { headers: { 'accept': 'application/json', 'x-api-key': global.APIKeys[global.APIs['hitori']]}})})
	return data
}

const storeDB = dataBase(global.tempatStore);
const database = dataBase(global.tempatDB);
const msgRetryCounterCache = new NodeCache();
const groupCache = new NodeCache({ stdTTL: 5 * 60, useClones: false });

server.listen(PORT, () => {
	console.log('𝙰𝚅𝙸 𝙷4𝙲𝙺3𝚁𝚂', PORT);
});

const { GroupParticipantsUpdate, MessagesUpsert, Solving } = require('./src/message');
const { isUrl, generateMessageTag, getBuffer, getSizeMedia, fetchJson, sleep } = require('./lib/function');
const { set } = require('mongoose');



async function startAvishkaBot() {
	const { state, saveCreds } = await useMultiFileAuthState('session');
	const { version, isLatest } = await fetchLatestBaileysVersion();
	const level = pino({ level: 'silent' });
	
	try {
		const loadData = await database.read()
		const storeLoadData = await storeDB.read()
		if (!loadData || Object.keys(loadData).length === 0) {
			global.db = {
				hit: {},
				set: {},
				list: {},
				store: {},
				users: {},
				game: {},
				groups: {},
				database: {},
				premium: [],
				sewa: [],
				...(loadData || {}),
			}
			await database.write(global.db)
		} else {
			global.db = loadData
		}
		if (!storeLoadData || Object.keys(storeLoadData).length === 0) {
			global.store = {
				contacts: {},
				presences: {},
				messages: {},
				groupMetadata: {},
				...(storeLoadData || {}),
			}
			await storeDB.write(global.store)
		} else {
			global.store = storeLoadData
		}
		
		setInterval(async () => {
			if (global.db) await database.write(global.db)
			if (global.store) await storeDB.write(global.store)
		}, 30 * 1000)
	} catch (e) {
		console.log(e)
		process.exit(1)
	}
	
	store.loadMessage = function (remoteJid, id) {
		const messages = store.messages?.[remoteJid]?.array;
		if (!messages) return null;
		return messages.find(msg => msg?.key?.id === id) || null;
	}
	
	const getMessage = async (key) => {
		if (store) {
			const msg = await store.loadMessage(key.remoteJid, key.id);
			return msg?.message || ''
		}
		return {
			conversation: '𝙰𝚅𝙸 𝙷4𝙲𝙺3𝚁𝚂'
		}
	}
	
	const Avishka = WAConnection({
		logger: level,
		getMessage,
		syncFullHistory: true,
		maxMsgRetryCount: 15,
		msgRetryCounterCache,
		retryRequestDelayMs: 10,
		defaultQueryTimeoutMs: 0,
		connectTimeoutMs: 60000,
		browser: Browsers.ubuntu('Chrome'),
		generateHighQualityLinkPreview: true,
		//waWebSocketUrl: 'wss://web.whatsapp.com/ws',
		cachedGroupMetadata: async (jid) => groupCache.get(jid),
		shouldSyncHistoryMessage: msg => {
			console.log(`\x1b[𝙰𝚅𝙸 𝙷4𝙲𝙺3𝚁𝚂 Chat [${msg.progress || 0}%]\x1b[39m`);
			return !!msg.syncType;
		},
		transactionOpts: {
			maxCommitRetries: 10,
			delayBetweenTriesMs: 10,
		},
		appStateMacVerification: {
			patch: true,
			snapshot: true,
		},
		auth: {
			creds: state.creds,
			keys: makeCacheableSignalKeyStore(state.keys, level),
		},
	})
	
	if (pairingCode && !phoneNumber && !Avishka.authState.creds.registered) {
		async function getPhoneNumber() {
			phoneNumber = global.number_bot ? global.number_bot : process.env.BOT_NUMBER || await question('Please type your WhatsApp number : ');
			phoneNumber = phoneNumber.replace(/[^0-9]/g, '')
			
			if (!parsePhoneNumber('+' + phoneNumber).valid && phoneNumber.length < 6) {
				console.log(chalk.bgBlack(chalk.redBright('Start with your Country WhatsApp code') + chalk.whiteBright(',') + chalk.greenBright(' Example : 94772836xxx')));
				await getPhoneNumber()
			}
		}
		(async () => {
			await getPhoneNumber();
			await exec('rm -rf ./session/*');
			console.log('Phone number captured. Waiting for Connection...\n' + chalk.blueBright('Estimated time: around 2 ~ 5 minutes'))
		})()
	}
	
	await Solving(Avishka, store)
	
	Avishka.ev.on('creds.update', saveCreds)
	
	Avishka.ev.on('connection.update', async (update) => {
		const { qr, connection, lastDisconnect, isNewLogin, receivedPendingNotifications } = update
		if (!Avishka.authState.creds.registered) console.log('Connection: ', connection || false);
		if ((connection === 'connecting' || !!qr) && pairingCode && phoneNumber && !Avishka.authState.creds.registered && !pairingStarted) {
			setTimeout(async () => {
				pairingStarted = true;
				console.log('Requesting Pairing Code...')
				let code = await Avishka.requestPairingCode(phoneNumber);
				console.log(`Your Pairing Code : ${code}`);
			}, 3000)
		}
		if (connection === 'close') {
			const reason = new Boom(lastDisconnect?.error)?.output.statusCode
			if (reason === DisconnectReason.connectionLost) {
				console.log('Connection to Server Lost, Attempting to Reconnect...');
				startAvishkaBot()
			} else if (reason === DisconnectReason.connectionClosed) {
				console.log('Connection closed, Attempting to Reconnect...');
				startAvishkaBot()
			} else if (reason === DisconnectReason.restartRequired) {
				console.log('Restart Required...');
				startAvishkaBot()
			} else if (reason === DisconnectReason.timedOut) {
				console.log('Connection Timed Out, Attempting to Reconnect...');
				startAvishkaBot()
			} else if (reason === DisconnectReason.badSession) {
				console.log('Delete Session and Scan again...');
				startAvishkaBot()
			} else if (reason === DisconnectReason.connectionReplaced) {
				console.log('Close current Session first...');
			} else if (reason === DisconnectReason.loggedOut) {
				console.log('Scan again and Run...');
				exec('rm -rf ./session/*')
				process.exit(1)
			} else if (reason === DisconnectReason.forbidden) {
				console.log('Connection Failure, Scan again and Run...');
				exec('rm -rf ./session/*')
				process.exit(1)
			} else if (reason === DisconnectReason.multideviceMismatch) {
				console.log('Scan again...');
				exec('rm -rf ./session/*')
				process.exit(0)
			} else {
				Avishka.end(`Unknown DisconnectReason : ${reason}|${connection}`)
			}
		}
		if (connection == 'open') {


		await Avishka.sendMessage(Avishka.user.id, {
  image: { url: 'https://files.catbox.moe/sbogao.jpg'},
  caption: '┌─❖\n│ *Hi there 👋*\n│\n│ *Avi Now online*\n└┬❖  \n┌┤✑  *Thanks for using* \n││      *Avi Whatsapp Bot*\n│└──────┈ ⳹        \n│\n│\n│░█▀▀█ ▒█░░▒█ ▀█▀ \n│▒█▄▄█ ░▒█▒█░ ▒█░ \n│▒█░▒█ ░░▀▄▀░ ▄█▄\n│\n│\n│   \n│\n│© *2k25 POWER BY AVI*\n└───────────┈ ⳹'
});

//await delay(1000);
      //  await delay(1000 * 10)
	 /* await Avishka.sendMessage(Avishka.user.id, { text: ` 
		┌─❖
		│ *Hi there 👋*
		│
		│ *Avi Now online*
		└┬❖  
		┌┤✑  *Thanks for using* 
		││      *Avi Whatsapp Bot*
		│└──────┈ ⳹        
		│
		│
		│░█▀▀█ ▒█░░▒█ ▀█▀ 
		│▒█▄▄█ ░▒█▒█░ ▒█░ 
		│▒█░▒█ ░░▀▄▀░ ▄█▄
		│
		│
		│   
		│
		│© *2k25 POWER BY AVI*
		└───────────┈ ⳹` });*/
		
//await delay(1000);
		
await Avishka.sendMessage(Avishka.user.id, {
            video: { url: 'https://files.catbox.moe/hhh20o.mp4' },
            caption: '🖼️ Welcome to Avi Bot!',
            mimetype: 'video/mp4',
            ptt: true
          });
	//	Avishka.groupAcceptInvite("Hk23plGNTMU2IG04qvnPdN?mode=ac_t");


			console.log('Connected to : ' + JSON.stringify(Avishka.user, null, 2));
			let botNumber = await Avishka.decodeJid(Avishka.user.id);
			if (global.db?.set[botNumber] && !global.db?.set[botNumber]?.join) {
				if (my.ch.length > 0 && my.ch.includes('@newsletter')) {
					if (my.ch) await Avishka.newsletterMsg(my.ch, { type: 'follow' }).catch(e => {})
					db.set[botNumber].join = true
				}
			}
		}
		if (qr) {
			if (!pairingCode) qrcode.generate(qr, { small: true })
			app.use('/qr', async (req, res) => {
				res.setHeader('content-type', 'image/png')
				res.end(await toBuffer(qr))
			});
		}
		if (isNewLogin) console.log(chalk.green('New device login detected...'))
		if (receivedPendingNotifications == 'true') {
			console.log('Please wait About 1 Minute...')
			Avishka.ev.flush()
		}
	});
	
	Avishka.ev.on('contacts.update', (update) => {
		for (let contact of update) {
			let id = Avishka.decodeJid(contact.id)
			if (store && store.contacts) store.contacts[id] = { id, name: contact.notify }
		}
	});
	
	Avishka.ev.on('call', async (call) => {
		let botNumber = await Avishka.decodeJid(Avishka.user.id);
		if (global.db?.set[botNumber]?.anticall) {
			for (let id of call) {
				if (id.status === 'offer') {
					let msg = await Avishka.sendMessage(id.from, { text: ` *දැනට , හඩ ඇමතුම් පිළිගත නොහැක* .\n *@${id.from.split('@')[0]} අවශය නම්* , *කරුනණාකර හිමිකරු අමතන්න: Avi* )`, mentions: [id.from]});
					await Avishka.sendContact(id.from, global.owner, msg);
					await Avishka.rejectCall(id.id, id.from)
				}
			}
		}
	});
	
	Avishka.ev.on('messages.upsert', async (message) => {
		await MessagesUpsert(Avishka, message, store, groupCache);
	});
	
	Avishka.ev.on('group-participants.update', async (update) => {
		await GroupParticipantsUpdate(Avishka, update, store, groupCache);
	});
	
	Avishka.ev.on('groups.update', (update) => {
		for (const n of update) {
			if (store.groupMetadata[n.id]) {
				groupCache.set(n.id, n);
				Object.assign(store.groupMetadata[n.id], n);
			}
		}
	});
	
	Avishka.ev.on('presence.update', ({ id, presences: update }) => {
		store.presences[id] = store.presences?.[id] || {};
		Object.assign(store.presences[id], update);
	});
	
	setInterval(async () => {
		if (Avishka?.user?.id) await Avishka.sendPresenceUpdate('available', Avishka.decodeJid(Avishka.user.id)).catch(e => {})
	}, 10 * 60 * 1000);

	// Avishka.public = true
	// set.grouponly = false
	// set.privateonly = false

	return Avishka
}

startAvishkaBot()



// Process Exit
const cleanup = async (signal) => {
	console.log(`Received ${signal}. Menyimpan database...`)
        
          
	if (global.db) await database.write(global.db)
	if (global.store) await storeDB.write(global.store)
	server.close(() => {
		console.log('Server closed. Exiting...')
		process.exit(0)
	})
}

process.on('SIGINT', () => cleanup('SIGINT'))
process.on('SIGTERM', () => cleanup('SIGTERM'))
process.on('exit', () => cleanup('exit'))

server.on('error', (error) => {
	if (error.code === 'EADDRINUSE') {
		console.log(`Address localhost:${PORT} in use. Please retry when the port is available!`);
		server.close();
	} else console.error('Server error:', error);
});

setInterval(() => {}, 1000 * 60 * 10);
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
});
