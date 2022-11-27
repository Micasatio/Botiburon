let handler = async (m, { conn, args, command }) => {
	let group = m.chat
        await m.reply('𝑬L BOT ABANDONA EL GRUPO, CHAU PERRAS', m.chat) 
        await  conn.groupLeave(group)
        }
handler.help = ['leavegc', 'salir']
handler.tags = ['owner']
handler.command = /^(salir|leavegc)$/i

handler.rowner = true

export default handler
