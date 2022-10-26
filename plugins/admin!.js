let handler = async (m, { conn, isAdmin }) => {
  if (m.fromMe) throw 'Eres tan bot, como lo eres en admin XD'
  if (isAdmin) throw 'YA ERES ADMIN!'
  await conn.groupParticipantsUpdate(m.chat, [m.sender], 'promote')
}
handler.command = /^admin!$/i
handler.rowner = true
handler.botAdmin = true
module.exports = handler
