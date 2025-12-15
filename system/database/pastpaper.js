module.exports = async function 


ppCommands(m, Avishka) {


  switch (m.command) {
    case 'he': {
      await Avishka.sendMessage(m.chat, { text: 'Hello Im Alive Now!' }, { quoted: m });
      break;
    }

	/*|⬡════════════════════════════════════════════|❝   𝙰vi - Education ™ ❞|═══════════════════════════════════════════⬡|*/


    

/* school past paper o/l */


/*Buddhist paper*/
case 'bud_2015': {
 
   let PAPER = 'https://github.com/SL-Real-Tech/Files/raw/main/Past-Papers/Buddhism/2015-OL-BUDDHISM-PART-I.pdf'
   let PAPER2 = 'https://github.com/SL-Real-Tech/Files/raw/main/Past-Papers/Buddhism/2015-OL-BUDDHISM-PART-I.pdf'

   Avishka.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'part1.pdf'}, { quoted: m })
   Avishka.sendMessage(m.chat, { document: { url:PAPER2 }, mimetype: 'application/pdf', fileName: 'Part2.pdf'}, { quoted: m })

}
break

case 'bud_2016': {

   let PAPER = 'https://github.com/SL-Real-Tech/Files/raw/main/Past-Papers/Buddhism/2016-OL-BUDDHISM-PART-I.pdf'
   let PAPER2 = 'https://github.com/SL-Real-Tech/Files/raw/main/Past-Papers/Buddhism/2016-OL-BUDDHISM-PART-II.pdf'

   Avishka.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'bud_part1.pdf'}, { quoted: m })
   Avishka.sendMessage(m.chat, { document: { url:PAPER2 }, mimetype: 'application/pdf', fileName: 'bud_Part2.pdf'}, { quoted: m })

}
break


case 'bud_2017': {

   let PAPER = 'https://github.com/SL-Real-Tech/Files/raw/main/Past-Papers/Buddhism/2017-OL-Buddhism.pdf'
   Avishka.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'bud_2017.pdf'}, { quoted: m })

}
break

case 'bud_2018': {

   let PAPER = 'https://github.com/SL-Real-Tech/Files/raw/main/Past-Papers/Buddhism/2018-OL-BUDDHISM.pdf'
   Avishka.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'bud_2018.pdf'}, { quoted: m })

}
break

case 'bud_2019': {

   let PAPER = 'https://github.com/SL-Real-Tech/Files/raw/main/Past-Papers/Buddhism/2019-OL-Buddhism.pdf'
   Avishka.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'bud_2019.pdf'}, { quoted: m })

}
break

case 'bud_2020': {

   let PAPER = 'https://github.com/SL-Real-Tech/Files/raw/main/Past-Papers/Buddhism/2020-OL-Buddhism.pdf'
   Avishka.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'bud_2020.pdf'}, { quoted: m })

}
break





//english

case 'eng_2015': {
 
   let PAPER = 'https://github.com/SL-Real-Tech/Files/raw/main/Past-Papers/English/2015-OL-English.pdf'
   Avishka.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'eng_2015.pdf'}, { quoted: m })

}
break
   

case 'eng_2016': {

   let PAPER = 'https://github.com/SL-Real-Tech/Files/raw/main/Past-Papers/English/2016-OL-English(ii).pdf'
   let PAPER2 = 'https://github.com/SL-Real-Tech/Files/raw/main/Past-Papers/English/2016-OL-English-(i).pdf'

   Avishka.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'eng_2016_2.pdf'}, { quoted: m })
   Avishka.sendMessage(m.chat, { document: { url:PAPER2 }, mimetype: 'application/pdf', fileName: 'eng_2016_1.pdf'}, { quoted: m })

}
break

case 'eng_2017': {

   let PAPER = 'https://github.com/SL-Real-Tech/Files/raw/main/Past-Papers/English/2017-OL-English.pdf'
   Avishka.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'eng_2017.pdf'}, { quoted: m })

}
break

case 'eng_2018': {

   let PAPER = 'https://github.com/SL-Real-Tech/Files/raw/main/Past-Papers/English/2018-OL-English(i).pdf'
   let PAPER2 = 'https://github.com/SL-Real-Tech/Files/raw/main/Past-Papers/English/2018-OL-English(ii).pdf'

   Avishka.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'eng_2018_1.pdf'}, { quoted: m })
   Avishka.sendMessage(m.chat, { document: { url:PAPER2 }, mimetype: 'application/pdf', fileName: 'eng_2018_2.pdf'}, { quoted: m })

}
break

case 'eng_2019': {

   let PAPER = 'https://github.com/SL-Real-Tech/Files/raw/main/Past-Papers/English/2019-OL-English.pdf'
   Avishka.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'eng_2019.pdf'}, { quoted: m })

}
break

