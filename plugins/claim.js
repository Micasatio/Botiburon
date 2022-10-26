import db from '../lib/database.js'

let handler = async (m, { conn, usedPrefix: _p, __dirname }) => {	
let who
    if (m.isGroup) who = m.sender
    else who = m.sender
let username = conn.getName(who)
let role = db.data.users[m.sender].role

	//m.reply(`(si no ves los botones, para claim, Reportalo en !creador o !report)`)
conn.sendHydrated(m.chat, `*MeduS.A-bot®* | 「 CLAIM 」\n\nHola, ${username}!\nTu clase social es: ${role}\nNecesitas Leaf, Mensual o un surtido?`, 'MeduSA-BOT v21', null, 'https://chat.whatsapp.com/Isky4kDyn5u83F2B2SSLwv', 'Grupo principal del bot!', null, null, [
      ['Leaf!', '/claimleaf'],
      ['Claim mensual!', '/claimmes'],
      ['No me toques', 'a']
    ], m)
}
handler.help = ['diario', 'claim']
handler.tags = ['xp']
handler.command = /^(diario|claim)$/i
handler.register = true

//handler.cooldown = cooldown

export default handler
