import db from '../lib/database.js'

const rewards = {
  limit: 17,
  exp: 1200,
  money: 10,
  potion: 2
}
const cooldown = 86400000
let handler = async (m, { conn, usedPrefix: _p, __dirname }) => {
  let user = db.data.users[m.sender]
  if (new Date - user.lastclaim < cooldown) throw `*MeduS.A-bot®* | 「 DIARIO 」\n\n Ya Has realizado tu pedido de Leaf, EXP o Surtido gratis hoy.\nrecuerda que solo puedes realizarlo 1 vez cada 24 horas.\n\n*Próximo Monto:* +1200 EXP, +10 Fichas MeduSA, +17 LEAFS y +2 Pociones \n*En:* *${((user.lastclaim + cooldown) - new Date()).toTimeString()}*`
  let text = ''
  for (let reward of Object.keys(rewards)) {
    if (!(reward in user)) continue
    user[reward] += rewards[reward]
    text += `*+${rewards[reward]}* ${global.rpg.emoticon(reward)}${reward}\n`
  }
  conn.sendHydrated(m.chat, `*MeduS.A-bot®* | 「 CLAIM 」\n\nEste es tu SURTIDO diario! *+1200 EXP, +$200 LEAF, +2 Pociones y +10 Fichas MeduSA!*\n\n Recuerda que para cambiar EXP por leaf, debes escribir !buyall o !buy x (x = cantidad que quieres)`, 'MeduSA-BOT v21', null, null, null, null, null, [
      ['Ir de AVENTURA!', '/aventura'],
      ['ir al casino!', '/casino'],
      ['Menu!', '/menu']
    ], m)
  user.lastclaim = new Date * 1
}
//handler.help = ['leaf', 'claim']
//handler.tags = ['xp']
handler.command = /^(claimsurtido)$/i

handler.cooldown = cooldown

export default handler