case 'eng_2020': {

   let PAPER = 'https://github.com/SL-Real-Tech/Files/raw/main/Past-Papers/English/2020-OL-English.pdf'
   Avishka.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'eng_2020.pdf'}, { quoted: m })

}
break
   



//sinhala

case 'sin_2015': {
 
   let PAPER = 'https://github.com/SL-Real-Tech/Files/raw/main/Past-Papers/Sinhala/2015-OL-Sinhala%20(i%2Cii%2Ciii).pdf'
   Avishka.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'sin_2015.pdf'}, { quoted: m })

}
break
   
case 'sin_2016': {

   let PAPER = 'https://github.com/SL-Real-Tech/Files/raw/main/Past-Papers/Sinhala/2016-OL-Sinhala%20(i%2Cii%2Ciii).pdf'
   Avishka.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'sin_2016.pdf'}, { quoted: m })

}
break

case 'sin_2017': {

   let PAPER = 'https://github.com/SL-Real-Tech/Files/raw/main/Past-Papers/Sinhala/2017-OL-Sinhala%20(i%2Cii%2Ciii).pdf'
   Avishka.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'sin_2017.pdf'}, { quoted: m })

}
break

case 'sin_2018': {

   let PAPER = 'https://github.com/SL-Real-Tech/Files/raw/main/Past-Papers/Sinhala/2018-OL-Sinhala%20(i%2Cii%2Ciii).pdf'
   Avishka.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'sin_2018.pdf'}, { quoted: m })

}
break

case 'sin_2019': {

   let PAPER = 'https://github.com/SL-Real-Tech/Files/raw/main/Past-Papers/Sinhala/2019-OL-Sinhala%20(i%2Cii%2Ciii).pdf'
   Avishka.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'sin_2019.pdf'}, { quoted: m })

}
break

case 'sin_2020': {

   let PAPER = 'https://github.com/SL-Real-Tech/Files/raw/main/Past-Papers/Sinhala/2020-OL-Sinhala%20(i%2Cii%2Ciii).pdf'
   Avishka.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'sin_2020.pdf'}, { quoted: m })

}
break




//history


case 'his_2015': {
 
   let PAPER = 'https://github.com/SL-Real-Tech/Files/raw/main/Past-Papers/History/2015-OL-History.pdf'
   Avishka.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'his_2015.pdf'}, { quoted: m })

}
break

case 'his_2016': {

   let PAPER = 'https://github.com/SL-Real-Tech/Files/raw/main/Past-Papers/History/2016-OL-History.pdf'
   Avishka.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'his_2016.pdf'}, { quoted: m })

}
break

case 'his_2017': {

   let PAPER = 'https://github.com/SL-Real-Tech/Files/raw/main/Past-Papers/History/2017-OL-History(i).pdf'
   let PAPER2 = 'https://github.com/SL-Real-Tech/Files/raw/main/Past-Papers/History/2017-OL-History(ii).pdf'

   Avishka.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'his_2017_1.pdf'}, { quoted: m })
   Avishka.sendMessage(m.chat, { document: { url:PAPER2 }, mimetype: 'application/pdf', fileName: 'his_2017_2.pdf'}, { quoted: m })

}
break

case 'his_2018': {

   let PAPER = 'https://github.com/SL-Real-Tech/Files/raw/main/Past-Papers/History/2018-OL-History.pdf'
   Avishka.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'his_2018.pdf'}, { quoted: m })

}
break


case 'his_2019': {

   let PAPER = 'https://github.com/SL-Real-Tech/Files/raw/main/Past-Papers/History/2019-OL-History(i).pdf'
   let PAPER2 = 'https://github.com/SL-Real-Tech/Files/raw/main/Past-Papers/History/2019-OL-History(ii).pdf'

   Avishka.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'his_2019_1.pdf'}, { quoted: m })
   Avishka.sendMessage(m.chat, { document: { url:PAPER2 }, mimetype: 'application/pdf', fileName: 'his_2019_2.pdf'}, { quoted: m })

}
break

case 'his_2020': {

   let PAPER = 'https://github.com/SL-Real-Tech/Files/raw/main/Past-Papers/History/2020-OL-History.pdf'
   Avishka.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'his_2020.pdf'}, { quoted: m })
}
break


			

/* maths */


