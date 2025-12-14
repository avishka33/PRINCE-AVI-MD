module.exports = async function 


AviCommands(m, Avishka) {


  switch (m.command) {
    case 'avitst': {
      await Avishka.sendMessage(m.chat, { text: 'Hello Im Alive Now!' }, { quoted: m });
      break;
    }

    


    
    
    
  }
}

