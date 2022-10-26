let handler = function (m, { conn }) {
    if (!m.quoted) throw false
    let { chat, fromMe, isBaileys } = m.quoted
    if (!fromMe) throw false
    if (!isBaileys) throw 'MeduS.A-bot® | *「 DELETE 」*\n\n EL MENSAJE ES IMPORTANTE, O NO ES EL BOT.'
    conn.sendMessage(chat, { delete: m.quoted.vM.key })
	})
  conn.reply(m.chat,`MeduS.A-bot® | *「 DELETE 」*\n\n EL MENSAJE FUE ELIMINADO.`, m)
}
handler.help = ['del', 'delete']
handler.tags = ['tools']

handler.command = /^del(ete)?$/i

export default handler