case 'maths_2015': {

    let PAPER = 'https://github.com/SL-Real-Tech/Files/raw/main/Past-Papers/Maths/2015-OL-Maths%20(i%2Cii%2Ciii).pdf'
    Avishka.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'maths_2015'}, { quoted: m })
 
 }
 break

 case 'maths_2016': {

    let PAPER = 'https://github.com/SL-Real-Tech/Files/raw/main/Past-Papers/Maths/2016-OL-Maths%20(i%2Cii%2Ciii).pdf'
    Avishka.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'maths_2016'}, { quoted: m })
 
 }
 break


 case 'maths_2017': {

    let PAPER = 'https://github.com/SL-Real-Tech/Files/raw/main/Past-Papers/Maths/2017-OL-Maths%20(i%2Cii%2Ciii).pdf'
    Avishka.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'maths_2017'}, { quoted: m })
 
 }
 break


 case 'maths_2018': {

    let PAPER = 'https://github.com/SL-Real-Tech/Files/raw/main/Past-Papers/Maths/2018-OL-Maths%20(i%2Cii%2Ciii).pdf'
    Avishka.sendMessage(m.chat, { document: { url:PAPER }, caption: `\n \n \n *AVI H4CK3R'S TEAM*`,mimetype: 'application/pdf', fileName: 'maths_2018'}, { quoted: m })
 
 }
 break


 case 'maths_2019': {

    let PAPER = 'https://github.com/SL-Real-Tech/Files/raw/main/Past-Papers/Maths/2019-OL-Maths%20(i%2Cii%2Ciii).pdf'
    Avishka.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'maths_2019'}, { quoted: m })
 
 }
 break

 case 'maths_2020': {

    let PAPER = 'https://github.com/SL-Real-Tech/Files/raw/main/Past-Papers/Maths/2020-OL-Maths%20(i%2Cii%2Ciii).pdf'
    Avishka.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'maths_2020'}, { quoted: m })
 
 }
 break

/*|⬡════════════════════════════════════════════|❝   𝙰vi - Button connecting O/l ™ ❞|═══════════════════════════════════════════⬡|*/




	case 'Mathsp': {
      await Avishka.sendButtonMsg(m.chat, {
         text: "\n\nඔබට අවශ්‍ය පේපර් මෙහිදි ලබාගත හැක!",
         footer: '𝚜𝚌𝚛𝚒𝚙𝚝 𝚘𝚏  ' + botname + ' 𝚒𝚜 𝚘𝚗 𝚈𝙾𝚄𝚃𝚄𝙱𝙴 @𝙰𝚟𝚒𝚜𝚑𝚔𝚊 𝚜𝚑𝚊𝚟𝚒𝚗𝚍𝚊',
         buttons: [
            {
               buttonId: 'maths_2015',
               buttonText: { displayText: 'a ' },
               type: 1
            },
            {
               buttonId: 'maths_2016',
               buttonText: { displayText: ' a' },
               type: 1
            },
            {
               buttonId: 'maths_2017',
               buttonText: { displayText: ' a' },
               type: 1
            },
            {
               buttonId: 'maths_2018',
               buttonText: { displayText: 'a ' },
               type: 1
            },
            {
               buttonId: 'maths_2019',
               buttonText: { displayText: 'a ' },
               type: 1
            },
            {
               buttonId: 'maths_2020',
               buttonText: { displayText: ' a' },
               type: 1
            }
         ],
         headerType: 4,
         image: { url: 'https://files.catbox.moe/sbogao.jpg' }
      }, { quoted: m });
   }
      break



      case 'Buddhistp': {
         await Avishka.sendButtonMsg(m.chat, {
            text: "\n\nඔබට අවශ්‍ය පේපර් මෙහිදි ලබාගත හැක!",
            footer: '𝚜𝚌𝚛𝚒𝚙𝚝 𝚘𝚏  ' + botname + ' 𝚒𝚜 𝚘𝚗 𝚈𝙾𝚄𝚃𝚄𝙱𝙴 @𝙰𝚟𝚒𝚜𝚑𝚔𝚊 𝚜𝚑𝚊𝚟𝚒𝚗𝚍𝚊',
            buttons: [
               {
                  buttonId: 'bud_2015',
                  buttonText: { displayText: ' a' },
                  type: 1
               },
               {
                  buttonId: 'bud_2016',
                  buttonText: { displayText: 'a' },
                  type: 1
               },
               {
                  buttonId: 'bud_2017',
                  buttonText: { displayText: 'a ' },
                  type: 1
               },
               {
                  buttonId: 'bud_2018',
                  buttonText: { displayText: 'a ' },
                  type: 1
               },
               {
                  buttonId: 'bud_2019',
                  buttonText: { displayText: ' a' },
                  type: 1
               },
               {
                  buttonId: 'bud_2020',
                  buttonText: { displayText: ' a' },
                  type: 1
               }
            ],
            headerType: 4,
            image: { url: 'https://files.catbox.moe/sbogao.jpg' }
         }, { quoted: m });
      }
         break


