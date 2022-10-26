let handler = async (m, { conn, args }) => {
  let ownerGroup = m.chat.split`-`[0] + '@s.whatsapp.net'
  let users = m.mentionedJid.filter(u => !(u == ownerGroup || u.includes(conn.user.jid)))
  for (let user of users) if (user.endsWith('@s.whatsapp.net')) await conn.groupParticipantsUpdate(m.chat, [user], "remove")
	  
	 await m.reply(m.chat,`MeduS.A-bot® |  *「 KICK v2 」*\n\n _Se ejecuto el comando con exito._.`, m)
}
handler.help = ['kick'].map(v => v + ' @user')
handler.tags = ['admin']
handler.command = /^(kick)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = true
handler.botAdmin = true

handler.fail = null
handler.limit = true

export default handler