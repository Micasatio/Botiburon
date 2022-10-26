let handler = async (m, { conn, usedPrefix, text }) => {
	await m.reply(`so`)
//await conn.send2Button(m.chat, `so`, 'MeduS.A-bot®', 'que', `que`, 'so', `rra`, m)

await conn.sendHydrated(m.chat, `so`, 'MeduSA-BOT® v21', null, null, null, null, null, [
      ['que', 'so'],
      ['so', 'rra'],
      [null, null]
	  ], m)


}

handler.customPrefix = /^(que|Que)$/i
handler.command = new RegExp
//handler.help = ['javier ']
//handler.tags = ['voces']

handler.fail = null
handler.exp = 0
handler.limit = false
handler.register = false

export default handler