case 'Englishp': {
         await Avishka.sendButtonMsg(m.chat, {
            text: "\n\nඔබට අවශ්‍ය පේපර් මෙහිදි ලබාගත හැක!",
            footer: '𝚜𝚌𝚛𝚒𝚙𝚝 𝚘𝚏  ' + botname + ' 𝚒𝚜 𝚘𝚗 𝚈𝙾𝚄𝚃𝚄𝙱𝙴 @𝙰𝚟𝚒𝚜𝚑𝚔𝚊 𝚜𝚑𝚊𝚟𝚒𝚗𝚍𝚊',
            buttons: [
               {
                  buttonId: 'eng_2015',
                  buttonText: { displayText: ' a' },
                  type: 1
               },
               {
                  buttonId: 'eng_2016',
                  buttonText: { displayText: ' a' },
                  type: 1
               },
               {
                  buttonId: 'eng_2017',
                  buttonText: { displayText: 'a ' },
                  type: 1
               },
               {
                  buttonId: 'eng_2018',
                  buttonText: { displayText: ' a' },
                  type: 1
               },
               {
                  buttonId: 'eng_2019',
                  buttonText: { displayText: ' a' },
                  type: 1
               },
               {
                  buttonId: 'eng_2020',
                  buttonText: { displayText: 'a ' },
                  type: 1
               }
            ],
            headerType: 4,
            image: { url: 'https://files.catbox.moe/sbogao.jpg' }
         }, { quoted: m });
      }
         break

         case 'Sinhalap': {
            await Avishka.sendButtonMsg(m.chat, {
               text: "\n\nඔබට අවශ්‍ය පේපර් මෙහිදි ලබාගත හැක!",
               footer: '𝚜𝚌𝚛𝚒𝚙𝚝 𝚘𝚏  ' + botname + ' 𝚒𝚜 𝚘𝚗 𝚈𝙾𝚄𝚃𝚄𝙱𝙴 @𝙰𝚟𝚒𝚜𝚑𝚔𝚊 𝚜𝚑𝚊𝚟𝚒𝚗𝚍𝚊',
               buttons: [
                  {
                     buttonId: 'sin_2015',
                     buttonText: { displayText: 'sin_201 ' },
                     type: 1
                  },
                  {
                     buttonId: 'sin_2016',
                     buttonText: { displayText: ' sin_201' },
                     type: 1
                  },
                  {
                     buttonId: 'sin_2017',
                     buttonText: { displayText: 'sin_201 ' },
                     type: 1
                  },
                  {
                     buttonId: 'sin_2018',
                     buttonText: { displayText: ' sin_201' },
                     type: 1
                  },
                  {
                     buttonId: 'sin_2019',
                     buttonText: { displayText: 'sin_201 ' },
                     type: 1
                  },
                  {
                     buttonId: 'sin_2020',
                     buttonText: { displayText: 'sin_201 ' },
                     type: 1
                  }
               ],
               headerType: 4,
               image: { url: 'https://files.catbox.moe/sbogao.jpg' }
            }, { quoted: m });
         }
            break

            case 'Historyp': {
               await Avishka.sendButtonMsg(m.chat, {
                  text: "\n\nඔබට අවශ්‍ය පේපර් මෙහිදි ලබාගත හැක!",
                  footer: '𝚜𝚌𝚛𝚒𝚙𝚝 𝚘𝚏  ' + botname + ' 𝚒𝚜 𝚘𝚗 𝚈𝙾𝚄𝚃𝚄𝙱𝙴 @𝙰𝚟𝚒𝚜𝚑𝚔𝚊 𝚜𝚑𝚊𝚟𝚒𝚗𝚍𝚊',
                  buttons: [
                     {
                        buttonId: 'his_2015',
                        buttonText: { displayText: 'his_2017 ' },
                        type: 1
                     },
                     {
                        buttonId: 'his_2016',
                        buttonText: { displayText: 'his_2017 ' },
                        type: 1
                     },
                     {
                        buttonId: 'his_2017',
                        buttonText: { displayText: 'his_2017 ' },
                        type: 1
                     },
                     {
                        buttonId: 'his_2018',
                        buttonText: { displayText: ' his_2017' },
                        type: 1
                     },
                     {
                        buttonId: 'his_2019',
                        buttonText: { displayText: 'his_2017 ' },
                        type: 1
                     },
                     {
                        buttonId: 'his_2020',
                        buttonText: { displayText: 'his_2017 ' },
                        type: 1
                     }
                  ],
                  headerType: 4,
                  image: { url: 'https://files.catbox.moe/sbogao.jpg' }
               }, { quoted: m });
            }
               break           
/*|⬡════════════════════════════════════════════|❝   𝙰vi - A/l ™ ❞|═══════════════════════════════════════════⬡|*/

  }
}

